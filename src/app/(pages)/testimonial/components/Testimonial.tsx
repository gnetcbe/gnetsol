'use client'
import tes3 from '@/assets/img/testimonial/tes3-big-image.png'
import reviews from '@/assets/img/testimonial/tes3-reviews.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import { testimonialData } from '../data'
import Blog from './Blog'

const Testimonials = () => {
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
      <div className="tes11 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="tes11-left-side-images mt-30" data-aos="fade-up" data-aos-duration={900}>
                <div className="image">
                  <Image src={tes3} alt="" />
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
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="tes11-slider-all mt-16 _relative" data-aos="fade-up" data-aos-duration={900}>
                <div className="tes11-slider">
                  <Slider {...settings}>
                    {testimonialData.map((item, idx) => (
                      <div key={idx} className="tes11-single-slider-items">
                        <p>"{item.description}"</p>
                        <div className="tes11-dv-top" />
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

          <Blog />
        </Container>
      </div>
    </>
  )
}

export default Testimonials
