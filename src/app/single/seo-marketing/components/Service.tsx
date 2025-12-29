'use client'
import sec8 from '@/assets/img/bg/sec-bg8.jpg'
import span1 from '@/assets/img/icons/span1.svg'
import service8 from '@/assets/img/service/service8-image.png'
import Image from 'next/image'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { tabContent } from '../data'

const Service = () => {
  return (
    <>
      <div className="service5 sp bg-cover" style={{ backgroundImage: `url(${sec8.src})` }}>
        <Container>
          <TabContainer defaultActiveKey="SEO Optimization">
            <Row>
              <Col lg={6} className="m-auto text-center">
                <div className="heading8">
                  <span className="sub-title2" data-aos="fade-left" data-aos-duration={800}>
                    <Image src={span1} alt="" /> Comprehensive Solutions
                  </span>
                  <h2 className="text-anime-style-3">Explore Our Range of Services</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={10} className="m-auto">
                <div className="service-widgets-section mt-60">
                  <TabContent id="pills-tabContent">
                    {(tabContent || []).map((tab, idx) => {
                      return (
                        <TabPane
                          key={idx}
                          eventKey={tab.title}
                          id={tab.id}
                          className="fade"
                          // id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                          tabIndex={0}>
                          <Row className="align-items-center">
                            <Col lg={6}>
                              <div className="service-boxarea">
                                <div className="icons" data-aos="fade-left" data-aos-duration={700}>
                                  <Image src={tab.image} alt="" />
                                </div>
                                <div className="space28" />
                                <div className="content-area">
                                  <h3 data-aos="fade-left" data-aos-duration={800}>
                                    {tab.title}
                                  </h3>
                                  <p data-aos="fade-left" data-aos-duration={900}>
                                    Our SEO optimization services are designed improve your website’s visibility, drive targeted traffic, deliver
                                    measurable results From in-depth keyword research.
                                  </p>
                                  <div className="button mt-30">
                                    <a href="/single-service/details1" className="theme-btn14">
                                      See What Drives Us
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
                            <Col lg={1} />
                            <Col lg={5}>
                              <div className="images-area">
                                <div className="img1 reveal">
                                  <Image src={service8} alt="" />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>
                      )
                    })}
                  </TabContent>
                  <div className="space80" />
                  <div className="tabs-btn-area">
                    <Nav as={'ul'} variant="pills" className="nav-pills" id="pills-tab" role="tablist">
                      {(tabContent || []).map((item, idx) => {
                        return (
                          <NavItem as={'li'} key={idx} role="presentation">
                            <NavLink
                              as={'button'}
                              id={item.id}
                              eventKey={item.title}
                              data-bs-toggle="pill"
                              type="button"
                              role="tab"
                              aria-selected="true">
                              <span>
                                <Image src={item.image} alt="" />
                              </span>
                              {item.title}
                            </NavLink>
                          </NavItem>
                        )
                      })}
                    </Nav>
                  </div>
                </div>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </div>
    </>
  )
}

export default Service
