import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const CTA = () => {
  return (
    <>
      <div className="cta10">
        <Container>
          <div className="cta10-bg">
            <Row>
              <Col lg={8} className="m-auto text-center">
                <div className="white-heading">
                  <h2>Ready To Elevate Your Startup?</h2>
                  <p className="mt-16">
                    At SEOX, we help ambitious startups scale faster with powerful SEO strategies, data-driven marketing, and growth-focused
                    solutions. At whether you looking boost visibility, drive lead, dominate industry.
                  </p>
                  <div className="buttons mt-40">
                    <Link href="/service" className="theme-btn20">
                      Start Growing Today
                      <span className="arrow1">
                        <FaArrowRight className="fa-solid" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-solid" />
                      </span>
                    </Link>
                    <Link href="/service" className="theme-btn21 ml-16 md:ml-0 sm:ml-0 sm:mt-20 sm:mr-20">
                      Get Started Now
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
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default CTA
