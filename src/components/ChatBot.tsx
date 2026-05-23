"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

// ─── Lead capture state ───────────────────────────────────────────────
type LeadStep = "idle" | "ask_name" | "ask_email" | "ask_phone" | "done";

const LEAD_TRIGGERS = [
  "contact", "get in touch", "reach you", "call me", "email me",
  "quote", "pricing", "cost", "price", "how much", "get started",
  "talk to someone", "speak to", "consultant",
];

// ─── Predefined Q&A ───────────────────────────────────────────────────
const FAQ: { keywords: string[]; answer: string }[] = [
  // Greetings
  {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "howdy"],
    answer: "👋 Hi there! Welcome to G-Net Solutions. I'm your support assistant. How can I help you today?",
  },
  // What do you do / services overview
  {
    keywords: ["what do you do", "our services" ,"what services", "services you offer", "what can you do", "offerings"],
    answer:
      "We offer a wide range of IT services:\n\n• 🌐 Web Development (Custom Websites, E-commerce, CMS, Web Apps)\n• 🖥️ Web Hosting (Shared, VPS, Dedicated, Cloud)\n• 📧 Email Hosting (Google Workspace, Microsoft 365, Zoho, cPanel)\n• 📈 Digital Marketing (SEO, AEO, GEO, SMM, PPC, Content Marketing)\n• 🤖 Chatbot Development\n• 🛠️ Website Maintenance & Support\n• 💻 Custom Application/Software Development\n\nWhat would you like to know more about?",
  },
  // Web Development
  {
    keywords: ["web development", "website design","redesign", "web app", "web application", "cms", "e-commerce", "ecommerce", "online store"],
    answer:
      "We provide end-to-end web development services:\n\n• Custom Website Design & Redesign\n• E-Commerce / Shopping Cart Solutions\n• CMS Development (WordPress, etc.)\n• Web Application Development\n• Website Maintenance & Support\n\nTimeline: Basic site in 5–10 days, complex projects in 4–8 weeks.\nContact us at info@g-netsolutions.com or +91-9751959300 for a custom quote!",
  },
  // Web Hosting
  {
    keywords: ["hosting", "web hosting", "server", "shared hosting", "vps", "dedicated server", "cloud hosting", "uptime"],
    answer:
      "We offer reliable hosting solutions:\n\n• Shared Hosting – ideal for small websites\n• VPS Hosting – for growing businesses\n• Dedicated Servers – for high-traffic websites\n• Cloud Hosting – scalable and highly available\n• Business Hosting\n\nAll plans include 99.9% uptime, SSL, and technical support. Setup is done within 24 hours. Reach us at +91-9751959300 for the right plan!",
  },
  // Email Hosting
  {
    keywords: ["email", "email hosting", "business email", "google workspace", "microsoft 365", "zoho", "cpanel mail", "zimbra", "outlook"],
    answer:
      "We set up professional business email using your domain:\n\n• Google Workspace (Gmail for Business)\n• Microsoft 365 (Outlook / Exchange)\n• Zoho Workplace & Zoho Mail\n• Cloud Zimbra\n• cPanel Hosting Mail\n• Fetchmail\n\nBenefits: Professional image, secure, multi-device access. Contact us at info@g-netsolutions.com to get started!",
  },
  // Digital Marketing
  {
    keywords: ["digital marketing", "seo", "aeo", "geo", "social media", "ppc", "google ads", "content marketing", "email marketing", "analytics", "smm"],
    answer:
      "Our Digital Marketing services include:\n\n• SEO, AEO & GEO – improve search visibility\n• Social Media Marketing (Facebook, Instagram, LinkedIn)\n• PPC / Google Ads – instant traffic\n• Content Marketing – blogs, articles\n• Email Marketing\n• Analytics & Reporting\n\nSEO results in 3–6 months; PPC is immediate. We provide monthly reports. Contact us for a custom package!",
  },
  // Chatbot
  {
    keywords: ["chatbot", "chat bot", "bot", "ai bot", "automated chat"],
    answer:
      "Yes! We develop intelligent chatbots for businesses 🤖\n\nOur chatbots can:\n• Answer customer queries 24/7\n• Capture leads automatically\n• Integrate with your website\n• Use AI for smart responses\n\nInterested? Contact us at info@g-netsolutions.com or +91-9751959300!",
  },
  // Software / App Development
  {
    keywords: ["software", "custom software", "application", "app development", "mobile app", "erp", "crm", "enterprise"],
    answer:
      "We build custom software & applications:\n\n• Web Applications\n• Mobile Apps (Android/iOS)\n• Enterprise Software (ERP, CRM)\n• Custom Business Applications\n\nTech stack: React, Angular, Node.js, Python, .NET, Flutter.\nTimeline: 2 weeks to 3+ months based on complexity.\nYou own 100% of the software. Contact us for a proposal!",
  },
  // Website Maintenance
  {
    keywords: ["maintenance", "website maintenance", "update website", "bug fix", "support plan", "security update"],
    answer:
      "Our Website Maintenance services include:\n\n• Content Updates\n• Security Updates & Patches\n• Regular Backups & Recovery\n• Performance Monitoring\n• Bug Fixes & Troubleshooting\n• Plugin & CMS Updates\n\nResponse time: 24–48 hrs (standard), 4–12 hrs (priority).\nAvailable on monthly or annual plans. Contact us for details!",
  },
  // Domain
  {
    keywords: ["domain", "domain name", "domain registration", "domain transfer", "domain renewal"],
    answer:
      "We provide full domain services:\n\n• Domain Registration (1–10 year options)\n• Domain Renewal & Auto-renewal\n• Domain Transfer (takes 5–7 days)\n• DNS Management\n\nDocuments usually not required for registration. Contact us at info@g-netsolutions.com or +91-9751959300!",
  },
  // Pricing / Cost
  {
    keywords: ["price", "pricing", "cost", "how much", "charges", "fee", "rate", "package", "quote"],
    answer:
      "Our pricing is customized based on your specific requirements 😊\n\nFor an accurate quote, please contact us:\n📧 info@g-netsolutions.com\n📞 +91-9751959300\n\nWe'll understand your needs and provide the best solution within your budget!",
  },
  // Contact
  {
    keywords: ["contact", "reach", "phone", "call", "email address", "whatsapp", "location", "address", "office", "where are you"],
    answer:
      "You can reach us here:\n\n📞 +91-9751959300\n📧 info@g-netsolutions.com\n💬 WhatsApp: +91-9751959300\n📍 Lakshmi Nagar, Thaneer Pandal,\n    V.K. Road, Peelamedu,\n    Coimbatore - 641004,\n    Tamil Nadu, India.\n    (Near TIDEL Park)\n\nWe're happy to help! 😊",
  },
  // Working hours
  {
    keywords: ["working hours", "office hours", "timing", "open", "availability", "when are you available"],
    answer: "Our office hours are Monday to Saturday, 9:00 AM – 6:00 PM IST. You can also reach us anytime via email at info@g-netsolutions.com and we'll get back to you promptly!",
  },
  // Technologies
  {
    keywords: ["technology", "tech stack", "react", "angular", "node", "python", "php", "flutter", "wordpress", "magento"],
    answer:
      "We work with modern technologies:\n\n• Frontend: React, Angular, Vue.js, HTML5/CSS3\n• Backend: Node.js, PHP (Laravel), Python (Django/Flask), .NET\n• Mobile: Flutter, React Native\n• CMS: WordPress, Magento, Shopify\n• Databases: MySQL, PostgreSQL, MongoDB, SQL Server\n• Cloud: AWS, Azure, Google Cloud",
  },
  // SSL / Security
  {
    keywords: ["ssl", "https", "security", "secure", "firewall", "malware", "hacked"],
    answer:
      "Security is our priority! We provide:\n\n• SSL Certificates (HTTPS)\n• Firewall Protection\n• Malware Scanning & Removal\n• Regular Security Updates\n• Anti-virus & Intrusion Detection\n• Data Encryption\n\nIf your site is hacked, we can help restore it from backup and strengthen security. Contact us immediately at +91-9751959300!",
  },
  // Backup
  {
    keywords: ["backup", "data backup", "restore", "recovery"],
    answer: "Yes, we provide regular automated backups for all our hosting and maintenance clients! We also offer restore options to ensure your data is always safe. Backups are stored securely and can be recovered quickly.",
  },
  // Mobile friendly / Responsive
  {
    keywords: ["mobile", "responsive", "mobile friendly", "tablet", "all devices"],
    answer: "Absolutely! All websites we design are fully responsive — they work smoothly on mobile phones, tablets, and desktops. We use modern responsive design techniques to ensure the best experience on all screen sizes 📱💻",
  },
  // Timeline / How long
  {
    keywords: ["how long", "timeline", "duration", "time to complete", "delivery time", "turnaround"],
    answer:
      "Project timelines depend on complexity:\n\n• Basic website: 5–10 days\n• Medium website: 2–3 weeks\n• Large/custom project: 4–8 weeks\n• Mobile app: 1–3 months\n• Enterprise software: 3+ months\n\nWe provide a detailed timeline after understanding your requirements. Contact us to discuss your project!",
  },
  // Get started
  {
    keywords: ["get started", "start project", "begin", "how to start", "initiate"],
    answer:
      "Great! Here's how to get started with us:\n\n1️⃣ Contact us with your requirements\n2️⃣ We'll discuss your needs and goals\n3️⃣ We provide a proposal and timeline\n4️⃣ Project kicks off!\n\n📧 info@g-netsolutions.com\n📞 +91-9751959300\n\nWe'd love to work with you! 🚀",
  },
  // Thank you
  {
    keywords: ["thank", "thanks", "thank you", "thx", "ty"],
    answer: "You're welcome! 😊 Happy to help. Feel free to ask if you have any more questions. Have a great day!",
  },
  // Bye
  {
    keywords: ["bye", "goodbye", "see you", "take care", "cya"],
    answer: "Goodbye! 👋 Thanks for chatting with G-Net Solutions. Have a wonderful day! Feel free to come back anytime.",
  },
];

