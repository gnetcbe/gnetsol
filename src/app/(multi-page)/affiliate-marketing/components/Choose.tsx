import span1 from '@/assets/img/icons/span1.svg'
import choose7 from '@/assets/img/others/choose7-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { choose } from '../data'

const Choose = () => {
  return (
    <>
      <div className="choose7">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="choose7-image _relative overflow-hidden reveal">
                <Image src={choose7} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="white-heading md:mt-30 sm:mt-30">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> WHY CHOOSE US
                </span>
                <h2 className="text-anime-style-3">Why Our Clients Trust Us</h2>
              </div>
              <div className="space20" />
              {choose.map((item, idx) => (
                <div key={idx} data-aos-duration={item.count} data-aos="fade-left">
                  <div className="choose7-box mt-30">
                    <div className="heading7-w">
                      <h4>
                        <Link href="#">{item.title}</Link>
                      </h4>
                      <p className="mt-10">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="button mt-30" data-aos-duration={1300} data-aos="fade-left">
                <Link href="/contact" className="theme-btn13">
                  Contact Us
                  <span className="arrow1">
                    <FaArrowRight className="fa-solid" />
                  </span>
                  <span className="arrow2">
                    <FaArrowRight className="fa-solid" />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Choose
