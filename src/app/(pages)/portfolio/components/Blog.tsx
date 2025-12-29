'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { blogData, blogData2, blogData3, blogData4, blogData5, blogData6 } from '../data'

const Blog = () => {
  const navlist = ['All', 'Branding', 'Design', 'Development', 'Marketing', 'Technology']
  return (
    <>
      <div className="blog1 sp bg1 _relative">
        <Container>
          <TabContainer defaultActiveKey={'0'}>
            <Row>
              <Row>
                <Col lg={7} className="m-auto text-center">
                  <div className="categories-buttons">
                    <Nav as={'ul'} className="nav nav-pills" id="pills-tab" role="tablist">
                      {navlist.map((item, idx) => (
                        <NavItem key={idx} as={'li'} role="presentation">
                          <NavLink
                            as="button"
                            eventKey={`${idx}`}
                            id="category-tab1-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#category-tab1"
                            type="button"
                            role="tab"
                            aria-controls="category-tab1"
                            aria-selected="true">
                            {item}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </div>
                </Col>
              </Row>
              <Col lg={12}>
                <TabContent className="categories-content-tab" id="pills-tabContent">
                  <TabPane eventKey={'0'} className="fade" id="category-tab1" role="tabpanel" aria-labelledby="category-tab1-tab">
                    <div className="portfolio-post-area">
                      <Row className=" mt-30">
                        {blogData.map((item, idx) => (
                          <Col lg={4} md={6} key={idx}>
                            <div className="portfolio-box">
                              <div className="image-area">
                                <div className="image">
                                  <Image src={item.image} alt="" height={314} />
                                </div>
                                <Link href="/portfolio-details" className="arrow">
                                  <FaArrowRight className="fa-solid" />
                                </Link>
                              </div>
                              <div className="content-area">
                                <span>{item.title}</span>
                                <Link href="/portfolio-details">{item.comment}</Link>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </TabPane>
                  <TabPane eventKey={'1'} className="fade" id="category-tab2" role="tabpanel" aria-labelledby="category-tab2-tab">
                    <div className="portfolio-post-area">
                      <Row className=" mt-30">
                        {blogData2.map((item, idx) => (
                          <Col lg={4} md={6} key={idx}>
                            <div className="portfolio-box">
                              <div className="image-area">
                                <div className="image">
                                  <Image src={item.image} alt="" height={314} />
                                </div>
                                <Link href="/portfolio-details" className="arrow">
                                  <FaArrowRight className="fa-solid" />
                                </Link>
                              </div>
                              <div className="content-area">
                                <span>{item.title}</span>
                                <Link href="/portfolio-details">{item.comment}</Link>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </TabPane>
                  <TabPane eventKey={'2'} className="fade" id="category-tab3" role="tabpanel" aria-labelledby="category-tab3-tab">
                    <div className="portfolio-post-area">
                      <Row className=" mt-30">
                        {blogData3.map((item, idx) => (
                          <Col lg={4} md={6} key={idx}>
                            <div className="portfolio-box">
                              <div className="image-area">
                                <div className="image">
                                  <Image src={item.image} alt="" height={314} />
                                </div>
                                <Link href="/portfolio-details" className="arrow">
                                  <FaArrowRight className="fa-solid" />
                                </Link>
                              </div>
                              <div className="content-area">
                                <span>{item.title}</span>
                                <Link href="/portfolio-details">{item.comment}</Link>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </TabPane>
                  <TabPane eventKey={'3'} className="fade" id="category-tab4" role="tabpanel" aria-labelledby="category-tab4-tab">
                    <div className="portfolio-post-area">
                      <Row className=" mt-30">
                        {blogData4.map((item, idx) => (
                          <Col lg={4} md={6} key={idx}>
                            <div className="portfolio-box">
                              <div className="image-area">
                                <div className="image">
                                  <Image src={item.image} alt="" height={314} />
                                </div>
                                <Link href="/portfolio-details" className="arrow">
                                  <FaArrowRight className="fa-solid" />
                                </Link>
                              </div>
                              <div className="content-area">
                                <span>{item.title}</span>
                                <Link href="/portfolio-details">{item.comment}</Link>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </TabPane>
                  <TabPane eventKey={'4'} className="fade" id="category-tab5" role="tabpanel" aria-labelledby="category-tab5-tab">
                    <div className="portfolio-post-area">
                      <Row className=" mt-30">
                        {blogData5.map((item, idx) => (
                          <Col lg={4} md={6} key={idx}>
                            <div className="portfolio-box">
                              <div className="image-area">
                                <div className="image">
                                  <Image src={item.image} alt="" height={314} />
                                </div>
                                <Link href="/portfolio-details" className="arrow">
                                  <FaArrowRight className="fa-solid" />
                                </Link>
                              </div>
                              <div className="content-area">
                                <span>{item.title}</span>
                                <Link href="/portfolio-details">{item.comment}</Link>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </TabPane>
                  <TabPane eventKey={'5'} id="category-tab6" role="tabpanel" aria-labelledby="category-tab6-tab">
                    <div className="portfolio-post-area">
                      <Row className=" mt-30">
                        {blogData6.map((item, idx) => (
                          <Col lg={4} md={6} key={idx}>
                            <div className="portfolio-box">
                              <div className="image-area">
                                <div className="image">
                                  <Image src={item.image} alt="" height={314} />
                                </div>
                                <Link href="/portfolio-details" className="arrow">
                                  <FaArrowRight className="fa-solid" />
                                </Link>
                              </div>
                              <div className="content-area">
                                <span>{item.title}</span>
                                <Link href="/portfolio-details">{item.comment}</Link>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </div>
    </>
  )
}

export default Blog
