'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import hero01 from '@/assets/img/bg/hero1-bg.jpg'
import mainImg from '@/assets/img/s1.jpg'
import mainImg2 from '@/assets/img/s2.png'
import mainImg3 from '@/assets/img/hero/hero1-main-image.png'

import span2 from '@/assets/img/icons/span2.svg'
import shape1 from '@/assets/img/shapes/hero1-image-shape1.png'
import shape2 from '@/assets/img/shapes/hero1-image-shape2.png'
import heroshape1 from '@/assets/img/shapes/hero1-shape1.png'
import heroshape2 from '@/assets/img/shapes/hero1-shape2.png'

import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './hero.module.css'

const slides = [
  {
    title: "Grow Your Business With Powerful SEO",
    desc: "Rank higher, get more leads, and scale faster with proven SEO.",
    image: mainImg
  },
  {
    title: "Drive High-Quality Organic Traffic",
    desc: "Increase visibility and outrank your competitors effortlessly.",
    image: mainImg2
  },
  {
    title: "Boost Conversions With Smart Marketing",
    desc: "Turn visitors into loyal customers with strategy.",
    image: mainImg3
  }
]

const Hero = () => {
  return (
    <div className="hero1" style={{ backgroundImage: `url(${hero01.src})` }}>
      <Container>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          loop={true}
          pagination={{ clickable: true }}
          effect="slide"
          speed={800}
          className={styles.heroSwiper}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <Row className="align-items-center">

                <Col lg={6}>
                  <div className="main-heading1">
                    <span className="sub-title">
                      <Image src={span2} alt="" /> SEO MARKETING AGENCY
                    </span>

                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="hero1-images mt60">

                    <div className="main-images">
                      <div className="image1 _relative overflow-hidden">
                        <Image src={item.image} alt="" />
                      </div>

                      
                    </div>

                    <div className="sec-element1 animate7">
                      <Image src={heroshape1} alt="" />
                    </div>

                    <div className="sec-element2 animate8">
                      <Image src={heroshape2} alt="" />
                    </div>

                  </div>
                </Col>

              </Row>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </div>
  )
}

export default Hero
