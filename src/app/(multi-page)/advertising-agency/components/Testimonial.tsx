'use client'
import span4 from '@/assets/img/icons/span4.svg'
import tes3 from '@/assets/img/testimonial/tes3-big-image.png'
import reviews from '@/assets/img/testimonial/tes3-reviews.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import { testimonialData } from '../data'

const Testimonial = () => {
  const settings = {
    dots: true,
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
      <div className="tes3 sp">
        <Container>
          <Row>
            <Col lg={3} className="m-auto text-center">
              <div className="heading3">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span4} alt="" /> TESTIMONIALS
                </span>
                <h2 className="text-anime-style-3">Success Stories From Our Partners</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30 align-items-center">
            <Col lg={4}>
              <div className="tes3-left-side-images mt-30" data-aos="fade-up" data-aos-duration={900}>
                <div className="image">
                  <Image src={tes3} alt="" height={417} />
                </div>
                <div className="review-box">
                  <div className="review-image">
                    <Image src={reviews} alt="" />
                  </div>
                  <div className="review-starts">
                    <p>20k Reviews</p>
                    <div className="stars">
                      <ul>
                        <li>
                          <FaStar className="fa-solid" width={18} height={16} />
                        </li>
                        <li>
                          <FaStar className="fa-solid" width={18} height={16} />
                        </li>
                        <li>
                          <FaStar className="fa-solid" width={18} height={16} />
                        </li>
                        <li>
                          <FaStar className="fa-solid" width={18} height={16} />
                        </li>
                        <li>
                          <FaStar className="fa-solid" width={18} height={16} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="tes3-slider-all mt-16 _relative" data-aos="fade-up" data-aos-duration={900}>
                <div className="tes3-slider">
                  <Slider {...settings}>
                    {testimonialData.map((item, idx) => (
                      <div key={idx} className="tes3-single-slider-items">
                        <p>"{item.description}"</p>
                        <div className="tes3-dv-top" />
                        <div className="author-area">
                          <div className="author-thumb">
                            <Image src={item.image} alt="" />
                          </div>
                          <div className="author-text">
                            <Link href="">{item.name}</Link>
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
        </Container>
      </div>
    </>
  )
}

export default Testimonial
