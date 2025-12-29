'use client'
import span1 from '@/assets/img/icons/span1.svg'
import ser1 from '@/assets/img/service/service1-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { service } from '../data'

const Services = () => {
  return (
    <>
      <div className="service1 sp sp sec-bg1">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> OUR SERVICES
                </span>
                <h2 className="text-anime-style-3">
                  Results-Driven SEO &amp; Digital Marketing <br /> Services
                </h2>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                  At SEOX, we provide tailored SEO and digital marketing solutions designed to boost your online visibility, drive targeted traffic,
                  and maximize conversions.&nbsp;
                </p>
                <div data-aos="fade-right" data-aos-duration={1000}>
                  <Link href="/service" className="theme-btn1 mt-30">
                    View All Services
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="overflow-hidden">
                <div className="service1-image reveal md:mt-30 sm:mt-30">
                  <Image src={ser1} alt="" />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {service.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.count}>
                <div className="service1-box mt-30">
                  <div>
                    <div className="num">
                      <p>{item.number}</p>
                    </div>
                  </div>
                  <div className="heading1">
                    <h5>
                      <Link href="/single-service/details1">{item.title}</Link>
                    </h5>
                    <p className="mt-16">{item.comment}</p>
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

export default Services
