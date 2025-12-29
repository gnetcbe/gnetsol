import hero8 from '@/assets/img/bg/hero8-bg.jpg'
import hero8main from '@/assets/img/hero/hero8-main-image.png'
import span3 from '@/assets/img/icons/span3.svg'
import hero1 from '@/assets/img/shapes/hero8-image1.png'
import shape from '@/assets/img/shapes/hero8-shape.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero8 bg-cover _relative" style={{ backgroundImage: `url(${hero8.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="main-heading8">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="" />
                  SEO Marketing Agency
                </span>
                <h1 className="text-anime-style-3">The World-Class SEO &amp; Marketing</h1>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={800}>
                  At SEOX, we specialize transforming businesses through innovative SEO Digital Marketing strategic In of today’s
                </p>
                <div className="hero8-form" data-aos="fade-right" data-aos-duration={1000}>
                  <form action="#">
                    <input type="url" placeholder="Website URL" />
                    <div className="button">
                      <button type="submit" className="theme-btn14">
                        Audit Now
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
            <Col lg={7}>
              <div className="hero8-images">
                <div className="image reveal _relative overflow-hidden">
                  <Image src={hero8main} alt="" />
                </div>
                <div className="shape animate3">
                  <Image src={hero1} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Image src={shape} alt="" className="sec-shape animate1" />
      </div>
    </>
  )
}

export default Hero
