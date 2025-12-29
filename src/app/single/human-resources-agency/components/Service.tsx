'use client'
import ser1 from '@/assets/img/icons/service6-icon1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { service2, serviceData } from '../data'

const Service = () => {
  return (
    <>
      <div className="service6 sp sec-bg5" id="service">
        <Container>
          <Row className=" align-items-center">
            <Col lg={6}>
              <div className="heading6 _mt-50">
                <span className="sub-title">Service</span>
                <h2 className="text-anime-style-3">Flexible Staffing Services for Every Need</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="buttons text-end sm:text-start md:text-start sm:mt-20 md:mt-20" data-aos="fade-left" data-aos-duration={1100}>
                <Link href="/service" className="theme-btn11">
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__text">View All Service </span>
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
          <Row className=" mt-30">
            <Col md={6} lg={7}>
              <Row>
                <Col lg={12}>
                  <div className="service6-box mt-30">
                    <div className="icon">
                      <Image src={ser1} alt="" />
                    </div>
                    <div className="content heading6">
                      <h4>
                        <Link href="/single-service/details1">Executive Search and Leadership Staffing</Link>
                      </h4>
                      <p className="mt-16">
                        At Seox we understand the importance strong leadership. Our Executive Search service focuses on identifying and placing
                        top-level executives and senior leaders who align with your company’s vision and values.
                      </p>
                      <Link href="/blog-details" className="learn">
                        Read More
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
                {serviceData.map((item, idx) => (
                  <Col lg={6} key={idx}>
                    <div className="service6-box mt-30">
                      <div className="icon">
                        <Image src={item.image} alt="" />
                      </div>
                      <div className="content heading6">
                        <h4>
                          <Link href="/single-service/details1">{item.title}</Link>
                        </h4>
                        <p className="mt-16">{item.description}</p>
                        <Link href="/blog-details" className="learn">
                          Read More
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
                ))}
              </Row>
            </Col>
            <Col md={6} lg={5}>
              {service2.map((item, idx) => (
                <div key={idx} className="service6-box mt-30">
                  <div className="icon">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="content heading6">
                    <h4>
                      <Link href="/single-service/details1">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.description}</p>
                    <Link href="/blog-details" className="learn">
                      Read More
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
