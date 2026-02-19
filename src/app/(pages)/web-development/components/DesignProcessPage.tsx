'use client'
import { useEffect, useRef } from "react";

export default function DesignProcessPage() {

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return;

      const section = progressRef.current.parentElement;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(
          1,
          (windowHeight - rect.top) / (windowHeight + rect.height)
        );
        progressRef.current.style.width = `${progress * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      icon: "🔍",
      title: "Discovery & Strategy",
      desc: "We understand your business, audience, and goals before starting any design work."
    },
    {
      icon: "🗺️",
      title: "Wireframing & Planning",
      desc: "We create a structured blueprint of your website layout."
    },
    {
      icon: "💻",
      title: "Design & Development",
      desc: "Our team brings the design to life with clean code and interactive features."
    },
    {
      icon: "🚀",
      title: "Testing & Launch",
      desc: "We test performance, responsiveness, and functionality before going live."
    },
    {
      icon: "🛠️",
      title: "Ongoing Support",
      desc: "We provide maintenance and support to ensure your website runs smoothly."
    }
  ];

  return (
    <>
      <section className="process-section">
        <div className="container">
          <div className="header">
            <h2>Our Design Process</h2>
            <p>A structured journey from concept to completion.</p>
          </div>

          <div className="timeline">

            {/* Base Line */}
            <div className="line"></div>

            {/* Animated Progress Line */}
            <div ref={progressRef} className="progress-line"></div>

            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="circle">
                  <span className="number">{index + 1}</span>
                  <span className="icon">{step.icon}</span>
                </div>
                <div className="connector"></div>
                <div className="content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <style jsx>{`
        .process-section {
          padding: 50px 20px;
        background: radial-gradient(circle at top left, rgba(37,99,235,0.08), transparent 40%),
              radial-gradient(circle at bottom right, rgba(14,165,233,0.08), transparent 40%),
              linear-gradient(135deg, #eef5ff 0%, #f8fbff 50%, #e6f0ff 100%);
        }

       

        .header {
          text-align: center;
          margin-bottom: 20px;
        }

        .header h2 {
          font-size: 38px;
          font-weight: 700;
          color: #1e293b;
        }

        .header p {
          color: #64748b;
          margin-top: 10px;
        }

        /* TIMELINE */

        .timeline {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .line {
          position: absolute;
          top: 40px;
          left: 5%;
          width: 90%;
          height: 3px;
          background: #dbeafe;
          z-index: 0;
        }

        .progress-line {
          position: absolute;
          top: 40px;
          left: 5%;
          height: 3px;
          width: 0%;
          background: linear-gradient(to right, #2563eb, #0ea5e9);
          z-index: 1;
          transition: width 0.2s ease;
        }

        .step {
          width: 18%;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #2563eb;
          margin: 0 auto;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.15);
          transition: 0.3s ease;
        }

        .circle:hover {
          transform: scale(1.08);
        }

        .number {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #2563eb;
          color: #fff;
          font-size: 12px;
          padding: 5px 8px;
          border-radius: 20px;
          font-weight: 600;
        }

        .icon {
          font-size: 24px;
        }

        /* Vertical Mini Connector */
        .connector {
          width: 2px;
          height: 40px;
          background: #cbd5e1;
          margin: 10px auto 20px;
        }

        .content h3 {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .content p {
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
        }

        /* MOBILE */

        @media (max-width: 992px) {
          .timeline {
            flex-direction: column;
            gap: 60px;
          }

          .line,
          .progress-line {
            display: none;
          }

          .step {
            width: 100%;
          }
        }

      `}</style>
    </>
  );
}
