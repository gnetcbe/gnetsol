'use client'
import details from '@/assets/img/service/service-details8-image.png'
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
                      <h3>Find, Buy &amp; Invest with Confidence </h3>
                      <p className=" mt-16">
                        We provide expert real estate services to help you find your dream home, secure profitable investments, and navigate the
                        property market with ease. Whether you're buying, selling, or investing, our team offers tailored solutions to match your
                        needs. With a deep understanding of market trends, premium property listings, and expert negotiation skills, we ensure a
                        seamless real estate experience.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>What we Offer </h3>
                    </div>
                    <Row className=" pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Residential Property Sales Purchases</Link>
                          </h4>
                          <p className="mt-12">Find your perfect home or sell your property at the best value.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Commercial Real Estate Solutions </Link>
                          </h4>
                          <p className="mt-12">Secure prime office spaces, retail locations, and business properties.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Real Estate Investment Consulting</Link>
                          </h4>
                          <p className="mt-12">Get expert advice on market trends, ROI, and profitable opportunities.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Rental &amp; Leasing Services</Link>
                          </h4>
                          <p className="mt-12">Hassle-free solutions for landlords and tenants.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Property Management</Link>
                          </h4>
                          <p className="mt-12">Professional services to maintain and maximize the value of your real estate.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Legal &amp; Financial Assistance</Link>
                          </h4>
                          <p className="mt-12">Guidance on mortgages, property laws, and transaction processes.</p>
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
                          <Link href="#">Understanding Your Real Estate Goals</Link>
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
                          <Link href="#">Property Search &amp; Market Analysis</Link>
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
                          <Link href="#">Negotiation &amp; Deal Finalization</Link>
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
                          <Link href="#">Post-Sale Support &amp; Property Management</Link>
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
