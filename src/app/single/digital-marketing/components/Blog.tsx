import bigpost from '@/assets/img/blog/blog4-big-post.png'
import author1 from '@/assets/img/icons/author1.svg'
import date1 from '@/assets/img/icons/date1.svg'
import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { blogData } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog4 sp sec-bg3">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading4">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> BLOG
                </span>
                <h2 className="text-anime-style-3">Our Latest Blog &amp; Insight</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-end button md:mt-20 sm:mt-20 md:text-start sm:text-start">
                <Link href="/service" className="theme-btn8">
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__text">View All Blogs </span>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            <Col lg={12}>
              <div className="vl-blog-4-item big_post mt-30" data-aos="fade-up" data-aos-duration={1100}>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className=" vl-blog-4-thumb-big image-anime overflow-hidden _relative">
                      <Image className="w-full" src={bigpost} alt="" />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="vl-blog-4-content heading4">
                      <div className="vl-blog4-meta pb-16">
                        <Link href="#" className="date">
                          <Image src={date1} alt="" /> 12/12/2024
                        </Link>
                        <Link href="#" className="author">
                          <Image src={author1} alt="" /> John Doe
                        </Link>
                      </div>
                      <h3>
                        <Link href="/blog-details">The Ultimate Guide to Scaling Your Business with Affiliate Marketing</Link>
                      </h3>
                      <p className="mt-16">
                        Affiliate marketing is more than just a trend; it's a powerful tool for scaling businesses. In this blog we delve into how
                        businesses.
                      </p>
                      <Link href="/blog-details" className="learn1">
                        Read More
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            {blogData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={item.duration}>
                <div className="vl-blog-4-item add-bg mt-30">
                  <div className=" vl-blog-4-thumb">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="vl-blog-4-content heading4 mt-30">
                    <div className="vl-blog4-meta pb-16">
                      <Link href="#" className="date">
                        <Image src={date1} alt="" /> 12/12/2024
                      </Link>
                      <Link href="#" className="author">
                        <Image src={author1} alt="" /> John Doe
                      </Link>
                    </div>
                    <h5>
                      <Link href="/blog-details">{item.description}</Link>
                    </h5>
                    <Link href="/blog-details" className="learn1">
                      Read More
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
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
