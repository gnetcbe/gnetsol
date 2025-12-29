'use client'
import quote10 from '@/assets/img/icons/quote10.svg'
import span10 from '@/assets/img/icons/span10.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'
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
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="tes10 sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading10">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span10} alt="" /> Our Happy Clients
                </span>
                <h2 className="text-anime-style-3">Success Stories from Our All Happy Clients</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="tes7-slider-all mt-60 _relative" data-aos="fade-up" data-aos-duration={1000}>
              <div className="tes7-slider">
                <Slider ref={sliderRef} {...settings}>
                  {testimonialData.map((item, idx) => (
                    <div key={idx} className="tes10-single-slider">
                      <div className="quote">
                        <Image src={quote10} alt="" />
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
                      <div className="content">
                        <p>{item.description}</p>
                      </div>
                      <div className="bottom-area">
                        <div className="author-info">
                          <div className="author_thumb">
                            <Image src={item.image} alt="" />
                          </div>
                          <div className="author-text">
                            <Link href="#">{item.name}</Link>
                            <p className="mt-10">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="tes10-slider-btns">
                <button className="tes10-next-arrow" onClick={() => sliderRef.current?.slickPrev()}>
                  <FaAngleLeft className="fa-regular" />
                </button>
                <button className="tes10-prev-arrow" onClick={() => sliderRef.current?.slickNext()}>
                  <FaAngleRight className="fa-regular" />
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Testimonial
