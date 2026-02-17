import Link from 'next/link'
import Footer from '@/components/layouts/Footer/Footer'
import CTA from '@/components/layouts/Footer/CTA'
import TopBar from '@/components/layouts/TopBar/page'

export default function NotFound() {
  return (
    <>
      <TopBar />

      <div className="nf-wrapper">

        {/* Floating SVG Icons */}
        <div className="icon icon1">
          <svg viewBox="0 0 24 24"><path d="M8 4L3 12L8 20" /></svg>
        </div>

        <div className="icon icon2">
          <svg viewBox="0 0 24 24"><path d="M16 4L21 12L16 20" /></svg>
        </div>

        <div className="icon icon3">
          <svg viewBox="0 0 24 24"><path d="M9 4L4 12L9 20M15 4L20 12L15 20" /></svg>
        </div>

        <div className="icon icon4">
          <svg viewBox="0 0 24 24"><path d="M4 7H20M4 12H20M4 17H20" /></svg>
        </div>

        <div className="icon icon5">
          <svg viewBox="0 0 24 24"><path d="M12 2L12 22M2 12L22 12" /></svg>
        </div>

        <div className="nf-content">
          <h1 className="nf-code">404</h1>
          <h2 className="nf-title">Page Not Found</h2>
          <p className="nf-text">
            The page you’re looking for might have been removed or temporarily unavailable.
          </p>

          <Link href="/" className="nf-btn">
            Back to Home
          </Link>
        </div>
      </div>

      <CTA />
      <Footer />

      <style>{`
        .nf-wrapper {
          position: relative;
          padding: 120px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #dbeafe, #c7d2fe, #ddd6fe);
          overflow: hidden;
        }

        .nf-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 600px;
          width: 100%;
          background: #ffffff;
          padding: 60px 40px;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .nf-code {
          font-size: 100px;
          font-weight: 800;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .nf-title {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #1e293b;
        }

        .nf-text {
          font-size: 16px;
          color: #475569;
          margin-bottom: 35px;
        }

        .nf-btn {
          display: inline-block;
          padding: 12px 30px;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          color: #ffffff;
          border-radius: 30px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nf-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(79, 70, 229, 0.4);
        }

        /* SVG Icons Styling */
        .icon {
          position: absolute;
          width: 40px;
          height: 40px;
          opacity: 0.2;
          animation: float 6s ease-in-out infinite;
        }

        .icon svg {
          width: 100%;
          height: 100%;
          stroke: #4f46e5;
          stroke-width: 1.5;
          fill: none;
        }

        .icon1 { top: 10%; left: 8%; }
        .icon2 { top: 20%; right: 12%; }
        .icon3 { bottom: 20%; left: 15%; }
        .icon4 { top: 65%; right: 20%; }
        .icon5 { bottom: 15%; right: 8%; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 768px) {
          .nf-content {
            padding: 40px 20px;
          }

          .nf-code {
            font-size: 70px;
          }

          .nf-title {
            font-size: 22px;
          }

          .icon {
            width: 25px;
            height: 25px;
          }
        }
      `}</style>
    </>
  )
}
