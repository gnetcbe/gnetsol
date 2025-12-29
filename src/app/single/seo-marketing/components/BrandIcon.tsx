import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { brandicon2, brandIconData } from '../data'

const BrandIcon = () => {
  return (
    <>
      <div className="brands pt-100">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="brads8-heading">
                <h4>Together with Our Sponsors</h4>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {brandIconData.map((item, idx) => (
              <Col lg md={4} key={idx} data-aos="zoom-out" data-aos-duration={item.count}>
                <div className="brands8-box">
                  <Image src={item.image} alt="" />
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            {brandicon2.map((item, idx) => (
              <Col lg md={4} key={idx} data-aos="zoom-out" data-aos-duration={item.count}>
                <div className="brands8-box">
                  <Image src={item.image} alt="" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BrandIcon
