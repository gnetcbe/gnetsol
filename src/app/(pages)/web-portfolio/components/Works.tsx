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
import rjd from '@/assets/img/work/rjd.jpg'

const works = [
  { image: sty, link: 'https://stayincoimbatore.com', title: 'Stay in Coimbatore' },
  { image: fjb, link: 'https://foundryjobs.in', title: 'Foundry Jobs' },
  { image: kks, link: '#', title: 'KK Silk Mills' },
  { image: spe, link: '#', title: 'Speed Pumps' },
  { image: glv, link: '#', title: 'GLV SecURhomE' },
  { image: val, link: '#', title: 'Value Textiles' },
  { image: tee, link: '#', title: 'Teena Garments' },
  { image: act, link: '#', title: 'Air Controls India' },
  { image: rjd, link: '#', title: 'Rajadurai Constructions ' },
]

const Works = () => {
  return (
    <section className="works-image-slider">
      <Container>

       

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
            1200: { slidesPerView: 5 },
          }}
          className="works-swiper"
        >
          {works.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="work-card">

                <a
                  
                  rel="noopener noreferrer"
                  className="work-image-wrap"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 576px) 100vw,
                           (max-width: 768px) 50vw,
                           (max-width: 992px) 33vw,
                           (max-width: 1200px) 25vw,
                           20vw"
                    className="work-image"
                  />

                   
                </a>

                {/* Title Below Image */}
                <h4 className="work-title">{item.title}</h4>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* STYLES */}
      <style jsx>{`
        /* ================================
           SECTION
        ================================ */
        .works-image-slider {
          padding: 30px 0;
          background: #ffffff;
        }

        /* ================================
           WORK CARD
        ================================ */
        .work-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ================================
           IMAGE WRAPPER
        ================================ */
        .work-image-wrap {
          position: relative;
          height: 220px;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #d1d5db;
          padding: 6px;
          background: #ffffff;
        }

        @media (max-width: 768px) {
          .work-image-wrap {
            height: 260px;
          }
        }

        /* ================================
           IMAGE
        ================================ */
        .work-image {
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.45s ease;
        }

        .work-card:hover .work-image {
          transform: scale(1.08);
        }

        /* ================================
           OVERLAY
        ================================ */
        .work-overlay {
          position: absolute;
          inset: 6px;
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
           TITLE
        ================================ */
        .work-title {
          margin-top: 14px;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          color: #111827;
          transition: color 0.3s ease;
        }

        .work-card:hover .work-title {
          color: #4f46e5;
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
