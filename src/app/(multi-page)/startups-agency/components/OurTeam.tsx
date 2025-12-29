import span5 from '@/assets/img/icons/span5.svg'
import shape from '@/assets/img/shapes/team2-items-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaInstagram, FaLinkedin, FaPlus, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { teamData } from '../data'

const OurTeam = () => {
  return (
    <>
      <div className="team5 sp">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading5">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span5} alt="" />
                  OUR TEAM
                </span>
                <h2 className="text-anime-style-3">Meet Our Creative Crew</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="button text-end sm:text-start md:text-start md:mt-30 sm:mt-30" data-aos="fade-left" data-aos-duration={1000}>
                <Link className="theme-btn10" href="/team">
                  Our Team Member
                  <span className="arrow1">
                    <FaArrowRight className="fa-solid" />
                  </span>
                  <span className="arrow2">
                    <FaArrowRight className="fa-solid" />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {teamData.map((item, idx) => (
              <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.count}>
                <div className="team5-item mt-30">
                  <div className="team-image-area">
                    <div className="image">
                      <Image src={item.image} alt="" />
                    </div>
                    <div className="shape round-circle">
                      <Image src={shape} alt="" />
                    </div>
                    <div className="social-icons">
                      <ul>
                        <li>
                          <Link href="#">
                            <FaLinkedin className="fa-brands " />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaXTwitter className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaYoutube className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram className="fa-brands" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-area">
                    <div className="heading5">
                      <h4>
                        <Link href="#">{item.name}</Link>
                      </h4>
                      <p className="mt-2">{item.title}</p>
                    </div>
                    <div className="plue-icon">
                      <Link href="#">
                        <FaPlus className="fa-solid" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurTeam
