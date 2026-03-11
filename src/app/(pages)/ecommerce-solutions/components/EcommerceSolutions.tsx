'use client'

import { Container } from 'react-bootstrap'
import {
  FaStore,
  FaCreditCard,
  FaBoxes,
  FaChartLine,
  FaPlug,
} from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'

import ecommerceImg from '@/assets/img/ecommerce-hero.jpg'

const steps = [
  {
    title: 'Business Understanding',
    desc: 'We analyze your products, target audience, and business goals to plan the right eCommerce strategy.',
    icon: <FaStore />,
  },
  {
    title: 'Store Design & UX',
    desc: 'User-focused store design with smooth navigation to improve engagement and conversions.',
    icon: <FaChartLine />,
  },
  {
    title: 'Store Development',
    desc: 'Secure and scalable eCommerce development using Shopify, WooCommerce, Magento, or custom platforms.',
    icon: <FaBoxes />,
  },
  {
    title: 'Payments & Integrations',
    desc: 'Payment gateways, shipping providers, and third-party tools are seamlessly integrated.',
    icon: <FaCreditCard />,
  },
  {
    title: 'Launch & Optimization',
    desc: 'We launch your store and continuously optimize performance, security, and conversions.',
    icon: <FaPlug />,
  },
]

export default function EcommerceJourney() {
  const [active, setActive] = useState(0)

  return (
    <section className="software-journey ecommerce-theme">
      <Container>
        <div className="journey-head">
          <span>eCommerce Solutions</span>
          <h2>From Store Setup to Scalable Online Growth</h2>
          <p>
          At g-net solutions, Coimbatore, we design and deliver powerful eCommerce platforms that empower businesses to sell smarter, scale faster, and streamline operations.
          </p>
        </div>

        <div className="journey-body">
          {/* IMAGE */}
          <div className="journey-image">
            <Image src={ecommerceImg} alt="eCommerce Journey" priority />
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
           ECOMMERCE JOURNEY THEME
        ============================ */

        .software-journey.ecommerce-theme {
          padding: 30px 0;
          background: radial-gradient(
            circle at top,
            #fff7ed,
            #ffffff 65%
          );
        }

        .journey-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 60px;
        }

        .journey-head span {
          font-size: 14px;
          font-weight: 600;
          color: #ea580c; /* orange */
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
          filter: drop-shadow(
            0 28px 55px rgba(15, 23, 42, 0.22)
          );
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
          border-color: #ea580c;
          padding-left: 18px;
        }

        .journey-step .icon {
          font-size: 22px;
          color: #ea580c;
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
