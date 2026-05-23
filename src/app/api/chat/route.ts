import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a friendly support assistant for G-Net Solutions, an IT company based in Coimbatore, Tamil Nadu, India.

STRICT RULES:
1. ONLY answer questions related to G-Net Solutions' services listed below.
2. If someone asks about anything NOT in the services list, say: "That's outside our current services. Feel free to contact us at info@g-netsolutions.com or +91-9751959300 and our team will assist you!"
3. NEVER make up pricing — always say pricing is customized and direct them to contact us.
4. Keep responses friendly, concise, and helpful.
5. Always end with a helpful next step (contact info or encouragement to ask more).
6. Do NOT discuss competitors, politics, personal topics, or anything unrelated to G-Net Solutions.

OUR SERVICES:
1. Web Development — Custom Website Design, E-commerce Solutions, CMS Development, Web Applications, Website Maintenance and Support
2. Web Hosting — Shared Hosting, Business Hosting, VPS Hosting, Dedicated Servers, Cloud Hosting
3. Email Hosting Services — Google Workspace, Microsoft 365, Zoho Workplace & Zoho Mail, Cloud Zimbra, cPanel Hosting Mail, Fetchmail
4. Digital Marketing — SEO, AEO, GEO, Content Marketing, Social Media Marketing, Email Marketing, PPC/Google Ads, Analytics
5. Chatbot Development — AI-powered chatbots for websites and businesses
6. Custom Application/Software Development — Web Apps, Mobile Apps, ERP, CRM, Enterprise Software
7. Website Maintenance — Updates, Backups, Security, Performance Monitoring, Bug Fixes

COMPANY CONTACT DETAILS:
- Phone & WhatsApp: +91-9751959300
- Email: info@g-netsolutions.com
- Address: Lakshmi Nagar, Thaneer Pandal, V.K. Road, Peelamedu, Coimbatore - 641004, Tamil Nadu, India (Near TIDEL Park)
- Office hours: Monday to Saturday, 9:00 AM – 6:00 PM IST

DISCLAIMER TO INCLUDE WHEN RELEVANT:
Responses are for general guidance. For critical or technical decisions, please verify with our support team directly.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: "Invalid request." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "AI service is temporarily unavailable. Please contact us at +91-9751959300 or info@g-netsolutions.com 😊" },
        { status: 200 }
      );
    }

    const geminiRes = await fetch(
       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: message }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 400,
            temperature: 0.4,
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const err = await geminiRes.text();
      console.error("Gemini API error:", err);
      return NextResponse.json(
        { reply: "I'm having trouble right now. Please contact us at +91-9751959300 or info@g-netsolutions.com 😊" },
        { status: 200 }
      );
    }

    const data = await geminiRes.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't find an answer to that. Please contact us at info@g-netsolutions.com or +91-9751959300 😊";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Something went wrong. Please contact us at +91-9751959300 or info@g-netsolutions.com 😊" },
      { status: 200 }
    );
  }
}
