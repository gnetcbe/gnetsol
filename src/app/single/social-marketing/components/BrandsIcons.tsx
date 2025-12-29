'use client'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import { brandData } from '../data'

const BrandsIcons = () => {
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
      <div className="brands9">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="brands9-area text-center">
                <h3>Trusted by Leading Brands Worldwide</h3>
                <div className="brands9-slider mt-50">
                  <Slider {...settings}>
                    {brandData.map((item, idx) => (
                      <div key={idx} className="single-items">
                        <div className="brands9-single">
                          <Image src={item.image} alt="" />
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

export default BrandsIcons
