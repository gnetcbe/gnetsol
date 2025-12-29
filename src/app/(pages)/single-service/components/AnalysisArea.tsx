import span3 from '@/assets/img/icons/span3.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleUp } from 'react-icons/fa6'

const AnalysisArea = () => {
  return (
    <>
      <section className="analysis-area sp">
        <Container>
          <Row>
            <Col lg={7} className="m-auto text-center">
              <div className="heading2">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="" /> WEBSITE ANALYSIS{' '}
                </span>
                <h2 className="text-anime-style-3">Conduct Website Audience Analysis and Explore Its Geography</h2>
              </div>
            </Col>
          </Row>
          <div className="space60" />
          <Row>
            <Col lg={10} className="m-auto">
              <div className="services-seo">
                <div className="services-seo-scroll">
                  <div className="services-seo-head">
                    <Row>
                      <Col xl={4} lg={5} xs={5}>
                        <div className="services-seo-heading">
                          <h4 className="services-seo-heading-title">
                            <input id="remeber" type="checkbox" />
                            <label htmlFor="remeber">Blanking</label>
                          </h4>
                        </div>
                      </Col>
                      <Col xl={8} lg={7} xs={7}>
                        <div className="services-seo-catagory">
                          <Row>
                            <Col lg={3} xs={3}>
                              <div className="services-seo-heading-item services-seo-catagory-one">
                                <span>Score</span>
                              </div>
                            </Col>
                            <Col lg={3} xs={3}>
                              <div className="services-seo-heading-item services-seo-catagory-two">
                                <span>Keyword</span>
                              </div>
                            </Col>
                            <Col lg={3} xs={3}>
                              <div className="services-seo-heading-item services-seo-catagory-three">
                                <span>Domain</span>
                              </div>
                            </Col>
                            <Col lg={3} xs={3}>
                              <div className="services-seo-heading-item services-seo-catagory-four">
                                <div className="rank">
                                  <span>
                                    Rank
                                    <FaAngleUp className="fa-light" />
                                  </span>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="services-seo-info">
                    <div className="services-seo-item">
                      <Row className=" align-items-center">
                        <Col xl={4} lg={5} xs={5}>
                          <div className="services-seo-link d-flex">
                            <div className="services-seo-link-check">
                              <input id="seo-link-check" type="checkbox" />
                              <label htmlFor="seo-link-check">WOG PRIDE on the app store</label>
                              <span>
                                <Link href="#">https://www.daraz.com/gameing-laptops/</Link>
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col xl={8} lg={7} xs={7}>
                          <div className="services-seo-catagory">
                            <Row>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                  <span>86</span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                  <span>Laptop</span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                  <span>
                                    <Link href="#">daraz.com</Link>
                                  </span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                  <div className="stable-rank">
                                    <span>4</span>
                                  </div>
                                  <div className="incridable-rank">
                                    <FaAngleUp className="fa-solid" />
                                    <span>1</span>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="services-seo-item">
                      <Row className=" align-items-center">
                        <Col xl={4} lg={5} xs={5}>
                          <div className="services-seo-link d-flex">
                            <div className="services-seo-link-check">
                              <input id="seo-link-check-2" type="checkbox" />
                              <label htmlFor="seo-link-check-2">SEO PRIDE on the app store</label>
                              <span>
                                <Link href="#">https://www.daraz.com/gameing-laptops/</Link>
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col xl={8} lg={7} xs={7}>
                          <div className="services-seo-catagory">
                            <Row>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                  <span>105</span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                  <span>Laptop</span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                  <span>
                                    <Link href="#">daraz.com</Link>
                                  </span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                  <div className="stable-rank">
                                    <span>0</span>
                                  </div>
                                  <div className="incridable-rank"></div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="services-seo-item">
                      <Row className=" align-items-center">
                        <Col xl={4} lg={5} xs={5}>
                          <div className="services-seo-link d-flex">
                            <div className="services-seo-link-check">
                              <input id="seo-link-check-3" type="checkbox" />
                              <label htmlFor="seo-link-check-3">PRIDE on the app store</label>
                              <span>
                                <Link href="#">https://www.daraz.com/gameing-laptops/</Link>
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col xl={8} lg={7} xs={7}>
                          <div className="services-seo-catagory">
                            <Row>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                  <span>42</span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                  <span>Laptop</span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                  <span>
                                    <Link href="#">daraz.com</Link>
                                  </span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                  <div className="stable-rank">
                                    <span>3</span>
                                  </div>
                                  <div className="incridable-rank incridable-rank-y">
                                    <FaAngleUp className="fa-solid" />
                                    <span>2</span>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="services-seo-item">
                      <Row className=" align-items-center">
                        <Col xl={4} lg={5} xs={5}>
                          <div className="services-seo-link d-flex">
                            <div className="services-seo-link-check">
                              <input id="seo-link-check-4" type="checkbox" />
                              <label htmlFor="seo-link-check-4">WOG on the Online store</label>
                              <span>
                                <Link href="#">https://www.daraz.com/gameing-laptops/</Link>
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col xl={8} lg={7} xs={7}>
                          <div className="services-seo-catagory">
                            <Row>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                  <span>06</span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                  <span>Laptop</span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                  <span>
                                    <Link href="#">daraz.com</Link>
                                  </span>
                                </div>
                              </Col>
                              <Col lg={3} xs={3}>
                                <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                  <div className="stable-rank">
                                    <span>5</span>
                                  </div>
                                  <div className="incridable-rank">
                                    <FaAngleUp className="fa-solid" />
                                    <span>1</span>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AnalysisArea
