'use client'
import span1 from '@/assets/img/icons/span1.svg'
import work1 from '@/assets/img/shapes/work1-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ourwork } from '../data'

const OurProcess = () => {
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
    <>
      <div className="work1 sp sec-bg1">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> OUR WORK PROCESS
                </span>
                <h2 className="text-anime-style-3">Our Proven Process for Delivering Success</h2>
              </div>
            </Col>
            <Col lg={6} className=" text-end sm:text-start md:text-start">
              <div className="button" data-aos="fade-right" data-aos-duration={900}>
                <Link href="/about" className="theme-btn1 mt-30">
                  Get In Touch
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} className="m-auto">
              <div className="work1-slider-all _relative" data-aos="fade-up" data-aos-duration={900} data-aos-delay={200}>
                <div className="work1-slider">
                  <Slider ref={sliderRef} {...settings}>
                    {ourwork.map((item, idx) => (
                      <div key={idx} className="work1-single-slider">
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
                          <div className="work1-list">
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
                <div className="work1-slider-btns">
                  <button className="work1-prev-arrow " onClick={() => sliderRef.current?.slickPrev()}>
                    <FaAngleLeft className="fa-solid" />
                  </button>
                  <button className="work1-next-arrow" onClick={() => sliderRef.current?.slickNext()}>
                    <FaAngleRight className="fa-solid" />
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

export default OurProcess
