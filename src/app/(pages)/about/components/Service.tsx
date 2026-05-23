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
  FaCloud,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNestjs
} from 'react-icons/si'

const techBoxes = [
  {
    title: 'Frontend Development',
    techs: [
      {
        icon: <FaHtml5 />,
        name: 'HTML5',
        gradient: 'linear-gradient(135deg,#f16529,#e44d26)',
      },
      {
        icon: <FaCss3Alt />,
        name: 'CSS3',
        gradient: 'linear-gradient(135deg,#264de4,#2965f1)',
      },
      {
        icon: <FaJs />,
        name: 'JavaScript',
        gradient: 'linear-gradient(135deg,#f7df1e,#f0c808)',
      },
      {
        icon: <FaReact />,
        name: 'React',
        gradient: 'linear-gradient(135deg,#61dafb,#2bb0ed)',
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
        gradient: 'linear-gradient(135deg,#111,#444)',
      },
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
      {
        icon: <FaDatabase />,
        name: 'MySQL',
        gradient: 'linear-gradient(135deg,#00758f,#00a1c9)',
      },
      {
        icon: <SiPostgresql />,
        name: 'PostgreSQL',
        gradient: 'linear-gradient(135deg,#336791,#5a8fbf)',
      },
      {
        icon: <SiMongodb />,
        name: 'MongoDB',
        gradient: 'linear-gradient(135deg,#47a248,#6ccf91)',
      },
    ],
  },

  {
    title: 'Infrastructure & Security',
    techs: [
      {
        icon: <FaAws />,
        name: 'AWS',
        gradient: 'linear-gradient(135deg,#ff9900,#ffc266)',
      },
      {
        icon: <FaCloud />,
        name: 'Azure',
        gradient: 'linear-gradient(135deg,#0078d4,#5db5ff)',
      },
      {
        icon: <FaLinux />,
        name: 'Linux / Windows',
        gradient: 'linear-gradient(135deg,#111,#666)',
      },
      {
        icon: <FaShieldAlt />,
        name: 'Firewall & VPN',
        gradient: 'linear-gradient(135deg,#dc3545,#ff6b81)',
      },
      {
        icon: <FaShieldAlt />,
        name: 'SSL & Encryption',
        gradient: 'linear-gradient(135deg,#198754,#5dd39e)',
      },
      {
        icon: <FaCloud />,
        name: 'Backup & Recovery',
        gradient: 'linear-gradient(135deg,#6f42c1,#a855f7)',
      },
      {
        icon: <FaShieldAlt />,
        name: 'Monitoring & Security',
        gradient: 'linear-gradient(135deg,#0d6efd,#5b9dff)',
      },
    ],
  },
]

const Service = () => {
  return (
    <>
      <section className="service1 sp sec-bg2 tech-boxed">
        <Container>

          <Row className="mb-70">
            <Col lg={12}>
              <div className="heading2 text-center">

                <span className="sub-title">
                  <Image
                    src={span3}
                    alt="g-net solutions"
                  />
                  TECHNOLOGIES WE USE
                </span>

                <h2 className="text-anime-style-3">
                  A Powerful & Proven Technology Stack
                </h2>

                <p className="mt-20 mx-auto tech-desc">
                  Our expertise spans frontend, backend,
                  database, cloud and security technologies.
                </p>

              </div>
            </Col>
          </Row>

          <Row>
            {techBoxes.map((box, idx) => (
              <Col lg={6} md={12} key={idx} className="mb-40">
                <div className="tech-box">

                  <h3 className="tech-box-title">
                    {box.title}
                  </h3>

                  <div className="tech-box-items">
                    {box.techs.map((tech, i) => (
                      <div className="tech-item" key={i}>
                        <span
                          className="tech-icon"
                          style={{
                            background: tech.gradient
                          }}
                        >
                          {tech.icon}
                        </span>

                        <span className="tech-name">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </Col>
            ))}
          </Row>

        </Container>
      </section>

      <style jsx>{`
        .tech-desc{
          max-width:720px;
          color:#555;
          font-size:16px;
          margin-top:12px;
        }

        .tech-box{
          height:100%;
          background:#fff;
          border-radius:16px;
          padding:28px;
          border:1px solid #eaeaea;
          transition:.3s;
        }

        .tech-box:hover{
          transform:translateY(-6px);
          box-shadow:0 18px 40px rgba(0,0,0,.08);
        }

        .tech-box-title{
          font-size:20px;
          font-weight:600;
          margin-bottom:18px;
        }

        .tech-box-items{
          display:flex;
          flex-wrap:wrap;
          gap:18px;
        }

        .tech-item{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .tech-icon{
          width:48px;
          height:48px;
          border-radius:12px;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size:22px;
        }

        .tech-name{
          font-size:15px;
          font-weight:500;
        }

        @media(max-width:767px){
          .tech-box{
            padding:22px;
          }
        }
      `}</style>
    </>
  )
}

export default Service