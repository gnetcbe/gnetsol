import about1 from '@/assets/img/about/abt1.jpg'
import about2 from '@/assets/img/about/abt22.jpg'
import shape2 from '@/assets/img/shapes/about6-icon-shape.svg'
import shapes from '@/assets/img/shapes/faq6-text-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { aboutData } from '../data'

const About = () => {
  return (
    <>
      <div className="about6">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading6 _mt-50">
                <span className="sub-title">ABOUT US</span>
                {/* ✅ Keyword-rich H2 */}
                <h2 className="text-anime-style-3">
                 g-net solutions
                </h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading6" data-aos="fade-left" data-aos-duration={800}>
                {/* ✅ Keyword-rich description with location */}
                <p>
                  G-Net Solutions is a leading web development company in Coimbatore, Tamil Nadu,
                  delivering custom software development, website design, SEO, and digital marketing
                  services to businesses across India. We follow Agile Methodologies and Continuous
                  Delivery to build scalable, high-performance digital solutions.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-30 align-items-center">
            <Col lg={6}>
              <Row className="about6-images mt-30">
                <Col lg={6}>
                  <div className="image image-anime reveal">
                    <Image
                      src={about1}
                    
                      alt="G-Net Solutions web development team in Coimbatore"
                      height={550}
                      style={{ width: "100%", height: "510px", objectFit: "cover" }}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="image image-anime reveal">
                    <Image
                      src={about2}
                     
                      alt="G-Net Solutions software development office in Coimbatore"
                      height={328}
                      style={{ width: "100%", height: "328px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="count-text-box">
                    <h3>25+</h3>
                    {/* ✅ Location added */}
                    <p>Years of Experience in Coimbatore</p>
                    <Image
                      src={shapes}
                      alt="G-Net Solutions experience badge"
                      className="count-shape"
                    />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              {aboutData.map((item, idx) => (
                <div
                  key={idx}
                  className="about6-content-box mt-20 ml-30 md:ml-0 sm:ml-0"
                  data-aos="fade-left"
                  data-aos-duration={item.duration}
                >
                  <div className="_relative">
                    <div className="icon">
                      <Image src={item.image} alt={item.title} />
                    </div>
                    <div className="icon-shape">
                      <Image src={shape2} alt="G-Net Solutions icon shape" />
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
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About