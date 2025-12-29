import cta4 from '@/assets/img/others/cta4-image.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const CTA = () => {
  return (
    <>
      <div className="cta6">
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="cta4-image image-anime reveal">
                <Image height={271} className="w-full" src={cta4} alt="" />
              </div>
            </Col>
            <Col lg={8}>
              <div className="cta6-form-area">
                <div className="heading6">
                  <h2>Join Our Digital Marketing Insider Newsletter</h2>
                </div>
                <div className="form-area">
                  <form action="#">
                    <div className="single-input">
                      <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <div className="button">
                      <button type="submit" className="theme-btn12">
                        <span className="theme-btn12__shape" />
                        <span className="theme-btn12__shape" />
                        <span className="theme-btn12__shape" />
                        <span className="theme-btn12__shape" />
                        <span className="theme-btn12__text">Subscribe</span>
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
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CTA
