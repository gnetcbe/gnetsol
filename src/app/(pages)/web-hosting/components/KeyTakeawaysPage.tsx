"use client";

import {
  FaServer,
  FaBuilding,
  FaLayerGroup,
  FaMicrochip,
  FaCloud,
} from "react-icons/fa";

import { IconType } from "react-icons";

type Takeaway = {
  title: string;
  desc: string;
  icon: IconType;
};

export default function KeyTakeawaysPage() {
  const takeaways: Takeaway[] = [
    {
      title: "Shared Hosting",
      desc: "Cheapest, good for beginners.",
      icon: FaServer,
    },
    {
      title: "Business Hosting",
      desc: "Middle ground, reliable for small businesses.",
      icon: FaBuilding,
    },
    {
      title: "VPS Hosting",
      desc: "Flexible and scalable, ideal for growing sites.",
      icon: FaLayerGroup,
    },
    {
      title: "Dedicated Servers",
      desc: "Maximum control and performance, but costly.",
      icon: FaMicrochip,
    },
    {
      title: "Cloud Hosting",
      desc: "Modern, scalable, great for unpredictable traffic.",
      icon: FaCloud,
    },
  ];

  return (
    <div className="container">
      <h2 className="heading">Key Takeaways</h2>

      <div className="grid">
        {takeaways.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="item">
              <div className="icon-box">
                <Icon size={16} />
              </div>

              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .heading {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 22px;
          color: #1e293b;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px 30px;
        }

        .item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: #ffffff;
          transition: 0.2s ease;
        }

        .item:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .icon-box {
          width: 30px;
          height: 30px;
          min-width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eef2ff;
          color: #1e3a8a;
          border-radius: 4px;
        }

        .content h3 {
          margin: 0 0 4px 0;
          font-size: 16px;
          font-weight: 600;
          color: #1e3a8a;
        }

        .content p {
          margin: 0;
          font-size: 15px;
          color: #475569;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
