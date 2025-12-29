import apps from '@/assets/img/apps/cta9-apps.png'
import cta9 from '@/assets/img/bg/cta9-bg.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const CTA = () => {
  return (
    <>
      <div className="cta9" style={{ backgroundImage: `url(${cta9.src})` }}>
        <Container>
          <Row>
            <Col lg={5}>
              <div className="white-heading">
                <h2>Boost Your Brand’s ReachTurn Followers Customers!</h2>
                <p className="mt-16">
                  Whether you're looking to build brand awareness, generate leads, or the boost conversion, our expert of team will craft
                </p>
                <div className="cta9-form">
                  <form action="#">
                    <input type="url" placeholder="Enter Email Address" />
                    <div className="button">
                      <button type="submit" className="theme-btn17">
                        <span className="theme-btn17__shape" />
                        <span className="theme-btn17__shape" />
                        <span className="theme-btn17__shape" />
                        <span className="theme-btn17__shape" />
                        <span className="theme-btn17__text">Subscribe Now</span>
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
              <div className="cta9-apps-image ml-60 sm:ml-0 md:ml-0 sm:mt-30 md:mt-30">
                <Image src={apps} alt="" height={241} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CTA
