'use client'
import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div className="about1 sp">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> ABOUT US
                </span>
                <h2 className="text-anime-style-3">The Results Speak for Themselves</h2>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                  We’re not just an SEO agency — we’re your partner in achieving measurable growth. With our tailored strategies and cutting-edge
                  tools, we’ve built a legacy of success.
                </p>
              </div>
            </Col>
            <Col lg={8} className="text-end sm:text-start md:text-start md:mt-30 sm:mt-30">
              <div className="button" data-aos="fade-left" data-aos-duration={1000}>
                <Link href="/about" className="theme-btn1">
                  Work With Us
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-30 align-items-end about1-boxs-all">
            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500}>
              <div className="about1-box box1 white-heading mt-30">
                <div className="top-heading">
                  <h5>Clients Served Worldwide</h5>
                  <p className="mt-16">Partnering with businesses across the globe to achieve outstanding results.</p>
                </div>
                <div className="bottom-heading">
                  <h3>
                    <span className="counter">500</span> +
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
              <div className="about1-box box2 white-heading mt-30">
                <div className="top-heading">
                  <h5>Projects Successfully Completed</h5>
                  <p className="mt-16">Delivering customized campaigns that drive traffic and boost conversions.</p>
                </div>
                <div className="bottom-heading">
                  <h3>
                    <span className="counter">700</span> +
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-duration={1000} data-aos-delay={200}>
              <div className="about1-box box3 white-heading mt-30">
                <div className="top-heading">
                  <h5>Revenue Generated for Clients</h5>
                  <p className="mt-16">Partnering with businesses across the globe to achieve outstanding results.</p>
                </div>
                <div className="bottom-heading">
                  <h3>
                    $<span className="counter">200</span>M+
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About
