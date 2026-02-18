'use client'

import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaGlobe,
  FaLock,
  FaSyncAlt,
  FaHeadset,
} from 'react-icons/fa'

const DomainRegistration = () => {
  return (
    <section className="domain-corporate sp">
      <Container>

        {/* INTRO */}
        <div className="intro-strip">
          <span className="eyebrow">Domain Services</span>
          <h1>
            Domain Name <span>Registration</span>
          </h1>
          <p>
          Build your online presence with g-net solutions — offering trusted domain registration and powerful hosting servers.
Comprehensive Hosting Solutions Tailored for You
          </p>
        </div>

        {/* MAIN CONTENT */}
        <Row className="content-block">
          {/* LEFT */}
          <Col lg={5}>
            <div className="content-left">
              <h3>Make Your Brand Instantly Recognizable</h3>
              <p>
                A professionally registered domain builds trust, improves
                discoverability, and strengthens your online presence from day one.
              </p>

              {/* STATS */}
              <div className="stats">
                <div className="stat blue">
                  <strong>100+</strong>
                  <span>Extensions</span>
                </div>
                <div className="stat purple">
                  <strong>24×7</strong>
                  <span>Support</span>
                </div>
              </div>

              {/* POPULAR EXTENSIONS BOX */}
              <div className="extensions-box">
                <span>Popular Extensions</span>
                <ul>
                  <li>.com</li>
                  <li>.in</li>
                  <li>.net</li>
                  <li>.org</li>
                  <li>.co</li>
                  <li>.info</li>
                </ul>
              </div>

              {/* ENQUIRE BUTTON BELOW */}
              <Link href="/contact" className="btn mt20 btn-primary">
                Enquire Now
              </Link>
            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={7}>
            <div className="content-right">
              <div className="point accent-blue">
                <FaGlobe />
                <div>
                  <h4>Wide Range of Extensions</h4>
                  <p>
                    Choose from global and regional domain extensions including
                    .com, .in, .net, .org and many more.
                  </p>
                </div>
              </div>

              <div className="point accent-green">
                <FaLock />
                <div>
                  <h4>Privacy & Security Protection</h4>
                  <p>
                    Safeguard your identity with WHOIS privacy and advanced
                    domain locking features.
                  </p>
                </div>
              </div>

              <div className="point accent-orange">
                <FaSyncAlt />
                <div>
                  <h4>Auto Renewal & Easy Management</h4>
                  <p>
                    Never miss renewals with automated reminders and a
                    user-friendly management dashboard.
                  </p>
                </div>
              </div>

              <div className="point accent-purple">
                <FaHeadset />
                <div>
                  <h4>Dedicated Expert Support</h4>
                  <p>
                    Get professional assistance for DNS updates, transfers,
                    renewals, and domain configuration.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* STYLES */}
      <style jsx>{`
        .domain-corporate {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .intro-strip {
          max-width: 820px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .eyebrow {
          font-size: 13px;
          color: #2563eb;
          font-weight: 600;
          margin-bottom: 10px;
          display: inline-block;
        }

        .intro-strip h1 {
          font-size: 44px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .intro-strip h1 span {
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .intro-strip p {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
        }

        .content-left h3 {
          font-size: 26px;
          margin-bottom: 14px;
        }

        .content-left p {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 26px;
        }

        .stats {
          display: flex;
          gap: 24px;
          margin-bottom: 26px;
        }

        .stat {
          padding: 14px 18px;
          border-radius: 14px;
          min-width: 110px;
          text-align: center;
        }

        .stat.blue {
          background: linear-gradient(135deg, #dbeafe, #eff6ff);
        }

        .stat.purple {
          background: linear-gradient(135deg, #ede9fe, #f5f3ff);
        }

        .stat strong {
          font-size: 22px;
          color: #1e40af;
          display: block;
        }

        .stat span {
          font-size: 13px;
          color: #475569;
        }

        /* COLORFUL EXTENSION BOX */
        .extensions-box {
          margin-top: 6px;
          padding: 16px;
          border-radius: 18px;
          background: linear-gradient(135deg, #eef2ff, #ecfeff);
          border: 1px solid #e0e7ff;
        }

        .extensions-box span {
          display: block;
          font-size: 16px;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 12px;
        }

        .extensions-box ul {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .extensions-box li {
          padding: 6px 14px;
          border-radius: 18px;
          background: linear-gradient(135deg, #c7d2fe, #bae6fd);
          font-size: 13px;
          color: #1e3a8a;
          font-weight: 500;
        }

        /* ENQUIRE BUTTON */
        .btn-enquire {
          margin-top: 16px;
          display: inline-block;
          padding: 10px 22px;
          border-radius: 24px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          transition: transform 0.2s ease;
        }

        .btn-enquire:hover {
          transform: translateY(-2px);
        }

        /* RIGHT */
        .content-right {
          display: grid;
          gap: 26px;
        }

        .point {
          display: flex;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .point svg {
          font-size: 35px;
          margin-top: 4px;
        }

        .accent-blue svg { color: #2563eb; }
        .accent-green svg { color: #16a34a; }
        .accent-orange svg { color: #ea580c; }
        .accent-purple svg { color: #7c3aed; }

        .point h4 {
          font-size: 17px;
          margin-bottom: 4px;
        }

        .point p {
          font-size: 16px;
          color: #475569;
        }



        
      `}</style>
    </section>
  )
}

export default DomainRegistration
