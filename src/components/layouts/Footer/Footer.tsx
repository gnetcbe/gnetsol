import contact1 from '@/assets/img/icons/footer-contact-icon1.svg'
import contact2 from '@/assets/img/icons/footer-contact-icon2.svg'
import contact3 from '@/assets/img/icons/footer-contact-icon3.svg'
import logo from '@/assets/img/logo/black-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import ChatBot from "@/components/ChatBot";
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <footer className="vl-footer-area6">
        <div className="footer-bottom-content">
          <Container>
            <Row>

              <Col lg={8} md={4} xs={12}>
                <div className="vl-footer-widget-black6 mb-50 md:ml-0 sm:ml-0">
                  <h4>Quick Links</h4>

                  <div className="footer-tags-wrap">
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/web-development">Website Design / Redesign</Link>
                    <Link href="/ecommerce-solutions">E-Commerce / Shopping Cart</Link>
                    <Link href="/email-services">Email Solutions</Link>
                    <Link href="/software-development">Application Software</Link>
                    <Link href="/web-development">Content Management Systems (CMS)</Link>
                    <Link href="/digital-marketing-seo">Digital Marketing</Link>
                    <Link href="/website-maintenance">Website Maintenance and Support</Link>
                    <Link href="/web-hosting">Web Hosting and Domain Names</Link>
                    <Link href="/blog">Blog</Link>
                     <Link href="/press-release">Press Releases</Link>
                    <Link href="/chatbot">Chatbot</Link>
                    <Link href="/faq">FAQ</Link>
                  </div>

                  <div className="footer-careers-box mt-30">
                    <h5>Careers</h5>
                    <Link href="/careers" className="footer-careers-link">
                      We're Hiring → Apply Here
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={8} sm={6}>
                <div className="vl-footer-contact6 vl-footer-widget-black6 mb-50 sm:ml-0 md:ml-0">
                  <h4>Contact Information</h4>

                  <div className="single-contact-item">
                    <div className="icon">
                      <Image src={contact2} alt="g-net solutions -A global custom software development company" />
                    </div>
                    <div className="text">
                      Lakshmi Nagar, Thaneer Pandal, <br /> V.K. Road, Peelamedu,
                      Coimbatore - 641004, <br />Tamil Nadu, India.
                      (Near TIDEL Park)
                    </div>
                  </div>

                  <div className="single-contact-item">
                    <div className="icon">
                      <Image src={contact1} alt="g-net solutions -A global custom software development company" />
                    </div>
                    <div className="text">
                      <Link href="mailto:info@g-netsolutions.com">info@g-netsolutions.com</Link>
                    </div>
                  </div>

                  <div className="single-contact-item">
                    <div className="icon">
                      <Image src={contact3} alt="g-net solutions -A global custom software development company" />
                    </div>
                    <div className="text">
                      <Link href="tel:+91-9751959300">+91-9751959300</Link>
                    </div>
                  </div>

                  <div className="vl-footer-social6 text-start mt-20">
                    <Link href="https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF />
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </Link>
                    <Link href="https://www.linkedin.com/company/g-net-solutions-coimbatore-private-ltd/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </Link>
                    <Link href="https://x.com/gnetcoimbatore" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter />
                    </Link>
                  </div>
                </div>
              </Col>

            </Row>
          </Container>
        </div>

        {/* COPYRIGHT */}
        <Container>
          <Row className="vl-copyright6 _dv-top align-items-center">
            <Col lg={6}>
              <div className="copyright-text left-side">
                <p> © 2026 g-net solutions. All rights reserved.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="copyright-text right-side text-end sm:text-start md:text-start">
                <Link href="/terms-of-service">Terms &amp; Conditions</Link>
                <Link href="/privacy" className="add-before">Privacy Policy</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* ── WhatsApp Floating Button ── */}
      <div className="wa-wrapper">
        <span className="wa-pulse" />
        <a
          href="https://wa.me/919751959300?text=Hi%20G-Net%20Solutions%2C%20I%20need%20support"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path fill="white" d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.489-2.02A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.266 13.266 0 01-6.748-1.838l-.484-.287-5.037 1.198 1.27-4.91-.317-.504A13.234 13.234 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.465.298-.863.1-.398-.2-1.681-.62-3.203-1.976-1.184-1.056-1.983-2.36-2.215-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.265-.398.398-.664.133-.265.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684-.232-.012-.498-.015-.764-.015-.265 0-.697.1-1.062.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.853 1.626 4.118c.199.265 2.808 4.287 6.802 6.013a22.867 22.867 0 002.27.839c.954.303 1.823.26 2.51.158.766-.114 2.354-.962 2.686-1.891.332-.93.332-1.727.232-1.892-.099-.165-.365-.265-.763-.464z" />
          </svg>
        </a>
      </div>
    <ChatBot />
      <style>{`
        .wa-wrapper {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 9999;
          width: 56px;
          height: 56px;
        }
        .wa-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-color: #25d366;
          opacity: 0.5;
          animation: wa-pulse 2s ease-out infinite;
          pointer-events: none;
        }
        .wa-btn {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: #25d366;
          box-shadow: 0 4px 16px rgba(37,211,102,0.45);
          text-decoration: none !important;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wa-btn svg {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }
        .wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37,211,102,0.6);
        }
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          70%  { transform: scale(1.7); opacity: 0;   }
          100% { transform: scale(1.7); opacity: 0;   }
        }
      `}</style>

    </>
  )
}

export default Footer
