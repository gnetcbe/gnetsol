'use client'

import { Container } from 'react-bootstrap'
import {
  FaStore,
  FaCreditCard,
  FaBoxes,
  FaBullhorn,
  FaPlug,
  FaShopify,
  FaWordpress,
  FaMagento,
  FaCode,
} from 'react-icons/fa'

export default function EcommerceGrowthSolutions() {
  return (
    <section className="ecom-growth-parallel">
      <Container>

        {/* HEADER */}
        <div className="ecom-head">
          <h2>eCommerce Solutions - That Accelerate Growth</h2>
          <h4>Start Strong. Grow Smart. Scale Seamlessly</h4>
          <p>
            We empower businesses to create high-performing, conversion-driven
            eCommerce experiences that deliver measurable impact. Whether you're
            launching a new store or enhancing an existing one, our comprehensive
            eCommerce services are customized to fit your goals and fuel your success.
          </p>
        </div>

        {/* OFFERS */}
        <div className="ecom-grid">

          <div className="ecom-item">
            <FaStore />
            <div>
              <strong>Custom eCommerce Website Development</strong>
              <span>
                We build responsive, high-performing online stores tailored to your
                brand—leveraging top platforms like Shopify, WooCommerce, Magento,
                BigCommerce, and more.
              </span>
            </div>
          </div>

          <div className="ecom-item">
            <FaCreditCard />
            <div>
              <strong>Integrated Payment & Shipping Solutions</strong>
              <span>
                Enable smooth, secure transactions with fully integrated payment
                gateways and shipping providers—optimized for both domestic and
                global commerce.
              </span>
            </div>
          </div>

          <div className="ecom-item">
            <FaBoxes />
            <div>
              <strong>Streamlined Product Management</strong>
              <span>
                Easily manage your product listings, sync inventory in real time,
                and maintain consistency across all your sales channels.
              </span>
            </div>
          </div>

          <div className="ecom-item">
            <FaBullhorn />
            <div>
              <strong>eCommerce Digital Marketing</strong>
              <span>
                Increase visibility and drive conversions with data-driven SEO,
                impactful social media strategies, targeted email campaigns, and
                high-performing paid ads.
              </span>
            </div>
          </div>

          <div className="ecom-item">
            <FaPlug />
            <div>
              <strong>Powerful Third-Party Integrations</strong>
              <span>
                Integrate seamlessly with CRM, ERP, accounting software, and other
                essential systems to keep your operations efficient and scalable.
              </span>
            </div>
          </div>

        </div>

        {/* PLATFORMS */}
        <div className="ecom-platforms-wrap">
          <h3>Platforms We Work With</h3>

          <div className="ecom-platforms-grid">
            <div className="platform-item shopify">
              <FaShopify />
              <span>Shopify.</span>
            </div>

            <div className="platform-item woo">
              <FaWordpress />
              <span>WooCommerce</span>
            </div>

            <div className="platform-item magento">
              <FaMagento />
              <span>Magento (Adobe Commerce)</span>
            </div>

            <div className="platform-item wix">
              <FaStore />
              <span>WixeCommerce</span>
            </div>

            <div className="platform-item headless">
              <FaCode />
              <span>Custom Headless Solutions</span>
            </div>
          </div>
        </div>

      </Container>

      {/* STYLES */}
      <style jsx>{`
        .ecom-growth-parallel {
          padding: 35px 0 45px;
          background: #ffffff;
        }

        /* HEADER */
        .ecom-head {
          max-width: 980px;
          margin-bottom: 24px;
        }

        .ecom-head h2 {
          font-size: 34px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .ecom-head h4 {
          font-size: 17px;
          font-weight: 700;
          color: #ea580c;
          margin-bottom: 10px;
        }

        .ecom-head p {
          font-size: 15.8px;
          color: #475569;
          line-height: 1.65;
        }

        /* OFFERS */
        .ecom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 22px;
          margin-top: 22px;
        }

        .ecom-item {
          display: flex;
          gap: 14px;
          padding: 14px 16px;
          background: #f1f2f3ff;
          border-radius: 10px;
        }

        .ecom-item svg {
          font-size: 20px;
          color: #ea580c;
          margin-top: 2px;
        }

        .ecom-item strong {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }

        .ecom-item span {
          font-size: 16px;
          color: #475569;
          line-height: 1.55;
        }

        /* PLATFORMS */
        .ecom-platforms-wrap {
          margin-top: 26px;
        }

        .ecom-platforms-wrap h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .ecom-platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px 18px;
        }

        .platform-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 10px;
          font-size: 15.5px;
          font-weight: 600;
          color: #0f172a;
        }

        .platform-item svg {
          font-size: 26px; /* bigger icons */
        }

        /* BRAND COLORS (slightly dark) */
        .platform-item.shopify {
          background: #e7f6ef;
        }

        .platform-item.woo {
          background: #f1e8fb;
        }

        .platform-item.magento {
          background: #fde8e8;
        }

        .platform-item.wix {
          background: #eef2ff;
        }

        .platform-item.headless {
          background: #f3f4f6;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .ecom-grid {
            grid-template-columns: 1fr;
          }

          .ecom-head h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  )
}
