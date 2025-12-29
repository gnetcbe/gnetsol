import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { portfolioData } from '../data'

const PortfolioArea = () => {
  return (
    <>
      <div className="portfolio sp sec-bg1">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading2">
                <h2>More Portfolio</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {portfolioData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="portfolio-box2">
                  <div className="image-area">
                    <div className="image">
                      <Image src={item.image} alt="" height={314} />
                    </div>
                    <Link href="/portfolio-details" className="arrow">
                      <FaArrowRight className="fa-solid" />
                    </Link>
                  </div>
                  <div className="content-area">
                    <span>{item.name}</span>
                    <Link href="/portfolio-details">{item.title}</Link>
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

export default PortfolioArea
