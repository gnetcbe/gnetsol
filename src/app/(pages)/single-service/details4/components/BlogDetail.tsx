'use client'
import detail4 from '@/assets/img/service/service-details4-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import Blog from '../../components/Blog'
import ImgBlog from '../../components/ImgBlog'
import SideBar from '../../components/SideBar'

const BlogDetail = () => {
  return (
    <>
      <div className="blog-details-area sp">
        <Container>
          <Row>
            <Col lg={12}>
              <article>
                <div className="details-content">
                  <div className="image">
                    <Image className="w-full" src={detail4} alt="" height={775} />
                  </div>
                </div>
              </article>
            </Col>
            <SideBar />
            <Col lg={8}>
              <div className="blog-details-content ml-30 md:ml-0 sm:ml-0 mt-50">
                <article>
                  <div className="details-content">
                    <div className="heading2 mt-24">
                      <h3>Unlock Immediate Visibility Strategic PPC Campaign </h3>
                      <p className=" mt-16">
                        We offer expert Pay-Per-Click (PPC) advertising services that provide your business with instant visibility and targeted
                        traffic. Our PPC strategies focus on maximizing your ROI by targeting the right audience at the right time, with highly
                        optimized ad campaigns across Google, Bing, social media platforms, and more.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>What we Offer </h3>
                    </div>
                    <Row className="pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Google Ads Management</Link>
                          </h4>
                          <p className="mt-12">Maximize visibility through search ads, display ads, and retargeting campaigns.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Bing &amp; Yahoo Ads</Link>
                          </h4>
                          <p className="mt-12">Expand your reach beyond Google with tailored campaigns for Bing and Yahoo.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Social Media Advertising</Link>
                          </h4>
                          <p className="mt-12">Leverage platforms like Facebook, Instagram, LinkedIn, and Twitter to reach your ideal audience.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Paid Search &amp; Display Campaigns</Link>
                          </h4>
                          <p className="mt-12">Reach your audience through paid search results and visually engaging display ads.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Remarketing &amp; Retargeting</Link>
                          </h4>
                          <p className="mt-12">Stay top-of-mind and bring back visitors with targeted retargeting ads.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">PPC Campaign Monitoring</Link>
                          </h4>
                          <p className="mt-12"> Continuous testing and adjustments to maximize performance and ROI.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2">
                      <h3>Maximize Your ROI with Expert PPC Advertising</h3>
                      <p className=" mt-16">
                        our Pay-Per-Click (PPC) advertising services are designed to deliver immediate visibility and qualified traffic to your
                        business. Whether you're looking to drive sales, generate leads, or increase brand awareness, our expert team creates highly
                        optimized PPC campaigns that target the right audience, at the right time. Through detailed keyword research, compelling ad
                        copy, and continuous performance optimization, we ensure your advertising budget is spent efficiently. With SEOX, you can
                        expect measurable results and a significant return on investment, all backed by our data-driven approach and ongoing campaign
                        adjustments.{' '}
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Our PPC Advertising Process</h3>
                      <p className=" mt-16">
                        we combine creative expertise with data-driven strategies to deliver content marketing solutions that achieve tangible
                        results. Our team of experienced writers, designers, strategists works collaboratively to create content that resonates with
                        your audience and aligns with your business objectives
                      </p>
                    </div>
                    <div className="service-details-check-list heading2 mt-30">
                      <div className="check-icon">
                        <span>
                          <FaCheck className="fa-solid" />
                        </span>
                      </div>
                      <div className="text">
                        <h4>
                          <Link href="#">Campaign Strategy Development</Link>
                        </h4>
                        <p className="mt-2">We start by researching your business goals, target audience, and competitors.</p>
                      </div>
                    </div>
                    <div className="service-details-check-list heading2 mt-30">
                      <div className="check-icon">
                        <span>
                          <FaCheck className="fa-solid" />
                        </span>
                      </div>
                      <div className="text">
                        <h4>
                          <Link href="#">Keyword Research &amp; Ad Creation</Link>
                        </h4>
                        <p className="mt-2">Our team identifies high-performing keywords and creates engaging ad copy designed.</p>
                      </div>
                    </div>
                    <div className="service-details-check-list heading2 mt-30">
                      <div className="check-icon">
                        <span>
                          <FaCheck className="fa-solid" />
                        </span>
                      </div>
                      <div className="text">
                        <h4>
                          <Link href="#">Ad Management &amp; Optimization</Link>
                        </h4>
                        <p className="mt-2">We continuously manage and optimize your campaigns by adjusting bids,</p>
                      </div>
                    </div>
                    <div className="service-details-check-list heading2 mt-30">
                      <div className="check-icon">
                        <span>
                          <FaCheck className="fa-solid" />
                        </span>
                      </div>
                      <div className="text">
                        <h4>
                          <Link href="#">Performance Tracking &amp; Reporting</Link>
                        </h4>
                        <p className="mt-2">We provide detailed monthly reports, tracking key metrics like CTR (Click-Through Rate)</p>
                      </div>
                    </div>
                    <ImgBlog />
                  </div>
                </article>
                <div className="details-border" />
                <Blog />
                <div className="details-border" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BlogDetail
