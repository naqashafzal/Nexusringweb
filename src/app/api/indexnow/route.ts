import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "4a92f8016b8e4e9f9024a1b0287cf8e1";
const HOST = "www.nexusring.tech";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

/**
 * Broadcasts modified URLs to the IndexNow protocol endpoint (Bing, Yandex, Seznam, Naver)
 */
async function broadcastToIndexNow(urls: string[]) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const response = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  return {
    status: response.status,
    statusText: response.statusText,
    submittedCount: urls.length,
    urls,
  };
}

/**
 * Informational endpoint: Reports IndexNow configuration and verification status
 * Does NOT spam IndexNow on simple read requests.
 */
export async function GET() {
  return NextResponse.json({
    service: "IndexNow Protocol Gateway",
    host: HOST,
    keyLocation: KEY_LOCATION,
    status: "configured",
    documentation: "https://www.indexnow.org/documentation",
    note: "Submit a POST request with an authorized secret and { urls: string[] } to broadcast updated URLs.",
  });
}

/**
 * Protected submission handler: Accepts specific modified URLs for IndexNow broadcasting
 */
export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const secret = process.env.INDEXNOW_SECRET;

    // If an INDEXNOW_SECRET is configured in environment, require bearer authorization
    if (secret && authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const urls: string[] = Array.isArray(body?.urls) ? body.urls : [];

    if (urls.length === 0) {
      return NextResponse.json(
        { error: "No URLs provided. Provide an array of canonical URLs in the 'urls' field." },
        { status: 400 }
      );
    }

    // Validate that all URLs belong to the verified host
    const invalidUrls = urls.filter((u) => {
      try {
        const parsed = new URL(u);
        return parsed.hostname !== HOST;
      } catch {
        return true;
      }
    });

    if (invalidUrls.length > 0) {
      return NextResponse.json(
        { error: "All submitted URLs must belong to www.nexusring.tech", invalidUrls },
        { status: 400 }
      );
    }

    const result = await broadcastToIndexNow(urls);
    return NextResponse.json({
      success: true,
      message: `Successfully notified IndexNow for ${urls.length} URL(s)`,
      result,
    });
  } catch (error) {
    console.error("[IndexNow Error]:", error);
    return NextResponse.json(
      { error: "Failed to broadcast to IndexNow", details: String(error) },
      { status: 500 }
    );
  }
}
