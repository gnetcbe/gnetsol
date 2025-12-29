import span5 from '@/assets/img/icons/span5.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { service } from '../data'

const Service = () => {
  return (
    <>
      <div className="service5 sp sec-bg4">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="heading5">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span5} alt="" />
                  OUR SERVICES
                </span>
                <h2 className="text-anime-style-3">Fuel Your Growth with Our Expertise</h2>
              </div>
            </Col>
            <Col lg={4}>
              <div
                className="button text-end sm:text-start md:text-start md:mt-30 sm:mt-30"
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-delay={200}
                data-duration={900}>
                <Link className="theme-btn10" href="/service">
                  View All Services
                  <span className="arrow1">
                    <FaArrowRight className="fa-solid" />
                  </span>
                  <span className="arrow2">
                    <FaArrowRight className="fa-solid" />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {service.map((item, idx) => (
              <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={1000} data-aos-delay={item.count}>
                <div className="service5-box mt-30">
                  <div className="image">
                    <Image src={item.image} alt="" height={430} />
                  </div>
                  <div className="content-area">
                    <div className="num">0{item.number}</div>
                    <Link href="/single-service/details1" className="arrow">
                      <FaArrowRight className="fa-regular" />
                    </Link>
                    <h4>
                      <Link href="/single-service/details1">{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
