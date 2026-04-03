'use client';

import React, { useState } from 'react';

const categories = [
  {
    id: 'web',
    label: 'Web development',
    badge: 'design & build',
    badgeStyle: { background: '#ddeeff', color: '#1a4f8a' },
    items: [
      {
        q: 'What is web development and why does my business need a website?',
        a: 'Web development is the process of designing, building, and maintaining websites and web applications. Every business needs a website because it serves as your 24/7 digital storefront — it builds credibility, makes you discoverable online, reaches a wider audience, and enables you to showcase products, services, and contact information at all times.',
      },
      {
        q: 'What is the difference between a static website and a dynamic website?',
        a: 'A static website displays the same fixed content to every visitor and is best for simple informational sites like portfolios or brochure sites. A dynamic website generates content in real time based on user actions or database data — suitable for e-commerce stores, portals, and sites that require login, search, or frequently updated content.',
      },
      {
        q: 'What is responsive web design?',
        a: 'Responsive web design ensures your website automatically adapts its layout, images, and content to look and function well on any screen size — from large desktop monitors to tablets and smartphones. Since over 60% of web traffic now comes from mobile devices, a responsive design is essential for reaching your full audience.',
      },
      {
        q: 'What is a CMS and do I need one?',
        a: 'A Content Management System (CMS) is a platform that lets you create, edit, and manage website content without writing code. Popular examples include WordPress, Joomla, and Drupal. You need a CMS if you want to regularly update your website — publish blog posts, change product descriptions, or add pages — without depending on a developer every time.',
      },
      {
        q: 'How long does it take to build a website?',
        a: 'Timelines vary by project complexity. A simple informational website typically takes 2–4 weeks. A CMS-based business website may take 4–8 weeks. A complex web application or e-commerce platform can take 2–6 months. Timely content and feedback from your side is the biggest factor in keeping a project on schedule.',
      },
      {
        q: 'What information do I need to provide to get started?',
        a: 'To kick off a web project you will typically need to provide: your business goals and target audience, examples of websites you like, your brand assets (logo, colours, fonts), the pages and content you need, any existing domain or hosting details, and any specific functionality requirements such as booking forms, galleries, or integrations.',
      },
      {
        q: 'Will my website be optimised for search engines (SEO)?',
        a: 'A well-built website should include foundational on-page SEO — proper heading structure, clean URLs, meta titles and descriptions, fast load times, and mobile-friendliness. These are technical foundations. Full SEO campaigns (keyword research, content strategy, link building) are a separate ongoing service beyond the initial build.',
      },
      {
        q: 'What happens after my website is launched?',
        a: 'After launch you will need ongoing website maintenance — regular software/plugin updates, security monitoring, performance checks, content updates, and backups. Many businesses also start digital marketing efforts post-launch to drive traffic. Your web development partner should offer a maintenance plan or handover documentation.',
      },
    ],
  },
  {
    id: 'ecom',
    label: 'E-commerce',
    badge: 'online selling',
    badgeStyle: { background: '#d4f2e7', color: '#0d5c42' },
    items: [
      {
        q: 'What is an e-commerce website?',
        a: 'An e-commerce website is an online store that allows businesses to sell products or services directly to customers over the internet. It includes product listings, a shopping cart, checkout flow, and payment processing. Examples range from small boutique stores to large multi-category marketplaces.',
      },
      {
        q: 'Which e-commerce platform should I choose — Shopify, WooCommerce, or Magento?',
        a: 'The right choice depends on your scale and technical needs. Shopify is a fully hosted, easy-to-manage platform ideal for small to medium businesses who want speed of setup. WooCommerce is a WordPress plugin offering great flexibility for content-heavy stores. Magento (Adobe Commerce) is built for large enterprises with complex product catalogues, multi-store setups, or high order volumes. Custom solutions are also possible for unique requirements.',
      },
      {
        q: 'What payment gateways can be integrated?',
        a: 'Common payment gateways include Razorpay, PayU, Paytm, and Instamojo (popular in India), as well as global options like Stripe, PayPal, and Square. The right gateway depends on your target geography, transaction fees, and the currencies you need to support.',
      },
      {
        q: "Is my customers' payment data secure?",
        a: "Payment security depends on using a PCI-DSS-compliant payment gateway, an SSL certificate on your website, and following secure coding practices. Reputable payment gateways handle card data directly on their servers — meaning sensitive card information never touches your website, significantly reducing risk.",
      },
      {
        q: 'Can I manage my own products, inventory, and orders?',
        a: 'Yes. All major e-commerce platforms include an admin dashboard where you can add and edit products, set prices and stock levels, manage orders, issue refunds, and view sales reports — all without any technical knowledge. More advanced inventory management and ERP integrations are also possible for larger operations.',
      },
      {
        q: 'Can I sell both physical and digital products?',
        a: 'Yes. Modern e-commerce platforms support physical products (with shipping integration), digital downloads (ebooks, software, music), services (bookings, subscriptions), and a combination of all three in the same store. Each product type can be configured with its own pricing, delivery, and fulfilment rules.',
      },
      {
        q: 'What is an abandoned cart and how can I recover those sales?',
        a: 'An abandoned cart occurs when a shopper adds items to their cart but leaves before completing the purchase. Recovery strategies include automated email reminders (sent 1, 24, and 72 hours after abandonment), exit-intent popups offering a discount, and retargeting ads on social media. Well-timed recovery emails can recover 5–15% of abandoned carts.',
      },
      {
        q: 'How do I handle shipping and delivery?',
        a: 'Shipping can be handled through integrations with courier services (Delhivery, DTDC, FedEx, etc.) directly from your store admin. You can set flat-rate shipping, free shipping thresholds, weight-based rates, or real-time carrier rates. Order tracking updates can be sent to customers automatically via email or SMS.',
      },
    ],
  },
  {
    id: 'host',
    label: 'Hosting & domains',
    badge: 'infrastructure',
    badgeStyle: { background: '#fef0d4', color: '#7a4c0a' },
    items: [
      {
        q: 'What is web hosting and why do I need it?',
        a: "Web hosting is a service that stores your website's files on a server and makes them accessible to visitors over the internet. Without hosting, your website cannot be seen online. Think of it as renting space on a powerful computer that stays connected to the internet 24/7 so your site is always available.",
      },
      {
        q: 'What is the difference between shared, VPS, dedicated, and cloud hosting?',
        list: [
          "Shared hosting — multiple websites share one server's resources. Cheapest option, best for small or new sites.",
          'VPS hosting — a physical server is divided into isolated virtual servers, each with dedicated resources. More control and better performance than shared.',
          'Dedicated hosting — you get an entire server to yourself. Maximum performance, security, and control for high-traffic sites.',
          'Cloud hosting — your site runs across a network of servers. Highly scalable and reliable with pay-as-you-go pricing.',
        ],
      },
      {
        q: 'What is a domain name and how do I choose one?',
        a: "A domain name is your website's address on the internet (e.g., yourcompany.com). When choosing one: keep it short and easy to spell, use your brand or business name, prefer .com for global reach or .in for India-focused businesses, avoid hyphens and numbers, and check that it is not trademarked. Register it as soon as you decide — good names get taken quickly.",
      },
      {
        q: 'What is an SSL certificate and do I need one?',
        a: 'An SSL certificate encrypts data between your website and visitors, shown as the padlock icon and "https://" in the browser. You need one because Google ranks secure sites higher in search results, browsers warn users about sites without SSL, and it is essential for any site that collects form data, login credentials, or payment information.',
      },
      {
        q: 'What is uptime and what should I expect from a good host?',
        a: 'Uptime is the percentage of time your website is online and accessible. A reliable hosting provider should guarantee 99.9% uptime or higher — that translates to less than 8.7 hours of downtime per year. Always ask for SLA (Service Level Agreement) commitments before choosing a host.',
      },
      {
        q: 'What are DNS records and when do I need to change them?',
        a: 'DNS (Domain Name System) records map your domain to the correct servers. You may need to update them when migrating to a new host, setting up business email (MX records), verifying domain ownership (TXT records), or pointing a subdomain to a specific service. DNS changes can take up to 48 hours to fully propagate globally.',
      },
      {
        q: 'What happens if I do not renew my domain or hosting?',
        a: 'If your domain expires, your website and email will stop working. After a grace period (typically 30–45 days), the domain becomes available for anyone to register. If hosting expires, your site goes offline and data may be deleted after a further grace period. Always set up auto-renewal and keep billing information up to date.',
      },
    ],
  },
  {
    id: 'email',
    label: 'Business email',
    badge: 'communication',
    badgeStyle: { background: '#fce8f0', color: '#7a2348' },
    items: [
      {
        q: 'Why should I use a professional business email instead of Gmail or Yahoo?',
        a: 'A professional email address (you@yourcompany.com) builds trust and credibility with customers and partners. Free email addresses look unprofessional and can raise doubts about your business legitimacy. Business email also comes with better security, spam protection, larger storage, collaboration tools, and compliance controls that free services do not provide.',
      },
      {
        q: 'What is Google Workspace and is it right for my team?',
        a: "Google Workspace (formerly G Suite) is Google's cloud-based productivity suite for businesses, including Gmail, Google Drive, Meet, Docs, Sheets, Slides, and Calendar — all ad-free and under your own domain. It is ideal for teams that already use Google tools, prioritise ease of use, and need seamless real-time collaboration. It works for 2-person startups and 2,000-person enterprises alike.",
      },
      {
        q: 'What is Microsoft 365 and how is it different from Google Workspace?',
        a: 'Microsoft 365 includes Outlook, Word, Excel, PowerPoint, Teams, and OneDrive. It is preferred by organisations already in the Microsoft ecosystem, businesses that rely on advanced Excel or Word features, and enterprises with complex IT environments. Google Workspace tends to have a simpler interface and stronger real-time collaboration, while Microsoft 365 has deeper desktop app functionality.',
      },
      {
        q: 'What is Zoho Mail and when should I consider it?',
        a: 'Zoho Mail is a secure, ad-free business email solution with a built-in productivity suite (Cliq, WorkDrive, Meeting, Writer, Sheet). It is often preferred by small and medium businesses looking for a cost-effective alternative to Google or Microsoft, and by businesses already using Zoho CRM or other Zoho applications.',
      },
      {
        q: 'What security features should a business email solution include?',
        a: 'A secure business email should include spam and phishing filtering, malware and virus scanning, end-to-end encryption (S/MIME or TLS), multi-factor authentication (MFA), data loss prevention (DLP), admin controls for user access, and compliance with GDPR or other relevant data regulations.',
      },
      {
        q: 'Can I migrate my existing emails to a new platform?',
        a: 'Yes. Email migration moves your historical emails, contacts, and calendar data from your old platform to the new one. Most providers support migration via IMAP, POP, or dedicated migration tools. A professional setup ensures zero data loss and minimal disruption to your team. Allow 1–3 business days depending on the volume of data.',
      },
      {
        q: 'How many email accounts can I create for my organisation?',
        a: 'The number of email accounts depends on your plan. All major business email providers offer per-user pricing — you pay for as many accounts as you need and can scale up or down at any time. Most plans also support aliases and shared/group inboxes like info@yourcompany.com or support@yourcompany.com.',
      },
    ],
  },
  {
    id: 'app',
    label: 'Application software',
    badge: 'custom software',
    badgeStyle: { background: '#eceafd', color: '#3d2e9a' },
    items: [
      {
        q: 'What is custom application software?',
        a: 'Custom application software is a program built specifically to meet the unique requirements of a business, rather than using an off-the-shelf product. Examples include inventory management systems, CRM platforms, booking engines, HR portals, billing systems, and customer-facing web apps. Unlike generic software, custom applications are designed around your exact workflows and can be extended as your business grows.',
      },
      {
        q: 'When should I choose custom software over ready-made software?',
        a: "Choose custom software when: your processes are unique and no off-the-shelf product fits well; you are paying for features you do not use; you need deep integration with existing systems; you want to own the software outright with no recurring licence fees; or scalability demands exceed what packaged software can offer.",
      },
      {
        q: 'What is the typical software development process?',
        list: [
          'Requirements gathering — understanding your goals, users, and workflows',
          'System design — architecture, database structure, and UI wireframes',
          'Development — building the application in iterative sprints',
          'Testing (QA) — functional, performance, and security testing',
          'Deployment — releasing to production environment',
          'Support & maintenance — ongoing updates, bug fixes, and enhancements',
        ],
      },
      {
        q: 'What is Agile methodology and why does it matter?',
        a: 'Agile is a development approach that breaks a project into short cycles called sprints (usually 1–2 weeks), delivering working software incrementally rather than at the end of a long project. It reduces risk, allows early course correction, keeps you involved throughout, and produces usable software faster. Agile is now the industry standard for custom software development.',
      },
      {
        q: 'Can the application integrate with our existing systems?',
        a: 'Yes. Modern applications are built with APIs that allow them to communicate with other systems — CRM, ERP, accounting software, payment gateways, or third-party services. Integration requirements should be discussed during the discovery and design phase to ensure the architecture supports them from the start.',
      },
      {
        q: 'Who owns the source code after the project is completed?',
        a: 'Ownership of source code should be clearly defined in your contract before the project begins. In most custom development engagements, the client owns the final source code upon full payment. Always ask for the complete codebase, documentation, and deployment scripts to be handed over at project completion.',
      },
      {
        q: 'How is a web application different from a website?',
        a: 'A website is primarily informational — it delivers content to visitors. A web application is interactive and functional — users can log in, submit data, perform transactions, and the system responds dynamically. Examples include online banking, project management tools, booking systems, and customer portals. Many modern sites combine both.',
      },
    ],
  },
  {
    id: 'mkt',
    label: 'Digital marketing',
    badge: 'growth & visibility',
    badgeStyle: { background: '#fde8df', color: '#7a2e14' },
    items: [
      {
        q: 'What is digital marketing and what does it include?',
        a: 'Digital marketing is the promotion of products and services through digital channels. It includes Search Engine Optimisation (SEO), Pay-Per-Click advertising (PPC), social media marketing, email marketing, content marketing, influencer marketing, affiliate marketing, online PR, and analytics & reporting. A good strategy combines several of these channels for maximum impact.',
      },
      {
        q: 'What is SEO and how does it help my business?',
        a: 'SEO (Search Engine Optimisation) is the process of improving your website so it ranks higher on search engines like Google for relevant keywords. Higher rankings mean more organic (free) traffic from users actively looking for what you offer. SEO includes technical optimisation, on-page content optimisation, and off-page authority building (backlinks). Results typically build over 3–6 months.',
      },
      {
        q: 'What is AEO (Answer Engine Optimisation)?',
        a: `AEO is the practice of structuring your content so it is selected by search engines and AI assistants as the direct answer to a user's question — appearing in featured snippets, Google's "People Also Ask" boxes, and as voice search results from assistants like Siri, Alexa, and Google Assistant. AEO focuses on writing clear, concise answers to specific questions, using structured data (schema markup), and organising content in FAQ and Q&A formats.`,
      },
      {
        q: 'What is GEO (Generative Engine Optimisation)?',
        a: 'GEO is an emerging discipline focused on making your brand, content, and expertise visible within AI-generated answers — such as those from ChatGPT, Google Gemini, Claude, and Perplexity. As more users get answers directly from AI rather than clicking search results, GEO ensures your business is cited and recommended by these systems. It involves building authoritative, well-structured content and earning credible mentions across the web.',
      },
      {
        q: 'What is the difference between SEO, AEO, and GEO?',
        list: [
          'SEO — optimises your site to rank in traditional search engine results pages (Google, Bing blue links).',
          'AEO — optimises your content to be selected as direct answers in featured snippets and voice assistants.',
          "GEO — optimises your brand's presence in AI-generated conversational responses (ChatGPT, Gemini, Claude, Perplexity).",
          'All three are increasingly important as user search behaviour shifts from clicking links to expecting direct answers.',
        ],
      },
      {
        q: 'What is PPC and how is it different from SEO?',
        a: 'PPC (Pay-Per-Click) advertising lets you pay to appear at the top of search results immediately. You pay each time someone clicks your ad. SEO earns traffic organically over time without paying per click. PPC delivers instant results but stops when you stop paying. SEO is slower but delivers sustained, compounding traffic. Most businesses benefit from using both together.',
      },
      {
        q: 'How long does SEO take to show results?',
        a: 'Most businesses see meaningful movement in rankings and traffic within 3–6 months of consistent effort. Competitive industries may take 6–12 months. Speed depends on domain authority, competition level, content quality, technical health, and link building pace. There are no legitimate shortcuts — any service promising instant rankings is a red flag.',
      },
      {
        q: 'How do I measure the success of digital marketing?',
        a: 'Success is measured through KPIs aligned to your goals: organic traffic growth (SEO), click-through rate and cost per click (PPC), engagement rate (social media), open rate and conversion rate (email), leads and enquiries generated, and revenue attributed to digital channels. Tools like Google Analytics and Google Search Console provide this data.',
      },
    ],
  },
  {
    id: 'maint',
    label: 'Website maintenance',
    badge: 'reliability',
    badgeStyle: { background: '#e4f2d8', color: '#2a5c0d' },
    items: [
      {
        q: 'Why does my website need ongoing maintenance?',
        a: 'A website is not a one-time project — it is a living system that requires regular care. Without maintenance, outdated software and plugins become security vulnerabilities, website performance degrades, broken links and errors accumulate, and content becomes stale. Regular maintenance keeps your site secure, fast, functional, and aligned with evolving web standards and search engine requirements.',
      },
      {
        q: 'What does a typical website maintenance plan include?',
        list: [
          'CMS, plugin, and theme updates',
          'Security monitoring and malware scanning',
          'Regular automated backups and tested restoration capability',
          'Uptime monitoring with alerts',
          'Performance optimisation (caching, image compression, speed checks)',
          'Content updates (text, images, pages)',
          'Bug fixes and broken link repairs',
          'Monthly or quarterly performance reports',
        ],
      },
      {
        q: 'How often should my website be backed up?',
        a: 'At minimum, your website should be backed up daily — both the database and all files. For high-traffic or frequently updated sites (e-commerce, news, blogs), real-time or hourly backups are recommended. Backups should be stored off-server so a server failure does not destroy both your site and its backup simultaneously.',
      },
      {
        q: 'What is website security monitoring and why is it important?',
        a: 'Website security monitoring continuously scans your site for malware, suspicious file changes, brute-force login attempts, and known vulnerabilities. Compromised websites lose customer trust, get blacklisted by Google, and can have customer data stolen. Early detection allows threats to be neutralised before significant damage occurs.',
      },
      {
        q: 'What affects website speed and how can maintenance improve it?',
        a: 'Speed is affected by image sizes, unoptimised code, too many plugins, server response time, lack of caching, and outdated software. Maintenance improves speed through compressing images, enabling caching, cleaning redundant code and plugins, updating software, and using a CDN to serve assets from servers closer to the visitor.',
      },
      {
        q: 'How is maintenance pricing typically calculated?',
        a: 'Maintenance pricing depends on: type and size of the website, technology stack, frequency of updates required, security monitoring level, support response time commitments, and whether content updates are included. Plans are usually offered as monthly retainers, scaling based on complexity and workload.',
      },
      {
        q: 'What is the difference between website maintenance and website redesign?',
        a: 'Maintenance keeps your existing website running smoothly — updates, security, backups, minor fixes. A redesign is a significant overhaul of the visual design, structure, technology, or content strategy. You need a redesign if your site looks dated, is not mobile-friendly, has poor conversion rates, or is built on outdated technology. Maintenance extends the life of a good website; redesign is for when fundamental change is needed.',
      },
    ],
  },
  {
    id: 'bot',
    label: 'Chatbot',
    badge: 'automation',
    badgeStyle: { background: '#efefeb', color: '#444' },
    items: [
      {
        q: 'What is a website chatbot?',
        a: 'A website chatbot is an automated conversational interface embedded into your website that interacts with visitors in real time. It can answer common questions, guide users to relevant pages, capture contact details, qualify leads, process bookings, and escalate complex queries to a human agent. Chatbots range from simple rule-based bots to sophisticated AI-powered assistants that understand natural language.',
      },
      {
        q: 'What is the difference between a rule-based chatbot and an AI chatbot?',
        a: 'A rule-based chatbot follows a fixed script of predefined questions and answers — it can only respond to options you have programmed. It is predictable and easy to build but limited in handling unexpected questions. An AI chatbot uses Natural Language Processing (NLP) to understand intent and context, allowing it to respond to open-ended, varied questions conversationally. AI chatbots improve over time but require more setup and training data.',
      },
      {
        q: 'What are the main benefits of adding a chatbot to my website?',
        list: [
          '24/7 availability — answers customer questions outside business hours',
          'Instant response — eliminates wait times that cause visitors to leave',
          'Lead capture — collects name, email, and phone from interested visitors automatically',
          'Reduced support load — handles repetitive enquiries so your team focuses on complex issues',
          'Better user experience — guides visitors to the right information or action faster',
          'Cost efficiency — one chatbot can handle hundreds of simultaneous conversations',
        ],
      },
      {
        q: 'How do I add a chatbot to my website?',
        a: "Adding a chatbot typically involves: choosing a chatbot platform or building a custom solution, configuring conversation flows and responses, connecting it to your knowledge base or CRM, and embedding a small JavaScript snippet into your website's HTML — usually just before the closing body tag. The widget then appears as a chat bubble in the corner of your site.",
      },
      {
        q: 'Which pages of my website should show the chatbot?',
        a: 'Best practice is to show the chatbot on high-intent pages where visitors are likely to have questions — homepage, pricing page, contact page, product or service pages, and checkout (for e-commerce). You may delay its appearance by a few seconds or trigger it after scroll depth, so it does not interrupt users who just arrived on the page.',
      },
      {
        q: 'Can the chatbot be connected to my CRM or business systems?',
        a: 'Yes. Modern chatbots can integrate with CRM systems (Zoho CRM, HubSpot, Salesforce), email marketing tools, helpdesk platforms (Freshdesk, Zendesk), calendar and booking systems, and ERP software. Leads captured by the chatbot flow directly into your sales pipeline, appointments are created automatically, and support tickets are raised without manual data entry.',
      },
      {
        q: 'What information should my chatbot be able to answer?',
        a: "Your chatbot should handle: your most frequently asked questions (pricing, services, location, hours), product or service enquiries, directions to the right contact person or department, support requests with ticket creation, lead qualification questions, and booking or appointment scheduling. Start by reviewing your last 3–6 months of customer enquiries — the most common ones form your chatbot's first content set.",
      },
      {
        q: 'How do I ensure the chatbot hands off to a human agent when needed?',
        a: "Good chatbot design includes a clear escalation path — triggered when the bot cannot answer a question, the user explicitly asks for a human, or the conversation reaches a critical decision point (e.g., a complaint). The handoff can route to a live chat agent, send an email notification, create a support ticket, or schedule a callback. Outside business hours, the bot should collect the user's details and promise follow-up within a set timeframe.",
      },
    ],
  },
];

