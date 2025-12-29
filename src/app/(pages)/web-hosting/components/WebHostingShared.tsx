'use client'

import { Container } from 'react-bootstrap'
import { IconType } from 'react-icons'

import {
  FaUsers,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaCogs,
  FaExpandArrowsAlt,
  FaMoneyBillWave,
  FaSync,
  FaLock,
} from 'react-icons/fa'

type FeatureItem = [IconType, string]

type HostingRow = {
  title: string
  desc: string
  items: FeatureItem[]
}

const hostingData: HostingRow[] = [
  {
    title: 'Shared Hosting',
    desc:
      'Shared hosting is the most affordable web hosting option, allowing multiple websites to be hosted on the same server. Resources are shared efficiently, making it ideal for startups and small businesses.',
    items: [
      [FaUsers, 'Multiple Websites'],
      [FaBolt, 'Optimized Performance'],
      [FaShieldAlt, 'Basic Security'],
      [FaCogs, 'Easy Management'],
      [FaHeadset, '24×7 Support'],
    ],
  },
  {
    title: 'VPS Hosting',
    desc:
      'VPS hosting divides a physical server into multiple virtual servers, each acting independently. It offers greater control, flexibility, and dedicated resources compared to shared hosting.',
    items: [
      [FaServer, 'Virtualization'],
      [FaCogs, 'Dedicated Resources'],
      [FaLock, 'Full Root Access'],
      [FaShieldAlt, 'Isolation'],
      [FaExpandArrowsAlt, 'Scalability'],
    ],
  },
  {
    title: 'Dedicated Hosting',
    desc:
      'Dedicated hosting provides an entire physical server exclusively for one client. It ensures maximum performance, customization, and enhanced security for high-traffic websites.',
    items: [
      [FaServer, 'Full Control'],
      [FaCogs, 'Customization'],
      [FaBolt, 'High Performance'],
      [FaServer, 'Dedicated Resources'],
      [FaShieldAlt, 'Advanced Security'],
    ],
  },
  {
    title: 'Cloud Hosting',
    desc:
      'Cloud hosting uses a network of virtual servers to deliver scalable, reliable, and cost-effective hosting solutions with high availability.',
    items: [
      [FaExpandArrowsAlt, 'Scalability'],
      [FaMoneyBillWave, 'Cost-Effective'],
      [FaSync, 'High Reliability'],
      [FaCogs, 'Easy Management'],
      [FaBolt, 'Fast Performance'],
    ],
  },
]

const WebHostingShared = () => {
  return (
    <section className="hosting-motion">
      <Container>

        {/* HEADER */}
        <div className="hosting-motion-head">
          <h2>
            Web <span>Hosting</span> Services
          </h2>
          <p>
            High-performance hosting solutions designed for modern digital
            infrastructure.
          </p>
        </div>

        {/* LIST */}
        <div className="hosting-motion-list">
          {hostingData.map((row, i) => (
            <div className="motion-row" key={i}>
              <div className="motion-title">{row.title}</div>

              <div className="motion-content">
                <p>{row.desc}</p>

                <ul className="feature-highlight">
                  {row.items.map(([Icon, label], j) => (
                    <li key={j}>
                      <Icon />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </Container>

      {/* STYLES */}
      <style jsx>{`
        .hosting-motion {
          padding: 70px 0;
          background: linear-gradient(180deg, #0f172a, #020617);
          color: #ffffff;
        }

        .hosting-motion-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 50px;
        }

        .hosting-motion-head h2 {
          font-size: 40px;
          font-weight: 700;
        }

        .hosting-motion-head span {
          background: linear-gradient(90deg, #818cf8, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hosting-motion-head p {
          margin-top: 10px;
          font-size: 15px;
          color: #c7d2fe;
        }

        .motion-row {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 30px;
          padding: 30px 0;
          border-top: 1px solid rgba(255,255,255,0.12);
          animation: rowReveal 0.6s ease forwards;
        }

        .motion-row:hover {
          background: rgba(129, 140, 248, 0.05);
        }

        .motion-title {
          font-size: 20px;
          font-weight: 600;
          color: #e0e7ff;
        }

        .motion-content p {
          font-size: 15px;
          color: #dbeafe;
          margin-bottom: 18px;
          max-width: 95%;
        }

        .feature-highlight {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .feature-highlight li {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(129, 140, 248, 0.35);
          font-size: 14px;
          color: #e0e7ff;
          white-space: nowrap;
          width: fit-content;
          transition: all 0.3s ease;
        }

        .feature-highlight li:hover {
          background: rgba(129, 140, 248, 0.18);
          transform: translateY(-3px);
          border-color: #a78bfa;
        }

        .feature-highlight svg {
          font-size: 16px;
          color: #a5b4fc;
          transition: transform 0.3s ease;
        }

        .feature-highlight li:hover svg {
          transform: scale(1.15);
        }

        @keyframes rowReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .motion-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  )
}

export default WebHostingShared
