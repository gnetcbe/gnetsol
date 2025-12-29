import span4 from '@/assets/img/icons/span4.svg'
import work3 from '@/assets/img/work/work3-image1.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { workData } from '../data'

const WorkArea = () => {
  return (
    <>
      <div className="work3 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="heading3 ml-40 sm:ml-0 md:ml-0 md:mt-30 sm:mt-30">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span4} alt="" /> HOW WE WORK
                </span>
                <h2 className="text-anime-style-3">Creating Your Custom Water Bottles is Easy!</h2>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                  Let’s start with your vision! Share your branding goals, preferred designs, and specific requirements with our team.
                </p>
                <div className="button mt-30" data-aos="fade-right" data-aos-duration={1100}>
                  <Link className="theme-btn5" href="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="image reveal image-anime">
                <Image src={work3} alt="" height={363} />
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {workData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={item.duration}>
                <div className="work3-box mt-30">
                  <div className="image image-anime _relative ">
                    <Image src={item.image} alt="" height={314} />
                  </div>
                  <div className="heading3 mt-16 text-center">
                    <h3>
                      <Link href="#">{item.title}</Link>
                    </h3>
                    <p className="mt-10">{item.description}</p>
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

export default WorkArea
