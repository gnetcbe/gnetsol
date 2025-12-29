import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { outwork } from '../data'

const WeWork = () => {
  return (
    <>
      <div className="work7 pt-120 md:pt-50 sm:pt-50" id="work">
        <Container>
          <Row>
            <Col lg={8} className="m-auto text-center">
              <div className="white-heading">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> HOW WE WORK
                </span>
                <h2 className="text-anime-style-3">Our Proven Process for Affiliate Success</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {outwork.map((item, idx) => (
              <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-duration={1000} data-aos-delay={item.count}>
                <div className={`work7-box mt-${item.number}`}>
                  <div className="icon">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="heading7-w mt-20">
                    <h4>
                      <Link href="/single-service/details1">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.comment}</p>
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

export default WeWork
