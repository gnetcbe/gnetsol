'use client'
import demo1 from '@/assets/img/demo/demo1.jpg'
import demo10 from '@/assets/img/demo/demo10.jpg'
import demo2 from '@/assets/img/demo/demo2.jpg'
import demo3 from '@/assets/img/demo/demo3.jpg'
import demo4 from '@/assets/img/demo/demo4.jpg'
import demo5 from '@/assets/img/demo/demo5.jpg'
import demo6 from '@/assets/img/demo/demo6.jpg'
import demo7 from '@/assets/img/demo/demo7.jpg'
import demo8 from '@/assets/img/demo/demo8.jpg'
import demo9 from '@/assets/img/demo/demo9.jpg'
import blacklogo from '@/assets/img/logo/black-logo.png'
import whiteLogo from '@/assets/img/logo/white-logo.png'
import MultiPageOffcanvas from '@/components/MultiPageOffcanvas'
import useScrollEvent from '@/hooks/useScrollEvent'
import useToggle from '@/hooks/useToggle'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight, FaBarsStaggered, FaMagnifyingGlass } from 'react-icons/fa6'

const Header = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen, toggle } = useToggle()
  const { isOpen: searchOpen, toggle: searchToggle } = useToggle()
  return (
    <>
      <header>
        <div id="vl-header-sticky" className={`vl-header-area3 header-tranperent header-${scrollY > 100 && 'sticky'}`}>
          <Container className="header2-bg">
            <Row className="align-items-center">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link href="/" className="header1-logo-block">
                    <Image src={blacklogo} alt="" />
                  </Link>
                </div>
              </Col>
              <Col lg={7} className="d-none d-lg-block text-end">
                <div className="vl-main-menu">
                  <nav className="vl-mobile-menu-active">
                    <ul>
                      <li className="has-dropdown">
                        <Link href="">
                          Home
                          <span>
                            <FaAngleDown className="fa-regular" style={{ marginBottom: '4px', marginLeft: '4px' }} />
                          </span>
                        </Link>
                        <div className="vl-mega-menu">
                          <div className="vl-home-menu">
                            <Row className="gx-3 row-cols-1 row-cols-md-1 row-cols-lg-5">
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={demo1} alt="" />
                                  </div>
                                  <Link className="text" href="/home">
                                    01. SEO Marketing
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/home">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/home">
                                      One Page
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={demo2} alt="" />
                                  </div>
                                  <Link className="text" href="/affiliate-marketing">
                                    02. Affiliate Marketing
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/affiliate-marketing">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/affiliate-marketing">
                                      One Page
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={demo3} alt="" />
                                  </div>
                                  <Link className="text" href="/startups-agency">
                                    03. Startup Agency
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/startups-agency">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/startups-agency">
                                      One Page
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={demo4} alt="" />
                                  </div>
                                  <Link className="text" href="/seo-marketing">
                                    04. SEO Marketing
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/seo-marketing">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/seo-marketing">
                                      One Page
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={demo5} alt="" />
                                  </div>
                                  <Link className="text" href="/digital-marketing">
                                    05. Digital Marketing
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/digital-marketing">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/digital-marketing">
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row className="gx-3 row-cols-1 row-cols-md-1 row-cols-lg-5">
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={demo6} alt="" />
                                  </div>
                                  <Link className="text" href="/social-marketing">
                                    06. Social Marketing
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/social-marketing">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/social-marketing">
                                      One Page
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={demo7} alt="" />
                                  </div>
                                  <Link className="text" href="/social-media-marketing">
                                    07. Social Marketing
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/social-media-marketing">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/social-media-marketing">
                                      One Page
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={demo8} alt="" />
                                  </div>
                                  <Link className="text" href="/startup-agency">
                                    08. Startup Agency
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/startup-agency">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/startup-agency">
                                      One Page
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={demo9} alt="" />
                                  </div>
                                  <Link className="text" href="/advertising-agency">
                                    09. Advertising Agency
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/advertising-agency">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/advertising-agency">
                                      One Page
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={demo10} alt="" />
                                  </div>
                                  <Link className="text" href="/human-resources-agency">
                                    10. Human Resources
                                  </Link>
                                  <div className="btn-area1">
                                    <Link className="theme-btn5" href="/human-resources-agency">
                                      Multi Page
                                    </Link>
                                    <Link className="theme-btn5" href="/single/human-resources-agency">
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </li>
                      <li className="has-dropdown">
                        <Link href="">
                          Portfolio
                          <span>
                            <FaAngleDown className="fa-regular" style={{ marginBottom: '6px', marginLeft: '2px' }} />
                          </span>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/portfolio"> Portfolio</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-details"> Portfolio Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="">
                          Service
                          <span>
                            <FaAngleDown className="fa-regular" style={{ marginBottom: '4px', marginLeft: '4px' }} />
                          </span>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="" className="span-arrow">
                              Service
                              <span>
                                <FaAngleRight className="fa-solid d-lg-block d-none" />
                              </span>
                            </Link>
                            <ul className="sub-menu menu1">
                              <li>
                                <Link href="/service">Service 01</Link>
                              </li>
                              <li>
                                <Link href="/service2">Service 02</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="" className="span-arrow">
                              single Service
                              <span>
                                <FaAngleRight className="fa-solid d-lg-block d-none" />
                              </span>
                            </Link>
                            <ul className="sub-menu menu1">
                              <li>
                                <Link href="/single-service/details1">Seo Marketing</Link>
                              </li>
                              <li>
                                <Link href="/single-service/details2">Social Marketing</Link>
                              </li>
                              <li>
                                <Link href="/single-service/details3">Content Marketing</Link>
                              </li>
                              <li>
                                <Link href="/single-service/details4">Pay Per Click</Link>
                              </li>
                              <li>
                                <Link href="/single-service/details5">Travel Guide</Link>
                              </li>
                              <li>
                                <Link href="/single-service/details6">HR Staffing Agency</Link>
                              </li>
                              <li>
                                <Link href="/single-service/details7">Insurance Policy</Link>
                              </li>
                              <li>
                                <Link href="/single-service/details8">Real Estate</Link>
                              </li>
                              <li>
                                <Link href="/single-service/details9">Startup Agency</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="">
                          Page's
                          <span>
                            <FaAngleDown className="fa-regular" style={{ marginBottom: '4px', marginLeft: '4px' }} />
                          </span>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li>
                            <Link href="/team">Our Team</Link>
                          </li>
                          <li>
                            <Link href="/testimonial">Testimonial</Link>
                          </li>
                          <li>
                            <Link href="/faq">FAQ's</Link>
                          </li>
                          <li>
                            <Link href="/pricing">Pricing</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact Us</Link>
                          </li>
                          <li>
                            <Link href="/error">404</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="">
                          Blogs
                          <span>
                            <FaAngleDown className="fa-regular" style={{ marginBottom: '4px', marginLeft: '4px' }} />
                          </span>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="" className="span-arrow">
                              Our Blogs
                              <span>
                                <FaAngleRight className="fa-solid d-lg-block d-none" />
                              </span>
                            </Link>
                            <ul className="sub-menu menu1">
                              <li>
                                <Link href="/blog">Blog 01</Link>
                              </li>
                              <li>
                                <Link href="/blog2">Blog 02</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="" className="span-arrow">
                              Blog Details
                              <span>
                                <FaAngleRight className="fa-solid d-lg-block d-none" />
                              </span>
                            </Link>
                            <ul className="sub-menu menu1">
                              <li>
                                <Link href="/blog-details-left">Blog Details Left</Link>
                              </li>
                              <li>
                                <Link href="/blog-details-right">Blog Details Right</Link>
                              </li>
                              <li>
                                <Link href="/blog-details">Blog Details</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6}>
                <div className="vl-header3-btns text-end d-none d-lg-block">
                  <div className="buttons">
                    <div className="vl-search1">
                      <button onClick={searchToggle} className="search-open-btn">
                        <FaMagnifyingGlass className="fa-regular" />
                      </button>
                    </div>
                    <Link className="theme-btn5" href="/contact">
                      Get Started Now
                    </Link>
                  </div>
                </div>
                <div className="vl-header-action-item d-block d-lg-none">
                  <button onClick={toggle} type="button" className="vl-offcanvas-toggle d-flex justify-content-center align-items-center">
                    <FaBarsStaggered className="fa-duotone fa-solid" />
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <div className={`search__popup ${searchOpen && 'search-opened'}`}>
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="search__wrapper">
                <div className="search__top d-flex justify-content-between align-items-center">
                  <div className="search__logo">
                    <Link href="/">
                      <Image src={whiteLogo} alt="whiteLogo" />
                    </Link>
                  </div>
                  <div className="search__close">
                    <button onClick={searchToggle} type="button" className="search__close-btn search-close-btn">
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="search__form">
                  <form action="#">
                    <div className="search__input">
                      <input className="search-input-field" type="text" placeholder="Type here to search..." />
                      <span className="search-focus-border" />
                      <button type="submit">
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.0002 19.0002L17.2002 17.2002"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <MultiPageOffcanvas isOpen={isOpen} toggle={toggle} />
    </>
  )
}

export default Header
