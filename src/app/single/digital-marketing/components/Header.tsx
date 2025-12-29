'use client'
import whitelogo from '@/assets/img/logo/white-logo.png'
import Image from 'next/image'

import whiteLogo from '@/assets/img/logo/white-logo.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import MobileMenu from '../../components/MobileMenu'

const Header = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen: searchOpen, toggle: searchToggle } = useToggle()
  return (
    <>
      <header>
        <div id="vl-header-sticky" className={`vl-header-area4 header-tranperent header-${scrollY > 100 && 'sticky'}`}>
          <Container className="header2-bg">
            <Row className="align-items-center">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link href="/" className="header1-logo-block">
                    <Image src={whitelogo} alt="" />
                  </Link>
                </div>
              </Col>
              <Col lg={7} className="d-none d-lg-block text-end">
                <div className="vl-main-menu">
                  <nav className="vl-mobile-menu-active">
                    <ul id="list-example">
                      <li>
                        <Link className="list-group-item list-group-item-action" href="#about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="list-group-item list-group-item-action" href="#service">
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link className="list-group-item list-group-item-action" href="#tes">
                          Testimonial
                        </Link>
                      </li>
                      <li>
                        <Link className="list-group-item list-group-item-action" href="#blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="list-group-item list-group-item-action" href="#contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6}>
                <div className="vl-header4-btns text-end d-none d-lg-block">
                  <div className="buttons">
                    <div className="vl-search1">
                      <button onClick={searchToggle} className="search-open-btn">
                        <FaMagnifyingGlass className="fa-regular fa-magnifying-glass" />
                      </button>
                    </div>
                    <Link href="/about" className="theme-btn8">
                      <span className="theme-btn8__shape" />
                      <span className="theme-btn8__shape" />
                      <span className="theme-btn8__shape" />
                      <span className="theme-btn8__shape" />
                      <span className="theme-btn8__text">Discover More</span>
                    </Link>
                  </div>
                </div>
                <MobileMenu />
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
    </>
  )
}

export default Header
