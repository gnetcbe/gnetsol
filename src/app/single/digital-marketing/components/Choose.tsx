import span1 from '@/assets/img/icons/span1.svg'
import choose4 from '@/assets/img/others/choose4-image.png'
import shap2 from '@/assets/img/shapes/hero4-sec-shape2.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Choose = () => {
  return (
    <>
      <div className="choose5 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading4">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> WHY CHOOSE US
                </span>
                <h2 className="text-anime-style-3">Why We’re Different </h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading4">
                <p data-aos="fade-left" data-aos-duration={900}>
                  we don’t just market your brand; we create lasting impressions that drive results. Our team of seasoned experts blends creativity
                  with cutting-edge technology to design your unique goals.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            <Col lg={6}>
              <div data-aos="fade-right" data-aos-duration={1000} data-aos-delay={200}>
                <div className="choose4-box heading4 mt-30">
                  <h4>
                    <Link href="#">Data-Driven Approach</Link>
                  </h4>
                  <p className="mt-10">
                    We harness advanced analytics and insights craft strategies that ensure impactful and efficient digital marketing solutions.
                  </p>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration={1000} data-aos-delay={300}>
                <div className="choose4-box heading4 mt-30">
                  <h4>
                    <Link href="#">Competitive Pricing</Link>
                  </h4>
                  <p className="mt-10">
                    Our services combine premium quality with affordability, offering exceptional value to help businesses thrive Budget.
                  </p>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration={1000} data-aos-delay={400}>
                <div className="choose4-box heading4 mt-30">
                  <h4>
                    <Link href="#">Ethical Business Practices</Link>
                  </h4>
                  <p className="mt-10">
                    We uphold the highest standards of integrity, professionalism, and ethical practices in every aspect of our work our clients.
                  </p>
                </div>
              </div>
              <div className="button mt-40" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={500}>
                <Link href="/service" className="theme-btn8">
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__text">Contact Us </span>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="choose4-images mt-30 ml-30 md:ml-0 sm:ml-0">
                <div className="image image-anime reveal">
                  <Image src={choose4} alt="" height={574} />
                </div>
                <div className="shape animate2">
                  <Image src={shap2} alt="" width={160} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Choose
