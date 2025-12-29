'use client'
import quote6 from '@/assets/img/icons/qoute6.svg'
import google from '@/assets/img/others/google6.png'
import tes6 from '@/assets/img/testimonial/tes6-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
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
      <div className="testimonial sp" id="tes">
        <Container>
          <Row>
            <Col lg={6} className=" m-auto text-center">
              <div className="heading6 _mt-50">
                <span className="sub-title">Testimonial</span>
                <h2 className="text-anime-style-3">Trusted by Businesses and Professionals Alike</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30 align-items-center">
            <Col lg={6}>
              <div className="tes6-image image-anime reveal mt-30">
                <Image className="w-full" src={tes6} alt="" height={434} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="tes6-slider-all mt-30">
                <div className="tes6-slider-content">
                  <div className="tes6-slider">
                    <Slider ref={sliderRef} {...settings}>
                      {testimonialData.map((item, idx) => (
                        <div key={idx} className="tes6-single-slider">
                          <div className="stars">
                            <ul>
                              <li>
                                <FaStar className="fa-solid" />
                              </li>
                              <li>
                                <FaStar className="fa-solid" />
                              </li>
                              <li>
                                <FaStar className="fa-solid" />
                              </li>
                              <li>
                                <FaStar className="fa-solid" />
                              </li>
                              <li>
                                <FaStar className="fa-solid" />
                              </li>
                            </ul>
                          </div>
                          <div className="qoute">
                            <Image src={quote6} alt="" />
                          </div>
                          <p className="content-text">"{item.description}"</p>
                          <div className="bottom-area">
                            <div className="author-area">
                              <div className="author-image">
                                <Image src={item.image} alt="" />
                              </div>
                              <div className="author-text">
                                <Link href="#">James Reynolds</Link>
                                <p>Marketing Director</p>
                              </div>
                            </div>
                            <div className="google-logo">
                              <Image src={google} alt="" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="tes6-slider-btns">
                  <button className="tes6-next-arrow" onClick={() => sliderRef.current?.slickPrev()}>
                    <FaArrowLeft className="fa-regular" />
                  </button>
                  <button className="tes6-prev-arrow" onClick={() => sliderRef.current?.slickNext()}>
                    <FaArrowRight className="fa-regular" />
                  </button>
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
