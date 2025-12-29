import sec9 from '@/assets/img/bg/sec-bg9.jpg'
import blog9 from '@/assets/img/blog/blog9-image.png'
import author1 from '@/assets/img/icons/author1.svg'
import date1 from '@/assets/img/icons/date1.svg'
import span9 from '@/assets/img/icons/span9.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { blogData } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog9 sp bg-cover" style={{ backgroundImage: `url(${sec9.src})` }}>
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading9">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span9} alt="" /> Insights from Our Experts
                </span>
                <h2 className="text-anime-style-3">Stay Updated with SEOX Blog</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            <Col lg={12}>
              <div className="vl-blog-9-item mt-30" data-aos="fade-up" data-aos-duration={1100}>
                <Row className=" align-items-center">
                  <Col lg={6}>
                    <div className="vl-blog-9-thumb image-anime overflow-hidden _relative">
                      <Image className="w-full" src={blog9} alt="" height={347} />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="vl-blog-9-content heading9">
                      <div className="vl-blog9-meta pb-16">
                        <Link href="#" className="date">
                          <Image src={date1} alt="" /> 12/12/2024
                        </Link>
                        <Link href="#" className="author">
                          <Image src={author1} alt="" /> John Doe
                        </Link>
                      </div>
                      <h4>
                        <Link href="/blog-details">Facebook vs. Instagram Ads: Which Platform Is Right for Your Business?</Link>
                      </h4>
                      <p className="mt-16">
                        When it comes to social media advertising, both Facebook and Instagram offer powerful platforms for reaching new.
                      </p>
                      <Link href="/blog-details" className="theme-btn18 mt-24">
                        <span className="theme-btn18__shape" />
                        <span className="theme-btn18__shape" />
                        <span className="theme-btn18__shape" />
                        <span className="theme-btn18__shape" />
                        <span className="theme-btn18__text">Read More </span>
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
                <div className="vl-blog-9-item mt-40 hover-effect">
                  <div className="vl-blog-9-content heading9">
                    <div className="vl-blog9-meta pb-16">
                      <Link href="#" className="date">
                        <Image src={date1} alt="" /> 12/12/2024
                      </Link>
                      <Link href="#" className="author">
                        <Image src={author1} alt="" /> John Doe
                      </Link>
                    </div>
                    <h5>
                      <Link href="/blog-details">{item.title}</Link>
                    </h5>
                    <p className="mt-12">{item.description}</p>
                    <Link href="/blog-details" className="theme-btn18 mt-24">
                      <span className="theme-btn18__shape" />
                      <span className="theme-btn18__shape" />
                      <span className="theme-btn18__shape" />
                      <span className="theme-btn18__shape" />
                      <span className="theme-btn18__text">Read More </span>
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
