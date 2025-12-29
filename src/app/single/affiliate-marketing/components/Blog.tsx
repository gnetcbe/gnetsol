import blog7 from '@/assets/img/blog/blog7-image.png'
import author1 from '@/assets/img/icons/author1.svg'
import date1 from '@/assets/img/icons/date1.svg'
import span1 from '@/assets/img/icons/span1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { blog } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog7 pt-120 md:pt-50 sm:pt-50" id="blog">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading7">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> BLOG
                </span>
                <h2 className="text-anime-style-3">Stay Updated with SEOX Blog</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="button text-end md:text-start sm:text-start md:mt-20 sm:mt-20">
                <Link href="/blog" className="theme-btn13">
                  View All Blogs
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
          <Row className=" mt-30">
            <Col lg={12}>
              <div className="vl-blog-7-item mt-30" data-aos="fade-up" data-aos-duration={900}>
                <Row className=" align-items-center">
                  <Col lg={6}>
                    <div className=" vl-blog-7-thumb overflow-hidden _relative">
                      <Image className="w-full" src={blog7} alt="" />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="vl-blog-7-content heading7">
                      <div className="vl-blog7-meta pb-16">
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
            {blog.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={item.count}>
                <div className="vl-blog-7-item mt-30">
                  <div className="vl-blog-7-content heading7">
                    <div className="vl-blog7-meta pb-16">
                      <Link href="#" className="date">
                        <Image src={item.image} alt="" /> 12/12/2024
                      </Link>
                      <Link href="#" className="author">
                        <Image src={item.avatar} alt="" /> John Doe
                      </Link>
                    </div>
                    <h5>
                      <Link href="/blog-details">{item.title}</Link>
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
