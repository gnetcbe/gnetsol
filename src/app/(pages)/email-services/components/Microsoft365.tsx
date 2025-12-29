'use client'

import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

/* MAIN IMAGE */
import mo from '@/assets/img/micro/mo.png'

/* PLAN IMAGES */
import msbusstd from '@/assets/img/micro/msbusstd.png'
import msaps from '@/assets/img/micro/msaps.png'
import msbuspre from '@/assets/img/micro/msbuspre.png'
import msbusbas from '@/assets/img/micro/msbusbas.png'
import msfam from '@/assets/img/micro/msfam.png'
import mspers from '@/assets/img/micro/mspers.png'

const Microsoft365 = () => {
  return (
    <section className="ms365-section">
      <Container>

        {/* INTRO */}
        <Row className="ms365-intro align-items-center">
          <Col lg={7}>
            <h2 className="fade-up">Microsoft 365</h2>
            <p className="fade-up delay1">
              Microsoft 365 is a suite of productivity tools and services offered by
              Microsoft, including popular applications like Word, Excel, PowerPoint,
              Outlook, and more. It's designed to help individuals and businesses
              streamline their work processes, collaborate more effectively, and
              boost productivity.
            </p>

            <p className="fade-up delay2">
              Microsoft 365 offers a variety of plans tailored to different needs,
              whether for individuals, families, or businesses.
            </p>
          </Col>

          <Col lg={5} className="text-center">
            <Image src={mo} alt="Microsoft 365" className="ms365-main-img float" />
          </Col>
        </Row>

        {/* INDIVIDUALS */}
        <h3 className="ms365-heading fade-up">For Individuals and Families</h3>

        <div className="ms365-plan-row">
          <div className="ms365-plan color-blue">
            <div className="ms365-plan-text">
              <h4>Microsoft 365 Personal</h4>
              <ul className="ms365-icons">
                <li><span>☁️</span> 1 TB of cloud storage</li>
                <li><span>📄</span> Access to Word, Excel, PowerPoint, Outlook and more</li>
                <li><span>🔐</span> Secure email and device protection</li>
              </ul>
            </div>
            <div className="ms365-plan-img">
              <Image src={mspers} alt="Microsoft 365 Personal" />
            </div>
          </div>

          <div className="ms365-plan color-purple">
            <div className="ms365-plan-text">
              <h4>Microsoft 365 Family</h4>
              <ul className="ms365-icons">
                <li><span>☁️</span> 1 TB of cloud storage</li>
                <li><span>📄</span> Access to Word, Excel, PowerPoint, Outlook and more</li>
                <li><span>🔐</span> Secure email and device protection</li>
              </ul>
            </div>
            <div className="ms365-plan-img">
              <Image src={msfam} alt="Microsoft 365 Family" />
            </div>
          </div>
        </div>

        {/* BUSINESS */}
        <h3 className="ms365-heading mt fade-up">For Businesses</h3>

        <div className="ms365-plan-row">
          <div className="ms365-plan color-blue">
            <div className="ms365-plan-text">
              <h4>Microsoft 365 Business Basic</h4>
              <ul className="ms365-icons">
                <li><span>📧</span> Custom business email (you@yourbusiness.com)</li>
                <li><span>🌐</span> Web and mobile Office apps</li>
                <li><span>☁️</span> 1 TB of cloud storage per employee</li>
              </ul>
            </div>
            <div className="ms365-plan-img">
              <Image src={msbusbas} alt="Business Basic" />
            </div>
          </div>

          <div className="ms365-plan color-purple">
            <div className="ms365-plan-text">
              <h4>Microsoft 365 Business Standard</h4>
              <ul className="ms365-icons">
                <li><span>💻</span> Desktop & web Office apps</li>
                <li><span>🎥</span> Webinars with registration & reports</li>
                <li><span>🤝</span> Collaborative workspaces with Loop</li>
              </ul>
            </div>
            <div className="ms365-plan-img">
              <Image src={msbusstd} alt="Business Standard" />
            </div>
          </div>
        </div>

        <div className="ms365-plan-row">
          <div className="ms365-plan color-blue">
            <div className="ms365-plan-text">
              <h4>Microsoft 365 Business Premium</h4>
              <ul className="ms365-icons">
                <li><span>🛡️</span> Advanced security & threat protection</li>
                <li><span>📱</span> Enterprise-grade device protection</li>
                <li><span>⭐</span> Includes all Business Standard features</li>
              </ul>
            </div>
            <div className="ms365-plan-img">
              <Image src={msbuspre} alt="Business Premium" />
            </div>
          </div>

          <div className="ms365-plan color-purple">
            <div className="ms365-plan-text">
              <h4>Microsoft 365 Apps for Business</h4>
              <ul className="ms365-icons">
                <li><span>☁️</span> 1 TB cloud storage per user</li>
                <li><span>📊</span> Desktop versions of Office apps</li>
              </ul>
            </div>
            <div className="ms365-plan-img">
              <Image src={msaps} alt="Apps for Business" />
            </div>
          </div>
        </div>

      </Container>

      {/* STYLES */}
      <style jsx>{`
        .ms365-section {
  padding: 10px 0;
}

/* INTRO */
.ms365-intro h2 {
  font-size: 36px;
  font-weight: 700;
  color: #0f172a;
}

.ms365-intro p {
  font-size: 16px;
  color: #475569;
  line-height: 1.7;
}

.ms365-main-img {
  width: 300px;
}

/* FLOAT */
.float {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
}

/* HEADINGS */
.ms365-heading {
  font-size: 26px;
  font-weight: 700;
  margin: 50px 0 26px;
}

/* GRID */
.ms365-plan-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
  margin-bottom: 30px;
}

/* PLAN CARD */
.ms365-plan {
  position: relative;
  display: flex;
  align-items: center;
  padding: 26px 28px;
  border-radius: 18px;
  background: #ffffff;
  overflow: hidden;
  transition: all 0.35s ease;
  border: 1px solid #e6e6e6;
}

/* BACKGROUND COLOR LAYER */
.ms365-plan::before {
  content: '';
  position: absolute;
  inset: 0;
  background: currentColor;
  opacity: 0.08;
  z-index: 0;
}

/* KEEP CONTENT ABOVE BG */
.ms365-plan > * {
  position: relative;
  z-index: 1;
}

.ms365-plan:hover {
  transform: translateY(-10px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

/* COLOR THEMES (NOW WORKING AS BG) */
.color-blue {
  color: #2563eb !important;
}

.color-purple {
  color: #7c3aed !important;
}

.color-green {
  color: #16a34a;
}

.color-orange {
  color: #ea580c;
}

/* TEXT */
.ms365-plan-text {
  width: 75%;
}

.ms365-plan-text h4 {
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 12px;
}

/* ICON LIST */
.ms365-icons {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ms365-icons li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #475569;
  margin-bottom: 10px;
}

.ms365-icons span {
  font-size: 18px;
}

/* IMAGE */
.ms365-plan-img {
  width: 25%;
  text-align: center;
}

.ms365-plan-img img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

/* FADE UP */
.fade-up {
  animation: fadeUp 0.9s ease forwards;
}

.delay1 {
  animation-delay: 0.2s;
}

.delay2 {
  animation-delay: 0.4s;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (max-width: 991px) {
  .ms365-plan-row {
    grid-template-columns: 1fr;
  }

  .ms365-plan {
    flex-direction: column;
    text-align: center;
  }

  .ms365-plan-text,
  .ms365-plan-img {
    width: 100%;
  }

  .ms365-icons li {
    justify-content: center;
  }
}

      `}</style>
    </section>
  )
}

export default Microsoft365
