import span9 from '@/assets/img/icons/span9.svg'
import progress9 from '@/assets/img/others/progress9-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const ProgressArea = () => {
  return (
    <>
      <div className="progress9 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading9 mr-60 md:mr-0 sm:mr-0">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span9} alt="" /> Social Media Growth Progress
                </span>
                <h2 className="text-anime-style-3">Results-Driven Marketing for Your Social Businesses</h2>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                  Our team experts specializes in enhancing your online presence, ensuring that you brand not only gets noticed but also converts.
                </p>
                <div className="about9-progress-area" data-aos="fade-right" data-aos-duration={1100}>
                  <div className="progress-container">
                    <span className="text">
                      <strong>Research And Analysis</strong>
                    </span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '90%' }} />
                    </div>
                    <span className="num">
                      <strong>90%</strong>
                    </span>
                  </div>
                  <div className="progress-container">
                    <span className="text">
                      <strong>Strategy Development</strong>
                    </span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '90%' }} />
                    </div>
                    <span className="num">
                      <strong>90%</strong>
                    </span>
                  </div>
                </div>
                <div className="button mt-20" data-aos="fade-right" data-aos-duration={1200}>
                  <Link href="/single-service/details1" className="theme-btn17 mt-24">
                    <span className="theme-btn17__shape" />
                    <span className="theme-btn17__shape" />
                    <span className="theme-btn17__shape" />
                    <span className="theme-btn17__shape" />
                    <span className="theme-btn17__text">Boost My Social Media</span>
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="progress9-image reveal overflow-hidden _relative">
                <Image src={progress9} alt="" height={565} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProgressArea
