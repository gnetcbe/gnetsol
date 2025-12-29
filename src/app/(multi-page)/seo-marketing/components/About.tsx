import about8 from '@/assets/img/about/about8-image.png'
import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <div className="about8 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about8-image _relative overflow-hidden reveal">
                <Image src={about8} alt="" height={523} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading8 ml-60 sm:ml-0 md:ml-0 sm:mt-30 md:mt-30">
                <span className="sub-title1" data-aos="fade-left" data-aos-duration={800}>
                  <Image src={span1} alt="" /> Your Digital Growth Partners
                </span>
                <h2 className="text-anime-style-3">Building Success Through Innovation and Expertise</h2>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={800}>
                  At SEOX, we believe that success in the digital age is driven by to perfect blend the creativity, strategy, cutting-edge technology.
                </p>
                <div className="about8-progress-area" data-aos="fade-left" data-aos-duration={1200}>
                  <div className="progress-container">
                    <span className="text">
                      <strong>Research And Analysis</strong>
                    </span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '90%' }} />
                    </div>
                    <span className="num">
                      <strong>90%</strong>
                    </span>
                  </div>
                  <div className="progress-container">
                    <span className="text">
                      <strong>Strategy Development</strong>
                    </span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '90%' }} />
                    </div>
                    <span className="num">
                      <strong>90%</strong>
                    </span>
                  </div>
                </div>
                <div className="button mt-40" data-aos="fade-left" data-aos-duration={1100}>
                  <Link href="/about" className="theme-btn14">
                    See What Drives Us
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
