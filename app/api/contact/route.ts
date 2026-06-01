import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.X_N8N_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  let res: Response;
  try {
    res = await fetch("https://n8n.tangguhriyadi.com/webhook/business-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-n8n-api-key": apiKey,
      },
      body: JSON.stringify({ name, email, message }),
    });
  } catch (err) {
    console.error("[contact] fetch error:", err);
    return NextResponse.json({ error: "Network error reaching webhook" }, { status: 502 });
  }

  if (!res.ok) {
    const detail = await res.text();
    console.error("[contact] webhook error:", res.status, detail);
    return NextResponse.json({ error: "Failed to send message" }, { status: res.status });
  }

  return NextResponse.json({ success: true });
}
