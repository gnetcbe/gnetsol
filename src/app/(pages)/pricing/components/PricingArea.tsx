import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'

const PricingArea = () => {
  return (
    <>
      <div className="pricing-page-sec sp">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="pricing-page-box">
                <Row>
                  <Row>
                    <Col lg={5}>
                      <div className="price-area">
                        <h6>Starter Plan</h6>
                        <h3>
                          $199 <span>/month</span>
                        </h3>
                        <p>Perfect for small businesses or startups looking to kickstart their digital marketing journey.</p>
                        <div className="button mt-30">
                          <Link className="theme-btn22" href="/contact">
                            Get Started{' '}
                            <span className="arrow1">
                              <FaArrowRight className="fa-solid fa-arrow-right" />
                            </span>
                            <span className="arrow2">
                              <FaArrowRight className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="pricing-list">
                        <h5>Our Features</h5>
                        <ul>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Basic SEO optimization
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            10 targeted Keywords
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            One page and off-page SEO
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Monthly performance reports
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Email support
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Row>
              </div>
              <div className="pricing-page-box mt-30">
                <Row>
                  <Row>
                    <Col lg={5}>
                      <div className="price-area">
                        <h6>Growth Plan</h6>
                        <h3>
                          $499 <span>/month</span>
                        </h3>
                        <p>Ideal for businesses aiming to expand their online presence and boost visibility.</p>
                        <div className="button mt-30">
                          <Link className="theme-btn22" href="/contact">
                            Get Started{' '}
                            <span className="arrow1">
                              <FaArrowRight className="fa-solid fa-arrow-right" />
                            </span>
                            <span className="arrow2">
                              <FaArrowRight className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="pricing-list">
                        <h5>Our Features</h5>
                        <ul>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Advanced SEO strategies
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            25 targeted keywords
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Content marketing support
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Local SEO optimization
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Bi-weekly performance reports
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Row>
              </div>
              <div className="pricing-page-box mt-30">
                <Row>
                  <Row>
                    <Col lg={5}>
                      <div className="price-area">
                        <h6>Premium Plan</h6>
                        <h3>
                          $999 <span>/month</span>
                        </h3>
                        <p>A comprehensive package for businesses focused on dominating their industry.</p>
                        <div className="button mt-30">
                          <Link className="theme-btn22" href="/contact">
                            Get Started{' '}
                            <span className="arrow1">
                              <FaArrowRight className="fa-solid fa-arrow-right" />
                            </span>
                            <span className="arrow2">
                              <FaArrowRight className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="pricing-list">
                        <h5>Our Features</h5>
                        <ul>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Complete SEO and digital marketing suite
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            50 targeted keywords
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Dedicated account manager
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Social media integration
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>{' '}
                            Weekly performance reports
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default PricingArea
