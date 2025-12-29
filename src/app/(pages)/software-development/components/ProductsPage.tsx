'use client'
import Link from 'next/link'
import {
  FaTshirt,
  FaQuestionCircle,
  FaTint,
  FaUniversity,
  FaHeartbeat,
  FaHospital,
  FaClock,
  FaIndustry,
  FaLaptopCode,
  FaWarehouse,
  FaTools,
  FaGem,
  FaCogs,
  FaUserTie,
} from 'react-icons/fa'

const products = [
  { title: 'Garment Management System', icon: <FaTshirt />, desc: 'End-to-end garment production & inventory tracking.' },
  { title: 'Question Paper Generation System', icon: <FaQuestionCircle />, desc: 'Automated exam paper creation for institutions.' },
  { title: 'Water Testing Management Software', icon: <FaTint />, desc: 'Lab testing workflows & reporting.' },
  { title: 'Fees Collection System', icon: <FaUniversity />, desc: 'Smart billing & fee tracking for education.' },
  { title: 'Medical Transcription Software', icon: <FaHeartbeat />, desc: 'Streamlined medical transcription processes.' },
  { title: 'Hospital Management (Tea Estates)', icon: <FaHospital />, desc: 'Custom HMS for estate hospitals.' },
  { title: 'Time Sheet Management', icon: <FaClock />, desc: 'Employee attendance & time tracking.' },
  { title: 'Production Data Monitoring (Casting)', icon: <FaIndustry />, desc: 'Manufacturing shop-floor data insights.' },
  { title: 'E-Learning Software', icon: <FaLaptopCode />, desc: 'Digital learning platforms for institutions.' },
  { title: 'Inventory – Construction Management', icon: <FaWarehouse />, desc: 'Material & stock control for construction.' },
  { title: 'Service Management System', icon: <FaCogs />, desc: 'Track service requests & workflows.' },
  { title: 'Inventory System', icon: <FaWarehouse />, desc: 'General inventory & stock management.' },
  { title: 'Resume Management System', icon: <FaUserTie />, desc: 'HR resume tracking & hiring support.' },
  { title: 'Tool Room Management', icon: <FaTools />, desc: 'Tool lifecycle & allocation tracking.' },
  { title: 'Gold to Jewellery Conversion', icon: <FaGem />, desc: 'Track metal conversion into jewellery.' },
]

export default function ProductsPage() {
  return (
    <>
      <section className="products-section">
        <div className="container">
          <h1 className="products-title">
            Our <span>Products</span>
          </h1>
         
         {/* 🔥 HIGHLIGHTED PRODUCTS */}
<div className="highlighted-products">
  <Link href="/warehouse-management-system" className="highlight-link">
    <div className="highlight-card">
      <div className="highlight-icon">
        <FaWarehouse />
      </div>
      <h2>Bonded Warehouse Management System</h2>
      <p>
        A powerful solution to manage inventory, stock movement, warehouse
        operations, and real-time reporting with complete accuracy.
      </p>
      <span className="highlight-badge">Core Product</span>
      <span className="highlight-cta">View Product →</span>
    </div>
  </Link>

  <Link href="/hall-management-system" className="highlight-link">
    <div className="highlight-card">
      <div className="highlight-icon">
        <FaIndustry />
      </div>
      <h2>Hall Management System</h2>
      <p>
        End-to-end hall operations management covering bookings, scheduling,
        billing, maintenance tracking, and reporting.
      </p>
      <span className="highlight-badge">Core Product</span>
      <span className="highlight-cta">View Product →</span>
    </div>
  </Link>
</div>

          <div className="products-grid">
            {products.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="product-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .products-section {
          background: radial-gradient(circle at top, #111827, #020617);
          padding: 40px 0;
          color: #fff;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
        }

        .products-title {
          text-align: center;
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 60px;
        }

        .products-title span {
          background: linear-gradient(90deg, #22d3ee, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 28px;
        }

        /* 🔹 LIGHTER CARD */
        .product-card {
 background: linear-gradient(180deg, #334155, #1e293b);
  border-radius: 18px;
  padding: 34px 26px;
  border: 1px solid rgba(148, 163, 184, 0.45);
  text-align: center;
  transition: all 0.35s ease;
  position: relative;
}

.product-card:hover {
  transform: translateY(-10px);
  background: linear-gradient(180deg, #243044, #111827);
  box-shadow:
    0 20px 50px rgba(56, 189, 248, 0.35),
    inset 0 0 0 1px rgba(148, 163, 184, 0.35);
}


        /* 🔹 CENTER ICON */
        .product-icon {
          font-size: 40px;
          margin-bottom: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22d3ee, #6366f1);
          color: #020617;
          box-shadow: 0 10px 25px rgba(34, 211, 238, 0.4);
        }
 

        .highlight-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* GRID */
.highlighted-products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 70px;
}

/* CARD */
.highlight-card {
  background: linear-gradient(180deg, #334155, #1e293b); /* 🔥 LIGHTER */
  border-radius: 22px;
  padding: 40px 34px;
  border: 2px solid rgba(148, 163, 184, 0.45);
  position: relative;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

/* HOVER — DIRECT */
.highlight-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(56, 189, 248, 0.45);
}

/* ICON */
.highlight-icon {
  width: 80px;
  height: 80px;
  border-radius: 18px;
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: #020617;
  margin-bottom: 20px;
}

/* TEXT */
.highlight-card h2 {
  font-size: 26px;
  margin-bottom: 12px;
  color: #f8fafc;
}

.highlight-card p {
  font-size: 16px;
  line-height: 1.7;
  color: #e2e8f0;
}

/* BADGE */
.highlight-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  background: linear-gradient(90deg, #22d3ee, #a855f7);
  color: #020617;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 999px;
}

/* CTA */
.highlight-cta {
  display: inline-block;
  margin-top: 22px;
  font-weight: 600;
  font-size: 15px;
  color: #38bdf8;
  transition: transform 0.3s ease, color 0.3s ease;
}

.highlight-card:hover .highlight-cta {
  color: #a855f7;
  transform: translateX(4px);
}

/* MOBILE */
@media (max-width: 768px) {
  .highlighted-products {
    grid-template-columns: 1fr;
  }
}


        .product-card h3 {
          font-size: 19px;
          margin-bottom: 10px;
        }

        .product-card p {
          color: #c7d2fe;
          font-size: 15px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .products-title {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  )
}
