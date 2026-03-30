import span1 from '@/assets/img/icons/span1.svg'
import choose7 from '@/assets/img/others/abc.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const choose = [
  {
    title: 'Reliable Delivery',
    description:
      'We consistently deliver projects on time and within budget. Our structured development process ensures your website or software is launched without delays — every single time.',
    count: 800,
  },
  {
    title: 'Client-First Approach',
    description:
      'From the first consultation to final delivery, we keep communication clear and transparent. Every solution we build in Coimbatore is tailored around your specific business goals and requirements.',
    count: 1000,
  },
  {
    title: 'Proven Expertise',
    description:
      'With 25+ years of experience in web development, software solutions, and digital marketing, our skilled team in Coimbatore delivers secure, scalable, and future-ready IT solutions for businesses of all sizes.',
    count: 1200,
  },
]

const Choose = () => {
  return (
    <>
      <div className="choose7 bgblack pad20">
        <Container>
          <Row className="align-items-center pad20">
 <Col lg={12}><div className="white-heading md:mt-20 sm:mt-20">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="G-Net Solutions icon" /> WHY CHOOSE US
                </span>
                {/* ✅ Keyword-rich H2 */}
               <h2 className="text-anime-style-3" style={{ fontSize: '32px' }}>
  Why Choose G-Net Solutions as Your Web Development Partner in Coimbatore
</h2>
              </div></Col>

            <Col lg={6}>
              <div className="choose7-image _relative overflow-hidden reveal">
                <Image
                  src={choose7}
                   
                  alt="G-Net Solutions web development team working on client project in Coimbatore"
                />
              </div>
            </Col>
            <Col lg={6}>
              
              <div className="space20" />

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