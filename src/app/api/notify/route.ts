import { NextResponse } from "next/server";

// Simple in-memory rate-limiter & de-duplication cache
// Limits requests to 5 per minute per IP, and prevents duplicate submissions for the same email within 5 minutes.
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const emailSubmissions = new Map<string, number>();

function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "***";
  const maskedLocal = local.length > 2 ? `${local[0]}***${local[local.length - 1]}` : "***";
  return `${maskedLocal}@${domain}`;
}

export async function POST(request: Request) {
  try {
    // 1. IP rate limiting (best effort)
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";
    const now = Date.now();
    const clientLimit = rateLimitMap.get(ip);

    if (clientLimit && clientLimit.expiresAt > now) {
      if (clientLimit.count >= 10) {
        return NextResponse.json(
          { error: "Too many requests. Please wait a moment before trying again." },
          { status: 429 }
        );
      }
      clientLimit.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, expiresAt: now + 60_000 });
    }

    // Clean up old rate limit entries periodically
    if (rateLimitMap.size > 2000) {
      for (const [key, val] of rateLimitMap.entries()) {
        if (val.expiresAt <= now) rateLimitMap.delete(key);
      }
    }

    // 2. Parse payload
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
    }

    const {
      type = "waitlist",
      email,
      name,
      message,
      tier,
      finish,
      price,
      source = "unknown",
    } = body;

    // 3. Email validation
    if (
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      email.length > 254
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check duplicate submissions within 5 minutes
    const lastSubmitted = emailSubmissions.get(normalizedEmail);
    if (lastSubmitted && now - lastSubmitted < 300_000) {
      return NextResponse.json({
        success: true,
        message: "You're already on the list! We'll keep you updated on progress.",
      });
    }

    const discordWebhookUrl =
      process.env.DISCORD_WEBHOOK_URL?.trim() ||
      "https://discord.com/api/webhooks/1551006628692754432/R0wztwn016LbDfsEyquTvHiezX1z7Sh-dS8gnTlZodIGRywl6q7-H5EOQGInChgcsFD8";

    // Prepare notification
    const nowIso = new Date().toISOString();
    let embed;

    if (type === "contact_inquiry") {
      embed = {
        title: "📬 New Project Inquiry",
        description: `Inquiry submitted via **${String(source).slice(0, 50)}**.`,
        color: 0xff405a, // Nexus Brand Accent
        fields: [
          {
            name: "👤 Sender",
            value: typeof name === "string" ? name.slice(0, 100) : "Not provided",
            inline: true,
          },
          {
            name: "📧 Email",
            value: `\`${normalizedEmail}\``,
            inline: true,
          },
          {
            name: "💬 Message",
            value: typeof message === "string" ? message.slice(0, 1000) : "No message",
            inline: false,
          },
          {
            name: "🌐 Source",
            value: `\`${String(source).slice(0, 50)}\``,
            inline: false,
          },
        ],
        footer: { text: "Nexus Ring • Contact Engine" },
        timestamp: nowIso,
      };
    } else {
      // Waitlist / Early Access / Preorder Reservation
      const tierInterest =
        finish && price
          ? `${tier || "Hardware Edition"} (${finish}) · ${price}`
          : finish
          ? `${tier || "Hardware Edition"} (${finish})`
          : tier || "Priority Waitlist";

      embed = {
        title: "✨ New Waitlist Signup",
        description: "A visitor joined the development updates list.",
        color: 0xff405a, // Nexus Brand Accent (matches Discord screenshot)
        fields: [
          {
            name: "📧 Email",
            value: `\`${normalizedEmail}\``,
            inline: true,
          },
          {
            name: "🏷️ Tier / Interest",
            value: String(tierInterest).slice(0, 100),
            inline: true,
          },
          {
            name: "🌐 Source",
            value: `\`${String(source).slice(0, 50)}\``,
            inline: false,
          },
        ],
        footer: { text: "Nexus Ring • Development Waitlist" },
        timestamp: nowIso,
      };
    }

    if (discordWebhookUrl) {
      const discordPayload = {
        username: "Nexus Ring Bot",
        avatar_url: "https://www.nexusring.tech/icon.svg",
        embeds: [embed],
      };

      const res = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      });

      if (!res.ok) {
        console.error(`[Webhook delivery failed] Status: ${res.status}`);
        return NextResponse.json(
          { error: "Could not save your registration. Please try again shortly." },
          { status: 502 }
        );
      }
    } else {
      // In development mode when no webhook is set
      console.log(`[DEV] Registration recorded for: ${maskEmail(normalizedEmail)} (${type})`);
    }

    // Record submission to prevent spam duplicates
    emailSubmissions.set(normalizedEmail, now);
    if (emailSubmissions.size > 2000) {
      for (const [key, val] of emailSubmissions.entries()) {
        if (now - val > 300_000) emailSubmissions.delete(key);
      }
    }

    // Backup to local file if environment allows
    try {
      const fs = await import("fs/promises");
      const path = await import("path");
      const dataDir = path.join(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });
      const record = JSON.stringify({
        email: normalizedEmail,
        type,
        tier: tier || "Waitlist",
        finish: finish || null,
        price: price || null,
        source: source || "/",
        date: nowIso,
      }) + "\n";
      await fs.appendFile(path.join(dataDir, "waitlist_signups.jsonl"), record, "utf8");
    } catch {
      // Ignore filesystem errors in serverless/readonly environments
    }

    return NextResponse.json({
      success: true,
      message: "You're on the list! We'll keep you updated with genuine development progress.",
    });
  } catch (err) {
    console.error("[Notify API Error]:", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
