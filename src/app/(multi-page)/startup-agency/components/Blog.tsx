import bgimg from '@/assets/img/bg/sec-bg10.jpg'
import date10 from '@/assets/img/icons/date10.svg'
import span10 from '@/assets/img/icons/span10.svg'
import user10 from '@/assets/img/icons/user10.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { blogData } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog8 sp bg-cover bg-cover" style={{ backgroundImage: `url(${bgimg.src})` }}>
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading10">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span10} alt="" /> our latest blog and news
                </span>
                <h2 className="text-anime-style-3">Stay Ahead with Expert SEO And Marketing Tips</h2>
              </div>
            </Col>
          </Row>
          <Row className=" mt-30">
            {blogData.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={item.duration}>
                <div className="vl-blog-10-item mt-30">
                  <div className="vl-blog-10-thumb">
                    <div className="image-anime image">
                      <Image className="w-full" src={item.image} width={416} alt="" />
                    </div>
                    <div className="vl-blog10-meta">
                      <Link href="#" className="date">
                        <Image src={date10} alt="" /> 15 Aug
                      </Link>
                    </div>
                  </div>
                  <div className="vl-blog-10-content heading10">
                    <div className="vl-blog10-meta">
                      <Link href="#" className="user">
                        <Image src={user10} alt="" /> {item.name}
                      </Link>
                    </div>
                    <h5 className="mt-16 mb-16">
                      <Link href="/blog-details">How to Optimize Your Website for Google’s Latest Algorithm Update</Link>
                    </h5>
                    <Link href="/blog-details" className="learn10">
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
