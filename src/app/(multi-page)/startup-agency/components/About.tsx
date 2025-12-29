import about10 from '@/assets/img/about/about10-image.png'
import span10 from '@/assets/img/icons/span10.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <div className="about10 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about10-image overflow-hidden reveal _relative">
                <Image src={about10} alt="" height={603} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading10 ml-60">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span10} alt="" /> Crafting Custom Strategies
                </span>
                <h2 className="text-anime-style-3">Empowering Startups to Think Bigger Go Further</h2>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={800}>
                  At our core, we believe that every startup has the potential to make a lasting impact. That’s why we’re dedicated to helping
                  ambitious entrepreneurs break boundaries, challenge status.
                </p>
                <Row data-aos="fade-left" data-aos-duration={1000}>
                  <Col md xs={12}>
                    <div className="about10-icon-box">
                      <div className="icon">
                        <FaCheck className="fa-solid" />
                      </div>
                      <div className="text">
                        <p> Strategic Growth Support</p>
                      </div>
                    </div>
                  </Col>
                  <Col md xs={12}>
                    <div className="about10-icon-box">
                      <div className="icon">
                        <FaCheck className="fa-solid" />
                      </div>
                      <div className="text">
                        <p> Innovative Solutions</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="button mt-30" data-aos="fade-left" data-aos-duration={1200}>
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
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About
