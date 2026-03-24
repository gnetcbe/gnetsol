import bg from '@/assets/img/bg/inner-hero-bg.jpg'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
      <div className="inner-hero" style={{ backgroundImage: `url(${bg.src})` }}>
        <Container>
          <Row>
            <Col lg={9} className="m-auto text-center">
              <div className="inner-main-heading">
                <h1>
Blog Details</h1>
                <div className="breadcrumbs-pages">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="angle">
                      <FaAngleRight className="fa-solid" />
                    </li>
                    <li>
Blog Details</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
