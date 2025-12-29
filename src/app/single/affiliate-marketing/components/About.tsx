import aboutimg7 from '@/assets/img/about/about7-image.png'
import span7 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <div className="about7" id="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about7-image reveal">
                <Image src={aboutimg7} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading7 md:mt-30 sm:mt-30">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span7} alt="" /> ABOUT US
                </span>
                <h2 className="text-anime-style-3">Crafting Growth Through Strategic Partnerships</h2>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={800} data-aos-delay={200}>
                  We believe in the power of partnerships to drive meaningful results. As a dedicated affiliate marketing agency, our mission is to
                  connect brands with top-tier affiliates to create strategies that deliver measurable success.
                </p>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                  We specialize in crafting performance-based affiliate marketing strategies that deliver measurable results. With a proven track
                  record of creating dynamic partnerships, we help businesses achieve scalable growth while enhancing their online presence.
                </p>
                <div className="button mt-30" data-aos="fade-left" data-aos-duration={800} data-aos-delay={400}>
                  <Link href="/about" className="theme-btn13">
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About
