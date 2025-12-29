'use client'
import quote from '@/assets/img/icons/qoute7.svg'
import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import { tes } from '../data'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: 30,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="tes7">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading7">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> TESTIMONIALS
                </span>
                <h2 className="text-anime-style-3">Hear From Our Happy Partners</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="button text-end md:text-start sm:text-start md:mt-20 sm:mt-20" data-aos="fade-left" data-aos-duration={800}>
                <Link href="/testimonial" className="theme-btn13">
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
            <Col lg={12}>
              <div className="tes7-slider-all mt-60" data-aos="fade-up" data-aos-duration={900}>
                <div className="tes7-slider">
                  <Slider {...settings}>
                    {tes.map((item, idx) => (
                      <div key={idx} className="tes7-single-slider">
                        <div className="qoute">
                          <Image src={quote} alt="" />
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
                          <p>{item.comment}</p>
                        </div>
                        <div className="author-area">
                          <div className="author-thumb">
                            <Image src={item.image} alt="" />
                          </div>
                          <div className="author-ifo ml-16 heading7">
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Testimonial
