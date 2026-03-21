import span5 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { serviceData, serviceData2 } from '../data'

const Services = () => {
  return (
    <>
      <div className="service4 sp sec-bg3">
        <Container>
          {/* HEADER */}
          <Row>
            <Col lg={6}>
              <div className="heading4">
                <span
                  className="sub-title"
                  data-aos="zoom-in-left"
                  data-aos-duration={900}
                >
                  <Image src={span5} alt="Our Services Icon" /> OUR SERVICES
                </span>
                <h2 className="text-anime-style-3">
                  Our Expertise Your Growth
                </h2>
              </div>
            </Col>

            <Col lg={6}>
              <div className="text-end button md:mt-20 sm:mt-20 md:text-start sm:text-start">
                <Link href="/software-development" className="theme-btn8">
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__text">
                    View All Services
                  </span>
                </Link>
              </div>
            </Col>
          </Row>

          {/* SERVICE LIST */}
          <Row className="mt-30">

            {/* FIRST GROUP */}
            {serviceData.map((item, idx) => (
              <Col
                lg={4}
                md={6}
                key={idx}
                data-aos="zoom-in-up"
                data-aos-duration={1000}
              >
                <div className="service4-box mt-30">
                  <div className="bg-icon">
                    <Image src={item.image} alt={item.title} />
                  </div>

                  <div className="heading4">
                    <h3>
                     <Link href={item.link!}>{item.title}</Link> 
                    </h3>

                    <p className="mt-16">{item.description}</p>

                    <Link
  href={item.link!}
  className="learn text-16 leading-16 font-semibold title1"
>

                      Read More
                      <span className="arrow1">
                        <FaArrowRight />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}

            {/* SECOND GROUP */}
            {serviceData2.map((item, idx) => (
              <Col
                lg={6}
                md={6}
                key={idx}
                data-aos="zoom-in-up"
                data-aos-duration={800}
              >
                <div className="service4-box mt-30">
                  <div className="bg-icon">
                    <Image src={item.image} alt={item.title} />
                  </div>

                  <div className="heading4">
                    <h4>
                      <Link href={item.link!}>{item.title}</Link>
                    </h4>

                    <p className="mt-16">{item.description}</p>

                    <Link
                      href={item.link!}
                      className="learn text-16 leading-16 font-semibold title1"
                    >
                      Read More
                      <span className="arrow1">
                        <FaArrowRight />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}

          </Row>
        </Container>

<Container className="dm-hero" >
    <Row className="align-items-center">
       <Col lg={1} md={12} className="d-flex justify-content-center align-items-center">
  <div className="dm-icon">
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
      <circle cx="9" cy="10" r="1"></circle>
      <circle cx="15" cy="10" r="1"></circle>
    </svg>
  </div>
</Col>
      {/* LEFT SIDE (80%) */}
      <Col lg={9} md={12}>
        <div className="dm-left">
          <h2>
            Transform Your Business with Smart Chatbots
          </h2>
          <p>
            Welcome to the Future of Customer Engagement
          </p>
        </div>
      </Col>

      {/* RIGHT SIDE (20%) */}
      <Col
  lg={2}
  md={12}
  className="d-flex justify-content-center align-items-center mt-md-3 mt-3"
>
  <Link href="/chatbot" className="dm-btn">
    View More <FaArrowRight />
  </Link>
</Col>

    </Row>
  </Container>

        
      </div>
    </>
  )
}

export default Services
