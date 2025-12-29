'use client'
import details from '@/assets/img/service/service-details9-image.png'
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
                    <Image className="w-full" src={details} alt="" height={775} />
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
                      <h3>Empowering Entrepreneurs to Build, Scale &amp; Succeed</h3>
                      <p className=" mt-16">
                        We provide tailored startup agency services to help emerging businesses turn their ideas into thriving ventures. From branding
                        and marketing to funding and operational strategies, we equip startups with the tools and expertise they need to launch, grow,
                        and scale successfully. Whether you’re an early-stage entrepreneur or an established startup looking to expand, our team
                        offers customized solutions to drive sustainable success.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>What we Offer </h3>
                    </div>
                    <Row className="pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="">Business Strategy &amp; Planning</Link>
                          </h4>
                          <p className="mt-12">Define your vision, market positioning, and roadmap for success.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="">Brand Identity &amp; Design </Link>
                          </h4>
                          <p className="mt-12">Create a powerful brand with expert logo design, messaging, visual identity.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="">Digital Marketing &amp; Growth Hacking</Link>
                          </h4>
                          <p className="mt-12">Implement data-driven strategies to attract and retain customers.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="">Funding &amp; Investment Assistance</Link>
                          </h4>
                          <p className="mt-12">Connect with investors, pitch your ideas, and secure capital.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="">Product Development &amp; Innovation</Link>
                          </h4>
                          <p className="mt-12">Turn your ideas into scalable, market-ready solutions.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="">Legal &amp; Compliance Support</Link>
                          </h4>
                          <p className="mt-12">Ensure your startup meets regulatory requirements and legal standards.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2">
                      <h3>Why Choose SEOX for Real Estate?</h3>
                      <p className=" mt-16">
                        Access a wide range of residential and commercial properties. We analyze trends to help you make profitable real estate
                        decisions. Whether buying, selling, or investing, we tailor solutions to your needs. Get the best investment deals for
                        long-term financial growth. We handle everything from documentation to closing deals.{' '}
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Find Your Ideal Property Today!</h3>
                      <p className=" mt-16">
                        At SEOX, we make real estate simple and stress-free. Whether you're looking for a dream home, a commercial property, or a
                        high-yield investment, our expert team is here to help you every step of the way.
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
                          <Link href="">Understanding Your Real Estate Goals</Link>
                        </h4>
                        <p className="mt-2">
                          We take the time to learn about your requirements, budget, and location preferences to tailor our search.
                        </p>
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
                          <Link href="">Property Search &amp; Market Analysis</Link>
                        </h4>
                        <p className="mt-2">We provide access to top listings and in-depth market insights to help you make informed decisions.</p>
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
                          <Link href="">Negotiation &amp; Deal Finalization</Link>
                        </h4>
                        <p className="mt-2">Our experts handle negotiations, paperwork, and contracts to ensure smooth transactions.</p>
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
                          <Link href="">Post-Sale Support &amp; Property Management</Link>
                        </h4>
                        <p className="mt-2">We offer ongoing support, from legal assistance to rental and maintenance services.</p>
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
