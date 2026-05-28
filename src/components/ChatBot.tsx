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

interface LeadData {
  name: string;
  email: string;
  phone: string;
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

// ─── Intent signals per service ───────────────────────────────────────
const INTENT_SIGNALS = [
  "register for me", "transfer my", "set up", "install", "build my",
  "create my", "help me", "how do i start", "can you do", "i want to",
  "i need", "get started", "sign up", "purchase", "buy", "order",
  "let's go", "sounds good", "interested", "proceed", "hire you",
  "work with you", "when can you", "how soon", "next week", "this month",
];

// ─── System prompt builder ─────────────────────────────────────────────
function buildSystemPrompt(service: string, subtopic: string, leadCollected: boolean): string {
  return `You are a friendly and knowledgeable sales/support assistant for G-Net Solutions, an IT company based in Coimbatore, Tamil Nadu, India.

PERSONALITY:
- Talk like a helpful, friendly sales person — NOT like a FAQ reader
- Be conversational, warm, and engaging
- Ask relevant follow-up questions to understand the customer's needs
- Keep responses concise (3-5 lines max), then ask a follow-up question
- Never paste long bullet lists — explain naturally like a human would
- NEVER mention your name or introduce yourself by name
- Do NOT use placeholder text like [Your Name] or [Assistant Name]

CURRENT CONTEXT:
${service && service !== "General" ? `- Customer selected service: ${service}` : "- Customer is asking a general question"}
${subtopic && subtopic !== "General" ? `- Customer selected topic: ${subtopic}` : ""}

LEAD COLLECTION RULE:
${leadCollected
  ? "- Customer details already collected. Do NOT ask for name/email/phone again."
  : `- Watch the conversation for genuine interest signals (e.g. "build my website", "how much", "can you help me", "I want to", "register for me", "set up email for my company").
- When you detect 1-2 strong interest signals, naturally transition to collecting their details.
- Ask ONLY: "I'd love to connect you with our team! May I know your name?" — then wait.
- Do NOT ask for email/phone yourself — the system handles that after name.
- Only trigger this ONCE per conversation.`
}

STRICT RULES:
1. ONLY discuss topics related to G-Net Solutions services
2. NEVER make up pricing — say it's customized and offer to connect them with the team
3. If asked something outside our services, politely redirect
4. We INTEGRATE payment gateways (Razorpay, PayU, UPI etc.) but do NOT own them

OUR SERVICES:
- Domain: Registration, Renewal, Transfer, DNS management (1–10 year, 60-day transfer rule, EPP code required)
- Web Hosting: Shared, VPS, Dedicated, Cloud (99.9% uptime, SSD, cPanel, 24/7 support)
- Web Development: Custom websites, CMS, E-commerce, Web Apps, React/Angular/Node.js/.NET/Python/PHP
- Shopping Cart: Full online stores, payment gateway integration, Magento/Shopify/WooCommerce
- Business Email: Google Workspace, Microsoft 365, Zoho Mail, cPanel Mail, migration support
- Digital Marketing: SEO (3-6 months), PPC (instant), SMM, Content Marketing, Monthly reports
- SSL: Installation, renewal, HTTPS setup
- DNS: A records, MX records, domain pointing, TTL configuration

CONTACT:
- Phone/WhatsApp: +91-9751959300
- Email: info@g-netsolutions.com
- Address: Peelamedu, Coimbatore - 641004, Tamil Nadu (Near TIDEL Park)
- Hours: Mon–Sat, 9 AM – 6 PM IST`;
}

// ─── Predefined Openers ───────────────────────────────────────────────
const OPENERS: Record<string, Record<string, string>> = {
  "Domain": {
    "Registration": "Let's get your domain registered! 🌐 Do you already have a name in mind, or would you like some tips on choosing the right one?",
    "Renewal": "Good thinking on renewing early! ⏰ Do you know when your domain is due for renewal?",
    "Expired": "Don't worry — expired domains can usually be recovered! ⚠️ How long ago did your domain expire?",
    "Transfer": "Moving your domain to us? Great decision! 🔄 Do you have your EPP/authorization code ready?",
    "Price": "Domain pricing depends on the extension — .com, .in, .net etc. 💰 Which extension are you looking at?",
    "Duration": "Domains can be registered for 1 to 10 years! 📅 Are you registering new or extending an existing one?",
    "Point": "Pointing your domain is straightforward! 🎯 Are you pointing it to a website, hosting server, or third-party platform?",
    "Whois": "WHOIS lets you check who owns a domain and its registration details. 🔍 Are you checking ownership or looking to register one?",
    "Cancel Domain": "I understand you'd like to cancel. 😟 Before we proceed, is there anything we can help resolve?",
  },
  "Web Hosting": {
    "Shared Hosting": "Shared hosting is a great affordable way to get started! 🚀 Is this for a new website or moving from another host?",
    "VPS Hosting": "VPS is perfect for growing businesses that need more control! ⚡ What kind of website are you planning to host?",
    "Dedicated Server": "A dedicated server gives you maximum power and security! 🖥️ Are you handling high traffic or resource-intensive applications?",
    "Cloud Hosting": "Cloud hosting is our most scalable option! ☁️ Are you expecting traffic spikes or need high availability?",
    "Uptime": "We guarantee 99.9% uptime! ✅ Are you experiencing downtime issues with your current host?",
    "Backup": "Regular backups are crucial! 💾 Are you looking for automated daily backups or a specific schedule?",
    "Security": "Security is our top priority! 🔒 Do you have specific concerns like malware or DDoS protection?",
    "cPanel": "cPanel makes managing your hosting super easy! 🎛️ Have you used cPanel before or is this your first time?",
    "Support": "Our support team is available 24/7! 🛟 Are you facing a specific issue or exploring support options?",
  },
  "Web Development": {
    "Custom Website": "A custom website really sets your business apart! 🎨 What kind of business are you in?",
    "CMS": "A CMS makes it easy to manage your website without technical knowledge! 📝 Do you want to update content yourself or prefer we handle it?",
    "Web Application": "Web apps can really streamline your business! 💻 What kind of functionality are you looking for?",
    "Technologies": "We work with the latest technologies! ⚙️ Do you have a preferred technology or want us to recommend the best fit?",
    "Timeline": "Timelines vary based on complexity. ⏱️ Can you tell me a bit about your project?",
    "Process": "Our development process is smooth and transparent! 🔄 Would you like to know how we go from idea to live website?",
    "Pricing": "Website pricing depends on your requirements. 💰 What type of website do you need?",
    "Mobile Friendly": "All our websites are fully responsive! 📱 Is this for a new project or fixing an existing site?",
    "SEO": "SEO is built into every website we develop! 🔍 Are you looking for basic on-page SEO or a full strategy?",
  },
  "Shopping Cart": {
    "E-Commerce Setup": "Exciting — let's build your online store! 🛍️ Do you have products ready or still in planning?",
    "Payment Gateway": "We integrate UPI, cards, net banking and more! 💳 Which payment methods are most important for your customers?",
    "Product Management": "Managing products should be simple! 📦 How many products are you planning to list?",
    "Order Tracking": "Order tracking improves customer trust a lot! 📬 Do you need basic status updates or full tracking with shipping?",
    "Shipping": "Shipping setup is key for any e-commerce store! 🚚 Are you shipping locally, across India, or internationally?",
    "Security": "Security is critical for online stores! 🔐 Do you have specific security concerns?",
    "Platforms": "We work with Magento, Shopify, WooCommerce and custom solutions! 🛒 Do you have a platform preference?",
    "Pricing": "E-commerce pricing depends on platform and features. 💰 What's your rough budget?",
  },
  "Business Email": {
    "Google Workspace": "Google Workspace gives you Gmail, Drive, Meet — all with your domain! 📧 How many email accounts do you need?",
    "Microsoft 365": "Microsoft 365 is perfect for businesses using Word, Excel, Outlook! 💼 Are you migrating or setting up fresh?",
    "Zoho Mail": "Zoho Mail is great cost-effective option! 📬 Are you a small team looking for professional email?",
    "Migration": "Email migration can be tricky but we handle it without data loss! 🔄 Which service are you currently using?",
    "Security": "Business email security is more important than ever! 🔒 Are you looking for spam protection or full enterprise security?",
    "Storage": "Storage needs vary by team size. 💾 Are you running out of space or planning ahead?",
    "Multiple Users": "Managing multiple accounts is easy with our admin panel! 👥 How many users are you setting up?",
    "Setup": "Getting your business email set up is quick! ⚡ Do you already have a domain name?",
    "Support": "We provide full technical support for all email issues! 🛟 Are you facing a specific problem?",
  },
  "Digital Marketing": {
    "SEO": "SEO is the best long-term investment for online visibility! 🔍 Do you have an existing website we can work with?",
    "Social Media": "Social media can really grow your brand! 📱 Which platforms are most relevant — Facebook, Instagram, LinkedIn?",
    "PPC / Google Ads": "Google Ads gets you instant targeted traffic! 🎯 Do you have a budget in mind?",
    "Email Marketing": "Email marketing has one of the highest ROIs! 📧 Do you have a customer email list already?",
    "Content Marketing": "Great content builds trust and organic traffic! ✍️ Are you looking for blogs, social content, or both?",
    "Analytics": "Tracking performance is key to growth! 📊 Are you setting up analytics from scratch or improving existing?",
    "Pricing": "Digital marketing pricing is customized to your goals. 💰 What's your primary objective — traffic, leads, or brand awareness?",
    "Timeline": "SEO takes 3–6 months; PPC is immediate. ⏱️ Are you looking for quick results or long-term strategy?",
  },
  "SSL": {
    "What is SSL": "SSL makes your website secure with HTTPS! 🔒 It encrypts data between your site and visitors. Does your website currently have SSL?",
    "Types of SSL": "There are different SSL types based on your needs! 🛡️ Are you covering a single domain or multiple subdomains?",
    "Installation": "SSL installation is quick and we handle the whole process! ⚡ Which hosting provider are you using?",
    "Renewal": "Good that you're thinking ahead! 🔄 Do you know when your SSL is expiring?",
    "Pricing": "SSL pricing varies based on type and validation level. 💰 Is this for a personal, business, or e-commerce site?",
    "Why SSL": "SSL is essential for every website today! 🔐 Without it, browsers show 'Not Secure' warnings. Does your site show that?",
    "Support": "We provide full SSL support — installation, renewal, troubleshooting! 🛟 Are you facing a specific SSL issue?",
  },
  "DNS": {
    "What is DNS": "DNS is like the phone book of the internet! 📖 It connects your domain to your website and email. Are you trying to understand DNS for a specific reason?",
    "DNS Records": "DNS records control where your domain points! 🎯 Are you setting up A records, MX records, or something else?",
    "Domain Pointing": "Pointing your domain is straightforward! 🌐 Are you pointing to a hosting server or third-party platform?",
    "MX Records": "MX records direct your emails to the right server! 📧 Are you setting up email or troubleshooting an existing issue?",
    "TTL": "TTL controls how quickly DNS changes propagate! ⏱️ Are you about to make DNS changes?",
    "DNS Propagation": "DNS propagation usually takes 24–48 hours! 🌍 Are you waiting for recent changes to take effect?",
    "Support": "We provide full DNS management support! 🛟 Are you facing a specific DNS issue?",
  },
};

function getOpener(service: string, subtopic: string): string {
  return OPENERS[service]?.[subtopic] || `Sure! I'd love to help you with ${subtopic}. What would you like to know? 😊`;
}

// ─── Main Component ────────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadStep>("idle");
  const [leadData, setLeadData] = useState<LeadData>({ name: "", email: "", phone: "" });
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [currentService, setCurrentService] = useState("");
  const [currentSubtopic, setCurrentSubtopic] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: string; parts: { text: string }[] }[]>([]);

  // ─── Feedback state ─────────────────────────────────────────────────
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackStars, setFeedbackStars] = useState(0);
  const [feedbackHover, setFeedbackHover] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

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
    setShowFeedback(false);
    setFeedbackStars(0);
    setFeedbackSubmitted(false);
  };

  // ─── End Chat → show feedback ───────────────────────────────────────
  const handleEndChat = () => {
    setShowFeedback(true);
  };

  // ─── Submit feedback ────────────────────────────────────────────────
  const handleFeedbackSubmit = async () => {
    const chatText = messages
      .map((m) => `${m.role === "user" ? "Customer" : "Bot"}: ${m.text}`)
      .join("\n");

    await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isFeedback: true,
        feedback: {
          stars: feedbackStars,
          visitor: leadData.name ? leadData : { name: "Anonymous", email: "Unknown", phone: "Unknown" },
          service: currentService || "General",
          subtopic: currentSubtopic || "General",
          chatText,
        },
      }),
    }).catch(console.error);

    setFeedbackSubmitted(true);
    setTimeout(() => handleClear(), 2500);
  };

  // ─── Back navigation ────────────────────────────────────────────────
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
    setShowFeedback(false);
  };

  // ─── Service selected ───────────────────────────────────────────────
  const handleServiceClick = (service: string) => {
    if (service === "Contact Us") {
      setCurrentService("Contact Us");
      setBreadcrumbs([{ label: "Contact Us", level: "service" }]);
      setCurrentSubtopic("Contact Us");
      setMessages([]);
      setChatHistory([]);
      setTimeout(() => addMessage("bot", "Here's how you can reach us! 😊\n\n📞 +91-9751959300\n📧 info@g-netsolutions.com\n💬 WhatsApp: +91-9751959300\n📍 Lakshmi Nagar, Thaneer Pandal, V.K. Road, Peelamedu, Coimbatore - 641004, Tamil Nadu. (Near TIDEL Park)\n\n🕐 Mon–Sat, 9 AM – 6 PM IST\n\nFeel free to ask anything else!"), 100);
      return;
    }
    setCurrentService(service);
    setBreadcrumbs([{ label: service, level: "service" }]);
    setCurrentSubtopic("");
    setMessages([]);
    setChatHistory([]);
    setShowFeedback(false);
  };

  // ─── Subtopic selected ──────────────────────────────────────────────
  const handleSubtopicClick = (subtopic: string) => {
    setCurrentSubtopic(subtopic);
    setBreadcrumbs([
      { label: currentService, level: "service" },
      { label: subtopic, level: "subtopic" },
    ]);
    setMessages([]);
    setChatHistory([]);
    setLeadStep("idle");
    setShowFeedback(false);
    const opener = getOpener(currentService, subtopic);
    setTimeout(() => addMessage("bot", opener), 100);
  };

  // ─── Send message ───────────────────────────────────────────────────
  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setInput("");

    if (!currentService) {
      setCurrentService("General");
      setCurrentSubtopic("General");
      setBreadcrumbs([{ label: "General", level: "service" }]);
    }

    addMessage("user", trimmed);

    // Lead collection flow
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
      // Send lead email immediately
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isLead: true,
          lead: finalLead,
          service: currentService || "General",
          subtopic: currentSubtopic || "General",
          chatHistory: messages,
        }),
      }).catch(console.error);
      addMessage("bot", `✅ Thank you, ${finalLead.name}! Our team will reach out to you shortly. Feel free to keep asking questions! 😊`);
      return;
    }

    // Check intent signals — trigger lead collection naturally
    const lowerMsg = trimmed.toLowerCase();
    const hasIntent = INTENT_SIGNALS.some((s) => lowerMsg.includes(s));
    if (leadStep === "idle" && hasIntent) {
      setLeadStep("ask_name");
    }

    // Gemini AI
    setLoading(true);
    try {
      const leadCollected = leadStep === "done";
      const systemPrompt = buildSystemPrompt(
        currentService || "General",
        currentSubtopic || "General",
        leadCollected
      );
      const newHistory = [...chatHistory, { role: "user", parts: [{ text: trimmed }] }];
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, systemPrompt, history: chatHistory }),
      });
      const data = await res.json();
      const botReply = data.reply || "I'm not sure about that. Contact us at +91-9751959300 😊";

      // Check if Gemini itself triggered lead collection
      const geminiWantsLead =
        botReply.toLowerCase().includes("may i know your name") ||
        botReply.toLowerCase().includes("could i get your name") ||
        botReply.toLowerCase().includes("your name?");

      addMessage("bot", botReply);
      setChatHistory([...newHistory, { role: "model", parts: [{ text: botReply }] }]);

      if (leadStep === "idle" && (hasIntent || geminiWantsLead)) {
        setTimeout(() => {
          setLeadStep("ask_name");
          addMessage("bot", "I'd love to connect you with our team! 😊 May I know your name?");
        }, 800);
      }
    } catch {
      addMessage("bot", "Sorry, having trouble right now. Reach us at +91-9751959300 😊");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  // ─── Render ─────────────────────────────────────────────────────────
  const showServiceGrid = breadcrumbs.length === 0;
  const showSubtopics = breadcrumbs.length === 1 && currentService && currentService !== "Contact Us" && currentService !== "General";
  const showChat = breadcrumbs.length === 2 || (breadcrumbs.length === 1 && (currentService === "Contact Us" || currentService === "General"));

  return (
    <>
      {/* Toggle Button */}
      <button onClick={() => setOpen((o) => !o)} aria-label="Open chat" className="gnet-chat-toggle">
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
            <div className="gnet-header-actions">
              {showChat && (
                <button onClick={handleEndChat} className="gnet-end-btn" title="End Chat">
                  End Chat
                </button>
              )}
              <button onClick={handleClear} className="gnet-clear-btn" title="Clear chat">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
                </svg>
              </button>
            </div>
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

          {/* Feedback Overlay — covers entire chat window */}
          {showFeedback && (
            <div className="gnet-feedback-overlay">
                {feedbackSubmitted ? (
                  <div className="gnet-feedback-thanks">
                    <div style={{ fontSize: "40px" }}>🙏</div>
                    <div className="gnet-feedback-thanks-text">Thank you for your feedback!</div>
                    <div style={{ fontSize: "13px", color: "#64748b" }}>Chat will reset shortly...</div>
                  </div>
                ) : (
                  <div className="gnet-feedback-box">
                    <div className="gnet-feedback-title">How was your experience?</div>
                    <div className="gnet-feedback-sub">Rate your chat with G-Net Support</div>
                    <div className="gnet-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          className="gnet-star-btn"
                          onMouseEnter={() => setFeedbackHover(star)}
                          onMouseLeave={() => setFeedbackHover(0)}
                          onClick={() => setFeedbackStars(star)}
                        >
                          <svg width="36" height="36" viewBox="0 0 24 24" fill={star <= (feedbackHover || feedbackStars) ? "#f59e0b" : "#e2e8f0"}>
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                    {feedbackStars > 0 && (
                      <div className="gnet-feedback-label">
                        {["", "Poor 😞", "Fair 😐", "Good 😊", "Great 😄", "Excellent! 🌟"][feedbackStars]}
                      </div>
                    )}
                    <div className="gnet-feedback-actions">
                      <button
                        className="gnet-feedback-submit"
                        onClick={handleFeedbackSubmit}
                        disabled={feedbackStars === 0}
                      >
                        Submit Feedback
                      </button>
                      <button className="gnet-feedback-skip" onClick={handleClear}>
                        Skip
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Screen 1: Service Grid */}
            {showServiceGrid && !showFeedback && (
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
                    <button key={s} className="gnet-service-tag" onClick={() => handleServiceClick(s)}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            {/* Screen 2: Subtopics */}
            {showSubtopics && !showFeedback && (
              <div className="gnet-screen">
                <div className="gnet-service-label">What would you like to know about <strong>{currentService}</strong>?</div>
                <div className="gnet-service-grid">
                  {(SUB_TOPICS[currentService] || []).map((t) => (
                    <button key={t} className="gnet-service-tag" onClick={() => handleSubtopicClick(t)}>{t}</button>
                  ))}
                </div>
              </div>
            )}

            {/* Screen 3: Chat */}
            {showChat && !showFeedback && (
              <div className="gnet-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`gnet-msg-row ${msg.role}`}>
                    <div className={`gnet-msg-bubble ${msg.role}`}>{msg.text}</div>
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

          {/* Input */}
          {!showFeedback && (
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
          )}

          {/* Footer */}
          <div className="gnet-chat-footer">Powered by G-Net Solutions AI</div>
        </div>
      )}

      <style>{`
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
        .gnet-chat-window {
          position: fixed; bottom: 96px; right: 24px; z-index: 9998;
          width: 360px; max-height: 580px;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.18);
          display: flex; flex-direction: column; overflow: hidden;
          background: #fff;
          font-family: 'Segoe UI', system-ui, sans-serif;
          animation: gnetSlideIn 0.25s ease;
          position: fixed;
        }
        .gnet-chat-header {
          background: linear-gradient(135deg, #0f4c81, #1a73e8);
          padding: 12px 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .gnet-chat-header-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .gnet-chat-header-info { flex: 1; }
        .gnet-chat-header-name { color: #fff; font-weight: 700; font-size: 14px; }
        .gnet-chat-header-status { color: rgba(255,255,255,0.8); font-size: 11px; display: flex; align-items: center; gap: 4px; }
        .gnet-online-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; display: inline-block; }
        .gnet-header-actions { display: flex; align-items: center; gap: 6px; }
        .gnet-end-btn {
          background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.4);
          color: white; font-size: 11px; font-weight: 600;
          padding: 4px 10px; border-radius: 12px; cursor: pointer;
          transition: background 0.2s; white-space: nowrap;
        }
        .gnet-end-btn:hover { background: rgba(255,255,255,0.3); }
        .gnet-clear-btn {
          background: rgba(255,255,255,0.15); border: none; cursor: pointer;
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s; flex-shrink: 0;
        }
        .gnet-clear-btn:hover { background: rgba(255,255,255,0.3); }
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
          cursor: pointer; font-size: 10px; padding: 0; opacity: 0.8;
        }
        .gnet-breadcrumb-x:hover { opacity: 1; }
        .gnet-chat-body { flex: 1; overflow-y: auto; background: #f8fafc; position: relative; min-height: 200px; }
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
        .gnet-messages { padding: 14px; display: flex; flex-direction: column; gap: 10px; }
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
        .gnet-typing { display: flex; gap: 5px; align-items: center; padding: 14px; }
        .gnet-typing span {
          width: 7px; height: 7px; border-radius: 50%; background: #1a73e8;
          display: inline-block; animation: gnetBounce 1.2s ease infinite;
        }
        .gnet-typing span:nth-child(2) { animation-delay: 0.2s; }
        .gnet-typing span:nth-child(3) { animation-delay: 0.4s; }

        /* Feedback */
        .gnet-feedback-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #f8fafc;
          display: flex; align-items: center; justify-content: center;
          z-index: 20; padding: 20px;
        }
        .gnet-chat-body {
          position: relative;
        }
        .gnet-feedback-box {
          background: white; border-radius: 16px;
          padding: 24px 20px; text-align: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1); width: 100%;
        }
        .gnet-feedback-title { font-size: 17px; font-weight: 700; color: #0f4c81; margin-bottom: 6px; }
        .gnet-feedback-sub { font-size: 13px; color: #64748b; margin-bottom: 20px; }
        .gnet-stars { display: flex; justify-content: center; gap: 6px; margin-bottom: 10px; }
        .gnet-star-btn { background: none; border: none; cursor: pointer; padding: 2px; transition: transform 0.15s; }
        .gnet-star-btn:hover { transform: scale(1.2); }
        .gnet-feedback-label { font-size: 14px; font-weight: 600; color: #f59e0b; margin-bottom: 16px; min-height: 20px; }
        .gnet-feedback-actions { display: flex; flex-direction: column; gap: 8px; }
        .gnet-feedback-submit {
          padding: 10px; border-radius: 24px;
          background: linear-gradient(135deg, #0f4c81, #1a73e8);
          color: white; border: none; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: opacity 0.2s;
        }
        .gnet-feedback-submit:disabled { opacity: 0.4; cursor: not-allowed; }
        .gnet-feedback-submit:not(:disabled):hover { opacity: 0.9; }
        .gnet-feedback-skip {
          background: none; border: none; color: #94a3b8;
          font-size: 13px; cursor: pointer; padding: 4px;
        }
        .gnet-feedback-skip:hover { color: #64748b; }
        .gnet-feedback-thanks {
          text-align: center; display: flex; flex-direction: column;
          align-items: center; gap: 12px;
        }
        .gnet-feedback-thanks-text { font-size: 18px; font-weight: 700; color: #0f4c81; }

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
        .gnet-chat-footer {
          text-align: center; padding: 6px; font-size: 11px; color: #aaa; background: #fff;
        }
        @keyframes gnetSlideIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes gnetBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%            { transform: translateY(-6px); }
        }
        @media (max-width: 400px) {
          .gnet-chat-window { width: calc(100vw - 20px); right: 10px; bottom: 80px; }
        }
      `}</style>
    </>
  );
}
