import hero9 from '@/assets/img/bg/hero9-bg.png'
import img1 from '@/assets/img/hero/hero9-image1.png'
import img2 from '@/assets/img/hero/hero9-image2.png'
import span9 from '@/assets/img/icons/span9.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero9 _relative" style={{ backgroundImage: `url(${hero9.src})` }}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="main-heading9">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span9} alt="" />
                  Expert Social Media Strategies
                </span>
                <h1 className="text-anime-style-3">Charge Your Brand With Social Media</h1>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={800}>
                  Our expert-driven social media marketing strategies help connect with audiences, increase brand awareness, drive
                </p>
                <div className="hero9-form" data-aos="fade-right" data-aos-duration={1000}>
                  <form action="#">
                    <input type="url" placeholder="Enter Email Address" />
                    <div className="button">
                      <button type="submit" className="theme-btn17">
                        <span className="theme-btn17__shape" />
                        <span className="theme-btn17__shape" />
                        <span className="theme-btn17__shape" />
                        <span className="theme-btn17__shape" />
                        <span className="theme-btn17__text">Boost My Brand</span>
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero9-images">
                <div className="image1 animate3 overflow-hidden _relative reveal">
                  <Image src={img1} alt="" />
                </div>
                <div className="image2 animate1">
                  <Image src={img2} alt="" />
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
