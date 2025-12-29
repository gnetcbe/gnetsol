'use client'
import shap5 from '@/assets/img/icons/span5.svg'
import microsoft from '@/assets/img/others/microsoft.png'
import tes6 from '@/assets/img/shapes/tes6-sec-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import { testimonialData } from '../data'

const Testimonial = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="tes6 sp sec-bg4">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading5">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={shap5} alt="" />
                  OUR TESTIMONIALS
                </span>
                <h2 className="text-anime-style-3">Real Stories, Real Success</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="button text-end sm:text-start md:text-start md:mt-30 sm:mt-30" data-aos="fade-left" data-aos-duration={1000}>
                <Link className="theme-btn10" href="/blog">
                  View All Review
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
            <div className="tes5-all-area" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
              <Row>
                <Col lg={6}>
                  <div className="tes5-left-area">
                    <div className="reting-area">
                      <div className="titile">
                        <h2>
                          5.0
                          <span>
                            <FaStar className="fa-solid" />
                          </span>
                        </h2>
                        <p>50+ Review</p>
                      </div>
                      <h3>"Success Stories from Visionary Founders"</h3>
                    </div>
                    <div className="tes5-slider-btns">
                      <button className="tes5-next-arrow" onClick={() => sliderRef.current?.slickPrev()}>
                        <FaAngleLeft className="fa-regular" />
                      </button>
                      <button className="tes5-prev-arrow" onClick={() => sliderRef.current?.slickNext()}>
                        <FaAngleRight className="fa-regular" />
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="tes5-slider-area">
                    <div className="tes5-slider">
                      <Slider ref={sliderRef} {...settings}>
                        {testimonialData.map((item, idx) => (
                          <div key={idx} className="tes5-single-slider">
                            <div className="brand-logo">
                              <Image src={microsoft} alt="" />
                            </div>
                            <p>{item.comment}</p>
                            <div className="author-area">
                              <div className="author_thumb">
                                <Image src={item.image} alt="" />
                              </div>
                              <div className="author_text">
                                <Link href="#">{item.name}</Link>
                                <p>{item.title}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="circle-shape">
                <Image src={tes6} alt="" />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Testimonial
