'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './header.module.css'

import logo from '@/assets/img/logo/logog.png'
import whiteLogo from '@/assets/img/logo/white-logo.png'
import MultiPageOffcanvas from '@/components/MultiPageOffcanvas'
import useScrollEvent from '@/hooks/useScrollEvent'
import useToggle from '@/hooks/useToggle'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import {
  FaAngleDown,
  FaAngleRight,
  FaArrowRight,
  FaBarsStaggered,
  FaMagnifyingGlass,
} from 'react-icons/fa6'

const Header = () => {
  const { scrollY } = useScrollEvent()

  const { isOpen, toggle } = useToggle()
  const { isOpen: searchOpen, toggle: searchToggle } = useToggle()

  /* ✅ NEW: detect route change */
  const pathname = usePathname()

  /* ✅ NEW: auto-close mobile menu on navigation */
  useEffect(() => {
    if (isOpen) {
      toggle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <header>
        <div
          id="vl-header-sticky"
          className={`vl-header-area8 header-tranperent header-${
            scrollY > 100 && 'sticky'
          }`}
        >
          <div className="header2-bg">
            <div className="container">
              <Row className="align-items-center">
                <Col lg={3} md={6} xs={8}>
                  <div className="vl-logo">
                    <Link href="/" className="header1-logo-block">
                      <Image
                        src={logo}
                        alt="g-net solutions -A global custom software development company"
                        style={{ height: '80px', width: 'auto' }}
                        priority
                      />
                    </Link>
                  </div>
                </Col>

                <Col lg={7} className="d-none d-lg-block text-end">
                  <div className="vl-main-menu">
                    <nav className="vl-mobile-menu-active">
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>

                        <li className="has-dropdown">
                          <Link href="">
                            Web Development
                            <span>
                              <FaAngleDown
                                className="fa-regular"
                                style={{
                                  marginBottom: '6px',
                                  marginLeft: '2px',
                                }}
                              />
                            </span>
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/software-development">
                                Application Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/web-hosting">
                                Domain Names and Webhosting
                              </Link>
                            </li>
                            <li>
                              <Link href="/web-development">
                                Website Design/Redesign
                              </Link>
                            </li>
                            <li>
                              <Link href="/ecommerce-solutions">
                                E-Commerce /Shopping Cart
                              </Link>
                            </li>
                            <li>
                              <Link href="/web-development">
                                Content Management Systems (CMS)
                              </Link>
                            </li>
                            <li>
                              <Link href="/website-maintenance">
                                Website Maintenance and Support
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/email-services">Email Solutions</Link>
                        </li>

                        <li>
                          <Link href="/digital-marketing-seo">
                            Digital Marketing
                          </Link>
                        </li>
                         <li>
                          <Link href="/blog">
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Col>

                <Col lg={2} md={6} xs={4}>
                  <div className="vl-header8-btns text-end d-none d-lg-block">
                    <div className="buttons">
                      <Link href="/contact" className="theme-btn14">
                        Contact Us
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="vl-header-action-item d-block d-lg-none">
                    <button
                      type="button"
                      onClick={toggle}
                      className="vl-offcanvas-toggle d-flex justify-content-center align-items-center"
                    >
                      <FaBarsStaggered className="fa-duotone fa-solid fa-bars-staggered" />
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
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
                      <Image
                        src={whiteLogo}
                        alt="g-net solutions -A global custom software development company"
                      />
                    </Link>
                  </div>
                  <div className="search__close">
                    <button
                      onClick={searchToggle}
                      type="button"
                      className="search__close-btn search-close-btn"
                    >
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 1L1 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L17 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="search__form">
                  <form action="#">
                    <div className="search__input">
                      <input
                        className="search-input-field"
                        type="text"
                        placeholder="Type here to search..."
                      />
                      <span className="search-focus-border" />
                      <button type="submit">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
