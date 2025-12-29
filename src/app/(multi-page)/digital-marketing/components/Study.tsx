'use client'
import work1 from '@/assets/img/shapes/work1-shape.png'
import { useRef } from 'react'
import span1Img from '@/assets/img/icons/span1.svg'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ourwork } from '../data'
import Image from 'next/image'


const Study = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const sliderRef = useRef<Slider | null>(null)
  return (
    <div className="case4 sp sec-bg3">
    <Container>
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="heading4">
            <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}><Image src={span1Img} alt='span1Img' /> CASE STUDY</span>
            <h2 className="text-anime-style-3">Driving Growth for SEOX </h2>
          </div>
        </Col>
        <Col lg={6}>
          <div className="text-end button md:mt-20 sm:mt-20 md:text-start sm:text-start" data-aos="fade-left" data-aos-duration={800}>
            <a href="" className="theme-btn8">
              <span className="theme-btn8__shape" />
              <span className="theme-btn8__shape" />
              <span className="theme-btn8__shape" />
              <span className="theme-btn8__shape" />
              <span className="theme-btn8__text">View All Case Study </span>
            </a>
          </div>
        </Col>
      </Row>
      <Row className='mt-40'>
        <Col lg={9} className="m-auto">
          <div className="work8-slider-all _relative" data-aos="fade-up" data-aos-duration={900} data-aos-delay={200}>
            <div className="work8-slider">
              <Slider ref={sliderRef} {...settings}>
                {ourwork.map((item, idx) => (
                  <div key={idx} className="work8-single-slider">
                    <div className="images-all">
                      <div className="shape animate1">
                        <Image src={work1} alt="" />
                      </div>
                      <div className="image">
                        <Image src={item.image} alt="" />
                      </div>
                    </div>
                    <div className="content-area heading1">
                      <div className="num">
                        <p>{item.number}</p>
                      </div>
                      <h3 className="mt-16">Monitoring &amp; Optimization</h3>
                      <p className="mt-16">
                        Continuous monitoring and regular optimizations to keep your campaigns effective and aligned with your goals.
                      </p>
                      <div className="work8-list">
                        <ul>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            In-Depth Research
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            Implementation with Precision
                          </li>
                          <li>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            Transparent Reporting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="work8-slider-btns">
              <button className="work8-prev-arrow " onClick={() => sliderRef.current?.slickPrev()}>
                <FaAngleLeft className="fa-solid" />
              </button>
              <button className="work8-next-arrow" onClick={() => sliderRef.current?.slickNext()}>
                <FaAngleRight className="fa-solid" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>

  )
}

export default Study