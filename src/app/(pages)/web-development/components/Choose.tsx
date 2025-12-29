import image1 from '@/assets/img/about/mis1.jpg'
import image2 from '@/assets/img/about/mis2.jpg'
import image3 from '@/assets/img/about/mis3.jpg'
import span3 from '@/assets/img/icons/span3.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Choose = () => {
  return (
    <>
      <div className="about-page-choose sp">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading2">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="" />
                  WHY CHOOSE US{' '}
                </span>
                <h2 className="text-anime-style-3">Empowering Your Business Every Step of the Way</h2>
                <p className="mt-16">
                  Because we understand that every industry, business, and goal is unique. Our client-centric approach ensures customized strategies
                  that align with your vision and deliver measurable results.{' '}
                </p>
                <div className="about-choose-box mt-24">
                  <h3>Our Mission</h3>
                  <p className="mt-12">
                    "We aim to develop user-friendly, scalable, and secure web applications and email solutions, that empower businesses to succeed in the modern competitive environment."
                  </p>
                </div>
                <div className="about-choose-box mt-24">
                  <h3>Our Vision</h3>
                  <p className="mt-12">
                    "From small start-up’s to global enterprises, our tailored solutions are built to evolve and scale alongside your business demands."
                  </p>
                </div>
                 
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-choose-images ml-50 md:ml-0 sm:ml-0">
                <Row>
                  <Col md={6}>
                    <div className="image mt-30 image-anime reveal">
                      <Image className="w-full" src={image1} alt=" " height={283} />
                    </div>
                    <div className="image mt-30 image-anime reveal">
                      <Image className="w-full" src={image2} alt="" height={283} />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="image image-anime reveal md:mt-30 sm:mt-30">
                      <Image className="w-full" src={image3} alt="" height={562} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Choose
