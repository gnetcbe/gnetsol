import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { workData } from '../data'

const WorkProsses = () => {
  return (
    <>
      <div className="work-prosses8 sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading8">
                <span className="sub-title1">
                  <Image src={span1} alt="" /> Comprehensive Solutions
                </span>
                <h2 className="text-anime-style-3">Explore Our Range of Services</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {workData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={item.count}>
                <div className={`work-prosses8-box ${item.token}`}>
                  <div className="num">0{item.number}</div>
                  <div className="content heading8">
                    <h4>
                      <Link href="">{item.title}</Link>
                    </h4>
                    <p className="mt-12">{item.comment}</p>
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

export default WorkProsses
