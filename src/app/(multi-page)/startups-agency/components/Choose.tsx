import span5 from '@/assets/img/icons/span5.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { chooseData } from '../data'

const Choose = () => {
  return (
    <>
      <div className="choose5 sp sec-bg4">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading5">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span5} alt="" />
                  WHY CHOOSE US
                </span>
                <h2 className="text-anime-style-3">Your Growth is Our Mission</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="button text-end sm:text-start md:text-start md:mt-30 sm:mt-30" data-aos="fade-left" data-aos-duration={1000}>
                <Link className="theme-btn10" href="/contact">
                  Contact Us Now
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
          <Row className="mt-16">
            {chooseData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-delay={item.count} data-aos-duration={900}>
                <div className="choose5-box mt-30">
                  <div className="image">
                    <Image src={item.image} alt="" height={215} />
                  </div>
                  <div className="content heading5 mt-16">
                    <h4>
                      <Link href="#">{item.title}</Link>
                    </h4>
                    <p className="mt-10">{item.comment}</p>
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

export default Choose
