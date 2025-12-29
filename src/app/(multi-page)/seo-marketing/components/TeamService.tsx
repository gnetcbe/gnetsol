'use client'
import span1 from '@/assets/img/icons/span1.svg'
import shape from '@/assets/img/shapes/team8-image-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaPlus } from 'react-icons/fa6'
import Slider from 'react-slick'
import { teamserviceData } from '../data'

const TeamService = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="team8 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading8">
                <span className="sub-title1" data-aos="fade-left" data-aos-duration={800}>
                  <Image src={span1} alt="" /> Meet the Professionals
                </span>
                <h2 className="text-anime-style-3">Our Expert Team at Service</h2>
              </div>
            </Col>
            <Col lg={6} className=" text-end sm:text-start md:text-start sm:mt-30 md:mt-30">
              <div className="team8-slider-btns" data-aos="fade-left" data-aos-duration={800}>
                <button className="team8-next-arrow" onClick={() => sliderRef.current?.slickPrev()}>
                  <FaAngleLeft className="fa-regular" />
                </button>
                <button className="team8-prev-arrow" onClick={() => sliderRef.current?.slickNext()}>
                  <FaAngleRight className="fa-regular" />
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="team8-slider-all mt-60" data-aos="fade-up" data-aos-duration={800}>
                <div className="team8-slider">
                  <Slider ref={sliderRef} {...settings}>
                    {teamserviceData.map((item, idx) => (
                      <div key={idx} className="team8-single-slider">
                        <div className="team8-box">
                          <div className="team8-image-area">
                            <div className="image">
                              <Image src={item.image} alt="" />
                            </div>
                            <div className="image-shape">
                              <Image src={shape} alt="" />
                            </div>
                            <div className="plus">
                              <Link href="">
                                <FaPlus className="fa-solid" />
                              </Link>
                            </div>
                          </div>
                          <div className="content heading8 mt-30">
                            <h4>
                              <Link href="">{item.name}</Link>
                            </h4>
                            <p className="mt-10">{item.title}</p>
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

export default TeamService
