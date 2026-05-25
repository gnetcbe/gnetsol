"use client";

import { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────
interface Message {
  role: "user" | "bot";
  text: string;
}
type LeadStep = "idle" | "ask_name" | "ask_email" | "ask_phone" | "done";

interface BreadcrumbItem {
  label: string;
  level: "service" | "subtopic";
}

// ─── Services & Sub-topics ────────────────────────────────────────────
const SERVICES = [
  "Domain", "Web Hosting", "Web Development",
  "Shopping Cart", "Business Email", "Digital Marketing", "SSL", "DNS", "Contact Us",
];

const SUB_TOPICS: Record<string, string[]> = {
  "Domain": ["Registration", "Renewal", "Expired", "Transfer", "Price", "Duration", "Point", "Whois", "Cancel Domain"],
  "Web Hosting": ["Shared Hosting", "VPS Hosting", "Dedicated Server", "Cloud Hosting", "Uptime", "Backup", "Security", "cPanel", "Support"],
  "Web Development": ["Custom Website", "CMS", "Web Application", "Technologies", "Timeline", "Process", "Pricing", "Mobile Friendly", "SEO"],
  "Shopping Cart": ["E-Commerce Setup", "Payment Gateway", "Product Management", "Order Tracking", "Shipping", "Security", "Platforms", "Pricing"],
  "Business Email": ["Google Workspace", "Microsoft 365", "Zoho Mail", "Migration", "Security", "Storage", "Multiple Users", "Setup", "Support"],
  "Digital Marketing": ["SEO", "Social Media", "PPC / Google Ads", "Email Marketing", "Content Marketing", "Analytics", "Pricing", "Timeline"],
  "SSL": ["What is SSL", "Types of SSL", "Installation", "Renewal", "Pricing", "Why SSL", "Support"],
  "DNS": ["What is DNS", "DNS Records", "Domain Pointing", "MX Records", "TTL", "DNS Propagation", "Support"],
};

// ─── Lead capture triggers ────────────────────────────────────────────
const LEAD_TRIGGERS = ["contact", "call me", "email me", "quote", "pricing", "cost", "how much", "get started", "speak to", "consultant", "reach you"];

// ─── System prompt builder ─────────────────────────────────────────────
 function buildSystemPrompt(service: string, subtopic: string): string {
  return `You are a friendly and knowledgeable sales/support assistant for G-Net Solutions, an IT company based in Coimbatore, Tamil Nadu, India.

PERSONALITY:
- Talk like a helpful, friendly sales person — NOT like a FAQ reader
- Be conversational, warm, and engaging
- Ask relevant follow-up questions to understand the customer's needs
- Show enthusiasm for helping the customer
- Keep responses concise (3-5 lines max), then ask a follow-up question
- Never paste long bullet lists — explain naturally like a human would
- NEVER mention your name or introduce yourself by name
- Do NOT use placeholder text like [Your Name] or [Assistant Name]
- Just greet warmly and get straight to helping

CURRENT CONTEXT:
${service && service !== "General" ? `- Customer selected service: ${service}` : "- Customer is asking a general question"}
${subtopic && subtopic !== "General" ? `- Customer selected topic: ${subtopic}` : ""}

STRICT RULES:
1. ONLY discuss topics related to G-Net Solutions services
2. NEVER make up pricing — say it's customized and offer to connect them with the team
3. If asked something outside our services, say: "That's not something we handle, but I'd love to help you with ${service} or other IT needs!"
4. Always guide the conversation toward understanding the customer's needs
5. End responses with a relevant follow-up question OR suggest contacting us
6. We INTEGRATE payment gateways (Razorpay, PayU, UPI etc.) but do NOT own them — they are third-party

OUR SERVICES:
- Domain: Registration, Renewal, Transfer, DNS management (1–10 year registration, 60-day transfer rule, EPP code required)
- Web Hosting: Shared, VPS, Dedicated, Cloud (99.9% uptime, SSD, cPanel/Plesk, 24/7 support)
- Web Development: Custom websites, CMS (WordPress), E-commerce, Web Apps, Mobile-responsive, React/Angular/Node.js/.NET/Python/PHP
- Shopping Cart / E-Commerce: Full online stores, payment gateway integration, order management, Magento/Shopify/WooCommerce
- Business Email: Google Workspace, Microsoft 365, Zoho Mail, cPanel Mail, migration support
- Digital Marketing: SEO (3-6 months), PPC (instant), SMM, Content Marketing, Email Marketing, Monthly reports
- SSL Certificates: Installation, renewal, HTTPS setup
- DNS Management: A records, MX records, domain pointing, TTL configuration

CONTACT:
- Phone/WhatsApp: +91-9751959300
- Email: info@g-netsolutions.com
- Address: Peelamedu, Coimbatore - 641004, Tamil Nadu (Near TIDEL Park)
- Hours: Mon–Sat, 9 AM – 6 PM IST`;
}

// ─── Main Component ────────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadStep>("idle");
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [currentService, setCurrentService] = useState("");
  const [currentSubtopic, setCurrentSubtopic] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: string; parts: { text: string }[] }[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const addMessage = (role: "user" | "bot", text: string) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  // ─── Clear / Reset ──────────────────────────────────────────────────
  const handleClear = () => {
    setMessages([]);
    setInput("");
    setLoading(false);
    setLeadStep("idle");
    setLeadData({ name: "", email: "", phone: "" });
    setBreadcrumbs([]);
    setCurrentService("");
    setCurrentSubtopic("");
    setChatHistory([]);
  };

  // ─── Remove breadcrumb (back navigation) ───────────────────────────
  const removeBreadcrumb = (index: number) => {
    const newCrumbs = breadcrumbs.slice(0, index);
    setBreadcrumbs(newCrumbs);
    if (index === 0) {
      setCurrentService("");
      setCurrentSubtopic("");
      setMessages([]);
      setChatHistory([]);
    } else if (index === 1) {
      setCurrentSubtopic("");
      setMessages([]);
      setChatHistory([]);
    }
    setLeadStep("idle");
  };

  // ─── Service selected ───────────────────────────────────────────────
  const handleServiceClick = (service: string) => {
    if (service === "Contact Us") {
      setCurrentService("Contact Us");
      setBreadcrumbs([{ label: "Contact Us", level: "service" }]);
      setCurrentSubtopic("Contact Us");
      setMessages([]);
      setChatHistory([]);
      addMessage("bot", "Here's how you can reach us! 😊\n\n📞 +91-9751959300\n📧 info@g-netsolutions.com\n💬 WhatsApp: +91-9751959300\n📍 Lakshmi Nagar, Thaneer Pandal, V.K. Road, Peelamedu, Coimbatore - 641004, Tamil Nadu. (Near TIDEL Park)\n\n🕐 Mon–Sat, 9 AM – 6 PM IST\n\nFeel free to ask anything else!");
      return;
    }
    setCurrentService(service);
    setBreadcrumbs([{ label: service, level: "service" }]);
    setCurrentSubtopic("");
    setMessages([]);
    setChatHistory([]);
  };

  // ─── Subtopic selected ──────────────────────────────────────────────
  const handleSubtopicClick = async (subtopic: string) => {
    setCurrentSubtopic(subtopic);
    setBreadcrumbs([
      { label: currentService, level: "service" },
      { label: subtopic, level: "subtopic" },
    ]);
    setMessages([]);
    setChatHistory([]);
    setLeadStep("idle");

    // Ask Gemini to start the conversation naturally
    setLoading(true);
    try {
      const systemPrompt = buildSystemPrompt(currentService, subtopic);
      const userMsg = `The customer has selected "${currentService}" > "${subtopic}". Start the conversation naturally and helpfully. Ask a relevant opening question to understand their needs. Be friendly and conversational — don't list everything at once.`;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          systemPrompt,
          history: [],
          isOpener: true,
        }),
      });
      const data = await res.json();
      const botReply = data.reply || `Sure! I'd love to help you with ${subtopic} for ${currentService}. What would you like to know?`;
      addMessage("bot", botReply);
      setChatHistory([
        { role: "user", parts: [{ text: userMsg }] },
        { role: "model", parts: [{ text: botReply }] },
      ]);
    } catch {
      addMessage("bot", `Sure! I'd love to help you with ${subtopic}. What would you like to know?`);
    } finally {
      setLoading(false);
    }
  };

  // ─── Send message ───────────────────────────────────────────────────
  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setInput("");

    // If on home screen (no service selected), switch to chat mode with General context
    if (!currentService) {
      setCurrentService("General");
      setCurrentSubtopic("General");
      setBreadcrumbs([{ label: "General", level: "service" }]);
    }

    addMessage("user", trimmed);

    // Lead capture flow
    if (leadStep === "ask_name") {
      setLeadData((d) => ({ ...d, name: trimmed }));
      setLeadStep("ask_email");
      addMessage("bot", `Nice to meet you, ${trimmed}! 😊 What's your email address?`);
      return;
    }
    if (leadStep === "ask_email") {
      setLeadData((d) => ({ ...d, email: trimmed }));
      setLeadStep("ask_phone");
      addMessage("bot", "Got it! And your phone number?");
      return;
    }
    if (leadStep === "ask_phone") {
      const finalLead = { ...leadData, phone: trimmed };
      setLeadData(finalLead);
      setLeadStep("done");
      // Send lead to API
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead: finalLead,
          service: currentService,
          subtopic: currentSubtopic,
          chatHistory: messages,
          isLead: true,
        }),
      }).catch(console.error);
      addMessage("bot", `✅ Thank you, ${finalLead.name}!\n\nOur team will contact you shortly.\n📞 ${finalLead.phone}\n📧 ${finalLead.email}\n\nIn the meantime, feel free to ask me anything or reach us directly at +91-9751959300 😊`);
      return;
    }

    // Lead trigger check
    if (leadStep === "idle" && LEAD_TRIGGERS.some((t) => trimmed.toLowerCase().includes(t))) {
      setLeadStep("ask_name");
      addMessage("bot", "I'd love to connect you with our team! 😊 Could I get your name first?");
      return;
    }

    // Gemini conversational AI
    setLoading(true);
    try {
      const systemPrompt = buildSystemPrompt(currentService || "General", currentSubtopic || "General");
      const newHistory = [
        ...chatHistory,
        { role: "user", parts: [{ text: trimmed }] },
      ];
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          systemPrompt,
          history: chatHistory,
        }),
      });
      const data = await res.json();
      const botReply = data.reply || "I'm not sure about that. Could you rephrase, or contact us at +91-9751959300? 😊";
      addMessage("bot", botReply);
      setChatHistory([...newHistory, { role: "model", parts: [{ text: botReply }] }]);
    } catch {
      addMessage("bot", "Sorry, having trouble right now. Reach us at +91-9751959300 or info@g-netsolutions.com 😊");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  // ─── Render ─────────────────────────────────────────────────────────
  const showServiceGrid = breadcrumbs.length === 0;
  const showSubtopics = breadcrumbs.length === 1 && currentService;
  const showChat = breadcrumbs.length === 2 || (breadcrumbs.length === 1 && (currentService === 'Contact Us' || currentService === 'General'));

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="gnet-chat-toggle"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="gnet-chat-window">

          {/* Header */}
          <div className="gnet-chat-header">
            <div className="gnet-chat-header-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div className="gnet-chat-header-info">
              <div className="gnet-chat-header-name">G-Net Support</div>
              <div className="gnet-chat-header-status">
                <span className="gnet-online-dot" />
                Online · Usually replies instantly
              </div>
            </div>
            <button onClick={handleClear} className="gnet-clear-btn" title="Clear chat">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
              </svg>
            </button>
          </div>

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="gnet-breadcrumbs">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="gnet-breadcrumb-tag">
                  {crumb.label}
                  <button onClick={() => removeBreadcrumb(i)} className="gnet-breadcrumb-x">✕</button>
                </span>
              ))}
            </div>
          )}

          {/* Body */}
          <div className="gnet-chat-body">

            {/* Screen 1: Service Grid */}
            {showServiceGrid && (
              <div className="gnet-screen">
                <div className="gnet-welcome">
                  <div className="gnet-welcome-icon">👋</div>
                  <div>
                    <div className="gnet-welcome-title">Hi there!</div>
                    <div className="gnet-welcome-sub">Welcome to G-Net Solutions. How can we help you today?</div>
                  </div>
                </div>
                <div className="gnet-service-label">Select a service to get started:</div>
                <div className="gnet-service-grid">
                  {SERVICES.map((s) => (
                    <button key={s} className="gnet-service-tag" onClick={() => handleServiceClick(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Screen 2: Subtopics */}
            {showSubtopics && (
              <div className="gnet-screen">
                <div className="gnet-service-label">What would you like to know about <strong>{currentService}</strong>?</div>
                <div className="gnet-service-grid">
                  {(SUB_TOPICS[currentService] || []).map((t) => (
                    <button key={t} className="gnet-service-tag" onClick={() => handleSubtopicClick(t)}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Screen 3: Chat */}
            {showChat && (
              <div className="gnet-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`gnet-msg-row ${msg.role === "user" ? "user" : "bot"}`}>
                    <div className={`gnet-msg-bubble ${msg.role}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="gnet-msg-row bot">
                    <div className="gnet-msg-bubble bot gnet-typing">
                      <span /><span /><span />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}
          </div>

          

            <div className="gnet-chat-input-row">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="What can we help you with?"
                className="gnet-chat-input"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className={`gnet-send-btn ${input.trim() ? "active" : ""}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill={input.trim() ? "white" : "#aaa"}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>

          {/* Footer */}
          <div className="gnet-chat-footer">Powered by G-Net Solutions AI</div>
        </div>
      )}

      <style>{`
        /* Toggle Button */
        .gnet-chat-toggle {
          position: fixed; bottom: 24px; right: 24px; z-index: 9999;
          width: 60px; height: 60px; border-radius: 50%;
          background: linear-gradient(135deg, #0f4c81, #1a73e8);
          border: none; cursor: pointer;
          box-shadow: 0 4px 20px rgba(26,115,232,0.5);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.2s ease;
        }
        .gnet-chat-toggle:hover { transform: scale(1.1); }

        /* Window */
        .gnet-chat-window {
          position: fixed; bottom: 96px; right: 24px; z-index: 9998;
          width: 360px; max-height: 560px;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.18);
          display: flex; flex-direction: column; overflow: hidden;
          background: #fff;
          font-family: 'Segoe UI', system-ui, sans-serif;
          animation: gnetSlideIn 0.25s ease;
        }

        /* Header */
        .gnet-chat-header {
          background: linear-gradient(135deg, #0f4c81, #1a73e8);
          padding: 14px 16px;
          display: flex; align-items: center; gap: 10px;
        }
        .gnet-chat-header-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .gnet-chat-header-info { flex: 1; }
        .gnet-chat-header-name { color: #fff; font-weight: 700; font-size: 14px; }
        .gnet-chat-header-status { color: rgba(255,255,255,0.8); font-size: 11px; display: flex; align-items: center; gap: 4px; }
        .gnet-online-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; display: inline-block; }
        .gnet-clear-btn {
          background: rgba(255,255,255,0.15); border: none; cursor: pointer;
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .gnet-clear-btn:hover { background: rgba(255,255,255,0.3); }

        /* Breadcrumbs */
        .gnet-breadcrumbs {
          padding: 8px 12px; background: #f0f4ff;
          display: flex; flex-wrap: wrap; gap: 6px;
          border-bottom: 1px solid #e2e8f0;
        }
        .gnet-breadcrumb-tag {
          display: inline-flex; align-items: center; gap: 5px;
          background: #1a73e8; color: white;
          padding: 3px 10px; border-radius: 20px;
          font-size: 12px; font-weight: 500;
        }
        .gnet-breadcrumb-x {
          background: none; border: none; color: white;
          cursor: pointer; font-size: 10px; padding: 0;
          line-height: 1; opacity: 0.8;
        }
        .gnet-breadcrumb-x:hover { opacity: 1; }

        /* Body */
        .gnet-chat-body {
          flex: 1; overflow-y: auto; background: #f8fafc;
        }

        /* Screen (service grid / subtopics) */
        .gnet-screen { padding: 16px; }
        .gnet-welcome {
          display: flex; gap: 10px; align-items: flex-start;
          background: linear-gradient(135deg, #0f4c81, #1a73e8);
          border-radius: 12px; padding: 14px; margin-bottom: 16px; color: white;
        }
        .gnet-welcome-icon { font-size: 24px; flex-shrink: 0; }
        .gnet-welcome-title { font-weight: 700; font-size: 15px; margin-bottom: 2px; }
        .gnet-welcome-sub { font-size: 12px; opacity: 0.9; }
        .gnet-service-label { font-size: 12px; color: #64748b; margin-bottom: 10px; font-weight: 500; }
        .gnet-service-grid { display: flex; flex-wrap: wrap; gap: 7px; }
        .gnet-service-tag {
          padding: 6px 13px; border-radius: 20px;
          border: 1.5px solid #1a73e8; background: #fff;
          color: #1a73e8; font-size: 12.5px; font-weight: 500;
          cursor: pointer; transition: all 0.15s;
        }
        .gnet-service-tag:hover { background: #1a73e8; color: #fff; }

        /* Messages */
        .gnet-messages {
          padding: 14px; display: flex; flex-direction: column; gap: 10px;
          min-height: 100%;
        }
        .gnet-msg-row { display: flex; }
        .gnet-msg-row.user { justify-content: flex-end; }
        .gnet-msg-row.bot { justify-content: flex-start; }
        .gnet-msg-bubble {
          max-width: 82%; padding: 10px 14px; font-size: 13.5px;
          line-height: 1.55; box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          white-space: pre-wrap; word-break: break-word;
        }
        .gnet-msg-bubble.user {
          background: linear-gradient(135deg, #0f4c81, #1a73e8);
          color: #fff; border-radius: 18px 18px 4px 18px;
        }
        .gnet-msg-bubble.bot {
          background: #fff; color: #1a1a2e;
          border-radius: 18px 18px 18px 4px;
        }

        /* Typing dots */
        .gnet-typing { display: flex; gap: 5px; align-items: center; padding: 14px; }
        .gnet-typing span {
          width: 7px; height: 7px; border-radius: 50%; background: #1a73e8;
          display: inline-block; animation: gnetBounce 1.2s ease infinite;
        }
        .gnet-typing span:nth-child(2) { animation-delay: 0.2s; }
        .gnet-typing span:nth-child(3) { animation-delay: 0.4s; }

        /* Input */
        .gnet-chat-input-row {
          padding: 10px 12px; border-top: 1px solid #f0f0f0;
          display: flex; gap: 8px; background: #fff;
        }
        .gnet-chat-input {
          flex: 1; padding: 9px 14px; border-radius: 24px;
          border: 1.5px solid #e2e8f0; outline: none;
          font-size: 13.5px; background: #f8fafc; color: #1a1a2e;
          transition: border-color 0.2s;
        }
        .gnet-chat-input:focus { border-color: #1a73e8; }
        .gnet-send-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: #e2e8f0; border: none; cursor: not-allowed;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.2s;
        }
        .gnet-send-btn.active { background: linear-gradient(135deg, #0f4c81, #1a73e8); cursor: pointer; }

        /* Footer */
        .gnet-chat-footer {
          text-align: center; padding: 6px; font-size: 11px;
          color: #aaa; background: #fff;
        }

        /* Animations */
        @keyframes gnetSlideIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes gnetBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%            { transform: translateY(-6px); }
        }

        /* Mobile */
        @media (max-width: 400px) {
          .gnet-chat-window { width: calc(100vw - 20px); right: 10px; bottom: 80px; }
        }
      `}</style>
    </>
  );
}
