import bg from '@/assets/img/bg/inner-hero-bg.jpg'
import errorimg from '@/assets/img/others/error.png'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa6'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Pricing Plan',
  icons: {
    icon: logo.src,
  },
}

const Error = () => {
  return (
    <>
      <main>
        <div className="inner-hero" style={{ backgroundImage: `url(${bg.src})` }}>
          <Container>
            <Row>
              <Col lg={8} className="m-auto text-center">
                <div className="inner-main-heading">
                  <h1>Pricing Plan</h1>
                  <div className="breadcrumbs-pages">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li className="angle">
                        <FaAngleRight className="fa-solid" />
                      </li>
                      <li>Pricing Plan</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="error sp">
          <Container>
            <Row>
              <Col lg={7} className="m-auto text-center">
                <div className="error-image">
                  <Image src={errorimg} alt="" />
                </div>
                <div className="error-content-area mt-50 heading2">
                  <h2> Sorry! Page Not Found!</h2>
                  <p className="mt-16">
                    Sorry, the page you are looking for doesn’t exist or <br /> has been moved. Here are some helpful links.
                  </p>
                  <div className="button mt-30">
                    <Link className="theme-btn3" href="/">
                      Back To Home{' '}
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  )
}

export default Error
