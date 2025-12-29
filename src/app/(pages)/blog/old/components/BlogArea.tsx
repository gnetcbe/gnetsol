import author from '@/assets/img/icons/author1.svg'
import date from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6'
import { blogData } from '../data'

const BlogArea = () => {
  return (
    <>
      <div className="blog2 sp">
        <Container>
          <Row>
            {blogData.map((item, idx) => (
              <Col lg={6} key={idx}>
                <div className="vl-blog-11-item mt-30" data-aos="fade-up" data-aos-duration={900}>
                  <div className=" vl-blog-11-thumb image-anime overflow-hidden _relative">
                    <Image className="w-full" src={item.image} alt="" height={473} />
                  </div>
                  <div className="vl-blog-11-content heading2">
                    <div className="vl-blog11-meta pb-16">
                      <Link href="#" className="date">
                        <Image src={date} alt="" /> 12/12/2024
                      </Link>
                      <Link href="#" className="author">
                        <Image src={author} alt="" /> {item.name}
                      </Link>
                    </div>
                    <h4>
                      <Link href="/blog-details">{item.description}</Link>
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
            ))}
          </Row>
          <div className="space40" />
          <Row>
            <Col xs={12} className="m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li>
                    <Link href="#">
                      <FaAngleLeft className="fa-solid" />
                    </Link>
                  </li>
                  <li>
                    <Link className="active" href="#">
                      01
                    </Link>
                  </li>
                  <li>
                    <Link href="#">02</Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link href="#">12</Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaAngleRight className="fa-solid" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BlogArea
