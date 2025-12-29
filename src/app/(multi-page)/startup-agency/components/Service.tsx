import span10 from '@/assets/img/icons/span10.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { serviceData } from '../data'

const Service = () => {
  return (
    <>
      <div className="service10 sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading10">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span10} alt="" /> our Innovative Solutions
                </span>
                <h2 className="text-anime-style-3">Fueling Startup Growth with Tailored Services</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-20">
            {serviceData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={1000} ata-aos-delay={item.delay}>
                <div className="service10-box mt-60">
                  <div className="image">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="content heading10">
                    <h4>
                      <Link href="/single-service/details1">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.description}</p>
                    <Link className="learn2" href="/single-service/details1">
                      <span className="arrow-all">
                        <span className="arrow1">
                          <FaArrowRight className="fa-regular" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-regular" />
                        </span>
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

export default Service
