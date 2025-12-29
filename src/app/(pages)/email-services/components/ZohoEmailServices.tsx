'use client'

import Image from 'next/image'
import cpanel from '@/assets/img/zoho/zoho.png'
import zohoMail from '@/assets/img/zoho/zoho-mail.png'
import zohoDrive from '@/assets/img/zoho/zoho-workdrive.png'
import zohoConnect from '@/assets/img/zoho/zoho-connect.png'
import zohoCliq from '@/assets/img/zoho/zoho-cliq.png'
import zohoMeeting from '@/assets/img/zoho/zoho-meeting.png'
import zohoOffice from '@/assets/img/zoho/zoho-office.png'

const ZohoEmailServices = () => {
  return (
    <section className="zoho-alt">
      <div className="zoho-container">

        {/* HEADER */}
        <header className="zoho-alt-header">
          <h2>Zoho Workplace & Zoho Mail</h2> 
        </header>
 <div className="mail-split">
  <div className="mail-text">
   <p>
            A unified cloud productivity suite that brings secure email,
            collaboration, storage, meetings, and online office tools together
            for modern businesses.
          </p>

  </div>

  <div className="mail-media">  
     <Image src={cpanel} alt="Zoho Email Hosting" />
  </div>
</div>
        {/* GRID */}
        <div className="zoho-alt-grid">

          <div className="zoho-alt-card">
            <div className="zoho-alt-icon">
              <Image src={zohoMail} alt="Zoho Mail" />
            </div>
            <h4>Zoho Mail</h4>
            <p>
              A professional email solution with advanced security features.
            </p>
          </div>

          <div className="zoho-alt-card">
            <div className="zoho-alt-icon">
              <Image src={zohoCliq} alt="Zoho Cliq" />
            </div>
            <h4>Zoho Cliq</h4>
            <p>
              A collaboration tool for instant messaging and task management.
            </p>
          </div>

          <div className="zoho-alt-card">
            <div className="zoho-alt-icon">
              <Image src={zohoDrive} alt="Zoho WorkDrive" />
            </div>
            <h4>Zoho WorkDrive</h4>
            <p>
              A cloud storage solution for file sharing and collaboration.
            </p>
          </div>

          <div className="zoho-alt-card">
            <div className="zoho-alt-icon">
              <Image src={zohoConnect} alt="Zoho Connect" />
            </div>
            <h4>Zoho Connect</h4>
            <p>
              A team messaging platform for real-time communication.
            </p>
          </div>

          <div className="zoho-alt-card">
            <div className="zoho-alt-icon">
              <Image src={zohoMeeting} alt="Zoho Meeting" />
            </div>
            <h4>Zoho Meeting</h4>
            <p>
              A video conferencing tool for virtual meetings.
            </p>
          </div>

          <div className="zoho-alt-card highlight">
            <div className="zoho-alt-icon">
              <Image src={zohoOffice} alt="Zoho Office Suite" />
            </div>
            <h4>Zoho Writer, Zoho Sheet & Zoho Show</h4>
            <p>
              Online office editors for documents, spreadsheets,
              and presentations.
            </p>
          </div>

        </div>
      {/* INFO SECTIONS */}
<div className="zoho-info">

  {/* ZOHO WORKPLACE */}
  <section className="zoho-info-block reveal-section">
    <h3>Zoho Workplace</h3>
    <p>
      Zoho Workplace is designed to bring all communication mediums into one
      platform, making it easier for teams to collaborate and stay connected,
      whether they are working from the office or remotely.
    </p>
    <p>
      It includes enterprise-ready features such as single sign-on (SSO),
      multi-factor authentication (MFA), and compliance with data protection
      regulations like GDPR.
    </p>
  </section>

  {/* ZOHO MAIL FEATURES */}
  <section className="zoho-info-block reveal-section delay">
    <h3>Zoho Mail – Key Features</h3>

    <div className="zoho-feature-grid">

      <div className="zoho-feature-item">
        <span className="icon">🔐</span>
        <div>
          <h5>Advanced Security</h5>
          <p>
            S/MIME, encryption at rest, and data loss prevention to safeguard
            sensitive business data.
          </p>
        </div>
      </div>

      <div className="zoho-feature-item">
        <span className="icon">🤝</span>
        <div>
          <h5>Collaborative Tools</h5>
          <p>
            Streams enables social-style communication within emails for
            smoother collaboration.
          </p>
        </div>
      </div>

      <div className="zoho-feature-item">
        <span className="icon">📅</span>
        <div>
          <h5>Integrated Apps</h5>
          <p>
            Calendar, Tasks, Notes, and Contacts are built in for better
            productivity.
          </p>
        </div>
      </div>

      <div className="zoho-feature-item">
        <span className="icon">🤖</span>
        <div>
          <h5>AI Assistant (Zia)</h5>
          <p>
            Smart email categorization, scheduling assistance, and reminders.
          </p>
        </div>
      </div>

      <div className="zoho-feature-item">
        <span className="icon">🔁</span>
        <div>
          <h5>Migration Assistance</h5>
          <p>
            Easy migration from other email platforms using IMAP or POP.
          </p>
        </div>
      </div>

      <div className="zoho-feature-item">
        <span className="icon">🖥️</span>
        <div>
          <h5>Unified Desktop App</h5>
          <p>
            Zoho Trident provides email, calendar, chat, calls, and more
            in one desktop app.
          </p>
        </div>
      </div>

    </div>
  </section>

</div>




      </div>

      {/* STYLES */}
      <style jsx>{`
        .zoho-alt {
          padding: 40px 0;
          background: #f9fafb;
        }

        .zoho-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
        }

        /* HEADER */
        .zoho-alt-header {
          max-width: 800px;
          margin-bottom: 10px;
        }

        .zoho-alt-header h2 {
          font-size: 40px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .zoho-alt-header p {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
        }

        /* GRID */
        .zoho-alt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        /* CARD */
        .zoho-alt-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 30px 28px 34px;
          transition: all 0.35s ease;
          border-left: 5px solid #2563eb;
        }

        .zoho-alt-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.12);
        }

        .zoho-alt-card.highlight {
          border-left-color: #16a34a;
        }

        /* ICON */
        .zoho-alt-icon {
          width: 100px;
          height: 100px;
          background: #f1f5f9;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .zoho-alt-icon img {
          width: 150px;
          height: 150px;
          object-fit: contain;
        }

        /* TEXT */
        .zoho-alt-card h4 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .zoho-alt-card p {
          font-size: 16px;
          color: #475569;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .zoho-alt-header h2 {
            font-size: 30px;
          }
        }

/* INFO WRAPPER */
.zoho-info {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 70px;
}

/* BLOCK */
.zoho-info-block h3 {
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 18px;
}

.zoho-info-block p {
  font-size: 16px;
  color: #475569;
  line-height: 1.75;
   
}

/* FEATURE GRID */
.zoho-feature-grid {
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px 40px;
}

/* FEATURE ITEM */
.zoho-feature-item {
  display: flex;
  gap: 16px;
  padding: 22px 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  align-items: flex-start;
}

.zoho-feature-item .icon {
  font-size: 26px;
  line-height: 1;
}

.zoho-feature-item h5 {
  font-size: 17px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
}

.zoho-feature-item p {
  font-size: 15px;
  color: #475569;
  line-height: 1.65;
}

/* SECTION REVEAL (SUBTLE) */
.reveal-section {
  opacity: 0;
  transform: translateY(14px);
  animation: sectionReveal 0.6s ease forwards;
}

.reveal-section.delay {
  animation-delay: 0.2s;
}

@keyframes sectionReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .zoho-feature-grid {
    grid-template-columns: 1fr;
  }
}
  /* CLOUD ZIMBRA SPLIT */
.mail-split {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 30px;
  align-items: center;
  margin-bottom: 30px;
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

export default ZohoEmailServices
