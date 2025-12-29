'use client'
import hero01 from '@/assets/img/bg/hero1-bg.jpg'
import mainImg from '@/assets/img/hero/hero1-main-image.png'
import span2 from '@/assets/img/icons/span2.svg'
import shape1 from '@/assets/img/shapes/hero1-image-shape1.png'
import shape2 from '@/assets/img/shapes/hero1-image-shape2.png'
import heroshape1 from '@/assets/img/shapes/hero1-shape1.png'
import heroshape2 from '@/assets/img/shapes/hero1-shape2.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <div className="hero1" style={{ backgroundImage: `url(${hero01.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="main-heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span2} alt="" /> SEO MARKETING AGENCY
                </span>
                <h1 className="text-anime-style-3">Boost Your Online Presence With SEO&nbsp;</h1>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                  Drive More Traffic, Increase Visibility, and Boost Revenue with SEOX – Your Trusted SEO &amp; Digital Marketing Partner.
                </p>
                <div className="form-area" data-aos="fade-right" data-aos-duration={1100}>
                  <form action="#">
                    <div className="single-input">
                      <input type="text" placeholder="Audit Your Website" />
                    </div>
                    <div className="button">
                      <button type="submit" className="theme-btn2">
                        Audit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="hero1-counters" data-aos="fade-right" data-aos-duration={1300}>
                  <Row>
                    <Col md={4} xs={6}>
                      <div className="single-counter">
                        <h3>24</h3>
                        <p>Countries</p>
                        <div className="shape-bg1">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                            <linearGradient id="imagewave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                              <stop className="stop-color2" offset="0%" stopOpacity={1} />
                              <stop className="stop-color1" offset="100%" stopOpacity={1} />
                            </linearGradient>
                            <path fill="url(#imagewave)" d="">
                              <animate
                                repeatCount="indefinite"
                                attributeName="d"
                                dur="10s"
                                values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                               c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                               c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                               c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                               
                               
                               M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                               c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                               c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                               C48.9,198.6,57.8,191,51,171.3z;
                               
                               M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                               c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                               c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                               c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  "
                              />
                            </path>
                          </svg>
                        </div>
                      </div>
                    </Col>
                    <Col md={4} xs={6}>
                      <div className="single-counter">
                        <h3>11k</h3>
                        <p>Websites Done</p>
                        <div className="shape-bg1">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                            <linearGradient id="imagewave2" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                              <stop className="stop-color2" offset="0%" stopOpacity={1} />
                              <stop className="stop-color1" offset="100%" stopOpacity={1} />
                            </linearGradient>
                            <path fill="url(#imagewave2)" d="">
                              <animate
                                repeatCount="indefinite"
                                attributeName="d"
                                dur="10s"
                                values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                               c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                               c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                               c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                               
                               
                               M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                               c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                               c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                               C48.9,198.6,57.8,191,51,171.3z;
                               
                               M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                               c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                               c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                               c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  "
                              />
                            </path>
                          </svg>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="single-counter">
                        <h3>10k</h3>
                        <p>Satisfied Client</p>
                        <div className="shape-bg1">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                            <linearGradient id="imagewave3" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                              <stop className="stop-color2" offset="0%" stopOpacity={1} />
                              <stop className="stop-color1" offset="100%" stopOpacity={1} />
                            </linearGradient>
                            <path fill="url(#imagewave3)" d="">
                              <animate
                                repeatCount="indefinite"
                                attributeName="d"
                                dur="10s"
                                values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                               c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                               c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                               c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                               
                               
                               M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                               c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                               c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                               C48.9,198.6,57.8,191,51,171.3z;
                               
                               M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                               c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                               c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                               c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  "
                              />
                            </path>
                          </svg>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero1-images">
                <div className="main-images">
                  <div className="image1 _relative reveal overflow-hidden">
                    <Image src={mainImg} alt="" />
                  </div>
                  <div className="image-shape1 animate1">
                    <Image src={shape1} alt="" />
                  </div>
                  <div className="image-shape2 animate3">
                    <Image src={shape2} alt="" />
                  </div>
                </div>
                <div className="sec-element1 animate7">
                  <Image src={heroshape1} alt="" />
                </div>
                <div className="sec-element2 animate8">
                  <Image src={heroshape2} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
