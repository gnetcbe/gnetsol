import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaInstagram, FaLinkedinIn, FaPlus, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { teamData } from '../data'

const OurTeam = () => {
  return (
    <>
      <div className="team2 sp">
        <Container>
          <Row>
            {teamData.map((item, idx) => (
              <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.delay}>
                <div className="team-page-item  mt-30">
                  <div className="team-image-area">
                    <div className="image">
                      <Image src={item.image} alt="" width={225} />
                    </div>
                    <div className="shape round-circle">{/* <Image src={shape} alt="" /> */}</div>
                    <div className="social-icons">
                      <ul>
                        <li>
                          <Link href="#">
                            <FaLinkedinIn className="fa-brands " />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaXTwitter className="fa-brands " />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaYoutube className="fa-brands " />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram className="fa-brands " />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-area">
                    <div className="heading2">
                      <h4>
                        <Link href="#">{item.name}</Link>
                      </h4>
                      <p className="mt-2">{item.title}</p>
                    </div>
                    <div className="plue-icon">
                      <Link href="#">
                        <FaPlus className="fa-solid fa-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="space60" />
          <Row>
            <Col xs={12} className="m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li>
                    <Link href="#">
                      <FaAngleLeft className="fa-solid" />
                    </Link>
                  </li>
                  <li>
                    <Link className="active" href="#">
                      01
                    </Link>
                  </li>
                  <li>
                    <Link href="#">02</Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link href="#">12</Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaAngleRight className="fa-solid " />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurTeam
