import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { serviceData } from '../data'

const ServiceArea = () => {
  return (
    <>
      <div className="service5 sp">
        <Container>
          <Row>
            {serviceData.map((item, idx) => (
              <Col lg={3} md={6} key={idx}>
                <div className="service-page-box mt-30">
                  <div className="image">
                    <Image src={item.image} alt="" height={430} />
                  </div>
                  <div className="content-area">
                    <div className="num">{item.number}</div>
                    <Link href="/service-details" className="arrow">
                      <FaArrowRight className="fa-regular" />
                    </Link>
                    <h4>
                      <Link href="/service-details">{item.title}</Link>
                    </h4>
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

export default ServiceArea
