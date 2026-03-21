'use client';

import React from 'react';
import Image from 'next/image'

import chatbot1 from '@/assets/img/chat/chatbot1.svg'
import chatbot2 from '@/assets/img/chat/chatbot2.svg'
import chatbot3 from '@/assets/img/chat/chatbot3.svg'
import chatbot4 from '@/assets/img/chat/chatbot4.svg'

import {
  FaRobot,
  FaClock,
  FaBolt,
  FaMoneyBillWave,
  FaUserCheck,
  FaLayerGroup,
  FaSearch,
  FaComments,
  FaCloud,
  FaDatabase,
  FaVial,
  FaChartBar,
  FaHeadset,
  FaShoppingCart,
  FaUserPlus,
  FaCogs,
  FaRocket
} from 'react-icons/fa';

const Chatbot = () => {
  return (
    <div className="chatbot-page">

      {/* HERO */}
      <section className="hero">
        <h1><FaRobot className="icon"/> Transform Your Business with Smart Chatbots</h1>
        <p>Welcome to the Future of Customer Engagement</p>
      </section>

      {/* INTRO */}
      <section className="intro">
        <p>
          Chatbots are intelligent virtual assistants that help businesses connect with customers instantly.
          Whether it’s answering questions, guiding purchases, or automating support, chatbots deliver fast,
          personalized experiences that keep customers satisfied.
        </p>
      </section>

      {/* GRID */}
      <section className="grid">

        {/* WHY */}
        <div className="card card1">
          <div className="content">
            <h2>Why Your Business Needs a Chatbot</h2>
            <ul className="icon-list">
              <li><FaClock/> 24/7 availability without extra staffing</li>
              <li><FaBolt/> Instant responses improve satisfaction</li>
              <li><FaMoneyBillWave/> Reduce operational costs</li>
              <li><FaUserCheck/> Generate & qualify leads automatically</li>
              <li><FaLayerGroup/> Handle unlimited conversations</li>
            </ul>
          </div>
         <div className="imgBox">
  <Image
    src={chatbot1}
    alt="Chatbot"
    width={150}
    height={150}
    style={{ objectFit: 'contain' }}
  />
</div>
        </div>

        {/* IMPLEMENT */}
        <div className="card card2">
          <div className="content">
            <h2>How We Implement Chatbots</h2>
            <ul className="icon-list">
              <li><FaSearch/> Analyze business goals & journeys</li>
              <li><FaComments/> Design natural conversations</li>
              <li><FaCloud/> Deploy across platforms</li>
              <li><FaDatabase/> Integrate CRM / ERP systems</li>
              <li><FaVial/> Test, optimize & monitor</li>
            </ul>
          </div>
         <div className="imgBox">
  <Image
    src={chatbot2}
    alt="Chatbot"
    width={150}
    height={150}
    style={{ objectFit: 'contain' }}
  />
</div>
        </div>

        {/* USE CASE */}
        <div className="card card3">
          <div className="content">
            <h2>Real-World Use Cases</h2>
            <ul className="icon-list">
              <li><FaHeadset/> Customer support automation</li>
              <li><FaShoppingCart/> Sales & recommendations</li>
              <li><FaUserPlus/> Lead capture & qualification</li>
              <li><FaCogs/> Internal automation systems</li>
            </ul>
          </div>
         <div className="imgBox">
  <Image
    src={chatbot3}
    alt="Chatbot"
    width={150}
    height={150}
    style={{ objectFit: 'contain' }}
  />
</div>
        </div>

        {/* CTA */}
        <div className="card card4 cta">
          <div className="content">
            <h2> Ready to Get Started?</h2>
            <p className="contentpara">
              We build chatbots tailored to your business with measurable results.
              From idea to deployment, we turn your chatbot into a growth engine.
            </p>
            <a href="/contact">Contact us today</a>
          </div>
          <div className="imgBox">
  <Image
    src={chatbot4}
    alt="Chatbot"
    width={150}
    height={150}
    style={{ objectFit: 'contain' }}
  />
</div>
        </div>

      </section>

      {/* STYLES */}
      <style jsx>{`
        .chatbot-page {
          background: #f8fafc;
          color: #0f172a;
          padding: 60px 20px;
        }

        .hero {
          text-align: center;
          padding: 90px 20px;
          background: linear-gradient(135deg, #2563eb, #9333ea);
          border-radius: 22px;
          color: white;
          margin-bottom: 50px;
        }

        .hero h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 2.3rem;
        }

        .intro {
          max-width: 750px;
          margin: 0 auto 50px;
          text-align: center;
          color: #475569;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
             .card h2 {
        font-size: 26px;
        margin-bottom:10px;
    }

        .card {
          display: grid;
          grid-template-columns: 1fr 120px;
          align-items: center;
          gap: 20px;
          padding: 26px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          transition: 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

       /* 🌤️ ULTRA LIGHT PREMIUM GRADIENTS */

.card1 {
  background: linear-gradient(135deg, #f8fbff, #f3f6ff);
}

.card2 {
  background: linear-gradient(135deg, #f7fdf9, #f2fbff);
}

.card3 {
  background: linear-gradient(135deg, #fffaf5, #fff7ed);
}

.card4 {
  background: linear-gradient(135deg, #faf8ff, #fdf4ff);
}

        .icon-list {
          list-style: none;
          padding: 0;
        }

        .icon-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .icon-list svg {
          color: #0587FF;
          min-width: 18px;
        }

        .title-icon {
          margin-right: 8px;
          color: #0587FF;
        }

        .imgBox {
          display: flex;
          justify-content: center;
        }

        .imgBox img {
          max-height: 100px;
        }
 .contentpara {
  margin-bottom: 20px;
      }
        .cta a {
          margin-top: 20px;
          background: #0587FF;
          color: white;
          padding: 10px 20px;
           
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
          @keyframes floatSmooth {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.imgBox :global(img) {
  max-width: 100px;
  height: auto;
  animation: floatSmooth 4s ease-in-out infinite;
}

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .card {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .icon-list li {
            justify-content: center;
          }
        }

      `}</style>
    </div>
  );
};

export default Chatbot;