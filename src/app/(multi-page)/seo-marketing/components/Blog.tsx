import sec8 from '@/assets/img/bg/sec-bg8.jpg'
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
      <div className="blog8 sp bg-cover" style={{ backgroundImage: `url(${sec8.src})` }}>
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading8">
                <span className="sub-title2" data-aos-duration={800} data-aos="fade-left">
                  <Image src={span1} alt="" /> Your Digital Growth Partners
                </span>
                <h2 className="text-anime-style-3">Building Success Through Innovation and Expertise</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {blogData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={item.count}>
                <div className="vl-blog-8-item mt-30">
                  <div className="vl-blog-8-thumb">
                    <div className="image-anime">
                      <Image className="w-full" src={item.image} alt="" height={314} />
                    </div>
                    <div className="vl-blog8-meta">
                      <Link href="#" className="user">
                        <Image src={author1} alt="" /> By Alex Roy
                      </Link>
                    </div>
                  </div>
                  <div className="vl-blog-8-content heading8">
                    <div className="vl-blog8-meta">
                      <Link href="#" className="date">
                        <Image src={date1} alt="" /> 8 December 2024
                      </Link>
                    </div>
                    <h4 className="mt-16 mb-16">
                      <Link href="/blog-details">{item.comment}</Link>
                    </h4>
                    <Link href="/blog-details" className="learn8">
                      learn more
                      <span className="arrow1">
                        <FaArrowRight className="fa-regular" />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight className="fa-regular" />
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
