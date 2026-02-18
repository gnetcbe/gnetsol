'use client'

import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { FaLink } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/navigation'

// Images
import myl from '@/assets/img/work/myl.jpg'
import coi from '@/assets/img/work/coi.jpg'
import glo from '@/assets/img/work/glo.jpg'
import ind from '@/assets/img/work/ind.jpg'
import kas from '@/assets/img/work/kas.jpg'
import kms from '@/assets/img/work/kms.jpg'
import tex from '@/assets/img/work/tex.jpg'

const works = [  
  { image: myl, link: '#', title: 'RM. MAYILERU & Co' },
  { image: coi, link: '#', title: 'COINDIA' },
  { image: glo, link: '#', title: 'Global Attire  Pvt Ltd' },
  { image: ind, link: '#', title: 'Indian Foundries' },
  { image: kas, link: '#', title: 'Kasthuri Machines' },
  { image: kms, link: '#', title: 'Kamma Maha Samajam' },
  { image: tex, link: '#', title: 'Tex Spares' },
]

const RecentWorks = () => {
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

export default RecentWorks
