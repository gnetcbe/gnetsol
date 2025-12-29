import blog1 from '@/assets/img/blog/blog-page1-image1.png'
import blog2 from '@/assets/img/blog/blog-page1-image2.png'
import blog3 from '@/assets/img/blog/blog-page1-image3.png'
import blog4 from '@/assets/img/blog/blog-page1-image4.png'
import blog5 from '@/assets/img/blog/blog-page1-image5.png'
import blog6 from '@/assets/img/blog/blog-page1-image6.png'
import author from '@/assets/img/icons/author1.svg'
import date from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6'

const BlogArea = () => {
  return (
    <>
     
        <Container>
          <div className="vl-blog-12-item mt-30" data-aos="fade-up" data-aos-duration={1100}>
            <Row>
              <Col lg={6}>
                <div className=" vl-blog-12-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog1} alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="vl-blog-12-content heading2">
                  <div className="vl-blog12-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date} alt="" /> 12/12/2024
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author} alt="" /> John Doe
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
              </Col>
            </Row>
          </div>
          <div className="vl-blog-12-item mt-30" data-aos="fade-up" data-aos-duration={900}>
            <Row>
              <Col lg={6}>
                <div className="vl-blog-12-content heading2">
                  <div className="vl-blog12-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date} alt="" /> 12/12/2024
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author} alt="" /> John Doe
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
              </Col>
              <Col lg={6}>
                <div className=" vl-blog-12-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog2} alt="" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="vl-blog-12-item mt-30" data-aos="fade-up" data-aos-duration={900}>
            <Row>
              <Col lg={6}>
                <div className=" vl-blog-12-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog3} alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="vl-blog-12-content heading2">
                  <div className="vl-blog12-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date} alt="" /> 12/12/2024
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author} alt="" /> John Doe
                    </Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      "Mastering the Art of Search Engine Optimization: A Comprehensive Guide to Driving Organic Traffic and Building Online
                      Authority"
                    </Link>
                  </h4>
                  <p className="mt-16">
                    Search Engine Optimization (SEO) is the backbone of modern digital marketing, offering businesses a way to enhance their
                    visibility and attract targeted traffic.{' '}
                  </p>
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
              </Col>
            </Row>
          </div>
          <div className="vl-blog-12-item mt-30" data-aos="fade-up" data-aos-duration={900}>
            <Row>
              <Col lg={6}>
                <div className="vl-blog-12-content heading2">
                  <div className="vl-blog12-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date} alt="" /> 12/12/2024
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author} alt="" /> John Doe
                    </Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      "Creating Impactful Content Marketing Strategies: How to Boost Engagement and Strengthen Your Digital Presence in Competitive
                      Markets"
                    </Link>
                  </h4>
                  <p className="mt-16">
                    In today’s crowded digital landscape, creating compelling and relevant content is crucial for standing out. This blog explores how
                    to craft impactful content marketing strategies.{' '}
                  </p>
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
              </Col>
              <Col lg={6}>
                <div className=" vl-blog-12-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog4} alt="" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="vl-blog-12-item mt-30" data-aos="fade-up" data-aos-duration={900}>
            <Row>
              <Col lg={6}>
                <div className=" vl-blog-12-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog5} alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="vl-blog-12-content heading2">
                  <div className="vl-blog12-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date} alt="" /> 12/12/2024
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author} alt="" /> John Doe
                    </Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      "Unleashing the Full Potential of Social Media Marketing: Proven Tactics to Elevate Your Brand's Voice and Customer Connection"
                    </Link>
                  </h4>
                  <p className="mt-16">
                    Social media marketing is more than just posting updates—it’s about building relationships, telling your brand’s story, and
                    engaging with your audience on a deeper level.
                  </p>
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
              </Col>
            </Row>
          </div>
          <div className="vl-blog-12-item mt-30" data-aos="fade-up" data-aos-duration={900}>
            <Row>
              <Col lg={6}>
                <div className="vl-blog-12-content heading2">
                  <div className="vl-blog12-meta pb-16">
                    <Link href="#" className="date">
                      <Image src={date} alt="" /> 12/12/2024
                    </Link>
                    <Link href="#" className="author">
                      <Image src={author} alt="" /> John Doe
                    </Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      "Maximizing ROI with PPC Advertising: A Step-by-Step Approach to Combining Paid Ads with SEO for Better Results"
                    </Link>
                  </h4>
                  <p className="mt-16">
                    PPC advertising is a powerful tool for immediate results, but its true strength lies in strategic integration with SEO. This blog
                    provides a step-by-step guide to blending paid advertising.{' '}
                  </p>
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
              </Col>
              <Col lg={6}>
                <div className=" vl-blog-12-thumb image-anime overflow-hidden _relative">
                  <Image className="w-full" src={blog6} alt="" />
                </div>
              </Col>
            </Row>
          </div>
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

export default BlogArea
