import author from '@/assets/img/icons/author1.svg'
import date from '@/assets/img/icons/date1.svg'
import span5 from '@/assets/img/icons/span5.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { blogData } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog2 sp" id="blog">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading5">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span5} alt="" />
                  OUR BLOG
                </span>
                <h2 className="text-anime-style-3">Insights &amp; Trends in Social Media</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="button text-end sm:text-start md:text-start md:mt-30 sm:mt-30" data-aos="fade-left" data-aos-duration={1000}>
                <Link className="theme-btn10" href="/blog">
                  See All Blogs
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
          <Row className="mt-30">
            {blogData.map((item, idx) => (
              <Col lg={6} key={idx}>
                <div className="vl-blog-5-item mt-30" data-aos="fade-up" data-aos-duration={900}>
                  <div className=" vl-blog-3-thumb  overflow-hidden _relative">
                    <Image className="w-full" src={item.image} height={465} alt="" />
                  </div>
                  <div className="vl-blog-1-content heading5">
                    <div className="vl-blog1-meta pb-16">
                      <Link href="#" className="date">
                        <Image src={date} alt="" /> 12/12/2024
                      </Link>
                      <Link href="#" className="author">
                        <Image src={author} alt="" /> John Doe
                      </Link>
                    </div>
                    <h4>
                      <Link href="/blog-details">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.comment}</p>
                    <Link href="/blog-details" className="learn">
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
