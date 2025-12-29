import about1 from '@/assets/img/about/about5-image1.png'
import about2 from '@/assets/img/about/about5-image2.png'
import about3 from '@/assets/img/about/about5-image3.png'
import span5 from '@/assets/img/icons/span5.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <div className="about5 sp" id="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about5-images">
                <Row>
                  <Col lg={6} className="mt-30">
                    <div className="image  reveal">
                      <Image src={about1} alt="" height={612} />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mr-20 md:mr-0 sm:mr-0 md:mt-30 sm:mt-20">
                      <div className="image  reveal">
                        <Image src={about2} alt="" height={288} />
                      </div>
                      <div className="image mt-30  reveal">
                        <Image src={about3} alt="" height={288} />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading5 md:mt-30 sm:mt-30">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span5} alt="" />
                  ABOUT US
                </span>
                <h2 className="text-anime-style-3">Turning Startup Ideas into Reality Success Stories</h2>
                <p className="mt-16" data-aos="fade-left" data-aos-delay={200} data-aos-duration={800}>
                  SEOX Startup Agency is your trusted partner in navigating the complex world of launching and growing a startup. We specialize in
                  offering tailored strategies, cutting-edge tools, and unmatched expertise to turn your vision into a thriving business.
                </p>
                <p className="mt-20" data-aos="fade-left" data-aos-delay={300} data-aos-duration={800}>
                  We specialize in guiding entrepreneurs from the spark of an idea to the realization of their business dreams. With innovative
                  strategies, hands-on support, and a commitment to excellence, we help startups overcome challenges, unlock potential, and carve out
                  a lasting impact in their industries."
                </p>
                <div className="button mt-30" data-aos="fade-left" data-aos-delay={300} data-aos-duration={1000}>
                  <Link className="theme-btn10" href="/about">
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
