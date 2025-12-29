import span3 from '@/assets/img/icons/span3.svg'
import choose1 from '@/assets/img/others/choose2-image1.png'
import choose2 from '@/assets/img/others/choose2-image2.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { chooseData } from '../data'

const Choose = () => {
  return (
    <>
      <div className="choose2 sp sec-bg2">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="choose2-images mr-40 sm:mr-0 md:mr-0">
                <div className="image1 image-anime reveal">
                  <Image src={choose1} alt="" />
                </div>
                <div className="image2 image-anime reveal">
                  <Image src={choose2} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6} className=" sm:mt-30 md:mt-30">
              <div className="heading2">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="" />
                  WHY CHOOSE US{' '}
                </span>
                <h2 className="text-anime-style-3">Your Success, Our Priority</h2>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={800}>
                  Proven track record of boosting engagement and sales. Expert team fluent in the latest trends and technologies. Dedicated account
                  managers ensuring personalized service.
                </p>
                <div className="choose2-apps">
                  <Row>
                    {chooseData.map((item, idx) => (
                      <Col lg={6} key={idx} data-aos="fade-up" data-aos-duration={900} data-aos-delay={item.delay}>
                        <div className="choose2-single-apps">
                          <div className="apps-image">
                            <Image src={item.image} alt="" />
                          </div>
                          <div className="apps-info">
                            <h4>{item.number}</h4>
                            <p>{item.title}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Choose
