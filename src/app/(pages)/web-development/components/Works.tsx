'use client'

import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { FaLink } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/navigation'

// Images
import sty from '@/assets/img/work/sty.jpg'
import fjb from '@/assets/img/work/fjb.jpg'
import kks from '@/assets/img/work/kks.jpg'
import glv from '@/assets/img/work/glv.jpg'
import val from '@/assets/img/work/val.jpg'
import tee from '@/assets/img/work/tee.jpg'
import act from '@/assets/img/work/act.jpg'
import spe from '@/assets/img/work/spe.jpg'


const works = [
  { image: sty, link: 'https://stayincoimbatore.com' },
  { image: fjb, link: 'https://foundryjobs.in' },
  { image: kks, link: '#' },
  { image: spe, link: '#' },
  { image: sty, link: '#' }, 
  { image: glv, link: '#' }, 
  { image: val, link: '#' }, 
  { image: tee, link: '#' }, 
  
]

const Works = () => {
  return (
    <section className="works-image-slider">
     <Container>
  {/* Heading */}
  <div className="heading2 text-center mb-40">
    <h2 className="text-anime-style-3">Some of Our Works</h2>
  </div>

  {/* Works Slider */}
  <Swiper
    modules={[Autoplay, Navigation]}
    loop
    navigation
    spaceBetween={20}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    breakpoints={{
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 }, // ✅ 5 per row
    }}
    className="works-swiper"
  >
    {works.map((item, index) => (
      <SwiperSlide key={index}>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="work-card"
        >
          <div className="work-image-wrap">
            {/* Image */}
            <Image
              src={item.image}
              alt="Project Work"
              fill
              sizes="(max-width: 576px) 100vw,
                     (max-width: 768px) 50vw,
                     (max-width: 992px) 33vw,
                     (max-width: 1200px) 25vw,
                     20vw"
              className="work-image"
            />

            {/* Hover Overlay */}
            <div className="work-overlay">
              <span className="icon">
                <FaLink />
              </span>
            </div>
          </div>
        </a>
      </SwiperSlide>
    ))}
  </Swiper>
</Container>


      {/* STYLES */}
      <style jsx>{` 
/* ================================
   WORKS SLIDER SECTION
================================ */
.works-image-slider {
  padding: 60px 0;
  background: #ffffff;
}

/* ================================
   WORK CARD
================================ */
.work-card {
  display: block;
  cursor: pointer;
}

/* ================================
   IMAGE WRAPPER (BORDER FIX)
================================ */
.work-image-wrap {
  position: relative;
  height: 220px;               /* fixed height for 5-column layout */
  border-radius: 12px;
  overflow: hidden;

  border: 1px solid #d1d5db;   /* ✅ visible border */
  padding: 6px;               /* ✅ creates space so border shows */
  background: #ffffff;        /* ✅ border contrast */
}

/* ================================
   IMAGE
================================ */
.work-image {
  object-fit: cover;
  border-radius: 8px;          /* inner radius */
  transition: transform 0.45s ease;
}

/* Zoom effect */
.work-card:hover .work-image {
  transform: scale(1.08);
}

/* ================================
   HOVER OVERLAY
================================ */
.work-overlay {
  position: absolute;
  inset: 6px;                  /* match padding */
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  border-radius: 8px;
}

.work-card:hover .work-overlay {
  opacity: 1;
}

/* ================================
   LINK ICON
================================ */
.work-overlay .icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #000000;
}

/* ================================
   SWIPER NAVIGATION
================================ */
.works-swiper .swiper-button-prev,
.works-swiper .swiper-button-next {
  color: #000000;
}

.works-swiper .swiper-button-prev::after,
.works-swiper .swiper-button-next::after {
  font-size: 18px;
}


      `}</style>
    </section>
  )
}

export default Works
