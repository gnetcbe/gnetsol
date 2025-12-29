import hero2 from '@/assets/img/bg/hero2-bg.jpg'
import apps from '@/assets/img/hero/hero2-apps.png'
import main from '@/assets/img/hero/hero2-main-image.png'
import shape1 from '@/assets/img/shapes/hero2-shape1.png'
import shape2 from '@/assets/img/shapes/hero2-shape2.png'
import shape3 from '@/assets/img/shapes/hero2-shape3.png'
import shape4 from '@/assets/img/shapes/hero2-shape4.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero2" style={{ backgroundImage: `url(${hero2.src})` }}>
        <Container>
          <Row>
            <Col lg={8} className="m-auto text-center">
              <div className="main-heading2">
                <h1 className="text-anime-style-3">Elevate Your Brand with Social Media Excellence</h1>
                <p className="mt-16">
                  we help your brand stand out and thrive. Our expert social media marketing strategies are designed to boost engagement, drive
                  traffic, and turn followers into loyal customers.
                </p>
                <div className="buttons">
                  <Link className="theme-btn3" href="/contact">
                    Get Started Now
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                  <Link className="theme-btn4" href="/about">
                    Learn More
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="images-all text-center _relative">
                <div className="image1">
                  <Image src={main} alt="" />
                </div>
                <div className="apps-image">
                  <Image src={apps} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={12} className=" _relative">
              <div className="hero2-shapes">
                <div className="sec-shape1 animate2">
                  <Image src={shape1} alt="" />
                </div>
                <div className="sec-shape2 animate3">
                  <Image src={shape2} alt="" />
                </div>
                <div className="sec-shape3 animate1">
                  <Image src={shape3} alt="" />
                </div>
                <div className="sec-shape4 animate2">
                  <Image src={shape4} alt="" />
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
