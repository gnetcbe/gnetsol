'use client'

import { Container } from 'react-bootstrap'
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaCogs,
  FaGlobe,
} from 'react-icons/fa'

export default function ApplicationSoftware() {
  return (
    <section className="band-page">
      <Container>

        {/* HEADER */}
        <header className="band-header">
          <span>Software Development</span>
          <h1>Application & Web Software Development</h1>
          <p>
            We design, build, and enhance software applications that are tailored
            to specific business needs and scalable for long-term growth.
          </p>
        </header>

        {/* APPLICATION SOFTWARE DEVELOPMENT */}
        <div className="band band-blue">
          <div className="band-icon">
            <FaLaptopCode />
          </div>

          <div className="band-content">
            <h2>Application Software Development</h2>
            <p>
              Application software development services involve the creation,
              maintenance, and enhancement of software applications tailored
              to meet specific business or user needs.
            </p>

            <ul className="icon-points">
              <li>
                <FaLaptopCode />
                <span>
                  <strong>Front-End Development:</strong> Coding visual and
                  interactive interfaces using HTML, CSS, JavaScript, and
                  modern frameworks.
                </span>
              </li>

              <li>
                <FaServer />
                <span>
                  <strong>Back-End Development:</strong> Building server-side
                  logic, databases, APIs, and application architecture.
                </span>
              </li>

              <li>
                <FaLayerGroup />
                <span>
                  <strong>Full-Stack Development:</strong> Complete development
                  covering both front-end and back-end layers.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CUSTOM SOFTWARE DEVELOPMENT */}
        <div className="band band-purple">
          <div className="band-icon">
            <FaCogs />
          </div>

          <div className="band-content">
            <h2>Custom Software Development</h2>
            <p>
              Designing and building software applications from scratch to
              address unique business requirements.
            </p>

            <ul className="icon-points">
              <li>
                <FaLayerGroup />
                <span>
                  Tailored software solutions for industries like healthcare,
                  finance, retail, and education.
                </span>
              </li>

              <li>
                <FaCogs />
                <span>
                  Custom-built CRM systems, ERP solutions, and inventory
                  management tools.
                </span>
              </li>

              <li>
                <FaServer />
                <span>
                  Scalable architecture designed for performance and security.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* WEB APPLICATION DEVELOPMENT */}
        <div className="band band-green">
          <div className="band-icon">
            <FaGlobe />
          </div>

          <div className="band-content">
            <h2>Web Application Development</h2>
            <p>
              Building secure and scalable web-based applications that run
              seamlessly on modern browsers.
            </p>

            <ul className="icon-points">
              <li>
                <FaGlobe />
                <span>
                  Browser-based applications with responsive and user-friendly UI.
                </span>
              </li>

              <li>
                <FaLaptopCode />
                <span>
                  <strong>Technologies:</strong> HTML, CSS, JavaScript, React,
                  Angular, Node.js.
                </span>
              </li>

              <li>
                <FaLayerGroup />
                <span>
                  <strong>Examples:</strong> E-commerce platforms, SaaS
                  applications, and online portals.
                </span>
              </li>
            </ul>
          </div>
        </div>

      </Container>

      {/* STYLES */}
      <style jsx>{`
        /* PAGE */
        .band-page {
          padding: 40px 0 30px;
          background: #ffffff;
        }

        /* HEADER */
        .band-header {
          text-align: center;
           
          margin: 0 auto 40px;
        }

        .band-header span {
          font-size: 14px;
          font-weight: 600;
          color: #6366f1;
          display: block;
          margin-bottom: 12px;
        }

        .band-header h1 {
          font-size: 48px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 18px;
        }

        .band-header p {
          font-size: 17px;
          color: #475569;
          line-height: 1.8;
        }

        /* BAND */
        .band {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 40px;
          padding: 30px 20px;
          margin-bottom: 40px;
          border-radius: 20px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .band:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
        }

        /* ICON */
        .band-icon {
          font-size: 36px;
          display: flex;
          align-items: flex-start;
        }

        /* CONTENT */
        .band-content h2 {
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .band-content p {
          font-size: 16.5px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 22px;
          max-width: 900px;
        }

        /* ICON LIST */
        .icon-points {
          list-style: none;
          padding: 0;
        }

        .icon-points li {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 14px;
          font-size: 15.5px;
          color: #475569;
          line-height: 1.7;
        }

        .icon-points li svg {
          font-size: 18px;
          color: #6366f1;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .icon-points strong {
          color: #1e293b;
        }

        /* COLOR VARIANTS */
        .band-blue {
          background: linear-gradient(135deg, #eff6ff, #ffffff);
        }

        .band-blue .band-icon {
          color: #2563eb;
        }

        .band-purple {
          background: linear-gradient(135deg, #f5f3ff, #ffffff);
        }

        .band-purple .band-icon {
          color: #7c3aed;
        }

        .band-green {
          background: linear-gradient(135deg, #ecfdf5, #ffffff);
        }

        .band-green .band-icon {
          color: #16a34a;
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          .band {
            grid-template-columns: 1fr;
            padding: 40px 30px;
          }

          .band-icon {
            font-size: 30px;
          }

          .band-header h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  )
}
