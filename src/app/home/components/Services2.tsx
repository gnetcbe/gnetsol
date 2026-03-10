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
                <h1 className="text-anime-style-3">
                  Our Expertise Your Growth
                </h1>
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
      </div>
    </>
  )
}

export default Services
