import { NextResponse } from "next/server";

const INDEXNOW_KEY = "4a92f8016b8e4e9f9024a1b0287cf8e1";
const HOST = "www.nexusring.tech";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// Default site URLs to ping if none are provided
const DEFAULT_URLS = [
  `https://${HOST}`,
  `https://${HOST}/features`,
  `https://${HOST}/hardware`,
  `https://${HOST}/software`,
  `https://${HOST}/campaign`,
  `https://${HOST}/preorder`,
  `https://${HOST}/research`,
  `https://${HOST}/about`,
  `https://${HOST}/compare`,
  `https://${HOST}/compare/nexus-ring-vs-opal-app`,
  `https://${HOST}/compare/nexus-ring-vs-freedom-blocker`,
  `https://${HOST}/compare/nexus-ring-vs-pomodoro-timer`,
  `https://${HOST}/compare/nexus-ring-vs-brick-device`,
];

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

export async function GET() {
  try {
    const result = await broadcastToIndexNow(DEFAULT_URLS);
    return NextResponse.json({
      success: true,
      message: "IndexNow broadcast initiated successfully",
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

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const urlsToSubmit = Array.isArray(body?.urls) && body.urls.length > 0
      ? body.urls
      : DEFAULT_URLS;

    const result = await broadcastToIndexNow(urlsToSubmit);
    return NextResponse.json({
      success: true,
      message: "IndexNow submission processed",
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
