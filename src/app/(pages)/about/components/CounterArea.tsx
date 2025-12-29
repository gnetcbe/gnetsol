import bg from '@/assets/img/bg/about-page-count-bg.jpg'
import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { countData } from '../data'

const CounterArea = () => {
  return (
    <>
      <div className="inner-page-counter-sec bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
        <Container>
          <Row>
          <Col lg={12}>
            <div className="white-heading text-center">
              <span className="sub-title">
                <Image src={span1} alt="g-net solutions -A global custom software development company" />
                G-NET SOLUTIONS AT A GLANCE
              </span>
              <h2 className="mt-12">
                Delivering Digital Excellence with Proven Results
              </h2>
            </div>
          </Col>
        </Row>
          <Row className=" mt-10">
            {countData.map((item, idx) => (
              <Col lg md={4} key={idx}>
                <div className="inner-counter-box mt-30">
                  <h3>{item.count}</h3>
                  <p>{item.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CounterArea
