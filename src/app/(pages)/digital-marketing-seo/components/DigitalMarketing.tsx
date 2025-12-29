'use client'

import Image from 'next/image'
import {
  FaSearch,
  FaPenNib,
  FaUsers,
  FaEnvelope,
  FaBullhorn,
  FaHandshake,
  FaBroadcastTower,
  FaChartLine,
  FaMobileAlt,
  FaNetworkWired,
} from 'react-icons/fa'

import heroImg from '@/assets/img/digital-marketing-hero.jpg'

const services = [
  {
    icon: <FaSearch />,
    title: 'Search Engine Optimization (SEO)',
    desc: 'Optimizing websites to rank higher on search engines and attract organic traffic.',
  },
  
  {
    icon: <FaUsers />,
    title: 'Social Media Marketing',
    desc: 'Promoting brands and engaging users through platforms like Facebook, Instagram, and LinkedIn.',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Marketing',
    desc: 'Sending targeted and personalized emails to nurture leads and maintain customer relationships.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Pay-Per-Click (PPC) Advertising',
    desc: 'Running paid advertising campaigns to drive instant traffic and conversions.',
  },
  {
    icon: <FaHandshake />,
    title: 'Affiliate Marketing',
    desc: 'Partnering with affiliates who promote your products or services for commission-based results.',
  },
  {
    icon: <FaBroadcastTower />,
    title: 'Influencer Marketing',
    desc: 'Collaborating with influencers to expand reach and build brand trust.',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Online PR',
    desc: 'Managing online reputation and gaining exposure through digital media and backlinks.',
  },
  {
    icon: <FaChartLine />,
    title: 'Analytics & Reporting',
    desc: 'Tracking and analyzing campaign performance to improve strategies and ROI.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Marketing',
    desc: 'Reaching customers through mobile devices using SMS, apps, and mobile-optimized campaigns.',
  },
]

const DigitalMarketing = () => {
  return (
    <section className="dm-page">

      {/* HERO */}
      <div className="dm-hero">
        <div className="dm-hero-inner">
          <div className="dm-hero-text">
            <h1>Digital Marketing Services</h1>
            <p>
              Digital marketing encompasses a wide range of online strategies
              including SEO, content marketing, social media, email marketing,
              PPC, and analytics to help businesses grow online.
            </p>
          </div>

          <div className="dm-hero-image digi">
            <Image
              src={heroImg}
              alt="Digital Marketing"
              priority
            />
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="dm-intro">
        <h2>What is Digital Marketing?</h2>
        <p>
          Digital marketing refers to the promotion of products or services using
          digital channels such as search engines, websites, social media, email,
          and mobile applications. It enables businesses to reach their target
          audience effectively and measure results in real time.
        </p>
      </div>

      {/* SERVICES */}
      <div className="dm-services">
        {services.map((service, i) => (
          <div className="dm-service" key={i}>
            <span className="icon">{service.icon}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* STYLES */}
      <style jsx>{`
        .dm-page {
          background: #ffffff;
        }
          
img {
    max-width: 100%;
    max-height: auto !important;
}
        /* HERO */
        .dm-hero {
          background: linear-gradient(135deg, #eef2ff, #ffffff);
          padding: 30px 20px;
        }

        .dm-hero-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .dm-hero-text h1 {
          font-size: 46px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .dm-hero-text p {
          font-size: 17px;
          color: #475569;
          line-height: 1.8;
          max-width: 560px;
        }

        .dm-hero-image img {
          width: 100%;
          border-radius: 18px;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
        }

        /* INTRO */
        .dm-intro {
          max-width: 900px;
          margin: 30px auto 30px;
          padding: 0 20px;
          text-align: center;
        }

        .dm-intro h2 {
          font-size: 34px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .dm-intro p {
          font-size: 16.5px;
          color: #475569;
          line-height: 1.75;
        }

        /* SERVICES */
        .dm-services {
          max-width: 1100px;
          margin: auto;
          padding: 0 20px 30px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 26px;
        }

        .dm-service {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
          transition: all 0.3s ease;
        }

        .dm-service:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(15, 23, 42, 0.14);
        }

        .dm-service .icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          background: #eff6ff;
          color: #2563eb;
          flex-shrink: 0;
        }

        .dm-service h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .dm-service p {
          font-size: 15.5px;
          color: #475569;
          line-height: 1.6;
        }

        @media (max-width: 991px) {
          .dm-hero-inner {
            grid-template-columns: 1fr;
          }

          .dm-hero-text h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  )
}

export default DigitalMarketing
