import blacklogo from '@/assets/img/logo/black-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <footer className="vl-footer-area8 mt-80">
        <div className="footer-bottom-content">
          <Container>
            <Row>
              <Col xl={4} lg={4} md={6} sm={6}>
                <div className="vl-footer-widget-black8 vl-footer1-logo-area mr-50 mb-50">
                  <div className="vl-footer-logo black-logo">
                    <Link href="/">
                      <Image src={blacklogo} alt="" />
                    </Link>
                  </div>
                  <div className="vl-footer-text heading6 mt-20">
                    <p className="mt-16">
                      SEOX is a results-driven SEO and digital marketing agency dedicated to helping businesses thrive in the digital landscape.
                    </p>
                  </div>
                  <div className="vl-footer-social8 text-start mt-20">
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
                <div className="vl-footer-widget-black8 mb-50 ml-20 md:ml-30 sm:ml-0">
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
                <div className="vl-footer-widget-black8 mb-50 ml-70 md:ml-0 sm:ml-0">
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
                <div className="vl-footer-contact8 vl-footer-widget-black6 mb-50 sm:ml-0 md:ml-0">
                  <h4>Subscribe Newsletter</h4>
                  <div className="vl-footer-subscribe8">
                    <form action="#">
                      <input type="email" placeholder="Email Address" />
                      <div className="button">
                        <button type="submit" className="theme-btn14">
                          Subscribe
                          <span className="arrow1">
                            <FaArrowRight className="fa-solid" />
                          </span>
                          <span className="arrow2">
                            <FaArrowRight className="fa-solid" />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row className="vl-copyright8 _dv-top align-items-center">
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
