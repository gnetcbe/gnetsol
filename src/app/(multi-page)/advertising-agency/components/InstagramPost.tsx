'use client'
import span4 from '@/assets/img/icons/span4.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaInstagram } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { instaData } from '../data'

const InstagramPost = () => {
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
      <div className="instagram-feed3 sp sec-bg2">
        <Container fluid>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading3">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span4} alt="" /> INSTAGRAM POST
                </span>
                <h2 className="text-anime-style-3">Seox On Instagram</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-60" data-aos="fade-up" data-aos-duration={800}>
            <div className="istagram-feed3-slider owl-carousel">
              <Slider {...settings}>
                {instaData.map((item, idx) => (
                  <div key={idx} className="single-instagram-feed px-3">
                    <div className="image-area">
                      <Image src={item.image} alt="" className="w-100 img-fluid" />
                      <Link href="" className="insta-icon">
                        <FaInstagram className="fa-brands" />
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default InstagramPost
