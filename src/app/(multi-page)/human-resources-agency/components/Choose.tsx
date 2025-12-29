import span1 from '@/assets/img/icons/span1.svg'
import choose7 from '@/assets/img/others/abc.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const choose = [
  {
    title: 'Reliable Delivery',
    description: 'Consistent on-time project completion every time',
    count: 800,
  },
  {
    title: 'Client-First Approach',
    description: 'Clear communication and solutions built around your needs',
    count: 1000,
  },
  {
    title: 'Proven Expertise',
    description: 'Skilled teams delivering secure and scalable IT solutions',
    count: 1200,
  },
];


const Choose = () => {
  return (
    <>
      <div className="choose7 bgblack pad20">
        <Container>
          <Row className="align-items-center pad20">
            <Col lg={6}>
              <div className="choose7-image _relative overflow-hidden reveal">
                <Image src={choose7} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="white-heading md:mt-20 sm:mt-20">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> WHY CHOOSE US
                </span>
                <h2 className="text-anime-style-3">Why Our Clients Trust Us</h2>
              </div>
              <div className="space20" />

              {/* This will now work */}
              {choose.map((item, idx) => (
                <div key={idx} data-aos-duration={item.count} data-aos="fade-left">
                  <div className="choose7-box mt-20">
                    <div className="heading7-w">
                      <h4>
                        <Link href="#">{item.title}</Link>
                      </h4>
                      <p className="mt-10">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
 
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Choose
