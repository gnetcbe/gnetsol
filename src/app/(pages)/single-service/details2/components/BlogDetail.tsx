'use client'
import detail2 from '@/assets/img/service/service-details2-image.png'
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
                    <Image className="w-full" src={detail2} alt="" height={775} />
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
                      <h3>Empowering Your Brand with Strategic Social Media </h3>
                      <p className=" mt-16">
                        In the digital era, a well-crafted social media strategy is the cornerstone of successful brand engagement. At SEOX, we
                        specialize in developing tailored social media strategies that connect with your audience, amplify your brand voice, and drive
                        measurable results. Whether you're looking to increase awareness, boost sales, or foster loyalty, our expertise ensures your
                        social media presence delivers maximum impact.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Our Core Digital Marketing Services</h3>
                    </div>
                    <Row className="pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Comprehensive Audits</Link>
                          </h4>
                          <p className="mt-12">
                            "We begin with a thorough analysis of your current social media performance, identifying strengths, weaknesses, and
                            opportunities to optimize your efforts."
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Audience Insight</Link>
                          </h4>
                          <p className="mt-12">
                            "Understanding your audience is key. We leverage advanced analytics to uncover demographics, interests, ensuring your
                            strategy aligns with your target market."
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Platform-specific Stratgics</Link>
                          </h4>
                          <p className="mt-12">
                            "Every platform is unique. We craft tailored strategies for Facebook, Instagram, , Twitter, TikTok, and more, ensuring
                            your brand excels channels."
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Content Planning</Link>
                          </h4>
                          <p className="mt-12">
                            "From creative visuals to compelling copy, we develop a content calendar that resonates with your audience and supports
                            your business objectives."
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2">
                      <h3>Why Choose SEOX for Social Media Strategy</h3>
                      <p className=" mt-16">
                        "At SEOX, we don’t just create strategies; we craft experiences. Our team combines creativity with data-driven insights to
                        ensure your brand’s social media presence not only stands out but also delivers tangible results. With a proven track record
                        across industries, we are your trusted partner in navigating the ever-evolving social media landscape."
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Your Gateway to Digital Success</h3>
                      <p className=" mt-16">
                        "Social media isn’t just about posting—it’s about creating meaningful connections, building your brand’s story, and driving
                        measurable results. At SEOX, we transform your social media channels into powerful tools that align with your business goals.
                        From crafting impactful strategies to delivering consistent engagement, we help businesses achieve success in the
                        ever-evolving digital landscape."
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>What We Offer</h3>
                      <p className=" mt-16">
                        "Understanding where you stand is the first step toward success. Our audit examines your current profiles, performance
                        metrics, content quality, and engagement levels. We identify gaps and opportunities, setting the foundation for a winning
                        strategy."
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
                          <Link href="#">In-Depth Social Media Audit</Link>
                        </h4>
                        <p className="mt-2">Understanding where you stand is the first step toward success. </p>
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
                          <Link href="#">Audience Persona Development</Link>
                        </h4>
                        <p className="mt-2">Effective communication starts with knowing your audience. </p>
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
                          <Link href="#">Content Strategy &amp; Creation</Link>
                        </h4>
                        <p className="mt-2">We believe in creating content that inspires action.</p>
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
                          <Link href="#">Engagement &amp; Community Building</Link>
                        </h4>
                        <p className="mt-2">Our engagement strategies focus on creating genuine interactions,</p>
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
                          <Link href="#">Customized Platform Strategies</Link>
                        </h4>
                        <p className="mt-2">Every social platform serves a different purpose. Whether it’s Instagram for stunning.</p>
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
