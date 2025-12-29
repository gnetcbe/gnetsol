'use client'
import span1 from '@/assets/img/icons/span1.svg'
import contact4 from '@/assets/img/others/contact4-image.png'
import shape from '@/assets/img/shapes/tes1-shape.png'
import CustomNiceSelect from '@/components/CustomNiceSelect'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <>
      <div className="contact4 sp">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="contact4-form-area">
                <div className="heading4">
                  <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                    <Image src={span1} alt="" /> CONTACT US
                  </span>
                  <h2 className="text-anime-style-3">Lets Work Together </h2>
                  <p className="mt-16">
                    Ready to take your business to the next level? Contact us today for a free consultation. Together, we’ll create a digital
                    marketing strategy that delivers real results.
                  </p>
                  <form action="#" data-aos="fade-right" data-aos-duration={1000}>
                    <Row className="mt-16">
                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="number" placeholder="Phone Number" />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="single-input">
                          <CustomNiceSelect className="wide">
                            <option value={1}>Service Type</option>
                            <option value={2}>Option 1</option>
                            <option value={3}>Option 2</option>
                            <option value={4}>Option 3</option>
                          </CustomNiceSelect>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="single-input">
                          <textarea rows={5} placeholder="How can we help you?" defaultValue={''} />
                        </div>
                        <div className="button mt-30">
                          <button type="submit" className="theme-btn8">
                            <span className="theme-btn8__shape" />
                            <span className="theme-btn8__shape" />
                            <span className="theme-btn8__shape" />
                            <span className="theme-btn8__shape" />
                            <span className="theme-btn8__text">Send Now</span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact4-images ml-40 md:ml-40 sm:ml-0">
                <div className="image image-anime reveal">
                  <Image src={contact4} alt="" height={652} />
                </div>
                <div className="shape animate1">
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

export default ContactUs