const FaqClient = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">

      
      <div className="faq-container">

        {/* TABS */}
        <div className="tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              data-id={cat.id}
              className={`tb${activeTab === cat.id ? ' on' : ''}`}
              onClick={() => { setActiveTab(cat.id); setOpenIndex(null); }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SECTION LABEL */}
        <div className="sec-lbl">
          <span>{activeCategory.label}</span>
          <span className="badge" style={activeCategory.badgeStyle}>
            {activeCategory.badge}
          </span>
        </div>

        {/* ACCORDION */}
        <div>
          {activeCategory.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="fi">
                <button
                  className={`fq${isOpen ? ' on' : ''}`}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="arr" aria-hidden="true">▾</span>
                </button>
                {isOpen && (
                  <div className="fa">
                    {'list' in item && item.list ? (
                      <ul>
                        {item.list.map((li, j) => <li key={j}>{li}</li>)}
                      </ul>
                    ) : (
                      <p>{'a' in item ? item.a : ''}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <footer className="faq-footer">
          Have more questions? <a href="/contact">Contact our team</a> — we&apos;re happy to help.
        </footer>
      </div>

      <style jsx>{`
        .faq-page {
          background: #f8fafc;
          color: #0f172a;
          min-height: 100vh;
          padding-bottom: 30px;
          padding-top: 30px;
        }

        .faq-hero {
          text-align: center;
          padding: 80px 20px 60px;
          background: linear-gradient(135deg, #2563eb, #9333ea);
          color: white;
          margin-bottom: 40px;
        }

        .faq-hero h1 {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .faq-hero p {
          font-size: 1rem;
          opacity: 0.88;
        }

        .faq-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .tb {
          padding: 7px 16px;
          border-radius:5px;
          border: 1.5px solid #9eb4be;
          background: #e4e6e7;
          font-size: 13px;
          color: #555;
          cursor: pointer;
          transition: all 0.18s;
          white-space: nowrap;
          font-family: inherit;
          font-weight: 500;
        }

        .tb:hover { filter: brightness(0.95); color: #111; }

        /* Per-tab active colors */
        .tb[data-id="web"].on    { background: #ddeeff; border-color: #93c5fd; color: #1a4f8a; font-weight: 700; }
        .tb[data-id="ecom"].on   { background: #d4f2e7; border-color: #6ee7b7; color: #0d5c42; font-weight: 700; }
        .tb[data-id="host"].on   { background: #fef0d4; border-color: #fcd34d; color: #7a4c0a; font-weight: 700; }
        .tb[data-id="email"].on  { background: #fce8f0; border-color: #f9a8d4; color: #7a2348; font-weight: 700; }
        .tb[data-id="app"].on    { background: #eceafd; border-color: #c4b5fd; color: #3d2e9a; font-weight: 700; }
        .tb[data-id="mkt"].on    { background: #fde8df; border-color: #fca5a5; color: #7a2e14; font-weight: 700; }
        .tb[data-id="maint"].on  { background: #e4f2d8; border-color: #86efac; color: #2a5c0d; font-weight: 700; }
        .tb[data-id="bot"].on    { background: #e8e8e4; border-color: #aaaaaa; color: #222;    font-weight: 700; }

        /* Per-tab hover colors (inactive) */
        .tb[data-id="web"]:not(.on):hover    { background: #eef5ff; color: #1a4f8a; }
        .tb[data-id="ecom"]:not(.on):hover   { background: #e8f8f2; color: #0d5c42; }
        .tb[data-id="host"]:not(.on):hover   { background: #fef7e6; color: #7a4c0a; }
        .tb[data-id="email"]:not(.on):hover  { background: #fef0f6; color: #7a2348; }
        .tb[data-id="app"]:not(.on):hover    { background: #f3f1fe; color: #3d2e9a; }
        .tb[data-id="mkt"]:not(.on):hover    { background: #fff0eb; color: #7a2e14; }
        .tb[data-id="maint"]:not(.on):hover  { background: #eef7e6; color: #2a5c0d; }
        .tb[data-id="bot"]:not(.on):hover    { background: #f3f3f0; color: #222; }

        .sec-lbl {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgb(0, 90, 160);
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e5e2;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .badge {
          font-size: 13px;
          padding: 5px 10px;
          border-radius: 20px;
           border: 1px solid #bebebb;
          font-weight: 600;
          text-transform: none;
          letter-spacing: 0;
        }

        .fi {
          border: 1px solid #e5e5e2;
          border-radius: 10px;
          margin-bottom: 6px;
          overflow: hidden;
          background: #fff;
          transition: box-shadow 0.2s;
        }

        .fi:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }

        .fq {
          width: 100%;
          background: #fff;
          border: none;
          padding: 15px 18px;
          text-align: left;
          font-size: 16px;
          font-weight: 600;
          color: #111;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.55;
          font-family: inherit;
          transition: background 0.15s;
        }

        .fq:hover { background: #fafaf8; }

        .fq.on {
          background: #fafaf8;
          color: #2563eb;
        }

        .arr {
          font-size: 14px;
          color: #aaa;
          flex-shrink: 0;
          margin-top: 3px;
          transition: transform 0.22s ease;
          display: inline-block;
        }

        .fq.on .arr {
          transform: rotate(180deg);
          color: #2563eb;
        }

        .fa {
          padding: 4px 18px 16px;
          font-size: 13.5px;
          color: #475569;
          line-height: 1.8;
          border-top: 1px solid #f1f1ef;
          animation: fadeIn 0.18s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fa p { margin: 10px 0 0; font-size: 14px; }
        .fa ul { padding-left: 18px; margin-top: 10px; }
        .fa ul li { margin-bottom: 6px; }

        .faq-footer {
          margin-top: 36px;
          padding: 14px 18px;
          background: #efefeb;
          border-radius: 10px;
          font-size: 13px;
          color: #555;
          border: 1px solid #e5e5e2;
        }

        .faq-footer a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }

        .faq-footer a:hover { text-decoration: underline; }

        @media (max-width: 600px) {
          .faq-hero h1 { font-size: 1.6rem; }
          .tabs { gap: 5px; }
          .tb { font-size: 12px; padding: 5px 12px; }
        }
      `}</style>
    </div>
  );
};

export default FaqClient;