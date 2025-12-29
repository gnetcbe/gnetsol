import quote from '@/assets/img/icons/quote.svg'
import span1 from '@/assets/img/icons/span1.svg'
import shape from '@/assets/img/shapes/tes1-shape.png'
import bigimg from '@/assets/img/testimonial/tes1-big-image.png'
import smollimg1 from '@/assets/img/testimonial/tes1-smoll-image1.png'
import smollimg2 from '@/assets/img/testimonial/tes1-smoll-image2.png'
import smollimg3 from '@/assets/img/testimonial/tes1-smoll-image3.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Testimonial = () => {
  return (
    <>
      <div className="tes1 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> TESTIMONIALS
                </span>
                <h2 className="text-anime-style-3">Proven Success Through Our Clients’ Words</h2>
              </div>
            </Col>
            <Col lg={6} className=" text-end sm:text-start md:text-start">
              <div className="button" data-aos="fade-left" data-aos-duration={900}>
                <Link href="#" className="theme-btn1 mt-30">
                  View All Review
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6} className=" mt-30">
              <div data-aos="fade-right" data-aos-duration={900} data-aos-delay={400}>
                <div className="tes1-single-items mt-30 space-right">
                  <div>
                    <div className="image">
                      <Image src={smollimg1} alt="" />
                    </div>
                  </div>
                  <div className="content">
                    <div className="author-info">
                      <Link href="#">Sarah M</Link>
                      <span>E-commerce Owner</span>
                    </div>
                    <p>SEOX transformed our online presence. We saw a 300% increase in website months!</p>
                  </div>
                  <Image src={quote} alt="" className="quote" />
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration={800} data-aos-delay={200}>
                <div className="tes1-single-items mt-30 hover space-left">
                  <div>
                    <div className="image">
                      <Image src={smollimg2} alt="" />
                    </div>
                  </div>
                  <div className="content">
                    <div className="author-info">
                      <Link href="#">John Doe</Link>
                      <span>Marketing Manager</span>
                    </div>
                    <p>team is proactive, professional, results-driven. Highly recommend their services!</p>
                  </div>
                  <Image src={quote} alt="" className="quote" />
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration={900} data-aos-delay={400}>
                <div className="tes1-single-items mt-30 space-right">
                  <div>
                    <div className="image">
                      <Image src={smollimg3} alt="" />
                    </div>
                  </div>
                  <div className="content">
                    <div className="author-info">
                      <Link href="#">Alex Hales</Link>
                      <span>E-commerce Owner</span>
                    </div>
                    <p>Thanks to SEOX, our revenue doubled last year. They’re truly the best in the industry.</p>
                  </div>
                  <Image src={quote} alt="" className="quote" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="tes1-images md:mt-30 sm:mt-30">
                <div className="image reveal _relative overflow-hidden">
                  <Image src={bigimg} alt="" />
                </div>
                <div className="shape animate3">
                  <Image src={shape} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Testimonial
