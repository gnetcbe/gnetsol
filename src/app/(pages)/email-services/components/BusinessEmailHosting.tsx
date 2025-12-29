'use client'

import { Container, Row, Col } from 'react-bootstrap'
import {
  FaEnvelope,
  FaShieldAlt,
  FaUsers,
  FaCloud,
  FaHeadset,
} from 'react-icons/fa'
import Link from 'next/link'

const BusinessEmailHosting = () => {
  return (
    <section className="email-editorial refined">
      <Container>
        <Row>
          {/* LEFT */}
          <Col lg={4}>
            <div className="email-intro">
              <span className="section-tag">Email Services</span>
              <h1>Business Email Hosting</h1>
              <p>
                Professional business email solutions that enhance communication,
                improve productivity, and strengthen your brand identity.
              </p>

              <Link href="/contact" className="btn btn-sm btn-primary">
                Enquire Now
              </Link>
            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={8}>
            <div className="email-list">
              <div className="email-item">
                <span className="icon blue"><FaEnvelope /></span>
                <div>
                  <h4>Professional Business Email</h4>
                  <p>
                    Create branded email addresses using your domain name to build
                    trust and credibility with customers.
                  </p>
                </div>
              </div>

              <div className="email-item">
                <span className="icon green"><FaShieldAlt /></span>
                <div>
                  <h4>Advanced Security</h4>
                  <p>
                    Protect your emails with spam filtering, malware protection,
                    encryption, and secure authentication.
                  </p>
                </div>
              </div>

              <div className="email-item">
                <span className="icon purple"><FaUsers /></span>
                <div>
                  <h4>Collaboration Tools</h4>
                  <p>
                    Work smarter with shared calendars, contacts, file storage,
                    and team collaboration features.
                  </p>
                </div>
              </div>

              <div className="email-item">
                <span className="icon orange"><FaCloud /></span>
                <div>
                  <h4>Cloud Based Access</h4>
                  <p>
                    Access your email anytime, anywhere from desktop, mobile,
                    or webmail without limitations.
                  </p>
                </div>
              </div>

              <div className="email-item">
                <span className="icon teal"><FaHeadset /></span>
                <div>
                  <h4>24×7 Expert Support</h4>
                  <p>
                    Get continuous technical support for setup, migration,
                    configuration, and troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
         /* =========================
   BUSINESS EMAIL HOSTING
   ========================= */

.email-editorial {
  background: #ffffff;
  padding: 40px 0;
}

/* LEFT INTRO */
.email-intro {
  position: sticky;
  top: 120px;
}

.section-tag {
  font-size: 13px;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 12px;
  display: inline-block;
}

.email-intro h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #0f172a;
}

.email-intro p {
  font-size: 16px;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 30px;
}

.email-btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 6px;
  background: #2563eb;
  color: #ffffff;
  font-weight: 600;
  transition: all 0.25s ease;
}

.email-btn:hover {
  background: #1d4ed8;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
  transform: translateY(-2px);
}

/* RIGHT LIST */
.email-list {
  border-left: 2px solid #e5e7eb;
  padding-left: 40px;
}

/* EMAIL ITEM */
.email-item {
  display: flex;
  gap: 22px;
  padding: 14px 12px;
  margin-bottom: 16px;
  border-radius: 12px;

  /* LIGHT BACKGROUND */
  background: #f8fafc;
 box-shadow: 0 4px 12px rgba(15, 23, 42, 0.16);
  transition: all 0.25s ease;
}

.email-item:hover {
  background: #f1f5f9;
  padding-left: 30px;
}

/* ICON BOX */
.icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

/* ICON COLORS */
.icon.blue {
  background: #eff6ff;
  color: #2563eb;
}

.icon.green {
  background: #ecfdf5;
  color: #16a34a;
}

.icon.purple {
  background: #f5f3ff;
  color: #7c3aed;
}

.icon.orange {
  background: #fff7ed;
  color: #ea580c;
}

.icon.teal {
  background: #ecfeff;
  color: #0d9488;
}

/* TEXT */
.email-item h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #0f172a;
}

.email-item p {
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
}

/* RESPONSIVE */
@media (max-width: 991px) {
  .email-intro {
    position: static;
    margin-bottom: 50px;
  }

  .email-list {
    padding-left: 20px;
    border-left: none;
  }

  .email-item:hover {
    padding-left: 22px;
  }
}

      `}</style>
    </section>
  )
}

export default BusinessEmailHosting
