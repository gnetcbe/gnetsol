import quote from '@/assets/img/icons/quote.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa6'
import { testimonial2Data } from '../data'

const Blog = () => {
  return (
    <>
      <Container>
        <Row className="mt-20">
          {testimonial2Data.map((item, idx) => (
            <Col md={6} lg={4} key={idx}>
              <div className="tes-page-box mt-30">
                <div className="quote">
                  <Image src={quote} alt="" />
                </div>
                <div className="stars">
                  <ul>
                    <li className="star">
                      <FaStar className="fa-solid" />
                    </li>
                    <li className="star">
                      <FaStar className="fa-solid" />
                    </li>
                    <li className="star">
                      <FaStar className="fa-solid" />
                    </li>
                    <li className="star">
                      <FaStar className="fa-solid" />
                    </li>
                    <li className="star">
                      <FaStar className="fa-solid" />
                    </li>
                    <li className="text">(5) Rating</li>
                  </ul>
                </div>
                <div className="content">
                  <p>"{item.description}"</p>
                </div>
                <div className="bottom-area">
                  <div className="author_thumb">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="author-text">
                    <Link href="#">{item.name}</Link>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="space60" />
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
    </>
  )
}

export default Blog
