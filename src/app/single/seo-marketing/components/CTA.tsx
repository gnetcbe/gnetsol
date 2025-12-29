import bg from '@/assets/img/bg/cta8-bg.jpg'
import ctaimg from '@/assets/img/shapes/cta8-image1.png'
import cta8 from '@/assets/img/shapes/cta8-image2.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const CTA = () => {
  return (
    <>
      <div className="cta8 bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="cta8-image left-image">
                <Image src={ctaimg} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="cta8-main">
                <div className="white-heading text-center">
                  <h2>Transform Your Business with Our Proven Digital Strategies</h2>
                  <p className="mt-16">
                    Whether you’re looking to boost your search rankings, expand digital presence, the increase conversions, our team of experts is
                    here help.
                  </p>
                  <div className="buttons mt-40">
                    <Link href="/about" className="theme-btn15">
                      Boost Your Online Presence
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </Link>
                    <a href="/contact" className="theme-btn16 sm:mt-20 ml-20 sm:ml-0">
                      Get In Touch
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="cta8-image right-image text-end">
                <Image src={cta8} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CTA
