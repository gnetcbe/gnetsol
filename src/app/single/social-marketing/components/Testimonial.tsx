'use client'
import quote from '@/assets/img/icons/quote9.svg'
import span9 from '@/assets/img/icons/span9.svg'
import brands8 from '@/assets/img/logo/brands8-logo3.png'
import shape from '@/assets/img/shapes/tes9-image-shape.png'
import tes9 from '@/assets/img/testimonial/tes9-image.png'
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
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  }
  return (
    <>
      <div className="tes9 sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading9">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span9} alt="" /> Our Happy Clients
                </span>
                <h2 className="text-anime-style-3">Our Clients Speak for Us</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30 align-items-center">
            <Col lg={5}>
              <div className="tes9-images mt-30" data-aos="zoom-in-left" data-aos-duration={900}>
                <div className="image">
                  <Image src={tes9} alt="" />
                </div>
                <div className="image-shape round-circle">
                  <Image src={shape} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="tes9-slider-area _relative mt-30" data-aos="fade-up" data-aos-duration={1000}>
                <div className="tes9-slider">
                  <Slider ref={sliderRef} {...settings}>
                    {testimonialData.map((item, idx) => (
                      <div key={idx} className="tes9-single-slider">
                        <div className="qoute">
                          <Image src={quote} alt="" />
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
                          <p>{item.description}</p>
                        </div>
                        <div className="bottom-area">
                          <div className="author-area">
                            <div className="author_thumb">
                              <Image src={item.image} alt="" />
                            </div>
                            <div className="author_text">
                              <Link href="#">{item.name}</Link>
                              <p>{item.title}</p>
                            </div>
                          </div>
                          <div className="brand-logo">
                            <Image src={brands8} alt="" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="tes9-slider-btns">
                  <button className="tes9-next-arrow" onClick={() => sliderRef.current?.slickPrev()}>
                    <FaAngleUp className="fa-regular" />
                  </button>
                  <button className="tes9-prev-arrow" onClick={() => sliderRef.current?.slickNext()}>
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
