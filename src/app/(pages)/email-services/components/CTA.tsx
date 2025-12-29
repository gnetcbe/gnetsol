import cta4 from '@/assets/img/others/cta4-image.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const CTA = () => {
  return (
    <>
      <div className="cta6 mt20">
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="cta4-image image-anime reveal">
                <Image height={271} className="w-full" src={cta4} alt="" />
              </div>
            </Col>

             <Col lg={8}>
  <div className="cta6-form-area">

    <div className="heading6">
      <h2>Any Queries? Talk to Our Experts</h2>
      <p className="mt-3">
        Have questions about our products, solutions, or services?
        Our knowledgeable team is here to guide you and help you make
        the right decision for your business.
      </p>
    </div>

    {/* PHONE + BUTTON SIDE BY SIDE */}
    <div
      className="d-flex align-items-center gap-3 mt-4"
      style={{ flexWrap: "wrap" }}
    >
      <p className="fw-bold fs-4 m-0">📞 +91-9751959300</p>

      <a href="tel:+919751959300" className="theme-btn12">
        <span className="theme-btn12__shape" />
        <span className="theme-btn12__shape" />
        <span className="theme-btn12__shape" />
        <span className="theme-btn12__shape" />

        <span className="theme-btn12__text">Call Now</span>

        <span className="arrow1">
          <FaArrowRight className="fa-solid" />
        </span>
        <span className="arrow2">
          <FaArrowRight className="fa-solid" />
        </span>
      </a>
    </div>

  </div>
</Col>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default CTA
