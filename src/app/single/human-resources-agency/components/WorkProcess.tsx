import work1 from '@/assets/img/work/work6-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { workData } from '../data'

const WorkProcess = () => {
  return (
    <>
      <div className="work6 sp">
        <Container>
          <Row>
            <Col lg={7} className="m-auto text-cneter">
              <div className="heading6 _mt-50 text-center">
                <span className="sub-title">Work Process</span>
                <h2 className="text-anime-style-3">Our Proven Staffing Process From Search to Success</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            <Col lg={6}>
              <div className="image image-anime reveal mt-30">
                <Image src={work1} alt="" height={758} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="work6-items mt-30 ml-40 md:ml-0 sm:ml-0">
                {workData.map((item, idx) => (
                  <div key={idx} className="work6-single-item">
                    <div className="icon">
                      <div className="point" />
                    </div>
                    <div className="text heading6">
                      <h4>
                        <Link href="#">{item.title}</Link>
                      </h4>
                      <p className="mt-16">{item.description}</p>
                      <Link href="#" className="learn">
                        Read More
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WorkProcess
