"use client";

import { Container } from "react-bootstrap";
import Image from "next/image";
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
    { image: ware, link: '#', title: 'Warehouse Management System' },
    { image: hall, link: '#', title: 'Hall Management System' },
    
];

const Works = () => {
  return (
    <section className="works-section">
      <Container>
        <div className="works-grid">
          {works.map((item, index) => (
            <div key={index} className="work-card">
              <div className="image-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="work-image"
                />
              </div>

              <h4 className="work-title">{item.title}</h4>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
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
          background: #ffffff;
        }

        .work-image {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .work-card:hover .work-image {
          transform: scale(1.07);
        }

        .work-title {
          margin-top: 14px;
          font-size: 15px;
          font-weight: 600;
          color: #1e293b;
          transition: color 0.3s ease;
        }

        .work-card:hover .work-title {
          color: #4f46e5;
        }
      `}</style>
    </section>
  );
};

export default Works;
