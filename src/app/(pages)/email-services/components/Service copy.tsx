import span3 from '@/assets/img/icons/span3.svg'
import ser1 from '@/assets/img/service/service1-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { serviceData } from '../data'

const Service = () => {
  return (
    <>
      <div className="service1 sp sp sec-bg2">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading2">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="" />
                  WHAT WE DO{' '}
                </span>
                <h2 className="text-anime-style-3">Transforming Ideas into Impactful Results</h2>
                <p className="mt-16">
                  At SEOX, we specialize in crafting innovative and tailored solutions to empower businesses across a wide range of industries. From
                  nurturing startups and streamlining HR staffing to boosting digital presence through social media marketing and promoting
                  sustainability with solar energy solutions, our expertise knows no bounds.{' '}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="overflow-hidden">
                <div className="service1-image image-anime reveal md:mt-30 sm:mt-30">
                  <Image src={ser1} alt="" />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {serviceData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.delay}>
                <div className="about-service-box mt-30">
                  <div>
                    <div className="num">
                      <p>{item.number}</p>
                    </div>
                  </div>
                  <div className="heading2">
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

export default Service