function findPredefinedAnswer(input: string): string | null {
  const lower = input.toLowerCase();
  for (const faq of FAQ) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return null;
}

function checkLeadTrigger(input: string): boolean {
  const lower = input.toLowerCase();
  return LEAD_TRIGGERS.some((t) => lower.includes(t));
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi! I'm the G-Net Solutions Support Assistant.\n\nHow can I help you today? You can ask me about our services, pricing, hosting, digital marketing, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadStep>("idle");
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const addMessage = (role: "user" | "bot", text: string) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setInput("");
    addMessage("user", trimmed);

    // ── Lead capture flow ──────────────────────────────────────────
    if (leadStep === "ask_name") {
      setLeadData((d) => ({ ...d, name: trimmed }));
      setLeadStep("ask_email");
      addMessage("bot", `Nice to meet you, ${trimmed}! 😊\nWhat's your email address?`);
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
      addMessage(
        "bot",
        `✅ Thank you, ${finalLead.name}!\n\nWe've noted your details and our team will contact you shortly.\n\n📞 ${finalLead.phone}\n📧 ${finalLead.email}\n\nIn the meantime, feel free to reach us directly at +91-9751959300 or info@g-netsolutions.com 😊`
      );
      // You can send finalLead to your API here
      return;
    }

    // ── Check lead trigger ─────────────────────────────────────────
    if (leadStep === "idle" && checkLeadTrigger(trimmed)) {
      setLeadStep("ask_name");
      addMessage("bot", "I'd love to connect you with our team! 😊\nCould I get your name first?");
      return;
    }

    // ── Predefined Q&A ─────────────────────────────────────────────
    const predefined = findPredefinedAnswer(trimmed);
    if (predefined) {
      addMessage("bot", predefined);
      return;
    }

    // ── Gemini AI fallback ─────────────────────────────────────────
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      addMessage("bot", data.reply || "I'm sorry, I couldn't understand that. Please contact us at +91-9751959300 or info@g-netsolutions.com 😊");
    } catch {
      addMessage("bot", "Sorry, I'm having trouble connecting right now. Please reach us directly at +91-9751959300 or info@g-netsolutions.com 😊");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickReplies = ["Our Services", "Web Hosting", "Pricing", "Contact Us", "Get Started"];

  return (
    <>
      {/* ── Toggle Button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #0f4c81, #1a73e8)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(26,115,232,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        {open ? (
          // Close icon
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // Chat icon
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        )}
      </button>

      {/* ── Chat Window ── */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            zIndex: 9998,
            width: "360px",
            maxHeight: "540px",
            borderRadius: "16px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            background: "#fff",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            animation: "chatSlideIn 0.25s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #0f4c81, #1a73e8)",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", lineHeight: 1.2 }}>
                G-Net Support
              </div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                Online · Usually replies instantly
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "#f8fafc",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "10px 14px",
                    borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    background: msg.role === "user" ? "linear-gradient(135deg, #0f4c81, #1a73e8)" : "#fff",
                    color: msg.role === "user" ? "#fff" : "#1a1a2e",
                    fontSize: "13.5px",
                    lineHeight: "1.55",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "18px 18px 18px 4px",
                    padding: "12px 16px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#1a73e8",
                        display: "inline-block",
                        animation: `bounce 1.2s ease infinite`,
                        animationDelay: `${d * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div
              style={{
                padding: "8px 12px",
                display: "flex",
                gap: "6px",
                flexWrap: "wrap",
                borderTop: "1px solid #f0f0f0",
                background: "#fff",
              }}
            >
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  onClick={() => {
                    setInput(qr);
                    setTimeout(() => {
                      setInput("");
                      addMessage("user", qr);
                      const ans = findPredefinedAnswer(qr);
                      if (ans) addMessage("bot", ans);
                    }, 0);
                  }}
                  style={{
                    padding: "5px 11px",
                    borderRadius: "20px",
                    border: "1.5px solid #1a73e8",
                    background: "transparent",
                    color: "#1a73e8",
                    fontSize: "12px",
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#1a73e8";
                    (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "#1a73e8";
                  }}
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              padding: "12px",
              borderTop: "1px solid #f0f0f0",
              display: "flex",
              gap: "8px",
              background: "#fff",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "24px",
                border: "1.5px solid #e2e8f0",
                outline: "none",
                fontSize: "13.5px",
                background: "#f8fafc",
                color: "#1a1a2e",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#1a73e8")}
              onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: input.trim() ? "linear-gradient(135deg, #0f4c81, #1a73e8)" : "#e2e8f0",
                border: "none",
                cursor: input.trim() ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.2s",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={input.trim() ? "white" : "#aaa"}>
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div style={{ textAlign: "center", padding: "6px", fontSize: "11px", color: "#aaa", background: "#fff" }}>
            Powered by G-Net Solutions AI
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%            { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
