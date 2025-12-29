'use client'

import span3 from '@/assets/img/icons/span3.svg'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaAws,
  FaLinux,
  FaShieldAlt,
} from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiPostgresql } from 'react-icons/si'
import { SiExpress, SiNestjs } from 'react-icons/si'
const techBoxes = [
  {
    title: 'Frontend Development',
    techs: [
      { icon: <FaHtml5 />, name: 'HTML5', gradient: 'linear-gradient(135deg,#f16529,#e44d26)' },
      { icon: <FaCss3Alt />, name: 'CSS3', gradient: 'linear-gradient(135deg,#264de4,#2965f1)' },
      { icon: <FaJs />, name: 'JavaScript', gradient: 'linear-gradient(135deg,#f7df1e,#f0c808)' },
      { icon: <FaReact />, name: 'React', gradient: 'linear-gradient(135deg,#61dafb,#2bb0ed)' },
      { icon: <SiNextdotjs />, name: 'Next.js', gradient: 'linear-gradient(135deg,#111,#444)' },
    ],
  },
  {
  title: 'Backend Development',
  techs: [
    {
      icon: <FaPhp />,
      name: 'PHP',
      gradient: 'linear-gradient(135deg,#8993be,#4f5b93)',
    },
    {
      icon: <FaLaravel />,
      name: 'Laravel',
      gradient: 'linear-gradient(135deg,#ff2d20,#ff6a5b)',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      gradient: 'linear-gradient(135deg,#3c873a,#68a063)',
    },
    {
      icon: <SiExpress />,
      name: 'Express.js',
      gradient: 'linear-gradient(135deg,#222,#555)',
    },
    {
      icon: <SiNestjs />,
      name: 'NestJS',
      gradient: 'linear-gradient(135deg,#e0234e,#ff6b81)',
    },
  ],
},

  {
    title: 'Databases',
    techs: [
      { icon: <FaDatabase />, name: 'MySQL', gradient: 'linear-gradient(135deg,#00758f,#00a1c9)' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', gradient: 'linear-gradient(135deg,#336791,#5a8fbf)' },
      { icon: <SiMongodb />, name: 'MongoDB', gradient: 'linear-gradient(135deg,#47a248,#6ccf91)' },
    ],
  },
  {
    title: 'Cloud & Security',
    techs: [
      { icon: <FaAws />, name: 'AWS', gradient: 'linear-gradient(135deg,#ff9900,#ffc266)' },
      { icon: <FaLinux />, name: 'Linux', gradient: 'linear-gradient(135deg,#111,#666)' },
      { icon: <FaShieldAlt />, name: 'Security', gradient: 'linear-gradient(135deg,#0d6efd,#5b9dff)' },
    ],
  },
]

const Service = () => {
  return (
    <>
      <section className="service1 sp sec-bg2 tech-boxed">
        <Container>
          {/* Heading */}
          <Row className="mb-70">
            <Col lg={12}>
              <div className="heading2 text-center">
                <span className="sub-title">
                  <Image src={span3} alt="g-net solutions -A global custom software development company" />
                  TECHNOLOGIES WE USE
                </span>
                <h2 className="text-anime-style-3">
                  A Powerful & Proven Technology Stack
                </h2>
                <p className="mt-20 mx-auto tech-desc">
                  Our expertise spans modern frontend, backend, cloud, and
                  security technologies to build scalable digital solutions.
                </p>
              </div>
            </Col>
          </Row>

          {/* BOX GRID */}
          <Row>
            {techBoxes.map((box, idx) => (
              <Col lg={6} md={12} key={idx} className="mb-40">
                <div className="tech-box">
                  <h3 className="tech-box-title">{box.title}</h3>

                  <div className="tech-box-items">
                    {box.techs.map((tech, i) => (
                      <div className="tech-item" key={i}>
                        <span
                          className="tech-icon"
                          style={{ background: tech.gradient }}
                        >
                          {tech.icon}
                        </span>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 🎨 BOXED PREMIUM CSS */}
      <style jsx>{`
         .tech-desc {
  max-width: 720px;
  color: #555;
  font-size: 16px;
  margin-top: 12px;
}

/* Box */
.tech-box {
  height: 100%;
  background: #fff;
  border-radius: 16px;
  padding: 28px; /* reduced */
  border: 1px solid #eaeaea;
  transition: all 0.3s ease;
}

.tech-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

/* Box title */
.tech-box-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 18px; /* reduced */
}

/* Tech items */
.tech-box-items {
  display: flex;
  flex-wrap: wrap;
  gap: 18px; /* reduced */
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 12px; /* reduced */
}

/* Icon */
.tech-icon {
  width: 48px; /* reduced */
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px; /* reduced */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-item:hover .tech-icon {
  transform: scale(1.08);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
}

/* Name */
.tech-name {
  font-size: 15px;
  font-weight: 500;
  color: #222;
}

/* Mobile */
@media (max-width: 767px) {
  .tech-box {
    padding: 22px;
  }

  .tech-icon {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
}

      `}</style>
    </>
  )
}

export default Service
