import blog1 from '@/assets/img/blog/blog-page1-image1.png'
import blog2 from '@/assets/img/blog/blog-page1-image2.png'
import author from '@/assets/img/icons/author1.svg'
import date from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Service = () => {
  return (
    <>
      <div className="blog sp sec-bg1">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading2">
                <h2>More Services</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            <Col lg={6}>
              <div className="vl-blog-11-item mt-30" data-aos="fade-up" data-aos-duration={900}>
                <div className=" vl-blog-11-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog1} alt="" height={473} />
                </div>
                <div className="vl-blog-11-content heading2">
                  <div className="vl-blog11-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date} alt="" /> 12/12/2025
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author} alt="" /> Dustin Turcotte
                    </Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">Discover the emerging trends that are reshaping the startup ecosystem.</Link>
                  </h4>
                  <Link href="/blog-details" className="learn">
                    Read More{' '}
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="vl-blog-11-item mt-30" data-aos="fade-up" data-aos-duration={900}>
                <div className=" vl-blog-11-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog2} alt="" height={473} />
                </div>
                <div className="vl-blog-11-content heading2">
                  <div className="vl-blog11-meta pb-20">
                    <Link href="#" className="date">
                      <Image src={date} alt="" /> 12/12/2025
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author} alt="" /> Alex Carey
                    </Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">Learn the secrets to creating a brand that resonates with your audience.</Link>
                  </h4>
                  <Link href="/blog-details" className="learn">
                    Read More{' '}
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
