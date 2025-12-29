import about1 from '@/assets/img/about/about6-image1.png'
import about2 from '@/assets/img/about/about6-image2.png'
import shape2 from '@/assets/img/shapes/about6-icon-shape.svg'
import shapes from '@/assets/img/shapes/faq6-text-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { aboutData } from '../data'

const About = () => {
  return (
    <>
      <div className="about6 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading6 _mt-50">
                <span className="sub-title">ABOUT US</span>
                <h2 className="text-anime-style-3">Redefining Human Resource One Business at a Time</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading6" data-aos="fade-left" data-aos-duration={800}>
                <p>
                  At Seox, we specialize in connecting exceptional talent with thriving businesses, creating lasting partnerships that drive success.
                  With a deep understanding of workforce dynamics, we offer innovative.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-30 align-items-center">
            <Col lg={6}>
              <Row className="about6-images mt-30">
                <Col lg={6}>
                  <div className="image image-anime reveal">
                    <Image src={about1} alt="" height={550} />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="image image-anime reveal">
                    <Image src={about2} alt="" height={328} />
                  </div>
                  <div className="count-text-box">
                    <h3>30M+</h3>
                    <p>Total Audience</p>
                    <Image src={shapes} alt="" className="count-shape" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              {aboutData.map((item, idx) => (
                <div key={idx} className="about6-content-box mt-50 ml-30 md:ml-0 sm:ml-0" data-aos="fade-left" data-aos-duration={item.duration}>
                  <div className="_relative">
                    <div className="icon">
                      <Image src={item.image} alt="" />
                    </div>
                    <div className="icon-shape">
                      <Image src={shape2} alt="" />
                    </div>
                  </div>
                  <div className="text heading6">
                    <h4>
                      <Link href="#">{item.title}</Link>
                    </h4>
                    <p className="mt-10">{item.comment}</p>
                  </div>
                </div>
              ))}

              <div className="button ml-30 mt-50 md:ml-0 sm:ml-0" data-aos="fade-left" data-aos-duration={1100}>
                <Link href="/about" className="theme-btn11">
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__shape" />
                  <span className="theme-btn11__text">Learn More </span>
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
        </Container>
      </div>
    </>
  )
}

export default About
