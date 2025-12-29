import span5 from '@/assets/img/icons/span9.svg'
import shape from '@/assets/img/shapes/about9-count-shape.png'
import about1 from '@/assets/img/shapes/about9-shape1.png'
import about2 from '@/assets/img/shapes/about9-shape2.png'
import about3 from '@/assets/img/shapes/about9-shape3.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <div className="about9 sp">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about9-images">
                <div className="shape1 overflow-hidden _relative reveal">
                  <Image src={about1} alt="" />
                </div>
                <div className="shape2">
                  <Image src={about2} alt="" />
                </div>
                <div className="shape3">
                  <Image src={about3} alt="" />
                </div>
                <div className="shape4">
                  <div className="num">
                    <h3>10+</h3>
                  </div>
                  <div className="content">
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading9">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span5} alt="" /> Crafting Custom Strategies
                </span>
                <h2 className="text-anime-style-3">Driving Brands Forward with A Smart Marketing</h2>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={800}>
                  Our team experts specializes in enhancing your online presence, ensuring that you brand not only gets noticed but also converts.
                </p>
                <div className="about9-counters" data-aos="fade-left" data-aos-duration={1000}>
                  <Row className="">
                    <Col md={3} xs={6}>
                      <div className="count-box">
                        <h3>24</h3>
                        <p>Countries</p>
                        <Image src={shape} alt="" className="count-shape" />
                      </div>
                    </Col>
                    <Col md={3} xs={6}>
                      <div className="count-box">
                        <h3>11k</h3>
                        <p>Countries</p>
                        <Image src={shape} alt="" className="count-shape" />
                      </div>
                    </Col>
                    <Col md={3} xs={6}>
                      <div className="count-box">
                        <h3>10k</h3>
                        <p>Satisfied Client</p>
                        <Image src={shape} alt="" className="count-shape" />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="button mt-40" data-aos="fade-left" data-aos-duration={1200}>
                  <Link href="#" className="theme-btn17">
                    <span className="theme-btn17__shape" />
                    <span className="theme-btn17__shape" />
                    <span className="theme-btn17__shape" />
                    <span className="theme-btn17__shape" />
                    <span className="theme-btn17__text">Boost My Social Media</span>
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
    </>
  )
}

export default About
