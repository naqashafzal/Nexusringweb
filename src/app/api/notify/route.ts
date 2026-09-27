import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      type = "waitlist",
      email,
      name,
      message,
      tier,
      finish,
      price,
      source = "unknown",
    } = data;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL?.trim();

    // Prepare Discord Webhook Embed
    let embed;
    const nowIso = new Date().toISOString();

    if (type === "contact_inquiry") {
      embed = {
        title: "📬 New Founder / Developer Inquiry Received",
        description: `Someone reached out via the contact form on **${source}**.`,
        color: 0x00e5ff, // Cyberpunk Cyan
        fields: [
          {
            name: "👤 Sender Name",
            value: name || "Not provided",
            inline: true,
          },
          {
            name: "📧 Email Address",
            value: `\`${email}\``,
            inline: true,
          },
          {
            name: "💬 Message",
            value: message || "No message content",
            inline: false,
          },
          {
            name: "🌐 Source Route",
            value: `\`${source}\``,
            inline: true,
          },
        ],
        footer: {
          text: "Nexus Ring • Contact Notification Engine",
        },
        timestamp: nowIso,
      };
    } else if (type === "preorder_reservation") {
      embed = {
        title: "🔥 High Intent: Pre-Order Configurator Lead!",
        description: `A visitor configured their Nexus Ring artifact and reserved a slot!`,
        color: 0x00ff9d, // accent Green
        fields: [
          {
            name: "📧 Email",
            value: `\`${email}\``,
            inline: false,
          },
          {
            name: "🎯 Selected Tier",
            value: tier ? `**${tier}**` : "Standard Waitlist",
            inline: true,
          },
          {
            name: "🎨 Finish Chosen",
            value: finish ? `**${finish}**` : "Default",
            inline: true,
          },
          {
            name: "💰 Tier Price",
            value: price ? `**${price}**` : "N/A",
            inline: true,
          },
          {
            name: "🌐 Source Route",
            value: `\`${source}\``,
            inline: false,
          },
        ],
        footer: {
          text: "Nexus Ring • Pre-Order Lead Engine",
        },
        timestamp: nowIso,
      };
    } else {
      // Standard Early Access / Priority Waitlist
      embed = {
        title: "⚡ New Nexus Ring Waitlist Lead!",
        description: `A prospective backer entered the priority launch waitlist.`,
        color: 0x00ff9d, // accent Green
        fields: [
          {
            name: "📧 Email",
            value: `\`${email}\``,
            inline: true,
          },
          {
            name: "🏷️ Tier / Interest",
            value: tier ? `**${tier}**` : "General Priority Launch",
            inline: true,
          },
          {
            name: "🌐 Source Route",
            value: `\`${source}\``,
            inline: false,
          },
        ],
        footer: {
          text: "Nexus Ring • Early Adopter Queue",
        },
        timestamp: nowIso,
      };
    }

    const payload = {
      username: "Nexus Ring Lead Bot",
      avatar_url: "https://www.nexusring.tech/icon.png",
      embeds: [embed],
    };

    if (discordWebhookUrl) {
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error(
          `[Discord Webhook Error] Status: ${response.status} ${response.statusText}`
        );
      }
    } else {
      console.warn(
        "⚠️ [Nexus Webhook Notification] DISCORD_WEBHOOK_URL is not set in environment variables! Submission logged:",
        { type, email, name, tier, finish, source }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
    });
  } catch (error) {
    console.error("[Notify API Error]:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
