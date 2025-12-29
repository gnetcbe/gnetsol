import cta4 from '@/assets/img/others/cta4-image.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <>
      <div className="cta4">
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="cta4-image image-anime reveal">
                <Image className="w-full" src={cta4} alt="" height={271} />
              </div>
            </Col>
            <Col lg={8}>
              <div className="cta4-form-area">
                <div className="white-heading">
                  <h2>Join Our Digital Marketing Insider Newsletter</h2>
                </div>
                <div className="form-area">
                  <form action="#">
                    <div className="single-input">
                      <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <div className="button">
                      <button type="submit" className="theme-btn9">
                        <span className="theme-btn9__shape" />
                        <span className="theme-btn9__shape" />
                        <span className="theme-btn9__shape" />
                        <span className="theme-btn9__shape" />
                        <span className="theme-btn9__text">Subscribe</span>
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
