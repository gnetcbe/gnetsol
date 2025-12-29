'use client'

import { Container } from 'react-bootstrap'
import {
  FaBriefcase,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaLightbulb,
  FaHeadset,
} from 'react-icons/fa'

const gradient = 'linear-gradient(135deg,#43cea2,#185a9d)'

const qualities = [
  {
    title: 'Experience',
    desc: 'Years of industry experience enable us to understand real business challenges and deliver reliable IT solutions across multiple domains.',
    icon: <FaBriefcase />,
  },
  {
    title: 'Customer Focus',
    desc: 'We believe in understanding client requirements deeply and delivering solutions that align with long-term business goals.',
    icon: <FaUsers />,
  },
  {
    title: 'Technical Expertise',
    desc: 'Our skilled team stays updated with modern technologies to build scalable, secure, and future-ready digital solutions.',
    icon: <FaCogs />,
  },
  {
    title: 'Quality & Reliability',
    desc: 'We follow proven development practices and quality standards to ensure consistent performance and dependable outcomes.',
    icon: <FaCheckCircle />,
  },
  {
    title: 'Innovation',
    desc: 'We embrace innovation to deliver smarter solutions that help businesses adapt, grow, and stay competitive.',
    icon: <FaLightbulb />,
  },
  {
    title: 'Long-Term Support',
    desc: 'Our relationship with clients goes beyond delivery, offering continuous support and maintenance for lasting success.',
    icon: <FaHeadset />,
  },
]

export default function WhyGnet() {
  return (
    <section className="why-gnet-compact">
      <Container>
        {/* Section Header */}
        <div className="section-head text-center">
          <h2>What Makes G-NET an Excellent Organization?</h2>
          <p>
            Our strength lies in experience, expertise, innovation, and a
            customer-first approach that drives sustainable success.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="compact-grid">
          {qualities.map((item, idx) => (
            <div
              key={idx}
              className="compact-item"
              style={{ background: gradient }}
            >
              <div className="icon-col">{item.icon}</div>

              <div className="content-col">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ===== COMPACT STYLES ===== */}
      <style jsx>{`
        .why-gnet-compact {
          padding: 70px 0; /* reduced top & bottom */
          background: #0f172a;
        }

        .section-head h2 {
          font-size: 34px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .section-head p {
          max-width: 720px;
          margin: 0 auto 48px; /* reduced gap */
          font-size: 16.5px;
          color: #d1fae5;
        }

        .compact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .compact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 26px 28px; /* compact height */
          border-radius: 18px;
          color: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .compact-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 48px rgba(0, 0, 0, 0.3);
        }

        .icon-col {
          font-size: 40px;
          line-height: 1;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .content-col h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .content-col p {
          font-size: 15.5px;
          line-height: 1.7;
          opacity: 0.95;
          margin: 0;
        }

        @media (max-width: 992px) {
          .compact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .why-gnet-compact {
            padding: 55px 0;
          }

          .icon-col {
            font-size: 34px;
          }

          .content-col h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  )
}
