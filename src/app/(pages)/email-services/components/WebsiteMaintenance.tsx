'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaShieldAlt,
  FaTachometerAlt,
  FaSyncAlt,
  FaTools,
  FaArrowRight,
} from 'react-icons/fa'

import sec2 from '@/assets/img/maintain.jpg'

const WebsiteMaintenance = () => {
  return (
    <section className="maintenance-modern sp">
      <Container>
        {/* HERO */}
        <Row className="align-items-center mb-60">
          <Col lg={6}>
            <div className="hero-content">
              <span className="badge">Website Maintenance Services</span>
              <h1 className="title">
                Keep Your Website <span>Secure, Fast & Updated</span>
              </h1>
              <p className="desc">
                At g-net solutions, we ensure your website runs smoothly with
                proactive maintenance, performance optimization, and security
                monitoring — so you can focus on growing your business.
              </p>

              <Link href="/contact" className="cta-btn">
                Get Maintenance Support <FaArrowRight />
              </Link>
            </div>
          </Col>

          <Col lg={6}>
            <div className="hero-image">
              <Image src={sec2} alt="Website Maintenance" priority />
            </div>
          </Col>
        </Row>

        {/* SERVICES */}
        <Row className="g-4">
          {[
            {
              icon: <FaShieldAlt />,
              title: 'Security & Protection',
              text: 'Regular updates, malware scans, and security patches to keep your site safe.',
              color: 'grad-1',
            },
            {
              icon: <FaTachometerAlt />,
              title: 'Performance Optimization',
              text: 'Speed tuning, caching, and optimization for faster load times.',
              color: 'grad-2',
            },
            {
              icon: <FaSyncAlt />,
              title: 'Backup & Recovery',
              text: 'Automated backups and quick restoration to protect your data.',
              color: 'grad-3',
            },
            {
              icon: <FaTools />,
              title: 'Content & Bug Fixes',
              text: 'Timely content updates, error fixes, and technical support.',
              color: 'grad-4',
            },
          ].map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <div className={`service-card ${item.color}`}>
                <div className="icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* STYLES */}
      <style jsx>{`
        .maintenance-modern {
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
          overflow: hidden;
        }

        .hero-content .badge {
          display: inline-block;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: #fff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 14px;
        }

        .hero-content .title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.2;
        }

        .hero-content .title span {
          background: linear-gradient(135deg, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content .desc {
          margin-top: 16px;
          font-size: 16px;
          color: #555;
          max-width: 520px;
        }

        .cta-btn {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 30px;
          background: #000;
          color: #fff;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .hero-image img {
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .service-card {
          height: 100%;
          padding: 28px 22px;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .service-card .icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 22px;
          margin-bottom: 16px;
        }

        .service-card h4 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .service-card p {
          font-size: 14px;
          color: #666;
        }

        /* Gradients */
        .grad-1 .icon {
          background: linear-gradient(135deg, #ef4444, #f97316);
        }

        .grad-2 .icon {
          background: linear-gradient(135deg, #22c55e, #16a34a);
        }

        .grad-3 .icon {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .grad-4 .icon {
          background: linear-gradient(135deg, #a855f7, #9333ea);
        }
      `}</style>
    </section>
  )
}

export default WebsiteMaintenance
