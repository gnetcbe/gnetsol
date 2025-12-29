'use client'
import details5 from '@/assets/img/service/service-details6-image.png'
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
                    <Image className="w-full" src={details5} alt="" height={775} />
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
                      <h3>Empowering Businesses with the Right Talent </h3>
                      <p className=" mt-16">
                        We specialize in HR staffing solutions that help businesses find, hire, and retain top talent. Whether you're a growing
                        startup or an established enterprise, our tailored recruitment strategies ensure you get the right candidates for your
                        business needs. From temporary staffing to executive placements, we handle every aspect of the hiring process, allowing you to
                        focus on running your business efficiently.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>What we Offer </h3>
                    </div>
                    <Row className="pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Permanent Staffing</Link>
                          </h4>
                          <p className="mt-12">Find long-term employees who align with your company’s culture and goals.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Temporary &amp; Contract Staffing</Link>
                          </h4>
                          <p className="mt-12">Flexible hiring solutions for short-term projects or seasonal demands.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Executive Search &amp; Recruitment</Link>
                          </h4>
                          <p className="mt-12">Identify and hire top-tier leadership and management professionals.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Industry-Specific Staffing</Link>
                          </h4>
                          <p className="mt-12">Customized staffing solutions industries like IT, healthcare, finance, and more.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Talent Acquisition &amp; Screening</Link>
                          </h4>
                          <p className="mt-12">Comprehensive candidate assessment to ensure the best fit.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Workforce Planning &amp; Consulting</Link>
                          </h4>
                          <p className="mt-12">Strategic HR solutions to optimize your team structure and productivity.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2">
                      <h3>Why Choose SEOX for HR Staffing?</h3>
                      <p className=" mt-16">
                        We have deep knowledge of multiple industries and recruitment trends. Customized staffing strategies to meet your specific
                        business goals. Reduce time-to-hire with our streamlined recruitment process. Rigorous screening to ensure the right candidate
                        fit. We provide workforce consulting and retention strategies for long-term success.{' '}
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Build a Stronger Workforce Today!</h3>
                      <p className=" mt-16">
                        At SEOX, we take the stress out of hiring by delivering high-quality staffing solutions tailored to your needs. Whether you
                        need temporary support or full-time professionals, we ensure you get the best talent for sustainable business growth.
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
                          <Link href="#">Understanding Your Hiring Needs</Link>
                        </h4>
                        <p className="mt-2">
                          We begin with a detailed consultation to analyze your staffing requirements, company culture, and business objectives.
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
                          <Link href="#">Sourcing &amp; Screening Candidates</Link>
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
                          <Link href="#">PInterview &amp; Selection Support</Link>
                        </h4>
                        <p className="mt-2">
                          From cultural etiquette to packing checklists, we equip you with insights to enhance your travel experience.
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
                          <Link href="#">Ongoing Support &amp; Recommendations</Link>
                        </h4>
                        <p className="mt-2">
                          We streamline the interview and selection process, ensuring you only meet the most qualified candidates.
                        </p>
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
