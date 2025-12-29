'use client'
import span1 from '@/assets/img/icons/span3.svg'
import contact2 from '@/assets/img/others/contact2-image.png'
import CustomNiceSelect from '@/components/CustomNiceSelect'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const ContactUs = () => {
  return (
    <>
      <div className="contact2 sp">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading2">
                <div className="contact2-form">
                  <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                    <Image src={span1} alt="" />
                    CONTACT US
                  </span>
                  <h2 className="text-anime-style-3">Lets Work Together</h2>
                  <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                    eady to take your social media presence to the next level? Let’s work together to create impactful strategies drive engagement,
                    growth, and success for your brand.
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
                          <button className="theme-btn3" type="submit">
                            Send
                            <span className="arrow1">
                              <FaArrowRight className="fa-solid" />
                            </span>
                            <span className="arrow2">
                              <FaArrowRight className="fa-solid" />
                            </span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact2-image image-anime reveal ml-40 md:ml-0 sm:ml-0 md:mt-30 sm:mt-30">
                <Image className="w-full" src={contact2} alt="" height={652} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ContactUs
