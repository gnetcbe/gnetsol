'use client'
import email from '@/assets/img/icons/sidebar-email.png'
import phone from '@/assets/img/icons/sidebar-phone.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Col } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight, FaMagnifyingGlass } from 'react-icons/fa6'

const SideBar = () => {
  const pathname = usePathname()

  return (
    <>
      <Col lg={4}>
        <div className="sidebar-area mt-50">
          <div className="_sidebar-widget _search">
            <h3>Search</h3>
            <form action="#" className="_relative">
              <input type="search" placeholder="Search..." />
              <button>
                <FaMagnifyingGlass className="fa-solid" />
              </button>
            </form>
          </div>
          <div className="_sidebar-widget _list mt-40">
            <h3>Categories</h3>
            <div className="sidebar-list">
              <ul>
                <li>
                  <Link href="/single-service/details1" className={pathname === '/single-service/details1' ? 'active' : ''}>
                    SEO Marketing
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/single-service/details2" className={pathname === '/single-service/details2' ? 'active' : ''}>
                    Social Media Strategy
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/single-service/details3" className={pathname === '/single-service/details3' ? 'active' : ''}>
                    Content Marketing
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/single-service/details4" className={pathname === '/single-service/details4' ? 'active' : ''}>
                    Pay-Per-Click Advertising
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/single-service/details5" className={pathname === '/single-service/details5' ? 'active' : ''}>
                    Travel Guide Expertise
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/single-service/details6" className={pathname === '/single-service/details6' ? 'active' : ''}>
                    HR Staffing Agency
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/single-service/details7" className={pathname === '/single-service/details7' ? 'active' : ''}>
                    Insurance Policy
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/single-service/details8" className={pathname === '/single-service/details8' ? 'active' : ''}>
                    Real Estate
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/single-service/details9" className={pathname === '/single-service/details9' ? 'active' : ''}>
                    Startup Agency
                    <span>
                      <FaAngleRight className="fa-solid" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="_sidebar-widget _buttons mt-40">
            <h3>You Still Have A Question</h3>
            <p className="mt-16">If you cannot find answer to your question our FAQ, you can always contact us. Web will answer you shortly!</p>
            <div className="buttons mt-16">
              <Link href="mailto:Infoseoxagency@gmail.com" className="sidebar-btn1">
                <Image src={email} alt="" />
                Infoseoxagency@gmail.com
              </Link>
              <Link href="tel:123-456-7890" className="sidebar-btn2">
                <Image src={phone} alt="" />
                123-456-7890
              </Link>
            </div>
          </div>
          <div className="_sidebar-widget _contact mt-40">
            <h3>Get A Free Quote</h3>
            <div className="_contact-form mt-10">
              <form action="#">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <input type="number" placeholder="Phone Number" />
                <textarea rows={5} placeholder="Your Message" />
                <button className="theme-btn3 mt-20" type="submit">
                  Send{' '}
                  <span className="arrow1">
                    <FaArrowRight className="fa-solid" />
                  </span>
                  <span className="arrow2">
                    <FaArrowRight className="fa-solid" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Col>
    </>
  )
}

export default SideBar
