import span4 from '@/assets/img/icons/span4.svg'
import choose3 from '@/assets/img/others/choose3-iamge.png'
import shape from '@/assets/img/shapes/choose3-image-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Choose = () => {
  return (
    <>
      <div className="choose3 sp sec-bg2">
        <Container>
          <Row>
            <Col lg={7} className="m-auto text-center">
              <div className="heading3">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span4} alt="" /> WHY CHOOSE US
                </span>
                <h2 className="text-anime-style-3">Why Our Water Bottle Stand Out</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-60">
            <Col lg={4}>
              <div data-aos="fade-right" data-aos-duration={900}>
                <div className="choose3-box mt-30 ml-30 md:ml-0 sm:ml-0">
                  <div className="content heading3 text-end">
                    <h4>
                      <Link href="">Eco-Friendly Materials</Link>
                    </h4>
                    <p className="mt-10">Our water bottles are crafted from sustainable, BPA-free materials,</p>
                  </div>
                  <div className="num num-left">
                    <p>1</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration={1100}>
                <div className="choose3-box mt-30 mr-30 md:mr-0 sm:mr-0">
                  <div className="content heading3 text-end">
                    <h4>
                      <Link href="">Customizable Designs</Link>
                    </h4>
                    <p className="mt-10">Tailor every aspect of your water bottles, from colors and logos</p>
                  </div>
                  <div className="num num-left">
                    <p>2</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration={1300}>
                <div className="choose3-box mt-30 ml-30 md:ml-0 sm:ml-0">
                  <div className="content heading3 text-end">
                    <h4>
                      <Link href="">Premium Quality</Link>
                    </h4>
                    <p className="mt-10">Built to last, our water bottles are designed for daily use, offering</p>
                  </div>
                  <div className="num num-left">
                    <p>3</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="choose3-main-images">
                <div className="shape">
                  <Image src={shape} alt="" />
                </div>
                <div className="image animate1" data-aos="zoom-in" data-aos-duration={900}>
                  <Image src={choose3} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div data-aos="fade-left" data-aos-duration={900}>
                <div className="choose3-box mt-30 mr-30 md:mr-0 sm:mr-0">
                  <div className="num num-right">
                    <p>4</p>
                  </div>
                  <div className="content heading3 text-start">
                    <h4>
                      <Link href="">Eco-Friendly Materials</Link>
                    </h4>
                    <p className="mt-10">Our water bottles are crafted from sustainable, BPA-free materials,</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration={1100}>
                <div className="choose3-box mt-30 ml-30 md:mr-0 sm:mr-0">
                  <div className="num num-right">
                    <p>5</p>
                  </div>
                  <div className="content heading3 text-start">
                    <h4>
                      <Link href="">Customizable Designs</Link>
                    </h4>
                    <p className="mt-10">Tailor every aspect of your water bottles, from colors and logos</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration={1300}>
                <div className="choose3-box mt-30 mr-30 md:mr-0 sm:mr-0">
                  <div className="num num-right">
                    <p>6</p>
                  </div>
                  <div className="content heading3 text-start">
                    <h4>
                      <Link href="">Premium Quality</Link>
                    </h4>
                    <p className="mt-10">Built to last, our water bottles are designed for daily use, offering</p>
                  </div>
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
