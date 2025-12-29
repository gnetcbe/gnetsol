import hero3 from '@/assets/img/hero/hero3-main-image.png'
import imgcall from '@/assets/img/icons/hero3-call.svg'
import span4 from '@/assets/img/icons/span4.svg'
import brand1 from '@/assets/img/others/hero3-brand1.png'
import brand2 from '@/assets/img/others/hero3-brand2.png'
import shape from '@/assets/img/shapes/hero3-heading-shape.png'
import shape1 from '@/assets/img/shapes/hero3-shape1.png'
import shape2 from '@/assets/img/shapes/hero3-shape2.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero3">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="main-heading3">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span4} alt="" /> SEOX ADVERTISING AGENCY
                </span>
                <h1 className="text-anime-style-3">Transform Water Bottles into Brand Ambassadors</h1>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                  Designed with premium materials and customizable options, they’re eco-friendly, durable, and stylish. Let your brand make a
                  statement, one sip at a time, while showcasing your commitment to quality and sustainability.
                  <Image src={shape} alt="" />
                </p>
                <div className="buttons mt-30" data-aos="fade-right" data-aos-duration={1100}>
                  <Link className="theme-btn5" href="/contact">
                    Get Started Now
                  </Link>
                  <Link href="tel:123-456-7890" className="hero3-call-btn">
                    <Image src={imgcall} alt="" />
                    123-456-7890
                  </Link>
                </div>
                <div className="review-area-all" data-aos="fade-right" data-aos-duration={1300}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <div className="award-area">
                        <div className="award-image">
                          <Image src={brand1} alt="" />
                        </div>
                        <div className="award-content">
                          <p>Award Winning Agency</p>
                          <h6>
                            <span>2500+</span> Active Clients
                          </h6>
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="review-on-image">
                        <Image src={brand2} alt="" />
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="review-stars-area">
                        <ul>
                          <li>
                            <FaStar className="fa-solid" />
                          </li>
                          <li>
                            <FaStar className="fa-solid" />
                          </li>
                          <li>
                            <FaStar className="fa-solid" />
                          </li>
                          <li>
                            <FaStar className="fa-solid" />
                          </li>
                          <li>
                            <FaStar className="fa-solid" />
                          </li>
                        </ul>
                        <p className="stars-text">1300+ Reviews</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero3-images">
                <div className="shape1">
                  <Image src={shape1} alt="" />
                </div>
                <div className="shape2 animate3">
                  <Image src={shape2} alt="" />
                </div>
                <div className="main-image animate1">
                  <Image src={hero3} alt="" height={603} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
