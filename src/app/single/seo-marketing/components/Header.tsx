'use client'
import logo from '@/assets/img/logo/black-logo.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaMagnifyingGlass } from 'react-icons/fa6'
import MobileMenu from '../../components/MobileMenu'

const Header = () => {
  const { scrollY } = useScrollEvent()

  return (
    <>
      <header>
        <div id="vl-header-sticky" className={`vl-header-area8 header-tranperent header-${scrollY > 100 && 'sticky'}`}>
          <Container className="header2-bg">
            <Row className="align-items-center">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link href="/" className="header1-logo-block">
                    <Image src={logo} alt="" />
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
                        <Link className="list-group-item list-group-item-action" href="#team">
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link className="list-group-item list-group-item-action" href="#blog">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6}>
                <div className="vl-header8-btns text-end d-none d-lg-block">
                  <div className="buttons">
                    <div className="vl-search1">
                      <button className="search-open-btn">
                        <FaMagnifyingGlass className="fa-regular fa-magnifying-glass" />
                      </button>
                    </div>
                    <Link href="/about" className="theme-btn14">
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
                <MobileMenu />
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  )
}

export default Header
