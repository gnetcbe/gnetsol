'use client'
import hero7 from '@/assets/img/hero/hero7-image.png'
import brand1 from '@/assets/img/others/hero3-brand1.png'
import brand2 from '@/assets/img/others/hero3-brand2.png'
import GlightBox from '@/components/GlightBox'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaStar } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero7">
        <Container>
          <GlightBox>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="main-heading7">
                  <h1 className="text-anime-style-3">
                    Transform Growth with Data-Driven
                    <span className="unic">Affiliate</span> Marketing
                  </h1>
                  <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                    Unlock your brand's potential with tailored affiliate strategies designed to scale revenue and build impactful partnerships.
                  </p>
                  <div className="buttons mt-30" data-aos="fade-right" data-aos-duration={1100}>
                    <Link href="/about" className="theme-btn13">
                      Start Your Growth Journey
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </Link>
                    <div className="video-buttton7 play-btn">
                      <a
                        id="play-video"
                        href="https://www.youtube.com/watch?v=Y8XpQpW5OVY"
                        className="glightbox video-play-button video popup-video"
                        tabIndex={-1}>
                        <span />
                      </a>
                      <p>Play Video</p>
                    </div>
                  </div>
                  <div className="review-area-all7" data-aos="fade-right" data-aos-duration={1300}>
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
                        <div className="review-on-image sm:mt-20">
                          <Image src={brand2} alt="" />
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="review-stars-area sm:mt-20">
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
              <Col lg={6}>
                <div className="hero7-images" data-aos="zoom-out" data-aos-duration={900}>
                  <Image src={hero7} alt="" />
                </div>
              </Col>
            </Row>
          </GlightBox>
        </Container>
      </div>
    </>
  )
}

export default Hero
