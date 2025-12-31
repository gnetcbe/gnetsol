'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaPlus } from 'react-icons/fa6'

// Heading Icon
import span1 from '@/assets/img/icons/span1.svg'

// Service Images (Update with your correct paths)
import maintenanceImg from '@/assets/img/services/web-dev.jpg'
import webAppImg from '@/assets/img/services/web-app.jpg'
import hostingImg from '@/assets/img/services/hosting.jpg'
import  webDevImg from '@/assets/img/services/maintenance.jpg'
import emailImg from '@/assets/img/services/email.jpg'
import marketingImg from '@/assets/img/services/marketing.jpg'

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const servicesData = [
    {
      title: 'Web Development',
      description: 'Responsive, secure and high-performance websites built for business growth.',
      image: webDevImg,
    },
    {
      title: 'Web Applications',
      description: 'Custom web applications engineered to automate processes and increase productivity.',
      image: webAppImg,
    },
    {
      title: 'Domain Name & Web Hosting',
      description: 'Reliable domain registration and hosting services with full technical support.',
      image: hostingImg,
    },
    {
      title: 'Website Maintenance',
      description: 'Regular updates, security checks and technical support for smooth operation.',
      image: maintenanceImg,
    },
    {
      title: 'Email Solutions',
      description: 'Professional business email systems with seamless setup and integration.',
      image: emailImg,
    },
    {
      title: 'Digital Marketing',
      description: 'Results-driven digital strategies that boost visibility and engagement.',
      image: marketingImg,
    },
  ]

  return (
    <div className="service7 pt-120 md:pt-50 sm:pt-50">
      <Container>
        <Row>
          {/* LEFT SIDE CONTENT */}
          <Col lg={4}>
            <div className="heading7">
              <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                <Image src={span1} alt="icon" /> OUR SERVICES
              </span>
              <h2 className="text-anime-style-3">What We Do</h2>

              <p
                className="mt-16"
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={200}
              >
               We deliver custom software, web applications, hosting, and maintenance services—built to support your business end-to-end. Our team also provides SEO and digital marketing solutions that elevate visibility and drive measurable growth.
              </p>

              <div className="button mt-30">
                <Link
                  href="/service"
                  className="theme-btn13"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
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

          {/* RIGHT SIDE SERVICES LIST */}
          <Col lg={8}>
            <div className="cs_case_study_1_list md:mt-30 sm:mt-30">
              {servicesData.map((service, index) => {
                const isActive = hoveredIndex === index || (hoveredIndex === null && index === 0)

                return (
                  <div
                    key={index}
                    className={`cs_case_study cs_style_1 cs_hover_active ${
                      isActive ? 'active' : ''
                    }`}
                    data-aos="fade-up"
                    data-aos-duration={900 + index * 100}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* IMAGE THUMBNAIL */}
                    <div className="cs_case_study_thumb">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    {/* SMALL TITLE BAR */}
                    <div className="content-area1">
                      <Link href="#">{service.title}</Link>
                      <Link href="#" className="cirle-arrow">
                        <FaPlus className="fa-regular" />
                      </Link>
                    </div>

                    {/* ON ACTIVE / HOVER CONTENT */}
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
  )
}

export default Services
