'use client'

import {
  FaUsers,
  FaMoneyBillWave,
  FaBullseye,
  FaChartLine,
  FaClock,
  FaSignal,
  FaShieldAlt,
  FaUserSlash,
  FaExclamationTriangle,
} from 'react-icons/fa'

export default function DigitalMarketingBenefits() {
  return (
    <section className="dm-compact-page">
      <div className="dm-compact-container">

        {/* HEADER */}
        <header className="dm-compact-header">
          <h1>Benefits & Limitations of Digital Marketing</h1>
          <p>
            Digital marketing offers powerful opportunities for business growth,
            while also presenting challenges that require strategic planning.
          </p>
        </header>

        {/* PARALLEL SECTIONS */}
        <div className="dm-parallel">

          {/* BENEFITS */}
          <div className="dm-panel benefits">
            <h2>Benefits of Digital Marketing</h2>

            <ul>
              <li>
                <FaUsers />
                <span>
                  <strong>Global Reach</strong>
                  Reach customers worldwide without geographical barriers.
                </span>
              </li>

              <li>
                <FaMoneyBillWave />
                <span>
                  <strong>Cost Effective</strong>
                  More affordable than traditional marketing with higher ROI.
                </span>
              </li>

              <li>
                <FaBullseye />
                <span>
                  <strong>Targeted Marketing</strong>
                  Campaigns can target specific audiences precisely.
                </span>
              </li>

              <li>
                <FaChartLine />
                <span>
                  <strong>Measurable Results</strong>
                  Track performance using analytics and reports.
                </span>
              </li>

              <li>
                <FaClock />
                <span>
                  <strong>Real-Time Engagement</strong>
                  Instant interaction with customers through digital channels.
                </span>
              </li>
            </ul>
          </div>

          {/* LIMITATIONS */}
          <div className="dm-panel limitations">
            <h2>Limitations of Digital Marketing</h2>

            <ul>
              <li>
                <FaSignal />
                <span>
                  <strong>Internet Dependency</strong>
                  Requires stable internet connectivity.
                </span>
              </li>

              <li>
                <FaShieldAlt />
                <span>
                  <strong>Security & Privacy Issues</strong>
                  Risk of data misuse and breaches.
                </span>
              </li>

              <li>
                <FaUserSlash />
                <span>
                  <strong>Lack of Trust</strong>
                  Some users distrust online advertisements.
                </span>
              </li>

              <li>
                <FaExclamationTriangle />
                <span>
                  <strong>High Competition</strong>
                  Difficult to stand out in crowded markets.
                </span>
              </li>

              <li>
                <FaChartLine />
                <span>
                  <strong>Skill Requirement</strong>
                  Requires continuous learning and expertise.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .dm-compact-page {
          background: #ffffff;
         
        }

        .dm-compact-container {
          max-width: 1100px;
          margin: auto;
        }

        /* HEADER */
        .dm-compact-header {
           
          margin-bottom: 20px;
        }

        .dm-compact-header h1 {
          font-size: 36px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .dm-compact-header p {
          font-size: 15.8px;
          color: #475569;
          line-height: 1.6;
        }

        /* PARALLEL */
        .dm-parallel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        /* PANELS */
        .dm-panel {
          padding: 28px 26px;
          border-radius: 14px;
        }

        .dm-panel h2 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 18px;
          color: #0f172a;
        }

        .dm-panel ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .dm-panel li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 14px;
          font-size: 14.8px;
          color: #475569;
          line-height: 1.6;
        }

        .dm-panel li svg {
          font-size: 16px;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .dm-panel strong {
          display: block;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 2px;
        }

        /* BENEFITS – subtle green */
        .benefits {
          background: #f0fdf4;
          border: 1px solid #dcfce7;
        }

        .benefits li svg {
          color: #16a34a;
        }

        /* LIMITATIONS – subtle red/amber */
        .limitations {
          background: #fff7ed;
          border: 1px solid #ffedd5;
        }

        .limitations li svg {
          color: #dc2626;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .dm-parallel {
            grid-template-columns: 1fr;
          }

          .dm-compact-header h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  )
}
