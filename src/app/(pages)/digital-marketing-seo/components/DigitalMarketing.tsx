'use client'

import Image from 'next/image'
import {
  FaSearch,
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
import seoAeoGeoImg from '@/assets/img/seo-aeo-geo.jpg'

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
              At g-net solutions, Coimbatore, digital marketing covers a wide
              range of online strategies — including SEO, content marketing,
              social media, email marketing, PPC, and analytics — all designed
              to help businesses grow online.
            </p>
          </div>

          <div className="dm-hero-image">
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
          Digital marketing refers to the promotion of products or services
          using digital channels such as search engines, websites, social
          media, email, and mobile applications.
        </p>
      </div>

      {/* SERVICES */}
      <div className="dm-services">
        {services.map((service, i) => (
          <div className="dm-service" key={i}>
            <span className="icon">
              {service.icon}
            </span>

            <div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* NEW IMAGE ADDED AT BOTTOM */}
      <div className="seo-aeo-geo-wrap">
        <Image
          src={seoAeoGeoImg}
          alt="SEO vs AEO vs GEO"
        />
      </div>

      <style jsx>{`

        .dm-page{
          background:#fff;
        }

        .dm-hero{
          background:linear-gradient(135deg,#eef2ff,#fff);
          padding:30px 20px;
        }

        .dm-hero-inner{
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:50px;
          align-items:center;
        }

        .dm-hero-text h1{
          font-size:46px;
          font-weight:900;
          color:#0f172a;
          margin-bottom:16px;
        }

        .dm-hero-text p{
          font-size:17px;
          line-height:1.8;
          color:#475569;
        }

        .dm-hero-image img{
          width:100%;
          border-radius:18px;
        }

        .dm-intro{
          max-width:900px;
          margin:30px auto;
          padding:0 20px;
          text-align:center;
        }

        .dm-services{
          max-width:1100px;
          margin:auto;
          padding:0 20px 40px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:26px;
        }

        .dm-service{
          background:#fff;
          border-radius:16px;
          padding:24px;
          display:flex;
          gap:16px;
          box-shadow:0 10px 28px rgba(15,23,42,.08);
        }

        .icon{
          width:48px;
          height:48px;
          border-radius:12px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#eff6ff;
          color:#2563eb;
          flex-shrink:0;
        }

        /* NEW IMAGE SECTION */

        .seo-aeo-geo-wrap{
          max-width:80%;
          margin:60px auto;
          padding:0 20px 60px;
        }

        .seo-aeo-geo-wrap :global(img){
          width:100%;
          height:auto;
          display:block;
          border-radius:20px;
          box-shadow:0 20px 50px rgba(0,0,0,.12);
        }

        @media(max-width:991px){

          .dm-hero-inner{
            grid-template-columns:1fr;
          }
           .seo-aeo-geo-wrap{
          max-width:100%;
          margin:60px auto;
          padding:0 20px 60px;
        }

          .dm-hero-text h1{
            font-size:36px;
          }

        }

      `}</style>

    </section>
  )
}

export default DigitalMarketing