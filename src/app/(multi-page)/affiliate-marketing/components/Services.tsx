'use client'
import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaPlus } from 'react-icons/fa6'

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const servicesData = [
    {
      title: 'Partner Recruitment',
      description: 'Build and optimize high-performing affiliate networks that drive results.',
      thumbClass: 'cs_case_study_thumb',
    },
    {
      title: 'Performance Analysis',
      description: 'Build and optimize high-performing affiliate networks that drive results.',
      thumbClass: 'cs_case_study_thumb2',
    },
    {
      title: 'Campaign Optimization',
      description: 'Build and optimize high-performing affiliate networks that drive results.',
      thumbClass: 'cs_case_study_thumb3',
    },
    {
      title: 'Affiliate Program Management',
      description: 'Build and optimize high-performing affiliate networks that drive results.',
      thumbClass: 'cs_case_study_thumb4',
    },
  ]

  return (
    <>
      <div className="service7 pt-120 md:pt-50 sm:pt-50">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="heading7">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> OUR SERVICES
                </span>
                <h2 className="text-anime-style-3">What We Do</h2>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={800} data-aos-delay={200}>
                  We offer a comprehensive range affiliate marketing services designed to help your brand thrive in a competitive landscape.
                </p>
                <div className="button mt-30">
                  <Link href="/service" className="theme-btn13" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                    View All Services
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="cs_case_study_1_list md:mt-30 sm:mt-30">
                {servicesData.map((service, index) => {
                  const isActive = hoveredIndex === index || (hoveredIndex === null && index === 0)

                  return (
                    <div
                      key={index}
                      className={`cs_case_study cs_style_1 cs_hover_active aos-init aos-animate ${isActive ? 'active' : ''}`}
                      data-aos="fade-up"
                      data-aos-duration={900 + index * 100}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}>
                      <a href="#" className={`cs_case_study_thumb ${service.thumbClass} cs_bg_filed`} />
                      <div className="content-area1">
                        <Link href="#">{service.title}</Link>
                        <Link href="#" className="cirle-arrow">
                          <FaPlus className="fa-regular" />
                        </Link>
                      </div>
                      <div className="content-area">
                        <Link href="#">{service.title}</Link>
                        <p>{service.description}</p>
                        <Link href="#" className="learn">
                          <FaArrowRight className="fa-solid" />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Services
