import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { aboutData } from '../data'

const AboutBanner = () => {
  return (
    <>
      <section className="hero10-benar">
        <Container fluid className="p-0">
          <Row>
            <Col xs={12}>
              <div className="marquee-wrap marquee-wrap-inner">
                <div className="marquee-text">
                  {aboutData.map((item, idx) => (
                    <div key={idx} className="brand-single-box">
                      <Image src={item.image} alt="" width={293} />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <div className="slider-after" />
        </Container>
      </section>
    </>
  )
}

export default AboutBanner
