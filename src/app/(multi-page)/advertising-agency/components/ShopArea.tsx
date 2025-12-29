'use client'
import span4 from '@/assets/img/icons/span4.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { shopData, shopData2, shopData3, shopData4 } from '../data'

const ShopArea = () => {
  const shop = ['Water Bottles', 'Material Bottle', 'Plastic Bottles', 'Glass Jar', 'Plastic Jar']
  return (
    <>
      <div className="shop3-area sp sec-bg2">
        <Container>
          <TabContainer defaultActiveKey={'0'}>
            <Row>
              <Col lg={6} className="m-auto text-center">
                <div className="heading3">
                  <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                    <Image src={span4} alt="" /> OUR PRODUCT
                  </span>
                  <h2 className="text-anime-style-3">Our Showcase</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={8} className="m-auto">
                <div className="shop-tab-btn">
                  <Nav as={'ul'} className="nav-pills mb-3" id="pills-tab" role="tablist">
                    {shop.map((item, idx) => {
                      return (
                        <NavItem key={idx} as={'li'} role="presentation">
                          <NavLink eventKey={`${idx}`} as={'button'} data-bs-toggle="pill" type="button" role="tab" aria-selected="true">
                            {item}
                          </NavLink>
                        </NavItem>
                      )
                    })}
                  </Nav>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="shop-tab-contents">
                <TabContent id="pills-tabContent">
                  <TabPane eventKey={'0'} className="fade" id="shop1" role="tabpanel" aria-labelledby="shop1-tab">
                    <Row>
                      {shopData.map((item, idx) => (
                        <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.delay}>
                          <div className="shop3-item mt-40">
                            <div className="image-area">
                              <div className="image">
                                <Image src={item.image} alt="" width={306} />
                              </div>
                              <div className="button">
                                <Link className="theme-btn7" href="/contact">
                                  Order Now
                                </Link>
                              </div>
                            </div>
                            <div className="content">
                              <h6>{item.title}</h6>
                              <h3>${item.price}</h3>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                  <TabPane eventKey={'1'} className="fade" id="shop2" role="tabpanel" aria-labelledby="shop2-tab">
                    <Row>
                      {shopData2.map((item, idx) => (
                        <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.delay}>
                          <div className="shop3-item mt-40">
                            <div className="image-area">
                              <div className="image">
                                <Image src={item.image} alt="" width={306} />
                              </div>
                              <div className="button">
                                <Link className="theme-btn7" href="/contact">
                                  Order Now
                                </Link>
                              </div>
                            </div>
                            <div className="content">
                              <h6>{item.title}</h6>
                              <h3>${item.price}</h3>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                  <TabPane eventKey={'2'} className="fade" id="shop3" role="tabpanel" aria-labelledby="shop3-tab">
                    <Row>
                      {shopData3.map((item, idx) => (
                        <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.delay}>
                          <div className="shop3-item mt-40">
                            <div className="image-area">
                              <div className="image">
                                <Image src={item.image} alt="" width={306} />
                              </div>
                              <div className="button">
                                <Link className="theme-btn7" href="/contact">
                                  Order Now
                                </Link>
                              </div>
                            </div>
                            <div className="content">
                              <h6>{item.title}</h6>
                              <h3>${item.price}</h3>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                  <TabPane eventKey={'3'} className="tab-pane fade" id="shop4" role="tabpanel" aria-labelledby="shop4-tab">
                    <Row>
                      {shopData4.map((item, idx) => (
                        <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.delay}>
                          <div className="shop3-item mt-40">
                            <div className="image-area">
                              <div className="image">
                                <Image src={item.image} alt="" width={306} />
                              </div>
                              <div className="button">
                                <Link className="theme-btn7" href="/contact">
                                  Order Now
                                </Link>
                              </div>
                            </div>
                            <div className="content">
                              <h6>{item.title}</h6>
                              <h3>${item.price}</h3>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                  <TabPane eventKey={'4'} className="fade" id="shop5" role="tabpanel" aria-labelledby="shop5-tab">
                    <Row>
                      {shopData4.map((item, idx) => (
                        <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.delay}>
                          <div className="shop3-item mt-40">
                            <div className="image-area">
                              <div className="image">
                                <Image src={item.image} alt="" width={306} />
                              </div>
                              <div className="button">
                                <Link className="theme-btn7" href="/contact">
                                  Order Now
                                </Link>
                              </div>
                            </div>
                            <div className="content">
                              <h6>{item.title}</h6>
                              <h3>${item.price}</h3>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </Row>
          </TabContainer>
        </Container>
      </div>
    </>
  )
}

export default ShopArea
