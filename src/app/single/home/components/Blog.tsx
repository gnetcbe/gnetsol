'use client'
import blog1 from '@/assets/img/blog/blog1-image1.png'
import blogimg2 from '@/assets/img/blog/blog1-image2.png'
import author1 from '@/assets/img/icons/author1.svg'
import date1 from '@/assets/img/icons/date1.svg'
import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Blog = () => {
  return (
    <>
      <div className="blog1 sp sec-bg1" id="blog">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> OUR BLOG
                </span>
                <h2 className="text-anime-style-3">
                  Insights &amp; Updates from the World of SEO <br />
                  Marketing Agency
                </h2>
              </div>
            </Col>
            <Col lg={5}>
              <div className="text-end sm:text-start md:text-start md:mt-30 sm::mt-30" data-aos="fade-left" data-aos-duration={800}>
                <Link href="/contact" className="theme-btn1">
                  Browse All Categories
                </Link>
              </div>
            </Col>
          </Row>
          <div className="space30" />
          <div className="vl-blog-1-item mt-30" data-aos="fade-up" data-aos-duration={1100}>
            <Row>
              <Col lg={6}>
                <div className=" vl-blog-3-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog1} alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="vl-blog-1-content heading1">
                  <div className="vl-blog1-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date1} alt="" /> 12/12/2024
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author1} alt="" /> John Doe
                    </Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      Transform Your Online Presence with Expert SEO Strategies – Drive Traffic, Conversions &amp; Business Growth with SEOX.
                    </Link>
                  </h4>
                  <p className="mt-16">
                    the digital age, simply having a website isn't enough. To stand out in a sea of competition, you need strategic search engine
                    optimization (SEO) that positions your brand.
                  </p>
                  <Link href="/blog-details" className="learn1">
                    Read More
                    <span className="arrow">
                      <FaArrowRight className="fa-regular" />
                    </span>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
          <div className="vl-blog-1-item mt-30" data-aos="fade-up" data-aos-duration={900}>
            <Row>
              <Col lg={6}>
                <div className="vl-blog-1-content heading1">
                  <div className="vl-blog1-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date1} alt="" /> 12/12/2024
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author1} alt="" /> John Doe
                    </Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      Maximize Your Business Success with Tailored SEO Solutions – Partner with SEOX to Optimize Your Digital Growth.
                    </Link>
                  </h4>
                  <p className="mt-16">
                    Are you ready to unlock the full potential of your business online? With SEOX, achieving top rankings on search engines has never
                    been easier, We combine innovative SEO techniques.
                  </p>
                  <Link href="/blog-details" className="learn1">
                    Read More
                    <span className="arrow">
                      <FaArrowRight className="fa-regular" />
                    </span>
                  </Link>
                </div>
              </Col>
              <Col lg={6}>
                <div className="vl-blog-3-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blogimg2} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Blog
