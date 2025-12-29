import author1 from '@/assets/img/icons/author1.svg'
import date1 from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { blogData } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog6 sp" id="blog">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading6 _mt-50">
                <span className="sub-title">Our Blog</span>
                <h2 className="text-anime-style-3">Maximizing Hiring Success Expert Advice</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {blogData.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="vl-blog-6-item mt-30" data-aos="fade-up" data-aos-duration={900}>
                  <div className="vl-blog-6-content heading6">
                    <div className="vl-blog6-meta pb-16">
                      <Link href="#" className="date">
                        <Image src={date1} alt="" /> 12/12/2024
                      </Link>
                      <Link href="#" className="author">
                        <Image src={author1} alt="" /> John Doe
                      </Link>
                    </div>
                    <h4>
                      <Link href="/blog-details">{item.title}</Link>
                    </h4>
                  </div>
                  <div className="thumb-area">
                    <div className=" vl-blog-6-thumb image-anime overflow-hidden _relative">
                      <Image className="w-full" src={item.image} height={337} alt="" />
                    </div>
                    <div className="vl-blog6-btn">
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
