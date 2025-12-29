'use client'

import Image from 'next/image'
import warehouseImg from '@/assets/img/warehouse.jpg'

export default function WarehouseManagementSystem() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div>
            <h1>Bonded Warehouse Management System</h1>
            <p className="subtitle">
              A compliant and secure solution designed to manage bonded
              warehouses, duty-deferred inventory, and customs-controlled stock
              with complete traceability.
            </p>
          </div>

          <Image
            src={warehouseImg}
            alt="Bonded Warehouse Management System"
            className="hero-img"
            priority
          />
        </div>
      </section>

      {/* COMPACT COLORFUL CONTENT */}
      <section className="content compact-style">
        <div className="content-wrap">

          {/* OVERVIEW */}
          <div className="overview-strip">
            <div className="icon-circle blue">🏛️</div>
            <div>
              <h2>Overview</h2>
              <p>
                Our Bonded Warehouse Management System is built specifically for
                customs-bonded environments, enabling businesses to store goods
                under bond, defer duty payments, and manage imports, exports,
                and clearances with strict regulatory compliance.
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="features-grid">
            <div className="feature-card blue">
              <span className="icon">📦</span>
              <h3>Bonded Inventory Control</h3>
              <p>
                Real-time tracking of bonded stock with duty status, batch,
                lot, and warehouse-level segregation.
              </p>
            </div>

            <div className="feature-card green">
              <span className="icon">🛃</span>
              <h3>Customs Compliance</h3>
              <p>
                Maintain records aligned with customs regulations, audits, and
                statutory reporting requirements.
              </p>
            </div>

            <div className="feature-card purple">
              <span className="icon">🔄</span>
              <h3>In-Bond & Ex-Bond Operations</h3>
              <p>
                Seamlessly manage in-bond receipts, ex-bond clearances, and
                partial duty payments.
              </p>
            </div>

            <div className="feature-card orange">
              <span className="icon">📄</span>
              <h3>BOE & Document Management</h3>
              <p>
                Track Bill of Entry, bond numbers, validity, and supporting
                customs documentation.
              </p>
            </div>

            <div className="feature-card pink">
              <span className="icon">📊</span>
              <h3>Regulatory Reports</h3>
              <p>
                Generate stock statements, bond utilization, duty liability,
                and compliance-ready reports.
              </p>
            </div>

            <div className="feature-card teal">
              <span className="icon">🔐</span>
              <h3>Security & Access Control</h3>
              <p>
                Role-based access, audit trails, and controlled user actions
                for sensitive bonded operations.
              </p>
            </div>
          </div>

          {/* IDEAL FOR */}
          <div className="ideal-bar">
            <span className="icon">🏭</span>
            <p>
              Ideal for <strong>bonded warehouses, importers, exporters,
              SEZ units, logistics providers, customs brokers</strong> and
              enterprises handling duty-deferred goods.
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

        /* COMPACT CONTENT */
        .compact-style {
          background: linear-gradient(180deg, #f8fafc, #ffffff);
          padding: 60px 20px;
        }

        .content-wrap {
          max-width: 1100px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* OVERVIEW STRIP */
        .overview-strip {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background: linear-gradient(90deg, #e0f2fe, #ffffff);
          padding: 26px 30px;
          border-radius: 18px;
        }

        .icon-circle {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          color: #fff;
          flex-shrink: 0;
        }

        .icon-circle.blue {
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
        }

        h2 {
          font-size: 26px;
          color: #0f172a;
          margin-bottom: 8px;
        }

        /* FEATURES GRID */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .feature-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 24px 22px;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-6px);
        }

        .feature-card .icon {
          font-size: 26px;
          margin-bottom: 10px;
          display: inline-block;
        }

        .feature-card h3 {
          font-size: 17px;
          margin-bottom: 6px;
          color: #0f172a;
        }

        .feature-card p {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.6;
        }

        .feature-card.blue { border-top: 4px solid #38bdf8; }
        .feature-card.green { border-top: 4px solid #22c55e; }
        .feature-card.purple { border-top: 4px solid #a855f7; }
        .feature-card.orange { border-top: 4px solid #fb923c; }
        .feature-card.pink { border-top: 4px solid #ec4899; }
        .feature-card.teal { border-top: 4px solid #14b8a6; }

        /* IDEAL BAR */
        .ideal-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(90deg, #ede9fe, #ffffff);
          padding: 20px 26px;
          border-radius: 16px;
          font-size: 16px;
          color: #334155;
        }

        .ideal-bar .icon {
          font-size: 24px;
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
