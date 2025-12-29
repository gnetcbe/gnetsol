import footerbg from '@/assets/img/bg/footer3-bg.png'
import contact1 from '@/assets/img/icons/footer-contact-icon1.svg'
import contact2 from '@/assets/img/icons/footer-contact-icon2.svg'
import contact3 from '@/assets/img/icons/footer-contact-icon3.svg'
import logo from '@/assets/img/logo/footer-logo3.png'
import cta3 from '@/assets/img/others/cta3-image.png'
import shape from '@/assets/img/shapes/cta3-image-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <footer className="vl-footer-area3">
        <div className="cta3">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="white-heading sm:mt-30 md:mt-30">
                  <h2>Ready To Grow Your Business With SEOX</h2>
                  <div className="cta3-form">
                    <input type="email" placeholder="Enter Your Email" />
                    <div className="button">
                      <button type="submit" className="theme-btn6">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="cta3-images">
                  <div className="image">
                    <Image src={cta3} alt="" />
                  </div>
                  <div className="shape">
                    <Image src={shape} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="space100" />
        <div className="footer3-bottom-content">
          <Container className=" _relative">
            <div className="footer3-bg-image">
              <Image src={footerbg} alt="" height={373} />
            </div>
            <Row>
              <Col xl={4} lg={4} md={6} sm={6}>
                <div className="vl-footer-widget-black1 vl-footer1-logo-area mr-50 mb-50">
                  <div className="vl-footer-logo black-logo">
                    <Link href="/">
                      <Image src={logo} alt="" />
                    </Link>
                  </div>
                  <div className="vl-footer-text heading1 mt-20">
                    <p className="mt-16">
                      SEOX is a results-driven SEO and digital marketing agency dedicated to helping businesses thrive in the digital landscape.
                    </p>
                  </div>
                  <div className="vl-footer-social3 text-start mt-30">
                    <Link href="">
                      <FaFacebookF className="fa-brands" />
                    </Link>
                    <Link href="">
                      <FaInstagram className="fa-brands " />
                    </Link>
                    <Link href="">
                      <FaLinkedinIn className="fa-brands" />
                    </Link>
                    <Link href="">
                      <FaXTwitter className="fa-brands" />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={6} xs={6}>
                <div className="vl-footer-widget-black1 mb-50 ml-20 md:ml-30 sm:ml-0">
                  <h4>Quick Links</h4>
                  <div className="vl-footer-list">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/service">Services</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/testimonial">Testimonails</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={4} xs={6}>
                <div className="vl-footer-widget-black1 mb-50 ml-70 md:ml-0 sm:ml-0">
                  <h4>Category List</h4>
                  <div className="vl-footer-list">
                    <ul>
                      <li>
                        <Link href="">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link href="">SEO Marketing</Link>
                      </li>
                      <li>
                        <Link href="">Startup Agency</Link>
                      </li>
                      <li>
                        <Link href="">Advertising Agency</Link>
                      </li>
                      <li>
                        <Link href="">Social Media Agency</Link>
                      </li>
                      <li>
                        <Link href="">Web Design Agency</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={8} sm={6}>
                <div className="vl-footer-contact3 vl-footer-widget-black1 mb-50 sm:ml-0 md:ml-0">
                  <h4>Contact Information</h4>
                  <div className="single-contact-item">
                    <div className="icon">
                      <Image src={contact1} alt="" />
                    </div>
                    <div className="text">
                      <Link href="mail:support@seoxagency.com">support@seoxagency.com</Link>
                    </div>
                  </div>
                  <div className="single-contact-item">
                    <div className="icon">
                      <Image src={contact2} alt="" />
                    </div>
                    <div className="text">
                      <Link href="#">
                        123 Digital Lane, <br /> Marketing City, USA
                      </Link>
                    </div>
                  </div>
                  <div className="single-contact-item">
                    <div className="icon">
                      <Image src={contact3} alt="" />
                    </div>
                    <div className="text">
                      <Link href="tel:123-456-7890">123-456-7890</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row className="vl-copyright3 _dv-top align-items-center">
            <Col lg={6}>
              <div className="copyright-text left-side">
                <p>ⓒCopyright 2025 SEOX . All rights reserved</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="copyright-text right-side text-end sm:text-start md:text-start">
                <Link href="#">Terms &amp; Conditions</Link>
                <Link href="#" className="add-before">
                  Privacy Policy
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
