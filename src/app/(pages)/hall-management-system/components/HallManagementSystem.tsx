'use client'

import Image from 'next/image'
import hallImg from '@/assets/img/hall.jpg'

export default function HallManagementSystem() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div>
            <h1>Hall Management System</h1>
            <p className="subtitle">
              A centralized management system designed for large convention and
              exhibition centers to manage hall bookings, events, billing, and
              operational workflows efficiently.
            </p>
          </div>

          <Image
            src={hallImg}
            alt="Hall Management System"
            className="hero-img"
            priority
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="content">
        <div className="content-wrap">

          {/* OVERVIEW */}
          <div className="overview-box">
            <div className="overview-icon">🏢</div>
            <div>
              <h2>Overview</h2>
              <p>
                The Hall Management System is built for large-scale convention
                centers, exhibition halls, and trade fair venues that manage
                multiple events simultaneously. The system enables administrators
                to plan, schedule, and monitor hall usage while maintaining full
                control over bookings, billing, and operational coordination.
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="features-grid">
            <div className="feature-item">
              <span className="icon">📅</span>
              <h3>Hall & Event Scheduling</h3>
              <p>
                Centralized scheduling for multiple halls, exhibitions,
                conferences, and trade events with real-time availability.
              </p>
            </div>

            <div className="feature-item">
              <span className="icon">👥</span>
              <h3>Organizer & Exhibitor Management</h3>
              <p>
                Maintain records of event organizers, exhibitors, vendors,
                and clients along with event-specific requirements.
              </p>
            </div>

            <div className="feature-item">
              <span className="icon">💳</span>
              <h3>Billing & Financial Control</h3>
              <p>
                Flexible billing for hall rentals, utilities, services,
                deposits, and event-related charges with transparent tracking.
              </p>
            </div>

            <div className="feature-item">
              <span className="icon">🛠️</span>
              <h3>Operations & Facility Coordination</h3>
              <p>
                Coordinate maintenance, security, housekeeping, and technical
                teams to ensure smooth execution of large-scale events.
              </p>
            </div>
          </div>

          {/* USE CASES */}
          <div className="ideal-box">
            <h3>Common Use Cases</h3>
            <p>
              Trade exhibitions, industrial expos, conferences, business
              summits, product launches, cultural programs, and large public
              events that require coordinated hall scheduling and operational
              control.
            </p>
          </div>

          {/* IDEAL FOR */}
          <div className="ideal-box">
            <h3>Ideal For</h3>
            <p>
              Convention centers, exhibition complexes, trade fair venues,
              multi-hall facilities, auditoriums, and organizations hosting
              high-volume events throughout the year.
            </p>
          </div>

        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        /* HERO */
        .hero {
          background: #f8fafc;
          padding: 70px 0;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        h1 {
          font-size: 42px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .subtitle {
          font-size: 18px;
          color: #475569;
          line-height: 1.7;
        }

        .hero-img {
          width: 100%;
          height: auto;
          border-radius: 14px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
        }

        /* CONTENT */
        .content {
          background: #ffffff;
          padding: 60px 20px;
        }

        .content-wrap {
          max-width: 1100px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* OVERVIEW */
        .overview-box {
          display: flex;
          gap: 20px;
          padding: 28px 32px;
          border-radius: 16px;
          background: #f1f5f9;
        }

        .overview-icon {
          font-size: 28px;
          color: #2563eb;
          flex-shrink: 0;
        }

        h2 {
          font-size: 26px;
          margin-bottom: 8px;
          color: #0f172a;
        }

        p {
          font-size: 16px;
          line-height: 1.8;
          color: #334155;
        }

        /* FEATURES */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .feature-item {
          background: #ffffff;
          border-radius: 14px;
          padding: 24px 22px;
          border: 1px solid #e5e7eb;
        }

        .feature-item .icon {
          font-size: 22px;
          color: #2563eb;
          margin-bottom: 8px;
          display: inline-block;
        }

        .feature-item h3 {
          font-size: 16px;
          margin-bottom: 6px;
          color: #0f172a;
        }

        .feature-item p {
          font-size: 14.5px;
          color: #475569;
        }

        /* IDEAL / USE CASE BOX */
        .ideal-box {
          padding: 26px 30px;
          border-radius: 16px;
          background: #f8fafc;
          border-left: 4px solid #2563eb;
        }

        .ideal-box h3 {
          font-size: 18px;
          margin-bottom: 6px;
          color: #0f172a;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </>
  )
}
