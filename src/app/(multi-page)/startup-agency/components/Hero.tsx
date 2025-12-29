import bgimg from '@/assets/img/bg/hero10-bg.jpg'
import herobg from '@/assets/img/bg/hero10-image-bg.png'
import hero10 from '@/assets/img/hero/hero10-image.png'
import span10 from '@/assets/img/icons/span10.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="hero10 _relative bg-cover" style={{ backgroundImage: `url(${bgimg.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="main-heading10">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span10} alt="" />
                  Empowering Startups Purpose
                </span>
                <h1 className="text-anime-style-3">Driven by Creativity Powered by Results</h1>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={800}>
                  At our core, we believe that creativity isn’t just about bold idea about driving of real, measurable outcome combine.
                </p>
                <div className="button mt-30" data-aos="fade-right" data-aos-duration={800}>
                  <Link href="#" className="theme-btn19">
                    Launch Your Growth
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
            <Col lg={6}>
              <div className="hero10-images">
                <div className="image1 animate3 _relative overflow-hidden reveal">
                  <Image src={hero10} alt="" height={346} />
                </div>
                <div className="image2">
                  <Image src={herobg} alt="" />
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
