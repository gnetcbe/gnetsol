'use client'

import { Container } from 'react-bootstrap'
import {
  FaLayerGroup,
  FaCode,
  FaShieldAlt,
  FaChartLine,
  FaSync,
  FaHeadset,
} from 'react-icons/fa'

const PricingFactors = () => {
  const factors = [
    { icon: <FaLayerGroup />, label: 'Website Size' },
    { icon: <FaCode />, label: 'Technology' },
    { icon: <FaShieldAlt />, label: 'Security Level' },
    { icon: <FaChartLine />, label: 'Traffic Load' },
    { icon: <FaSync />, label: 'Update Frequency' },
    { icon: <FaHeadset />, label: 'Support Level' },
  ]

  return (
    <section className="pricing-logic">
      <Container>
        {/* Heading */}
        <div className="pricing-head">
          <h2>
            How <span>Pricing</span> Is Calculated
          </h2>
          <p>
           Website maintenance charges depending on the type of website and the complexity of required services.
          </p>
        </div>

        {/* Flow */}
        <div className="pricing-flow">
          {factors.map((item, i) => (
            <div key={i} className="flow-item">
              <div className="flow-icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="pricing-note">
         Website complexity and size increase, maintenance charges rise due to greater demands on technical upkeep, security, content management, and hosting resources. Simple, small websites cost less to maintain, while large, feature-rich, and frequently updated websites require substantially higher budgets.
        </div>
      </Container>

      {/* STYLES */}
      <style jsx>{`
        .pricing-logic {
          padding: 50px 0;
          background: radial-gradient(
              circle at top left,
              #4f46e5,
              transparent 40%
            ),
            radial-gradient(circle at bottom right, #9333ea, transparent 40%),
            #0f172a;
          color: #fff;
          overflow: hidden;
        }

        .pricing-head {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .pricing-head h2 {
          font-size: 42px;
          font-weight: 700;
        }

        .pricing-head span {
          color: #a78bfa;
        }

        .pricing-head p {
          margin-top: 14px;
          color: #cbd5f5;
        }

        .pricing-flow {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 24px;
        }

        .flow-item {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 28px 16px;
          text-align: center;
          transition: all 0.35s ease;
          cursor: default;
        }

        .flow-item:hover {
          transform: translateY(-10px) scale(1.05);
          background: rgba(255, 255, 255, 0.18);
        }

        .flow-icon {
          font-size: 28px;
          margin-bottom: 12px;
          color: #e9d5ff;
        }

        .flow-item span {
          font-size: 14px;
          font-weight: 500;
        }

        .pricing-note {
          margin-top: 60px;
          text-align: center;
          font-size: 15px;
          color: #e0e7ff;
        }
      `}</style>
    </section>
  )
}

export default PricingFactors
