"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";

// Images
import sty from "@/assets/img/work/sty.jpg";
import fjb from "@/assets/img/work/fjb.jpg";
import kks from "@/assets/img/work/kks.jpg";
import glv from "@/assets/img/work/glv.jpg";
import val from "@/assets/img/work/val.jpg";
import tee from "@/assets/img/work/tee.jpg";
import act from "@/assets/img/work/act.jpg";
import spe from "@/assets/img/work/spe.jpg";
import rjd from "@/assets/img/work/rjd.jpg";
import myl from '@/assets/img/work/myl.jpg'
import coi from '@/assets/img/work/coi.jpg'
import glo from '@/assets/img/work/glo.jpg'
import ind from '@/assets/img/work/ind.jpg'
import kas from '@/assets/img/work/kas.jpg'
import kms from '@/assets/img/work/kms.jpg'
import aeon from '@/assets/img/work/aeon.jpg'
import tex from '@/assets/img/work/tex.jpg'
import hall from '@/assets/img/work/hall.jpg'
import ware from '@/assets/img/work/ware.jpg'
import safe from '@/assets/img/work/safe.jpg'

const works = [
  { image: sty, link: "https://stayincoimbatore.com", title: "Stay in Coimbatore" },
  { image: fjb, link: "https://foundryjobs.in", title: "Foundry Jobs" },
  { image: kks, link: "#", title: "KK Silk Mills" },
  { image: spe, link: "#", title: "Speed Pumps" },
  { image: glv, link: "#", title: "GLV SecURhomE" },
  { image: val, link: "#", title: "Value Textiles" },
  { image: tee, link: "#", title: "Teena Garments" },
  { image: act, link: "#", title: "Air Controls India" },
  { image: rjd, link: "#", title: "Rajadurai Constructions" },
   { image: myl, link: '#', title: 'RM. MAYILERU & Co' },
    { image: coi, link: '#', title: 'COINDIA' },
    { image: glo, link: '#', title: 'Global Attire  Pvt Ltd' },
    { image: ind, link: '#', title: 'Indian Foundries' },
    { image: kas, link: '#', title: 'Kasthuri Machines' },
    { image: kms, link: '#', title: 'Kamma Maha Samajam' },
    { image: tex, link: '#', title: 'Tex Spares' },
    { image: aeon, link: '#', title: 'Aeon Systems' },
    { image: safe, link: '#', title: 'Safe Boxx' },
    { image: ware, link: '#', title: 'Bonded  Warehouse Management' },
    { image: hall, link: '#', title: 'Exhibition/Wedding Halls Management' },
    
];

const Works = () => {
  const [activeImage, setActiveImage] = useState<any>(null);

  return (
    <>

      <section className="software-journey ecommerce-theme">
          <Container>
           <div className="journey-head">
  <span>Our Notable Works</span>
  <h2>Showcasing Success Across Digital Solutions</h2>
  <p>
    At g-net solutions, Coimbatore, we highlight the projects that define our journey —
    powerful eCommerce platforms, innovative applications, and digital solutions that
    help businesses sell smarter, scale faster, and manage operations efficiently.
  </p>
</div>

             </Container>
                </section>

      <section className="works-section">
        <Container>

  
          <div className="works-grid">
            {works.map((item, index) => (
              <div
                key={index}
                className="work-card"
                onClick={() => setActiveImage(item.image)}
              >
                <div className="image-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="work-image"
                  />

                  {/* Hover Overlay */}
                  <div className="hover-overlay">
                    <div className="zoom-icon">
                      <FaSearchPlus />
                    </div>
                  </div>
                </div>

                <h4 className="work-title">{item.title}</h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="lightbox"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage.src}
            alt="Preview"
            className="lightbox-image"
          />
        </div>
      )}

      <style jsx>{`


 /* ===========================
           ECOMMERCE JOURNEY THEME
        ============================ */

        .software-journey.ecommerce-theme {
          padding: 30px 0;
          background: radial-gradient(
            circle at top,
            #fff7ed,
            #ffffff 65%
          );
        }

        .journey-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 10px;
        }

        .journey-head span {
          font-size: 14px;
          font-weight: 600;
          color: #ea580c; /* orange */
          display: block;
          margin-bottom: 10px;
        }

        .journey-head h2 {
          font-size: 42px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .journey-head p {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
        }

        .works-section {
          padding: 70px 0;
          background: #f5f7fa;
        }

        .works-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        @media (max-width: 992px) {
          .works-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .works-grid {
            grid-template-columns: 1fr;
          }
        }

        .work-card {
          background: linear-gradient(145deg, #ffffff, #f1f5ff);
          border-radius: 14px;
          padding: 14px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          transition: 0.35s ease;
          border-top: 4px solid #4f46e5;
          cursor: pointer;
        }

        .work-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(79, 70, 229, 0.18);
        }

        .image-wrap {
          position: relative;
          height: 220px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }

        .work-image {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .work-card:hover .work-image {
          transform: scale(1.08);
        }

        /* Hover Overlay */
        .hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.35s ease;
        }

        .work-card:hover .hover-overlay {
          opacity: 1;
        }

        .zoom-icon {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #4f46e5;
          transform: scale(0.8);
          transition: 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .work-card:hover .zoom-icon {
          transform: scale(1);
        }

        .work-title {
          margin-top: 14px;
          font-size: 15px;
          font-weight: 600;
          color: #1e293b;
        }

        /* LIGHTBOX */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: zoom-out;
          animation: fadeIn 0.3s ease;
        }

        .lightbox-image {
          max-width: 95vw;
          max-height: 90vh;
          width: auto;
          height: auto;
          object-fit: contain;
          animation: zoomIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Works;
