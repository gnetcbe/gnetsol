import ser1 from '@/assets/img/service/service5-image1.png'
import ser2 from '@/assets/img/service/service5-image2.png'
import ser3 from '@/assets/img/service/service5-image3.png'
import ser4 from '@/assets/img/service/service5-image4.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Service = () => {
  return (
    <>
      <div className="service sp sec-bg1">
        <Container>
          <Row>
            <Col md={6} className="m-auto text-center">
              <div className="heading2">
                <h2>More Services</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            <Col lg={3} md={6}>
              <div className="service-page-box mt-30">
                <div className="image">
                  <Image src={ser1} alt="" height={430} />
                </div>
                <div className="content-area">
                  <div className="num">01</div>
                  <Link href="/single-service/details1" className="arrow">
                    <FaArrowRight className="fa-regular" />
                  </Link>
                  <h4>
                    <Link href="/single-service/details1">Business Strategy</Link>
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="service-page-box mt-30">
                <div className="image">
                  <Image src={ser2} alt="" height={430} />
                </div>
                <div className="content-area">
                  <div className="num">02</div>
                  <Link href="/single-service/details1" className="arrow">
                    <FaArrowRight className="fa-regular" />
                  </Link>
                  <h4>
                    <Link href="/single-service/details1">Business Strategy</Link>
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="service-page-box mt-30">
                <div className="image">
                  <Image src={ser3} alt="" height={430} />
                </div>
                <div className="content-area">
                  <div className="num">03</div>
                  <Link href="/single-service/details1" className="arrow">
                    <FaArrowRight className="fa-regular" />
                  </Link>
                  <h4>
                    <Link href="/single-service/details1">Business Strategy</Link>
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="service-page-box mt-30">
                <div className="image">
                  <Image src={ser4} alt="" height={430} />
                </div>
                <div className="content-area">
                  <div className="num">04</div>
                  <Link href="/single-service/details1" className="arrow">
                    <FaArrowRight className="fa-regular" />
                  </Link>
                  <h4>
                    <Link href="/single-service/details1">Business Strategy</Link>
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
