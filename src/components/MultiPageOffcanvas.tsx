'use client'

import footerContactIcon1 from '@/assets/img/icons/footer-contact-icon1.svg'
import footerContactIcon2 from '@/assets/img/icons/footer-contact-icon2.svg'
import footerContactIcon3 from '@/assets/img/icons/footer-contact-icon3.svg'
import blackLogo from '@/assets/img/logo/logog.png'

import Image from 'next/image'
import Link from 'next/link'
import { Offcanvas } from 'react-bootstrap'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXmark,
  FaXTwitter,
} from 'react-icons/fa6'
import MobileMenuMultiItem from './layouts/MobileMenuMultiItem'

type ShowType = {
  isOpen: boolean
  toggle: () => void
}

const MultiPageOffcanvas = ({ isOpen, toggle }: ShowType) => {
  return (
    <>
      <Offcanvas
        show={isOpen}
        onHide={toggle}
        placement="end"
        className="vl-offcanvas vl-header-area1 vl-offcanvas-open"
      >
        <Offcanvas.Body> {/* ✅ THIS WAS MISSING */}

          <div className="vl-offcanvas-wrapper">
            <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
              <div className="vl-offcanvas-logo">
                <Link href="/" className="header1-logo-block">
                  <Image
                    src={blackLogo}
                    alt="G-Net Solutions"
                    style={{ height: '80px', width: 'auto' }}
                    priority
                  />
                </Link>
              </div>

              <div className="vl-offcanvas-close">
                <button
                  onClick={toggle}
                  className="vl-offcanvas-close-toggle"
                  aria-label="Close menu"
                >
                  <FaXmark />
                </button>
              </div>
            </div>

            <div className="vl-offcanvas-menu d-lg-none mb-40">
              <MobileMenuMultiItem />
            </div>

            <div className="space20" />

            {/* CONTACT INFO */}
            <div className="vl-footer-contact3 vl-footer-widget-black1 mb-20">
              <h4>Contact Information</h4>

              <div className="single-contact-item">
                <div className="icon">
                  <Image src={footerContactIcon1} alt="Email" />
                </div>
                <div className="text">
                  <Link href="mailto:info@g-netsolutions.com">
                    info@g-netsolutions.com
                  </Link>
                </div>
              </div>

              <div className="single-contact-item">
                <div className="icon">
                  <Image src={footerContactIcon2} alt="Location" />
                </div>
                <div className="text">
                  Lakshmi Nagar, Thaneer Pandal, V.K. Road,<br />
                  Peelamedu, Coimbatore – 641004,<br />
                  Tamil Nadu, India
                </div>
              </div>

              <div className="single-contact-item">
                <div className="icon">
                  <Image src={footerContactIcon3} alt="Phone" />
                </div>
                <div className="text">
                  <Link href="tel:+919751959300">+91 97519 59300</Link>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="vl-offcanvas-social">
              <h4>Follow Us</h4>
              <div className="vl-copyright-social2">
                <Link href="https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/" target="_blank">
                  <FaFacebookF />
                </Link>
                <Link href="https://www.linkedin.com/in/gnetsolutions" target="_blank">
                  <FaLinkedinIn />
                </Link>
                <Link href="https://x.com/gnetcoimbatore" target="_blank">
                  <FaXTwitter />
                </Link>
              </div>
            </div>

          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="vl-offcanvas-overlay" />
    </>
  )
}

export default MultiPageOffcanvas
