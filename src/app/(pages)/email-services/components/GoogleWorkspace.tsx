'use client'

import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

/* ICON / IMAGE IMPORTS (replace images if needed) */
import gmail from '@/assets/img/gws/gmail.png'
import drive from '@/assets/img/gws/drive.png'
import calendar from '@/assets/img/gws/calendar.png'
import meet from '@/assets/img/gws/meet.png'
import docs from '@/assets/img/gws/docs.png'
import sheets from '@/assets/img/gws/sheets.png'
import slides from '@/assets/img/gws/slides.png'
import chat from '@/assets/img/gws/chat.png'

const GoogleWorkspace = () => {
  return (
    <section className="gw-section">
      <Container>

        {/* HEADER */}
        <div className="gw-header">
          <h2>Google Workspace</h2>
          <p>
            Google Workspace is a suite of cloud-based productivity and collaboration
            tools that help businesses communicate and work together efficiently.
          </p>
        </div>

        <Row>
          <Col lg={12}>
            <div className="gw-grid">

              <div className="gw-item">
                <Image src={gmail} alt="Gmail" />
                <h4>Gmail</h4>
                <p>
                  A Secure, Ad-Free Email Platform to Enhance Your Productivity.
                </p>
              </div>

              <div className="gw-item offset">
                <Image src={drive} alt="Drive" />
                <h4>Drive</h4>
                <p>
                  Secure cloud storage to store, access and share files from anywhere.
                </p>
              </div>

              <div className="gw-item">
                <Image src={calendar} alt="Calendar" />
                <h4>Calendar</h4>
                <p>
                  Smart scheduling and shared calendars to manage meetings efficiently.
                </p>
              </div>

              <div className="gw-item offset">
                <Image src={meet} alt="Meet" />
                <h4>Meet</h4>
                <p>
                  Enterprise-grade video conferencing for secure online meetings.
                </p>
              </div>

              <div className="gw-item">
                <Image src={docs} alt="Docs" />
                <h4>Docs</h4>
                <p>
                  Cloud-based word processing for creating and editing documents.
                </p>
              </div>

              <div className="gw-item offset">
                <Image src={sheets} alt="Sheets" />
                <h4>Sheets</h4>
                <p>
                  Online spreadsheets with real-time collaboration and smart tools.
                </p>
              </div>

              <div className="gw-item">
                <Image src={slides} alt="Slides" />
                <h4>Slides</h4>
                <p>
                  Create, edit and present professional presentations online.
                </p>
              </div>

              <div className="gw-item offset">
                <Image src={chat} alt="Chat" />
                <h4>Chat</h4>
                <p>
                  Simple and secure messaging for team communication and collaboration.
                </p>
              </div>

            </div>
{/* GOOGLE WORKSPACE DETAILS – FULL WIDTH */}
<div className="gw-details-wrap">
  <div className="gw-details-inner">
    <h3>We Provide Best Google Workspace Solutions For Business</h3>

    <p>
      Google Workspace is the ultimate solution for modern businesses, offering a
      suite of powerful tools designed to enhance collaboration, boost productivity,
      and streamline workflows.
    </p>

    <p>
      Google Workspace, previously known as G Suite, offers a range of advantages
      for businesses and organizations. Here are some key benefits:
    </p>

    <ul className="gw-benefits">
      <li>Integrated Collaboration Tools</li>
      <li>Cloud-Based</li>
      <li>Real-Time Collaboration</li>
      <li>Advanced Security Features</li>
      <li>Scalability</li>
      <li>Reliability</li>
      <li>Custom Email Addresses</li>
      <li>Integration with Other Apps</li>
      <li>Storage Options</li>
      <li>Support and Training</li>
    </ul>
  </div>
</div>




          </Col>
        </Row>
      </Container>

      {/* STYLES */}
      <style jsx>{`
        .gw-section {
          background: #ffffff;
          padding: 50px 0;
        }

        .gw-header {
          max-width: 820px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .gw-header h2 {
          font-size: 34px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .gw-header p {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
        }

        /* GRID */
        .gw-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }

        .gw-item {
          background: #f8fafc;
          border-radius: 14px;
          padding: 26px 22px;
           border:1px solid #e6e6e6ff;
          text-align: center;
          transition: all 0.3s ease;
        }

        .gw-item.offset {
          transform: translateY(18px);
        }

        .gw-item:hover {
          background: #f1f5f9;
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.18);
        }

        .gw-item img {
          width: 42px;
          height: auto;
          margin-bottom: 14px;
        }

        .gw-item h4 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
          margin-top: 8px;
        }

        .gw-item p {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
        }

        @media (max-width: 991px) {
          .gw-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gw-item.offset {
            transform: none;
          }
        }

 /* FULL WIDTH LIGHT–DARK SECTION */
.gw-details-wrap {
  width: 100%;
  background: linear-gradient(
    180deg,
    #f8fafc 0%,
    #eef2f7 100%
  );
  padding: 30px 0;
  margin-top: 40px;
}

/* CENTERED CONTENT */
.gw-details-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.gw-details-inner h3 {
  font-size: 26px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 18px;
}

.gw-details-inner p {
  font-size: 16px;
  color: #475569;
  line-height: 1.75;
  margin-bottom: 14px;
}

/* BENEFITS LIST */
.gw-benefits {
  margin-top: 20px;
  padding-left: 20px;
  columns: 2;
}

.gw-benefits li {
  font-size: 16px;
  color: #334155;
  margin-bottom: 10px;
  list-style: disc;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .gw-benefits {
    columns: 1;
  }

  .gw-details-wrap {
    padding: 50px 0;
  }
}




      `}</style>
    </section>
  )
}

export default GoogleWorkspace
