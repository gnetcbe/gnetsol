'use client'
import bgimg from '@/assets/img/bg/sec-bg10.jpg'
import span10 from '@/assets/img/icons/span10.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaInstagram, FaPlus, FaXTwitter } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { teamData } from '../data'

const TeamArea = () => {
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
      <div className="team10 sp bg-cover" style={{ backgroundImage: `url(${bgimg.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading10">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span10} alt="" /> Meet the our Experts
                </span>
                <h2 className="text-anime-style-3">Leaders Behind the Vision</h2>
              </div>
            </Col>
            <Col lg={6} className=" text-end sm:text-start md:text-start sm:mt-30 md:mt-30">
              <div className="team10-slider-btns">
                <button className="team10-next-arrow" onClick={() => sliderRef.current?.slickPrev()}>
                  <FaAngleLeft className="fa-regular" />
                </button>
                <button className="team10-prev-arrow" onClick={() => sliderRef.current?.slickNext()}>
                  <FaAngleRight className="fa-regular" />
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="team10-slider-all mt-60" data-aos="fade-up" data-aos-duration={800} style={{ marginTop: '60px' }}>
              <div className="team10-slider">
                <Slider {...settings} ref={sliderRef}>
                  {teamData.map((item, idx) => (
                    <div key={idx} className="team10-single-slider" >
                      <div className="team-10-thumnail-area">
                        <div className="image">
                          <Image src={item.image} alt="" width={412} />
                        </div>
                        <div className="social">
                          <ul>
                            <li>
                              <Link href="">
                                <FaFacebookF className="fa-brands" />
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaInstagram className="fa-brands" />
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaXTwitter className="fa-brands" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <Link href="" className="plus-icon">
                          <FaPlus className="fa-solid" />
                        </Link>
                      </div>
                      <div className="content-area">
                        <div className="heading10">
                          <h4>
                            <Link href="">{item.name}</Link>
                          </h4>
                          <p className="mt-12">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TeamArea
