import bg9 from '@/assets/img/bg/sec-bg9.jpg'
import icon4 from '@/assets/img/icons/service9-icon4.png'
import icon5 from '@/assets/img/icons/service9-icon5.png'
import span9 from '@/assets/img/icons/span9.svg'
import thumb from '@/assets/img/service/service9-thum.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { serviceData } from '../data'

const Service = () => {
  return (
    <>
      <div className="service9 sp bg-cover" style={{ backgroundImage: `url(${bg9.src})` }}>
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading9">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span9} alt="" /> Full-Service Social Media
                </span>
                <h2 className="text-anime-style-3">Social Media Growth Solutions</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {serviceData.map((item, idx) => (
              <Col md={6} lg={4} key={idx} data-aos="zoom-in-up" data-aos-duration={item.duration}>
                <div className="service9-box mt-90">
                  <div className="icon">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="content heading9">
                    <h4>
                      <Link href="/single-service/details1">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.description}</p>
                    <a href="/single-service/details1" className="theme-btn18 mt-24">
                      <span className="theme-btn18__shape" />
                      <span className="theme-btn18__shape" />
                      <span className="theme-btn18__shape" />
                      <span className="theme-btn18__shape" />
                      <span className="theme-btn18__text">Learn More </span>
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </a>
                  </div>
                </div>
              </Col>
            ))}

            <Col md={12} lg={5} data-aos="zoom-in-up" data-aos-duration={1100}>
              <div className="service9-box mt-90">
                <div className="icon">
                  <Image src={icon4} alt="" />
                </div>
                <div className="content heading9">
                  <h4>
                    <Link href="/single-service/details1">Influencer Marketing Partnerships</Link>
                  </h4>
                  <p className="mt-16">
                    Leverage the power of influencers to amplify your brand’s reach and credibility. At SEOX, we connect you with the right influencer
                    who align with brand.
                  </p>
                  <Link href="/single-service/details1" className="theme-btn18 mt-24">
                    <span className="theme-btn18__shape" />
                    <span className="theme-btn18__shape" />
                    <span className="theme-btn18__shape" />
                    <span className="theme-btn18__shape" />
                    <span className="theme-btn18__text">Learn More </span>
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
            <Col md={12} lg={7} data-aos="zoom-in-up" data-aos-duration={1200}>
              <div className="service9-box mt-90 add_thumb _relative">
                <Row>
                  <Col lg={6}>
                    <div className="_relative">
                      <div className="icon">
                        <Image src={icon5} alt="" />
                      </div>
                      <div className="content heading9">
                        <h4>
                          <Link href="/single-service/details1">Video And Reels Marketing</Link>
                        </h4>
                        <p className="mt-16">
                          Our team carefully selects, negotiates, manages partnerships with influencers across various social media platforms
                        </p>
                        <a href="/single-service/details1" className="theme-btn18 mt-24">
                          <span className="theme-btn18__shape" />
                          <span className="theme-btn18__shape" />
                          <span className="theme-btn18__shape" />
                          <span className="theme-btn18__shape" />
                          <span className="theme-btn18__text">Learn More </span>
                          <span className="arrow1">
                            <FaArrowRight className="fa-solid" />
                          </span>
                          <span className="arrow2">
                            <FaArrowRight className="fa-solid" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="service-box-thum _relative">
                      <Image src={thumb} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
