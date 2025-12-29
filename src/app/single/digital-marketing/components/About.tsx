import about1 from '@/assets/img/about/about4-image1.png'
import about3 from '@/assets/img/about/about4-image3.png'
import span1 from '@/assets/img/icons/span1.svg'
import shape from '@/assets/img/shapes/about4-images-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <div className="about4 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about4-images">
                <div className="image1 image-anime reveal">
                  <Image src={about1} alt="" />
                </div>
                <div className="image2 image-anime reveal">
                  <Image src={about3} alt="" />
                </div>
                <div className="shape">
                  <Image src={shape} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading4 ml-40 sm:ml-0 md:ml-0">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> ABOUT US
                </span>
                <h2 className="text-anime-style-3">Your Trusted Partner in Digital Growth</h2>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={800}>
                  With years of experience and a team of creative minds, our digital marketing agency specializes in helping businesses thrive in the
                  digital age. We combine innovation, data-driven insights, and a personalized approach to craft strategies that resonate with your
                  audience and achieve your goals.
                </p>
                <div className="about4-service-list" data-aos="fade-left" data-aos-duration={1000}>
                  <h5>Our Best Service Benefits :</h5>
                  <Row>
                    <Col md={5}>
                      <div className="list">
                        <ul>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            Digital Marketing
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            Marketing Agency
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="list">
                        <ul>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            SEO Optimization
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            First Working Process
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="button mt-30" data-aos="fade-left" data-aos-duration={1100}>
                  <Link href="/about" className="theme-btn8">
                    <span className="theme-btn8__shape" />
                    <span className="theme-btn8__shape" />
                    <span className="theme-btn8__shape" />
                    <span className="theme-btn8__shape" />
                    <span className="theme-btn8__text">Learn More </span>
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
