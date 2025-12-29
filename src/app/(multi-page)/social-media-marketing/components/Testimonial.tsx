'use client'
import qoute2 from '@/assets/img/icons/qoute2.svg'
import span3 from '@/assets/img/icons/span3.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import { testimonialData } from '../data'

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="tes2 sp">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="heading2">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="" />
                  OUR TESTIMONIALS
                </span>
                <h2 className="text-anime-style-3">Our Clients Love Working With Us</h2>
              </div>
            </Col>
            <Col lg={5}>
              <div className="button text-end sm:text-start md:text-start md:mt-30 sm:mt-30" data-aos="fade-left" data-aos-duration={1000}>
                <Link className="theme-btn3" href="/testimonial">
                  See All Reviews
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
          <Row>
            <Col lg={12} data-aos="fade-up" data-aos-duration={900}>
              <div className="tes2-slider mt-60">
                <Slider {...settings}>
                  {testimonialData.map((item, idx) => (
                    <div key={idx} className="tes2-single-slider" style={{ marginRight: '10px', marginLeft: '10px' }}>
                      <div className="qoute">
                        <Image src={qoute2} alt="" />
                      </div>
                      <div className="stars">
                        <ul>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="star">
                            <FaStar className="fa-solid" />
                          </li>
                          <li className="rating-text">(5) Rating</li>
                        </ul>
                      </div>
                      <div className="content">
                        <p>{item.description}</p>
                      </div>
                      <div className="author-area">
                        <div className="author-thumb">
                          <Image src={item.image} alt="" />
                        </div>
                        <div className="author-ifo ml-16 heading2">
                          <h4>
                            <Link href="#">{item.name}</Link>
                          </h4>
                          <p className="mt-1">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Testimonial
