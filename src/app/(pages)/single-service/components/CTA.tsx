import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaEnvelope, FaLink } from 'react-icons/fa6'

const CTA = () => {
  return (
    <>
      <div className="cta-section-area others-cta sp">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="cta-header-area text-center sp4 white-heading">
                <h2>Competitor Analysis</h2>
                <p className="mt-16">
                  Find the keywords your competitors rank for and analyze their <br className="d-lg-block d-none" /> data insights to uncover their
                  SEO strategy in one click
                </p>
                <div className="space40" />
                <div className="form-area">
                  <form>
                    <div className="input-area">
                      <span>
                        <FaLink className="fa-solid" />
                      </span>
                      <input type="text" placeholder="https:// yoursite.com" />
                    </div>
                    <div className="input-area">
                      <span>
                        <FaEnvelope className="fa-regular" />
                      </span>
                      <input type="text" placeholder="youremail@domain.com" />
                    </div>
                    <div className="btn-area">
                      <button className="theme-btn3" type="submit">
                        Contact Us{' '}
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
                <ul>
                  <li>Try:</li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Laptop</a>
                  </li>
                  <li>
                    <a href="#">iPhone</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CTA
