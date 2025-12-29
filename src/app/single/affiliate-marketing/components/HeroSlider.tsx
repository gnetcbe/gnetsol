'use client'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { heroslider } from '../data'

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="hero7-brand-area">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="hero7-slider-heading">
                <p>Partners With 100+ Company</p>
              </div>
              <div className="hero7-slider owl-carousel">
                <Slider {...settings}>
                  {heroslider.map((item, idx) => (
                    <div key={idx} className="single">
                      <Image src={item.image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HeroSlider
