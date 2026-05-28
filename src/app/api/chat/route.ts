import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

 function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.CHAT_SMTP_HOST || "mail.gnet.in",
    port: Number(process.env.CHAT_SMTP_PORT) || 465,
    secure: true,
    auth: {
      type: "LOGIN",
      user: process.env.CHAT_SMTP_USER,
      pass: process.env.CHAT_SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  } as nodemailer.TransportOptions);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Get visitor IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "Unknown";

    // ── Feedback email ─────────────────────────────────────────────
    if (body.isFeedback) {
      const { feedback } = body;
      const stars = "⭐".repeat(feedback.stars) + "☆".repeat(5 - feedback.stars);

      await getTransporter().sendMail({
        from: `"G-Net Chatbot" <${process.env.CHAT_SMTP_USER}>`,
        to: process.env.LEAD_EMAIL || "rajesh@gnet.in",
        subject: `💬 Chat Feedback — ${feedback.stars}/5 Stars | ${feedback.visitor.name} | ${feedback.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0f4c81, #1a73e8); padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="color: white; margin: 0;">💬 Chat Feedback Received</h2>
            </div>
            <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
              <h3 style="color: #0f4c81; margin-top: 0;">Visitor Details</h3>
              <table style="width:100%; border-collapse:collapse;">
                <tr><td style="padding:8px;font-weight:bold;width:140px;">Name</td><td style="padding:8px;">${feedback.visitor.name}</td></tr>
                <tr style="background:#fff"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${feedback.visitor.email}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${feedback.visitor.phone}</td></tr>
                <tr style="background:#fff"><td style="padding:8px;font-weight:bold;">IP Address</td><td style="padding:8px;">${ip}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Service</td><td style="padding:8px;">${feedback.service}</td></tr>
                <tr style="background:#fff"><td style="padding:8px;font-weight:bold;">Topic</td><td style="padding:8px;">${feedback.subtopic}</td></tr>
              </table>

              <h3 style="color: #0f4c81; margin-top: 20px;">⭐ Feedback Rating</h3>
              <div style="font-size: 28px; margin-bottom: 6px;">${stars}</div>
              <div style="font-size: 16px; font-weight: bold; color: #f59e0b;">${feedback.stars}/5 Stars</div>

              ${feedback.chatText ? `
              <h3 style="color: #0f4c81; margin-top: 20px;">💬 Chat History</h3>
              <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:14px;white-space:pre-wrap;font-size:13px;line-height:1.6;color:#333;">
${feedback.chatText}
              </div>` : ""}
            </div>
            <div style="background:#0f4c81;padding:12px;border-radius:0 0 8px 8px;text-align:center;">
              <p style="color:rgba(255,255,255,0.7);margin:0;font-size:12px;">G-Net Solutions Chatbot · rajesh@gnet.in · +91-9751959300</p>
            </div>
          </div>
        `,
      });
      return NextResponse.json({ success: true });
    }

    // ── Lead email ─────────────────────────────────────────────────
    if (body.isLead) {
      const { lead, service, subtopic, chatHistory } = body;
      const chatText = Array.isArray(chatHistory)
        ? chatHistory.map((m: { role: string; text: string }) =>
            `${m.role === "user" ? "Customer" : "Bot"}: ${m.text}`
          ).join("\n")
        : "";

      await getTransporter().sendMail({
        from: `"G-Net Chatbot" <${process.env.CHAT_SMTP_USER}>`,
        to: process.env.LEAD_EMAIL || "rajesh@gnet.in",
        subject: `🔔 New Lead — ${lead.name} | ${service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0f4c81, #1a73e8); padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="color: white; margin: 0;">🔔 New Lead from Chatbot</h2>
            </div>
            <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
              <table style="width:100%; border-collapse:collapse;">
                <tr><td style="padding:8px;font-weight:bold;width:140px;">Name</td><td style="padding:8px;">${lead.name}</td></tr>
                <tr style="background:#fff"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>
                <tr style="background:#fff"><td style="padding:8px;font-weight:bold;">IP Address</td><td style="padding:8px;">${ip}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Service</td><td style="padding:8px;">${service}</td></tr>
                <tr style="background:#fff"><td style="padding:8px;font-weight:bold;">Topic</td><td style="padding:8px;">${subtopic}</td></tr>
              </table>
              ${chatText ? `
              <h3 style="color:#0f4c81;margin-top:20px;">💬 Chat History</h3>
              <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:14px;white-space:pre-wrap;font-size:13px;line-height:1.6;color:#333;">
${chatText}
              </div>` : ""}
            </div>
            <div style="background:#0f4c81;padding:12px;border-radius:0 0 8px 8px;text-align:center;">
              <p style="color:rgba(255,255,255,0.7);margin:0;font-size:12px;">G-Net Solutions Chatbot · rajesh@gnet.in · +91-9751959300</p>
            </div>
          </div>
        `,
      });
      return NextResponse.json({ success: true });
    }

    // ── Normal Gemini chat ─────────────────────────────────────────
    const { message, systemPrompt, history = [] } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: "Invalid request." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply: "AI service temporarily unavailable. Please contact us at +91-9751959300 😊",
      });
    }

    const contents = [
      ...history,
      { role: "user", parts: [{ text: message }] },
    ];

    const geminiRes = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemPrompt || "You are a helpful assistant for G-Net Solutions." }],
        },
        contents,
        generationConfig: { maxOutputTokens: 300, temperature: 0.75 },
      }),
    });

    if (!geminiRes.ok) {
      console.error("Gemini API error:", await geminiRes.text());
      return NextResponse.json({
        reply: "I'm having trouble right now. Please contact us at +91-9751959300 or info@g-netsolutions.com 😊",
      });
    }

    const data = await geminiRes.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't find an answer. Please contact us at info@g-netsolutions.com 😊";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      reply: "Something went wrong. Please contact us at +91-9751959300 😊",
    });
  }
}
