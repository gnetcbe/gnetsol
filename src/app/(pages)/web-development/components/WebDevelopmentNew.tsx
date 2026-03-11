'use client'

import Image from 'next/image'
import {
  FaPalette,
  FaMobileAlt,
  FaShoppingCart,
  FaCogs,
  FaTools,
  FaCheck,
} from 'react-icons/fa'

import webDevImg from '@/assets/img/web-development.jpg'

const WebDevelopmentNew = () => {
  return (
    <section className="webdev-light">

      {/* TOP SECTION */}
      <div className="top-grid">
        <div className="top-text">
          <h1>Web development</h1>
          <p>
           At g-net solutions, Coimbatore, we deliver custom website and web application development services designed to give your project the functionality and performance it needs to succeed.
          </p>
          <p>
            We carefully build backend and frontend infrastructure simultaneously from the ground up, to make sure the final product is responsive, functional, and beautiful.
          </p>
        </div>

       <div className="top-image">
  <Image
    src={webDevImg}
    alt="Web Development"
    priority
    style={{ width: '100%', height: 'auto' }}
  />
</div>

      </div>

      {/* SERVICES */}
      <div className="services-section">

        <div className="service-row bg-pink">
          <div className="icon pink"><FaPalette /></div>
          <div className="text">
            <h3>Custom Web Design</h3>
            <ul>
              <li><span className="li-icon pink"><FaCheck /></span>Tailored Designs: Unique designs created specifically for a brand or business.</li>
              <li><span className="li-icon pink"><FaCheck /></span>User Experience (UX) Design: Focuses on the overall experience of the user, ensuring the site is easy to navigate and use.</li>
              <li><span className="li-icon pink"><FaCheck /></span>User Interface (UI) Design: Concentrates on the visual aspects of the website, including layout, colors, and typography.</li>
            </ul>
          </div>
        </div>

        <div className="service-row bg-blue">
          <div className="icon blue"><FaMobileAlt /></div>
          <div className="text">
            <h3>Responsive Web Design</h3>
            <ul>
              <li><span className="li-icon blue"><FaCheck /></span>Mobile-Friendly Design: Ensures the website looks and functions well on mobile devices.</li>
              <li><span className="li-icon blue"><FaCheck /></span>Cross-Browser Compatibility: Makes sure the website works seamlessly across different web browsers.</li>
              <li><span className="li-icon blue"><FaCheck /></span>Adaptive Layouts: Automatically adjusts layouts, images, and content structure to provide an optimal viewing experience on all screen sizes and orientations.</li>
            </ul>
          </div>
        </div>

        <div className="service-row bg-green">
          <div className="icon green"><FaShoppingCart /></div>
          <div className="text">
            <h3>E-Commerce Web Design</h3>
            <ul>
              <li><span className="li-icon green"><FaCheck /></span>Online Store Setup: Creating an online store with product listings, shopping carts, and payment gateways.</li>
              <li><span className="li-icon green"><FaCheck /></span>Product Management: Tools for adding, updating, and managing products.</li>
              <li><span className="li-icon green"><FaCheck /></span>Secure Checkout: Implementing secure payment processing systems.</li>
            </ul>
          </div>
        </div>

        <div className="service-row bg-purple">
          <div className="icon purple"><FaCogs /></div>
          <div className="text">
            <h3>Content Management Systems (CMS)</h3>
            <ul>
              <li><span className="li-icon purple"><FaCheck /></span>WordPress Development: Custom themes and plugins for WordPress.</li>
              <li><span className="li-icon purple"><FaCheck /></span>Joomla, Drupal, etc.: Development and customization for other popular CMS platforms.</li>
              <li><span className="li-icon purple"><FaCheck /></span>Custom CMS: Building a bespoke CMS tailored to specific needs.</li>
            </ul>
          </div>
        </div>

        <div className="service-row bg-orange">
          <div className="icon orange"><FaTools /></div>
          <div className="text">
            <h3>Website Maintenance and Support</h3>
            <ul>
              <li><span className="li-icon orange"><FaCheck /></span>Regular Updates: Keeping the website updated with the latest content and features.</li>
              <li><span className="li-icon orange"><FaCheck /></span>Security Monitoring: Ensuring the website is secure from threats and vulnerabilities.</li>
              <li><span className="li-icon orange"><FaCheck /></span>Technical Support: Providing ongoing technical assistance and troubleshooting.</li>
            </ul>
          </div>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .webdev-light {
          background: #f8fafc;
          padding: 40px 20px;
          color: #0f172a;
        }

        .top-grid {
          max-width: 1100px;
          margin: 0 auto 70px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .top-text h1 {
          font-size: 52px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .top-text p {
          font-size: 18px;
          color: #475569;
          line-height: 1.7;
        }

        .top-image img {
          width: 100%;
          border-radius: 18px;
        }

        /* SERVICES */
        .services-section {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .service-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 12px;
          padding: 12px;
          border-radius: 20px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.08);
        }

        .icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
              background: #fff !important;
        }

        .text h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .text ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .text li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15px;
          color: #334155;
          margin-bottom: 10px;
        }

        .li-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
          margin-top: 2px;
              background: #fdfdfd !important;
        }

        /* COLOR BACKGROUNDS */
        .bg-pink { background: linear-gradient(135deg, #fdf2f8, #fbcfe8); border-left: 6px solid #db2777; }
        .bg-blue { background: linear-gradient(135deg, #eff6ff, #bfdbfe); border-left: 6px solid #2563eb; }
        .bg-green { background: linear-gradient(135deg, #ecfdf5, #bbf7d0); border-left: 6px solid #16a34a; }
        .bg-purple { background: linear-gradient(135deg, #f5f3ff, #ddd6fe); border-left: 6px solid #7c3aed; }
        .bg-orange { background: linear-gradient(135deg, #fff7ed, #fed7aa); border-left: 6px solid #ea580c; }

        /* ICON COLORS */
        .pink { background: #fce7f3; color: #db2777; }
        .blue { background: #eff6ff; color: #2563eb; }
        .green { background: #ecfdf5; color: #16a34a; }
        .purple { background: #f5f3ff; color: #7c3aed; }
        .orange { background: #fff7ed; color: #ea580c; }

        @media (max-width: 768px) {
          .top-grid {
            grid-template-columns: 1fr;
          }

          .services-section {
            grid-template-columns: 1fr;
          }

          .service-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default WebDevelopmentNew
