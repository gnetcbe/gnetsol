import sec1 from '@/assets/img/about/abtemail.jpg'
import sec2 from '@/assets/img/about/abt.jpg'
import span3 from '@/assets/img/icons/span3.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const AboutUs = () => {
  return (
    <>
      <div className="about2 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about2-images">
                 
                <div className="image2 image-anime reveal">
                  <Image src={sec2} alt="g-net solutions -A global custom software development company" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading2 ml-30 md:ml-0 sm:ml-0 md:mt-30 sm:mt-30">
               
                <h1 className="text-anime-style-3">g-net solutions</h1>
                 <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span3} alt="g-net solutions -A global custom software development company" /> Coimbatore Web Development Company, India{' '}
                </span>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={700}>
                 g-net is a full-service web development company specializing in creating custom, responsive, and user-friendly websites and web applications. With a team of skilled developers, designers, and digital strategists, we help businesses of all sizes establish a strong online presence and achieve their digital goals.
                   </p> <p className="mt-16" data-aos="fade-left" data-aos-duration={700}>g-net solutions Coimbatore was previously located at PSG Software Park, Coimbatore, and has since relocated to Lakshmi Nagar, Thanneer Pandal, (near Coimbatore TIDEL Park).
                </p>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={700}>
                With a proven track record of creating hundreds of websites and customized application software, we bring your vision to life with innovation and expertise. Partner with us to take your digital presence to the next level.
                </p>
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default AboutUs
