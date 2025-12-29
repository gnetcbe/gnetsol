'use client'

import { Container } from 'react-bootstrap'
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaTools,
} from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

import softwareImg from '@/assets/img/soft.jpg'

const steps = [
  {
    title: 'Understanding Your Idea',
    desc: 'We analyze your business challenges, workflows, and goals to define a clear software roadmap.',
    icon: <FaLightbulb />,
  },
  {
    title: 'Design & Architecture',
    desc: 'System architecture and UI/UX design are planned to ensure scalability, performance, and usability.',
    icon: <FaPencilRuler />,
  },
  {
    title: 'Development & Testing',
    desc: 'Our engineers build secure, high-quality software using modern technologies and best practices.',
    icon: <FaCode />,
  },
  {
    title: 'Deployment & Launch',
    desc: 'We deploy your software with proper testing, security checks, and performance optimization.',
    icon: <FaRocket />,
  },
  {
    title: 'Support & Enhancement',
    desc: 'Ongoing maintenance, upgrades, and support ensure long-term reliability and growth.',
    icon: <FaTools />,
  },
]

export default function SoftwareDevelopmentJourney() {
  const [active, setActive] = useState(0)

  return (
    <section className="software-journey">
      <Container>
        <div className="journey-head">
          <span>Software Development</span>
          <h2>From Concept to Scalable Solution</h2>
          <p>
            We don’t just build software — we craft digital solutions that evolve
            with your business.
          </p>
        </div>

        <div className="journey-body">
          {/* IMAGE */}
          <div className="journey-image">
            <Image src={softwareImg} alt="Software Journey" priority />
          </div>

          {/* STEPS */}
          <div className="journey-steps">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`journey-step ${active === i ? 'active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="icon">{step.icon}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </Container>

      <style jsx>{`
        /* ===========================
           SOFTWARE JOURNEY STRIP
        ============================ */

        .software-journey {
          padding: 30px 0;
          background: radial-gradient(circle at top, #eef2ff, #ffffff 60%);
        }

        .journey-head {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .journey-head span {
          font-size: 14px;
          font-weight: 600;
          color: #6366f1;
          display: block;
          margin-bottom: 10px;
        }

        .journey-head h2 {
          font-size: 42px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .journey-head p {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
        }

        .journey-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .journey-image img {
          max-width: 100%;
          filter: drop-shadow(0 30px 60px rgba(15, 23, 42, 0.25));
        }

        /* STEPS */
        .journey-step {
          display: flex;
          gap: 18px;
          padding: 18px 0;
          cursor: pointer;
          border-left: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .journey-step:hover,
        .journey-step.active {
          border-color: #6366f1;
          padding-left: 18px;
        }

        .journey-step .icon {
          font-size: 22px;
          color: #6366f1;
          margin-top: 2px;
        }

        .journey-step h4 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #0f172a;
        }

        .journey-step p {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          max-width: 420px;
        }

        /* CTA */
        .journey-cta {
          text-align: center;
          margin-top: 70px;
        }

        .journey-cta a {
          padding: 14px 40px;
          border-radius: 999px;
          background: linear-gradient(135deg, #6366f1, #2563eb);
          color: #fff;
          font-weight: 600;
          transition: 0.3s;
        }

        .journey-cta a:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(99, 102, 241, 0.35);
        }

        @media (max-width: 991px) {
          .journey-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  )
}
