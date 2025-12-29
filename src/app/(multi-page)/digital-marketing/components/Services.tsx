import span5 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { serviceData, serviceData2 } from '../data'

const Services = () => {
  return (
    <>
      <div className="service4 sp sec-bg3">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading4">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span5} alt="" /> OUR SERVICES
                </span>
                <h2 className="text-anime-style-3">Our Expertise Your Growth</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-end button md:mt-20 sm:mt-20 md:text-start sm:text-start">
                <Link href="/service" className="theme-btn8">
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__text">View All Services </span>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {serviceData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={item.count}>
                <div className="service4-box mt-30">
                  <div className="icon">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="heading4 mt-20">
                    <h4>
                      <Link href="/single-service/details1">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.description}</p>
                    <Link href="/single-service/details1" className="learn text-16 leading-16 font-semibold title1">
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

            {serviceData2.map((item, idx) => (
              <Col lg={6} md={6} key={idx} data-aos="zoom-in-up" data-aos-duration={800} data-aos-delay={item.count}>
                <div className="service4-box mt-30">
                  <div className="icon">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="heading4 mt-20">
                    <h4>
                      <Link href="/single-service/details1">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.description}</p>
                    <Link href="/single-service/details1" className="learn text-16 leading-16 font-semibold title1">
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
        </Container>
      </div>
    </>
  )
}

export default Services
