'use client'
import detail1 from '@/assets/img/service/service-details1-image1.png'
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
                    <Image className="w-full" src={detail1} alt="" height={775} />
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
                      <h3>Drive Organic Growth &amp; Maximize Visibility</h3>
                      <p className=" mt-16">
                        SEOX delivers result-driven SEO strategies tailored to enhance search engine visibility, attract high-quality traffic, and
                        boost conversions. Our expert team leverages data-driven insights, on-page and technical optimization, and authoritative
                        link-building strategies to position your brand ahead of the competition.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Our Process</h3>
                    </div>
                    <Row className="pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">SEO Audit &amp; Strategy Development</Link>
                          </h4>
                          <p className="mt-12">
                            We conduct a deep analysis of your website, competition, and industry trends to craft a custom SEO roadmap.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Keyword &amp; Content Optimization</Link>
                          </h4>
                          <p className="mt-12">Using advanced research tools, we optimize your website with relevant keywords, compelling content.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Technical SEO Enhancements</Link>
                          </h4>
                          <p className="mt-12">
                            We fix indexing errors, enhance page speed, and implement schema markup to improve site performance craw ability.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Link Building &amp; Authority Growth</Link>
                          </h4>
                          <p className="mt-12">
                            Our team acquires high-quality, niche-relevant backlinks to strengthen domain authority and boost rankings.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2">
                      <h3>Why Choose SEOX for SEO Marketing</h3>
                      <p className=" mt-16">
                        We identify high-impact keywords that align with user intent and business goals. Content, meta tags, and technical
                        improvements to enhance website relevance. Site speed, mobile-friendliness, indexing, and structured data implementation.
                        Ethical, high-authority backlinks to strengthen domain credibility. Optimizing Google My Business and location-based searches.
                        Regular performance tracking with actionable insights.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Results-Driven SEO Strategies for Online Growth</h3>
                      <p className=" mt-16">
                        We start with an in-depth SEO audit to identify opportunities and craft a customized strategy tailored to your business goals.
                        By optimizing website structure, content, and performance, we improve search rankings and user experience. Our expert team
                        also focuses on local SEO, ensuring businesses gain visibility in location-based searches.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Why Choose SEOX</h3>
                      <p className=" mt-16">
                        we specialize in delivering cutting-edge SEO strategies designed to enhance search engine visibility, drive organic traffic,
                        and increase conversions. Our comprehensive approach includes keyword research, on-page optimization, technical SEO, and
                        high-quality link building to ensure long-term success.
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
                          <Link href="#">Proven SEO Success</Link>
                        </h4>
                        <p className="mt-2">Data-backed strategies with measurable results.</p>
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
                          <Link href="#">Customized Growth Plans</Link>
                        </h4>
                        <p className="mt-2">Tailored solutions to fit your business goals.</p>
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
                          <Link href="#">Transparent Reporting</Link>
                        </h4>
                        <p className="mt-2">Monthly performance reports and strategic insights.</p>
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
                          <Link href="#">Expert Support</Link>
                        </h4>
                        <p className="mt-2">SEO professionals dedicated to maximizing your success.</p>
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
