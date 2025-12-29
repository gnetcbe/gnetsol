import hero4 from '@/assets/img/bg/hero4-bg.jpg'
import Image from 'next/image'

import animation1 from '@/assets/img/hero/hero4-image1.png'
import animation2 from '@/assets/img/hero/hero4-image2.png'
import animation3 from '@/assets/img/hero/hero4-image3.png'
import animation4 from '@/assets/img/hero/hero4-image4.png'
import animation5 from '@/assets/img/hero/hero4-image5.png'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <div className="hero4" style={{ backgroundImage: `url(${hero4.src})` }}>
        <Container>
          <Row>
            <Col lg={8} className="m-auto text-center">
              <div className="main-heading4">
                <h1 className="text-anime-style-3">Transform Your Business with Cutting-Edge Digital Marketing</h1>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={800}>
                  Unlock the power of online growth with tailored strategies designed to elevate your brand. From SEO to social media, that drive
                  traffic, engagement, and sales.
                </p>
                <div className="form-area" data-aos="fade-up" data-aos-duration={1100}>
                  <form action="#">
                    <div className="single-input">
                      <input type="text" placeholder="Audit Your Website" />
                    </div>
                    <div className="button">
                      <button type="submit" className="theme-btn8">
                        <span className="theme-btn8__shape" />
                        <span className="theme-btn8__shape" />
                        <span className="theme-btn8__shape" />
                        <span className="theme-btn8__shape" />
                        <span className="theme-btn8__text">Boost Now</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
          <div className="hero4-images">
            <Row>
              <Col lg md={6}>
                <div className="hero5-image image1 animate4">
                  <Image src={animation1} alt="" />
                </div>
              </Col>
              <Col lg md={6}>
                <div className="hero5-image image2 animate2">
                  <Image src={animation2} alt="" />
                </div>
              </Col>
              <Col lg md={6}>
                <div className="hero5-image image3 animate3">
                  <Image src={animation3} alt="" />
                </div>
              </Col>
              <Col lg md={6} className="animate1">
                <div className="hero5-image image4">
                  <Image src={animation4} alt="" height={298} />
                </div>
              </Col>
              <Col lg md={6}>
                <div className="hero5-image image5 animate3">
                  <Image src={animation5} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Hero
