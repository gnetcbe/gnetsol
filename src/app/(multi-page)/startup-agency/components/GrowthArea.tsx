import span10 from '@/assets/img/icons/span10.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { growthareaData } from '../data'

const GrowthArea = () => {
  return (
    <>
      <div className="growth sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading10">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span10} alt="" /> Our Process, Your Growth
                </span>
                <h2 className="text-anime-style-3">The Startup Growth Formula</h2>
              </div>
            </Col>
          </Row>
          <Row className=" growth-box-perent mt-30">
            {growthareaData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="growth-box mt-30">
                  <div className="num">{item.number}</div>
                  <h4>{item.title}</h4>
                  <div className="image mt-30">
                    <Image src={item.image} alt="" />
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

export default GrowthArea
