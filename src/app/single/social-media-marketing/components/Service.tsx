import span3 from '@/assets/img/icons/span3.svg'
import service1 from '@/assets/img/service/service2-image1.png'
import service2 from '@/assets/img/service/service2-image2.png'
import service3 from '@/assets/img/service/service2-image3.png'
import service4 from '@/assets/img/service/service2-image4.png'
import service5 from '@/assets/img/service/service2-image5.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Service = () => {
  return (
    <>
      <div className="service2 sp sec-bg2">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading2">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="" /> OUR SERVICES
                </span>
                <h2 className="text-anime-style-3">Who We Are, What We Do</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="button text-end sm:text-start md:text-start md:mt-30 sm:mt-30" data-aos="fade-left" data-aos-duration={1000}>
                <Link className="theme-btn3" href="/about">
                  View All Services
                  <span className="arrow1">
                    <FaArrowRight className="fa-solid" />
                  </span>
                  <span className="arrow2">
                    <FaArrowRight className="fa-solid" />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            <Col lg={4} md={6}>
              <div className="service2-box mt-30">
                <div className="image image-anime reveal">
                  <Image src={service1} alt="" height={393} />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service2-box mt-30 content-box">
                <div className="with-content">
                  <div className="heading2">
                    <h4>
                      <Link href="/single-service/details1">Social Media Strategy Development</Link>
                    </h4>
                    <p className="mt-16">We analyze your business goals and audience to develop a personalized social media strategy.</p>
                    <a href="/single-service/details1" className="learn text-16 leading-16 font-semibold title1">
                      Read More
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
            <Col lg={4} md={6}>
              <div className="service2-box mt-30">
                <div className="image image-anime reveal">
                  <Image src={service2} alt="" height={393} />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service2-box mt-30 content-box">
                <div className="with-content">
                  <div className="heading2">
                    <h4>
                      <Link href="/single-service/details1">Content Creation &amp; Management</Link>
                    </h4>
                    <p className="mt-16">Stand out with visually stunning and impactful content tailored for each platform.</p>
                    <a href="/single-service/details1" className="learn text-16 leading-16 font-semibold title1">
                      Read More
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
            <Col lg={4} md={6}>
              <div className="service2-box mt-30">
                <div className="image image-anime reveal">
                  <Image src={service3} alt="" height={393} />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service2-box mt-30 content-box">
                <div className="with-content">
                  <div className="heading2">
                    <h4>
                      <Link href="/single-service/details1">Paid Social Advertising</Link>
                    </h4>
                    <p className="mt-16">
                      We create high-converting campaigns that reach your ideal audience, driving traffic, engagement, and sales.
                    </p>
                    <a href="/single-service/details1" className="learn text-16 leading-16 font-semibold title1">
                      Read More
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
            <Col lg={4} md={6}>
              <div className="service2-box mt-30">
                <div className="image image-anime reveal">
                  <Image src={service4} alt="" height={393} />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service2-box mt-30 content-box">
                <div className="with-content">
                  <div className="heading2">
                    <h4>
                      <Link href="/single-service/details1">Social Media Analytics &amp; Reporting</Link>
                    </h4>
                    <p className="mt-16">
                      provide regular performance reports, allowing us to refine strategies &amp; keep your campaigns on track for success.
                    </p>
                    <a href="/single-service/details1" className="learn text-16 leading-16 font-semibold title1">
                      Read More
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
            <Col lg={4} md={6}>
              <div className="service2-box mt-30">
                <div className="image image-anime reveal">
                  <Image src={service5} alt="" height={393} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
