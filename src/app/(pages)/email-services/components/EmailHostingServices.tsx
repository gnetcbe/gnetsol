'use client'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import zimra from '@/assets/img/gws/zimra.png'
import cpanel from '@/assets/img/gws/cpanel.png'
import { FaCpanel } from 'react-icons/fa'


const EmailHostingServices = () => {
  return (
    <section className="mail-hosting-page">
      <div className="mail-container">

        {/* PAGE HEADER */}
        <header className="mail-header">
          <h1>Email Hosting Services</h1>
          <p>
            Reliable email hosting solutions designed for security, scalability,
            and business productivity.
          </p>
        </header>

        {/* CLOUD ZIMBRA */}
        <section className="mail-block reveal">
          <h2>Cloud Zimbra</h2>
        

<div className="mail-split">
  <div className="mail-text">
    <p>
      Cloud Zimbra is a full-featured business productivity platform for
      small, medium, and enterprise businesses with lowest total cost of
      ownership.
    </p>
  </div>

  <div className="mail-media">  
     <Image src={zimra} alt="Cloud Zimbra Email Hosting" />
  </div>
</div>


          <ul className="mail-list icon-list two-col">
            <li><span className="icon">🔒</span> Secure and private communication.</li>
            <li><span className="icon">☁️</span> Cloud deployments allow for higher flexibility and scalability.</li>
            <li><span className="icon">⚡</span> Deployment is easier, faster, and more secure.</li>
          </ul>
        </section>

        {/* CPANEL HOSTING MAIL */}
        <section className="mail-block reveal delay">
          <h2>cPanel Hosting Mail</h2>
           

          <div className="mail-split">
  <div className="mail-text">
    <p>
      Web-hosting email included in cPanel is a common email hosting service,
            which allows you to send emails, manage email accounts through webmail
            and email clients (Outlook, Thunderbird, Mail.app etc) via SMTP/POP/IMAP
            protocols using email accounts associated with your domain name.
    </p>
  </div>

  <div className="mail-media">  
     <Image src={cpanel} alt="Cpanel Email Hosting" />
  </div>
</div>


          <ul className="mail-list icon-list three-col">
            <li><span className="icon">📧</span> Email Account Creation</li>
            <li><span className="icon">🌐</span> Webmail Access</li>
            <li><span className="icon">📦</span> Email Quotas</li>
            <li><span className="icon">➡️</span> Email Forwarding</li>
            <li><span className="icon">🛡️</span> Spam and Security</li>
            <li><span className="icon">💻</span> Email Clients</li>
            <li><span className="icon">⚙️</span> Email Management</li>
          </ul>
        </section>

        {/* THINGS TO CONSIDER */}
        <section className="mail-block reveal delay2">
          <h2>Things to Consider When Choosing an Email Hosting Solution</h2>

          <ul className="mail-list icon-list three-col">
            <li><span className="icon">🧩</span> Administration</li>
            <li><span className="icon">🔐</span> Security features</li>
            <li><span className="icon">💰</span> Price</li>
            <li><span className="icon">🎧</span> Support</li>
            <li><span className="icon">💾</span> Mailbox storage</li>
            <li><span className="icon">📎</span> Attachment limits</li>
            <li><span className="icon">⏱️</span> Service Availability</li>
            <li><span className="icon">🗄️</span> Data Backup and Disaster Recovery.</li>
          </ul>
        </section>

        {/* FETCHMAIL */}
        <section className="mail-block reveal delay3">
          <h2>Fetchmail - Installation</h2>
          <p>
            The Fetchmail package contains a mail retrieval program. It retrieves
            mail from remote mail servers and forwards it to the local (client)
            machine's delivery system, so it can then be read by normal mail user
            agents.
          </p>
          <p>
            Fetchmail is a versatile utility designed to retrieve email from remote
            mail servers and deliver it to local mail servers or mail clients.
          </p>
        </section>

      </div>

      {/* STYLES */}
      <style jsx>{`
        html, body {
          font-size: 16px;
        }

        .mail-hosting-page {
          padding: 40px 0 20px;
          background: #ffffff !important; /* clean page bg */
        }

        .mail-container {
          max-width: 1100px;
          margin: auto;
          padding: 0 20px;
        }

        /* HEADER */
        .mail-header {
          margin-bottom: 70px;
        }

        .mail-header h1 {
          font-size: 42px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .mail-header p {
          font-size: 16px;
          color: #475569;
          max-width: 720px;
          line-height: 1.7;
        }

        /* BLOCK */
        .mail-block {
          margin-bottom: 70px;
          opacity: 0;
          transform: translateY(14px);
          animation: fadeUp 0.6s ease forwards;
        }

        .mail-block.delay { animation-delay: 0.15s; }
        .mail-block.delay2 { animation-delay: 0.3s; }
        .mail-block.delay3 { animation-delay: 0.45s; }

        .mail-block h2 {
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 18px;
        }

        .mail-block p {
          font-size: 16px;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 14px;
        }

        /* LIST BASE */
        .mail-list {
          list-style: none;
          padding: 0;
          margin: 22px 0 0;
          background: none; /* important */
        }

        /* LIST ITEM ONLY */
        .icon-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 12px; /* reduced */
          background: #f9fafb; /* ONLY item bg */
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
        }

        .icon-list .icon {
          font-size: 18px;
          line-height: 1;
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* GRID VARIANTS */
        .two-col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 20px;
        }

        .three-col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px 20px;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .three-col {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .mail-header h1 {
            font-size: 32px;
          }

          .mail-block h2 {
            font-size: 24px;
          }

          .two-col,
          .three-col {
            grid-template-columns: 1fr;
          }
        }
      
        /* CLOUD ZIMBRA SPLIT */
.mail-split {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 30px;
  align-items: center;
  margin-bottom: 10px;
}

.mail-media img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto; /* keeps logo right aligned */
}

@media (max-width: 768px) {
  .mail-split {
    grid-template-columns: 1fr;
  }

  .mail-media img {
    margin: 0 auto;
  }
}




      `}</style>
    </section>
  )
}

export default EmailHostingServices
