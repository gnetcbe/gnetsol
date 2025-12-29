import sec9 from '@/assets/img/bg/sec-bg9.jpg'
import span9 from '@/assets/img/icons/span9.svg'
import team9 from '@/assets/img/shapes/team9-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { ourteamData } from '../data'

const OurTeam = () => {
  return (
    <>
      <div className="team9 sp bg-cover" style={{ backgroundImage: `url(${sec9.src})` }}>
        <Container>
          <Row className="">
            <Col lg={6} className="m-auto text-center">
              <div className="heading9">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span9} alt="" /> our creative team
                </span>
                <h2 className="text-anime-style-3">Meet The Social Media Experts</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {ourteamData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={item.duration}>
                <div className="team9-box mt-30">
                  <div className="team-thumbnail-area">
                    <div className="image">
                      <Image src={item.image} alt="" />
                    </div>
                    <div className="shape">
                      <Image src={team9} alt="" />
                    </div>
                  </div>
                  <div className="content-area heading9">
                    <div className="heading">
                      <h4>
                        <Link href="#">{item.name}</Link>
                      </h4>
                      <p className="mt-2">{item.title}</p>
                    </div>
                    <div className="icon">
                      <Link href="#">
                        <FaArrowRight className="fa-regular" />
                      </Link>
                    </div>
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

export default OurTeam
