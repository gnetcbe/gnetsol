'use client'
import span1 from '@/assets/img/icons/span1.svg'
import choose1 from '@/assets/img/others/choose1-image.png'
import shape from '@/assets/img/shapes/choose1-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { choose } from '../data'

const ChooseArea = () => {
  return (
    <>
      <div className="choose1 sp" id="choose">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" />
                  WHY CHOOSE US
                </span>
                <h2 className="text-anime-style-3">Why We’re the Right Choice for Your Business</h2>
              </div>
            </Col>
            <Col lg={7} className="text-end sm:text-start md:text-start">
              <div className="button" data-aos="fade-left" data-aos-duration={800}>
                <Link href="/about" className="theme-btn1 mt-30">
                  Work With Us
                </Link>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            <Col lg={6}>
              <div className="choose1-images mt-30">
                <div className="image image-anime reveal">
                  <Image className="w-full" src={choose1} alt="" />
                </div>
                <div className="shape animate3">
                  <Image src={shape} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="choose1-box-all">
                <Row>
                  {choose.map((item, idx) => (
                    <Col md={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={200}>
                      <div className="choose1-box mt-30">
                        <div>
                          <div className="num">
                            <p>{item.number}</p>
                          </div>
                        </div>
                        <div className="heading1">
                          <h5>
                            <Link href="/single-service/details1">{item.title}</Link>
                          </h5>
                          <p className="mt-12">{item.comment}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ChooseArea
