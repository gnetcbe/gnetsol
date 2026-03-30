'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

import hero6 from '@/assets/img/s3.jpg'
import hero7 from '@/assets/img/s4.jpg'
import hero8 from '@/assets/img/s5.jpg'
import span3 from '@/assets/img/icons/span3.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// ✅ FIX — ssr:false prevents glightbox from running on server
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })

const heroSlides = [
  {
    image: hero6,
    tag: "WEB SOLUTIONS",
    title: "Crafting Digital Experiences",
    desc: "Custom websites and applications built for performance."
  },
  {
    image: hero7,
    tag: "AGILE DEVELOPMENT",
    title: "Build Faster, Smarter, Better",
    desc: "Rapid, scalable and future-ready software development."
  },
  {
    image: hero8,
    tag: "INNOVATION",
    title: "Technology That Drives Growth",
    desc: "Smart digital solutions that elevate your business."
  }
]

const bottomTexts = [
  "⚙️ Custom Apps",
  "🛰️ Domain Services",
  "🎨 Creative Websolutions",
  "🛒 Online Stores",
  "🗂️ Content Systems",
  "🔧 Site Upkeep",
  "✉️ Mail Solutions",
  "📈 Growth Marketing"
]

const Hero = () => {
  return (
    <>

      {/* 🔥 TOP HERO SWIPER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop
        pagination={{ clickable: true }}
        style={{ height: "100vh" }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero6"
              style={{
                backgroundImage: `url(${slide.image.src})`,
                height: "100vh",
                display: "flex",
                alignItems: "center",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <Container>
                <GlightBox>
                  <Row>
                    <Col lg={6}>
                      <div className="main-heading6">
                        <span className="sub-title">
                          <Image
                            src={span3}
                            alt="G-Net Solutions Icon"
                          />
                          {slide.tag}
                        </span>

                        <h1>{slide.title}</h1>

                        <p>{slide.desc}</p>

                        <div className="buttons">
                          <Link href="/about" className="theme-btn11">
                            <span className="theme-btn11__text">
                              Get Started Today
                            </span>
                            <span className="arrow1">
                              <FaArrowRight />
                            </span>
                            <span className="arrow2">
                              <FaArrowRight />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </GlightBox>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 BOTTOM SLIDER */}
      <div className="hero6-bottom-slider" style={{ padding: "10px 0" }}>
        <Container fluid className="p-0">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            speed={900}
            loop
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 }
            }}
            style={{ padding: "20px 0" }}
          >
            {bottomTexts.map((txt, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    background: "#005aa0",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontWeight: 600,
                    color: "#fff",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.08)"
                  }}
                >
                  {txt}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </>
  )
}

export default Hero