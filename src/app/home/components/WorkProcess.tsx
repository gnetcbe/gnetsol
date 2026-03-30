import work1 from '@/assets/img/why.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { workData } from '../data'

const WorkProcess = () => {
  return (
    <>
      <div className="work6 sp">
        <Container>
          <Row>
            <Col lg={7} className="m-auto text-center">
              <div className="heading6 _mt-50 text-center">
                {/* ✅ More descriptive sub-title */}
                <span className="sub-title">Development Process</span>
                {/* ✅ Keyword-rich H2 */}
                <h2 className="text-anime-style-3">
                  How We Deliver Web Development Projects?
                </h2>
              </div>
            </Col>
          </Row>

          <Row className="mt-30">
            <Col lg={6}>
              <div className="image image-anime process reveal mt-30">
                <Image
                  src={work1}
                  
                  alt="G-Net Solutions web development work process in Coimbatore"
                />
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
                        {/* ✅ Fixed empty href */}
                        <Link href="/contact">{item.title}</Link>
                      </h4>
                      <p className="mt-16">{item.description}</p>
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