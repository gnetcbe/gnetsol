'use client'
import hero6 from '@/assets/img/hero/hero6-bg.jpg'
import span3 from '@/assets/img/icons/span3.svg'
import GlightBox from '@/components/GlightBox'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { heroData } from '../data'

const Hero = () => {
  return (
    <>
      <div className="hero6" style={{ backgroundImage: `url(${hero6.src})` }}>
        <Container>
          <GlightBox>
            <Row>
              <Col lg={6}>
                <div className="main-heading6">
                  <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                    <Image src={span3} alt="" />
                    SEOX STARTUP AGENCY
                  </span>
                  <h1>Strata Recruitment for Lasting Impact</h1>
                  <p className="mt-16">
                    At Seox we specialize in connecting top-tier talent with forward-thinking companies, driving growth &amp; success across
                    industries.
                  </p>
                  <div className="buttons">
                    <Link href="/about" className="theme-btn11">
                      <span className="theme-btn11__shape" />
                      <span className="theme-btn11__shape" />
                      <span className="theme-btn11__shape" />
                      <span className="theme-btn11__shape" />
                      <span className="theme-btn11__text">Get Started Today</span>
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </Link>
                    <div className="video-buttton6 play-btn">
                      <a id="play-video" href="https://www.youtube.com/watch?v=Y8XpQpW5OVY" className="glightbox video-play-button video popup-video">
                        <span />
                      </a>
                      <p>Play Video</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </GlightBox>
        </Container>
        <div className="hero6-bottom-slider">
          <section className="hero10-benar">
            <Container fluid className="p-0">
              <Row>
                <Col xs={12}>
                  <div className="marquee-wrap">
                    <div className="marquee-text">
                      {heroData.map((item, idx) => (
                        <div key={idx} className="brand-single-box">
                          <Image src={item.image} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="slider-after" />
            </Container>
          </section>
        </div>
      </div>
    </>
  )
}

export default Hero
