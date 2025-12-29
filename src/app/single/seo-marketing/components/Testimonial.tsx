'use client'
import sec from '@/assets/img/bg/sec-bg8.jpg'
import quote9 from '@/assets/img/icons/quote9.svg'
import span1 from '@/assets/img/icons/span1.svg'
import logo3 from '@/assets/img/logo/brands8-logo3.png'
import tes8 from '@/assets/img/testimonial/tes8-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import { testimonialData } from '../data'

const Testimonial = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  }
  return (
    <>
      <div className="tes8 sp bg-cover" style={{ backgroundImage: `url(${sec.src})` }}>
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading8">
                <span className="sub-title2" data-aos="fade-up" data-aos-duration={800}>
                  <Image src={span1} alt="" /> Real Feedback, Real Results
                </span>
                <h2 className="text-anime-style-3">Hear from Our Happy Clients</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30 align-items-center">
            <Col lg={4}>
              <div className="tes8-image-area mt-30" data-aos="zoom-out" data-aos-duration={900}>
                <div className="image">
                  <Image className="w-full" src={tes8} alt="" height={375} />
                </div>
                <div className="review-area">
                  <h3>5.0</h3>
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
                  <p>(346+ Reviews)</p>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="tes8-slider-area _relative mt-30" data-aos="fade-up" data-aos-duration={1100}>
                <div className="tes8-slider">
                  <Slider ref={sliderRef} {...settings}>
                    {testimonialData.map((item, idx) => (
                      <div key={idx} className="tes8-single-slider">
                        <div className="qoute">
                          <Image src={quote9} alt="" />
                        </div>
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
                        <div className="content mt-20">
                          <p>{item.comment}</p>
                        </div>
                        <div className="bottom-area">
                          <div className="author-area">
                            <div className="author_thumb">
                              <Image src={item.avatar} alt="" />
                            </div>
                            <div className="author_text">
                              <Link href="#">{item.title}</Link>
                              <p>{item.title}</p>
                            </div>
                          </div>
                          <div className="brand-logo">
                            <Image src={logo3} alt="" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="tes8-slider-btns">
                  <button className="tes8-next-arrow" onClick={() => sliderRef.current?.slickPrev()}>
                    <FaAngleUp className="fa-regular" />
                  </button>
                  <button className="tes8-prev-arrow" onClick={() => sliderRef.current?.slickNext()}>
                    <FaAngleDown className="fa-regular" />
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
