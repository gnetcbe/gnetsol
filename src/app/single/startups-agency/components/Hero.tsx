import hero5 from '@/assets/img/bg/hero5-bg.jpg'
import reviews from '@/assets/img/hero/hero5-reviews-img.png'
import span3 from '@/assets/img/icons/span3.svg'
import shape1 from '@/assets/img/shapes/hero5-shape1.png'
import shape2 from '@/assets/img/shapes/hero5-shape2.png'
import shape from '@/assets/img/shapes/hero5-title-shape.png'
import GlightBox from '@/components/GlightBox'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaStar } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero5" style={{ backgroundImage: `url(${hero5.src})` }}>
        <div className="hero5-bg">
          <Container>
            <GlightBox>
              <Row className="align-items-center">
                <Col lg={5}>
                  <div className="main-heading5">
                    <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                      <Image src={span3} alt="" />
                      SEOX STARTUP AGENCY
                    </span>
                    <h1>
                      <span className="unic-text1">
                        Empowering <Image src={shape} alt="" width={79} />
                      </span>
                      <span className="unic-text2">Startups</span> to Scale Beyond Limits
                    </h1>
                    <div className="buttons">
                      <Link className="theme-btn10" href="/contact">
                        Get Started Now
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </Link>
                      <div className="video-buttton4 play-btn">
                        <a
                          id="play-video"
                          href="https://www.youtube.com/watch?v=Y8XpQpW5OVY"
                          className="glightbox video-play-button video popup-video">
                          <span />
                        </a>
                        <p>Play Video</p>
                      </div>
                    </div>
                    <div className="reviews-area">
                      <div className="review-image">
                        <Image src={reviews} alt="" />
                      </div>
                      <div className="review-text">
                        <ul>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="text">5.0</li>
                        </ul>
                        <p>
                          Rated Best Over <b>15.7k</b> Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={7} className=" _relative">
                  <div className="hero5-images">
                    <div className="shape1 animate3">
                      <Image src={shape1} alt="" />
                    </div>
                    <div className="shape2 animate1">
                      <Image src={shape2} alt="" />
                    </div>
                  </div>
                </Col>
              </Row>
            </GlightBox>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Hero
