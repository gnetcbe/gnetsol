import contact1 from '@/assets/img/icons/footer-contact-icon1.svg'
import contact2 from '@/assets/img/icons/footer-contact-icon2.svg'
import contact3 from '@/assets/img/icons/footer-contact-icon3.svg'
import logo from '@/assets/img/logo/black-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <footer className="vl-footer-area6">
        <div className="footer-bottom-content">
          <Container>
            <Row>

             
              {/* CATEGORY LIST – SPLIT INTO 2 COLUMNS */}
              {/* CATEGORY LIST – 3 COLUMNS WITH ROUNDED LINKS */}
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
    <Link href="/chatbot">Chatbot</Link>
  </div>

  {/* ⭐ CAREERS – SEPARATE & HIGHLIGHTED (LIKE OLD SITE) */}
  <div className="footer-careers-box mt-30">
    <h5>Careers</h5>
    <Link href="/careers" className="footer-careers-link">
      We’re Hiring → Apply Here
    </Link>
  </div>
</div>

</Col>




              {/* CONTACT INFORMATION */}
              <Col lg={4} md={8} sm={6}>
                <div className="vl-footer-contact6 vl-footer-widget-black6 mb-50 sm:ml-0 md:ml-0">
                  <h4>Contact Information</h4>

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

  <Link 
    href="https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </Link>

  <Link 
    href="https://www.instagram.com/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </Link>

  <Link 
    href="https://www.linkedin.com/in/gnetsolutions" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </Link>

  <Link 
    href="https://x.com/gnetcoimbatore" 
    target="_blank" 
    rel="noopener noreferrer"
  >
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
                <p> © 2025 g-net solutions. All rights reserved.</p>
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
    </>
  )
}

export default Footer
