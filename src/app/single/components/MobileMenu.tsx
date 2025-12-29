'use client'
import footerContactIcon1 from '@/assets/img/icons/footer-contact-icon1.svg'
import footerContactIcon2 from '@/assets/img/icons/footer-contact-icon2.svg'
import footerContactIcon3 from '@/assets/img/icons/footer-contact-icon3.svg'
import blackLogo from '@/assets/img/logo/black-logo.png'
import useToggle from '@/hooks/useToggle'
import Image from 'next/image'
import Link from 'next/link'
import { Offcanvas } from 'react-bootstrap'
import { FaBarsStaggered, FaFacebookF, FaInstagram, FaLinkedinIn, FaXmark, FaXTwitter } from 'react-icons/fa6'

const MobileMenu = () => {
  const { isOpen, toggle } = useToggle()

  return (
    <>
      <div className="vl-header-action-item d-block d-lg-none">
        <button onClick={toggle} className="vl-offcanvas-toggle d-flex justify-content-center align-items-center" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasEnd">
          <FaBarsStaggered className="fa-duotone fa-solid" />
        </button>
      </div>
      <div>
        <Offcanvas onHide={toggle} show={isOpen} placement="end" className="vl-offcanvas vl-header-area1 vl-offcanvas-open">
          <div className="vl-offcanvas-wrapper">
            <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
              <div className="vl-offcanvas-logo">
                <Link href="/home" className="header1-logo-block">
                  <Image src={blackLogo} alt="blackLogo" className="img-fluid" />
                </Link>
              </div>
              <div className="vl-offcanvas-close">
                <button onClick={toggle} className="vl-offcanvas-close-toggle">
                  <FaXmark className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
            <div className="vl-offcanvas-menu d-lg-none mb-40">
              <nav>
                <ul id="list-example">
                  <li>
                    <Link className="list-group-item list-group-item-action" href="">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="list-group-item list-group-item-action" href="">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link className="list-group-item list-group-item-action" href="">
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link className="list-group-item list-group-item-action" href="">
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link className="list-group-item list-group-item-action" href="">
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="space20" />
            <div className="vl-footer-contact3 vl-footer-widget-black1 mb-20 sm:ml-0 md:ml-0">
              <h4>Contact Information</h4>
              <div className="single-contact-item">
                <div className="icon">
                  <Image src={footerContactIcon1} alt="footerContactIcon1" />
                </div>
                <div className="text">
                  <Link href="mail:support@seoxagency.com">support@seoxagency.com</Link>
                </div>
              </div>
              <div className="single-contact-item">
                <div className="icon">
                  <Image src={footerContactIcon2} alt="footerContactIcon2" />
                </div>
                <div className="text">
                  <Link href="#">
                    123 Digital Lane, <br /> Marketing City, USA
                  </Link>
                </div>
              </div>
              <div className="single-contact-item">
                <div className="icon">
                  <Image src={footerContactIcon3} alt="footerContactIcon3" />
                </div>
                <div className="text">
                  <Link href="tel:123-456-7890">123-456-7890</Link>
                </div>
              </div>
            </div>
            <div className="vl-offcanvas-social">
              <h4>Follow Us</h4>
              <div className="vl-copyright-social2 text-start">
                <Link href="">
                  <FaFacebookF className="fa-brands" />
                </Link>
                &nbsp;
                <Link href="">
                  <FaInstagram className="fa-brands" />
                </Link>
                &nbsp;
                <Link href="">
                  <FaLinkedinIn className="fa-brands" />
                </Link>
                &nbsp;
                <Link href="">
                  <FaXTwitter className="fa-brands" />
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas>
        <div className="vl-offcanvas-overlay" />
      </div>
    </>
  )
}

export default MobileMenu
