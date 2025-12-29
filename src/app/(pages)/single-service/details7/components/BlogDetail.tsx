'use client'
import details from '@/assets/img/service/service-details7-image.png'
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
                      <h3>Protect What Matters Most with the Right Coverage </h3>
                      <p className=" mt-16">
                        We offer a wide range of insurance policies designed to protect you, your family, and your assets. Whether you're looking for
                        health insurance, life coverage, auto protection, or business policies, our expert team helps you choose the right plan
                        tailored to your needs. With flexible options and trusted providers, we ensure that you receive the best coverage at
                        competitive rates, giving you the security and peace of mind you deserve.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>What we Offer </h3>
                    </div>
                    <Row className="pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Health Insurance</Link>
                          </h4>
                          <p className="mt-12">Comprehensive plans covering medical expenses, hospital stays, preventive care.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Life Insurance </Link>
                          </h4>
                          <p className="mt-12">Secure your family's future with term, whole, or universal life policies.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Auto Insurance</Link>
                          </h4>
                          <p className="mt-12">Protection for your vehicle against accidents, theft, and damage.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Home Insurance</Link>
                          </h4>
                          <p className="mt-12">Safeguard your property from unforeseen damages and liabilities.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Business Insurance</Link>
                          </h4>
                          <p className="mt-12">Custom policies to protect your company from financial risks and legal liabilities.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Travel Insurance</Link>
                          </h4>
                          <p className="mt-12">Coverage unexpected travel emergencie medical expenses, and trip cancellations.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2">
                      <h3>Why Choose SEOX for Insurance Policies?</h3>
                      <p className=" mt-16">
                        Our insurance professionals help you navigate complex policy details with ease. Choose from a variety of customizable plans
                        for individuals and businesses. Get the best coverage at affordable rates from top providers. Our team ensures smooth and
                        quick claims assistance when you need it most. We’re always here to answer your insurance-related questions and concerns.{' '}
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Get the Right Insurance Policy Today!</h3>
                      <p className=" mt-16">
                        At SEOX, we make insurance planning simple and stress-free. Whether you need coverage for yourself, your family, or your
                        business, we help you find the perfect policy for your needs.
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
                          <Link href="#">Understanding Your Coverage Needs</Link>
                        </h4>
                        <p className="mt-2">We assess your lifestyle, financial goals, and risk factors to recommend the best insurance plan.</p>
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
                          <Link href="#">Customizing Your Plan</Link>
                        </h4>
                        <p className="mt-2">
                          Using advanced recruitment tools and a vast talent network, we identify and screen candidates who match your job
                          requirements.
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
                          <Link href="#">Ongoing Support &amp; Assistance</Link>
                        </h4>
                        <p className="mt-2">We provide continuous policy reviews and expert assistance for claims, renewals, and updates.</p>
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
                          <Link href="#">Exploring Policy Options</Link>
                        </h4>
                        <p className="mt-2">We present multiple policy options from trusted providers to help you make an informed decision.</p>
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
