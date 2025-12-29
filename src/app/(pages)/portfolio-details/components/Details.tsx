import detail from '@/assets/img/blog/blog-details-image.png'
import detail1 from '@/assets/img/others/portfolio-details-image2.png'
import detail2 from '@/assets/img/others/portfolio-details-image3.png'
import shape from '@/assets/img/shapes/details-counter-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCheck, FaFacebookF, FaInstagram, FaLinkedinIn, FaMagnifyingGlass, FaXTwitter } from 'react-icons/fa6'

const Details = () => {
  return (
    <>
      <div className="portfolio-details-area sp">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-details-content ml-30 md:ml-0 sm:ml-0">
                <article>
                  <div className="details-content">
                    <div className="image">
                      <Image className="w-full" src={detail} alt="" height={550} />
                    </div>
                    <div className="heading2 mt-24">
                      <h3>Project Overview</h3>
                      <p className=" mt-16">
                        SEO Tracking Analysis is the cornerstone of digital success for businesses striving to enhance their online visibility. For
                        this project, we delivered a robust and data-driven strategy to empower Alex Carey a Branding to stand out in a competitive
                        digital landscape.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>services We Offered</h3>
                      <p className=" mt-16">
                        ur SEO Tracking Analysis service delivers actionable insights that drive measurable growth. By combining advanced analytics
                        tools with tailored strategies, we help businesses improve their online visibility, attract high-quality traffic, and achieve
                        long-term success.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <Row>
                        <Col lg={6}>
                          <div className="details-list-item">
                            <h5>Services Offered</h5>
                            <ul>
                              <li>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                Comprehensive Keyword Research
                              </li>
                              <li>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                Performance Analytics
                              </li>
                              <li>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                On-Page Optimization
                              </li>
                              <li>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                Technical SEO Enhancements:
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="details-list-item">
                            <h5>Our Approach</h5>
                            <ul>
                              <li>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                In-Depth Research
                              </li>
                              <li>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                Strategic Execution
                              </li>
                              <li>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                Tracking &amp; Refinement
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Result Archived</h3>
                      <p className=" mt-16">
                        Targeted keywords ranked on the first page of Google, driving consistent, quality traffic. Enhanced user experience through
                        optimized technical performance. Engaging content and improved site usability led to better audience retention. Delivered
                        measurable results through data-driven insights, increasing the client’s bottom line.
                      </p>
                    </div>
                    <div className="counters-area-details mt-40">
                      <Row>
                        <Col lg={3} md={6}>
                          <div className="details-counter-box">
                            <h3>90%</h3>
                            <p className="mt-10">Organic Traffic</p>
                            <Image src={shape} alt="" className="shape" />
                          </div>
                        </Col>
                        <Col lg={3} md={6}>
                          <div className="details-counter-box">
                            <h3>80%</h3>
                            <p className="mt-10">Faster Page Load</p>
                            <Image src={shape} alt="" className="shape" />
                          </div>
                        </Col>
                        <Col lg={3} md={6}>
                          <div className="details-counter-box">
                            <h3>25%</h3>
                            <p className="mt-10">Higher Engagement</p>
                            <Image src={shape} alt="" className="shape" />
                          </div>
                        </Col>
                        <Col lg={3} md={6}>
                          <div className="details-counter-box">
                            <h3>100%</h3>
                            <p className="mt-10">Improved ROI</p>
                            <Image src={shape} alt="" className="shape" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-50">
                    <div className="heading2 mt-24">
                      <h3>SEO Tracking Analysis</h3>
                      <p className=" mt-16">
                        Our SEO Tracking Analysis service delivers actionable insights that drive measurable growth. By combining advanced analytics
                        tools with tailored strategies, we help businesses improve their online visibility, attract high-quality traffic, and achieve
                        long-term success. From comprehensive keyword research to performance monitoring, we ensure every aspect of your SEO strategy
                        is optimized to deliver results. Whether it’s enhancing rankings, boosting engagement, or increasing ROI, our approach is
                        rooted in data-driven decision-making and continuous improvement to keep your brand ahead of the competition.
                      </p>
                    </div>
                    <Row>
                      <Col md={6}>
                        <div className="image mt-30">
                          <Image className="w-full" src={detail1} alt="" height={278} />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="image mt-30">
                          <Image className="w-full" src={detail2} alt="" height={278} />
                        </div>
                      </Col>
                    </Row>
                    <div className="heading2 mt-40">
                      <h3>Empowering Growth Data-Driven SEO Strategies</h3>
                      <p className=" mt-16">
                        In the ever-changing digital landscape, staying ahead requires precise strategies and continuous optimization. Our SEO
                        Tracking Analysis goes beyond the basics, offering businesses a roadmap to enhance their online visibility and maintain a
                        competitive edge. We start with comprehensive research, identifying high-performing keywords, uncovering trends, and
                        understanding user intent.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </Col>
            <Col lg={4}>
              <div className="sidebar-area">
                <div className="_sidebar-widget _search">
                  <h3>Search</h3>
                  <form action="#" className="_relative">
                    <input type="search" placeholder="Search..." />
                    <button>
                      <FaMagnifyingGlass className="fa-solid" />
                    </button>
                  </form>
                </div>
                <div className="_sidebar-widget _portfolio mt-40">
                  <h3>Portfolio Details</h3>
                  <div className="portfolio-list">
                    <ul>
                      <li>
                        Created By: <span>Vikinglab</span>
                      </li>
                      <li>
                        Category: <span>Branding</span>
                      </li>
                      <li>
                        Timeframe: <span>24 Dec 2024</span>
                      </li>
                      <li>
                        Location: <span>2th Street, USA</span>
                      </li>
                      <li>
                        Cost: <span>$350.00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="protfolio-icon-list">
                    <Link href="#">
                      <FaFacebookF className="fa-brands" />
                    </Link>
                    <Link href="#">
                      <FaInstagram className="fa-brands" />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn className="fa-brands" />
                    </Link>
                    <Link href="#">
                      <FaXTwitter className="fa-brands" />
                    </Link>
                  </div>
                </div>
                <div className="_sidebar-widget _contact mt-40">
                  <h3>Get A Free Quote</h3>
                  <div className="_contact-form mt-10">
                    <form action="#">
                      <input type="text" placeholder="Your Name" />
                      <input type="email" placeholder="Email Address" />
                      <input type="number" placeholder="Phone Number" />
                      <textarea rows={5} placeholder="Your Message" defaultValue={''} />
                      <button className="theme-btn3 mt-20" type="submit">
                        Send
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Details
