'use client'
import detail from '@/assets/img/blog/blog-details-image.png'
import detail1 from '@/assets/img/blog/blog-details-image2.png'
import detail2 from '@/assets/img/blog/blog-details-image3.png'
import detail4 from '@/assets/img/blog/blog-details-image4.png'
import box1 from '@/assets/img/blog/comment-box-image1.png'
import box2 from '@/assets/img/blog/comment-box-image2.png'
import author from '@/assets/img/blog/details-author.png'
import post1 from '@/assets/img/blog/recent-post1.png'
import post2 from '@/assets/img/blog/recent-post2.png'
import post3 from '@/assets/img/blog/recent-post3.png'
import post4 from '@/assets/img/blog/recent-post4.png'
import author1 from '@/assets/img/icons/author1.svg'
import date from '@/assets/img/icons/date1.svg'
import email from '@/assets/img/icons/sidebar-email.png'
import phone from '@/assets/img/icons/sidebar-phone.png'
import CustomNiceSelect from '@/components/CustomNiceSelect'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaMagnifyingGlass, FaReply, FaXTwitter } from 'react-icons/fa6'

const BlogDetail = () => {
  return (
    <>
      <div className="blog-details-area sp">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="sidebar-area">
                <div className="_sidebar-widget _search">
                  <h3>Search</h3>
                  <form action="#" className="_relative">
                    <input type="search" placeholder="Search..." />
                    <button>
                      <FaMagnifyingGlass className="fa-solid" />
                    </button>
                  </form>
                </div>
                <div className="_sidebar-widget _list mt-40">
                  <h3>Our Service</h3>
                  <div className="sidebar-list">
                    <ul>
                      <li>
                        <Link href="/single-service/details1">
                          Business Strategy Planning{' '}
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-service/details1">
                          Corporate Growth Advisory{' '}
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-service/details1">
                          Strategic Risk Management{' '}
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-service/details1">
                          Business Process Optimization{' '}
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-service/details1">
                          Business Continuity Planning{' '}
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-service/details1">
                          Crisis Management Solution{' '}
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="_sidebar-widget _recent mt-40">
                  <h3>Our Recent Blog</h3>
                  <div className="recent-blog">
                    <div className="recent-blog-post">
                      <div>
                        <div className="image">
                          <Image src={post1} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <Link href="#" className="date">
                          <Image src={date} alt="" /> 4 August 2025
                        </Link>
                        <h4>
                          <Link href="/blog-details">Maximize Your Business Success with Tailored SEO..</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-blog-post">
                      <div>
                        <div className="image">
                          <Image src={post2} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <Link href="#" className="date">
                          <Image src={date} alt="" /> 4 August 2025
                        </Link>
                        <h4>
                          <Link href="/blog-details">Mastering the Art of Search Engine Optimization A..</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-blog-post">
                      <div>
                        <div className="image">
                          <Image src={post3} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <Link href="#" className="date">
                          <Image src={date} alt="" /> 4 August 2025
                        </Link>
                        <h4>
                          <Link href="/blog-details">Creating Impactful Content Marketing Strategies How...</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-blog-post">
                      <div>
                        <div className="image">
                          <Image src={post4} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <Link href="#" className="date">
                          <Image src={date} alt="" /> 4 August 2025
                        </Link>
                        <h4>
                          <Link href="/blog-details">Unleashing the Full Potential of Social Media Marketing...</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_sidebar-widget _tags mt-40">
                  <h3>Popular Tags</h3>
                  <div className="tags-list">
                    <ul>
                      <li>
                        <Link href="#">SEO</Link>
                      </li>
                      <li>
                        <Link href="#">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link href="#">PPC</Link>
                      </li>
                      <li>
                        <Link href="#">Keyword Research</Link>
                      </li>
                      <li>
                        <Link href="#">Content</Link>
                      </li>
                      <li>
                        <Link href="#">Email Marketing</Link>
                      </li>
                      <li>
                        <Link href="#">Social Marketing</Link>
                      </li>
                      <li>
                        <Link href="#">Advertising</Link>
                      </li>
                      <li>
                        <Link href="#">Technology</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="_sidebar-widget _buttons mt-40">
                  <h3>You Still Have A Question</h3>
                  <p className="mt-16">If you cannot find answer to your question our FAQ, you can always contact us. Web will answer you shortly!</p>
                  <div className="buttons mt-16">
                    <a href="mailto:Infoseoxagency@gmail.com" className="sidebar-btn1">
                      <Image src={email} alt="" /> Infoseoxagency@gmail.com
                    </a>
                    <Link href="tel:123-456-7890" className="sidebar-btn2">
                      <Image src={phone} alt="" /> 123-456-7890
                    </Link>
                  </div>
                </div>
                <div className="_sidebar-widget _contact mt-40">
                  <h3>Get A Free Quote</h3>
                  <div className="_contact-form mt-10">
                    <form action="#">
                      <input type="text" placeholder="Your Name" />
                      <input type="email" placeholder="Email Address" />
                      <input type="number" placeholder="Phone Number" />
                      <textarea rows={5} placeholder="Your Message" defaultValue={''} />
                      <button className="theme-btn3 mt-20" type="submit">
                        Send{' '}
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="blog-details-content ml-30 md:ml-0 sm:ml-0 md:mt-30 sm:mt-30">
                <article>
                  <div className="details-content">
                    <div className="image">
                      <Image className="w-full" src={detail} alt="" height={550} />
                    </div>
                    <div className="vl-blog12-meta mt-24">
                      <Link href="#" className="date">
                        <Image src={date} alt="" /> 12/12/2025
                      </Link>
                      <Link href="#" className="author">
                        <Image src={author1} alt="" /> John Doe
                      </Link>
                    </div>
                    <div className="heading2 mt-24">
                      <h3>Discover the emerging trends that are reshaping the startup ecosystem.</h3>
                      <p className=" mt-16">
                        In today’s fast-paced digital world, startups are no longer bound by traditional frameworks. The startup ecosystem is
                        continuously evolving, fueled by advancements in technology, changes in consumer behavior, and innovative business models.
                        This blog takes a deep dive into the emerging trends that are redefining how startups operate, grow, and thrive in a
                        competitive landscape.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>A Revolution in the Startup World</h3>
                      <p className=" mt-16">
                        The startup ecosystem has always been a hub for innovation, but the past few years have witnessed unprecedented shifts. From
                        the rise of artificial intelligence to the growing importance of sustainability, startups are leveraging these trends to carve
                        out unique niches. Whether you're an aspiring entrepreneur or an investor, understanding these trends is crucial to staying
                        ahead of the curve.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Artificial Intelligence as the Cornerstone Innovation</h3>
                      <p className=" mt-16">
                        AI has become the backbone of modern startups. From automating repetitive tasks to providing deep customer insights, AI is
                        enabling startups to achieve efficiency and scalability like never before. Startups in fields like health tech, fintech, and
                        e-commerce are using AI-driven tools to disrupt traditional industries.
                      </p>
                    </div>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2 mt-24">
                      <h5>Key Takeway</h5>
                      <p className="mt-10">Adopting green practices not only aligns with global values but also new market opportunities.</p>
                    </div>
                    <Row>
                      <Col md={6}>
                        <div className="image mt-30">
                          <Image className="w-full" src={detail1} alt="" height={278} />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="image mt-30">
                          <Image className="w-full" src={detail2} alt="" height={278} />
                        </div>
                      </Col>
                    </Row>
                    <div className="heading2 mt-24">
                      <h3>The Rise of Remote-First Business Models</h3>
                      <p className=" mt-16">
                        The global shift to remote work has reshaped the way startups build teams and operate. Remote-first models allow startups to
                        access talent pools from around the world, reducing overhead costs and increasing flexibility. Tools like Slack, Zoom, and
                        Asana are facilitating seamless collaboration across continents.
                      </p>
                    </div>
                    <div className="heading2 mt-24">
                      <h5>Key Takeway</h5>
                      <p className="mt-10">Embracing remote work can help startups reduce operational costs and attract top-tier talent.</p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Niche Markets and Hyper-Personalization</h3>
                      <p className=" mt-16">
                        Startups are increasingly targeting niche markets with tailored solutions. Hyper-personalization, powered by big data and
                        machine learning, allows businesses to create unique experiences for every customer. Whether it’s subscription boxes for niche
                        hobbies or personalized health plans, startups are proving that specialization is key to success.
                      </p>
                    </div>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2 mt-24">
                      <h5>Key Takeway</h5>
                      <p className="mt-10">Adopting green practices not only aligns with global values but also new market opportunities.</p>
                    </div>
                    <div className="image mt-30">
                      <Image className="w-full" src={detail4} alt="" height={385} />
                    </div>
                    <div className="heading2 mt-24">
                      <h3>The Future is Bright for Startups</h3>
                      <p className=" mt-16">
                        The startup ecosystem is evolving at an unprecedented pace, offering endless opportunities for those who can adapt and
                        innovate. By embracing these emerging trends, startups can overcome challenges and build lasting success in their industries.
                        Whether it’s through AI, sustainability, or niche markets, the future belongs to startups that dare to think differently.
                      </p>
                    </div>
                  </div>
                </article>
                <div className="details-author-area mt-40">
                  <p>"The future belongs to those who embrace change, innovate with purpose, and build solutions that inspire progress."</p>
                  <div className="author-info">
                    <div className="thumb">
                      <Image src={author} alt="" />
                    </div>
                    <div className="text">
                      <Link href="#">Alex Carey</Link>
                    </div>
                  </div>
                </div>
                <div className="details-border" />
                <div className="details-content">
                  <div className="details-social-tags">
                    <div className="tags">
                      <ul>
                        <li className="text"> Tags:</li>
                        <li className="tag">
                          <Link href="#">#BusinessConsulting</Link>
                        </li>
                        <li className="tag">
                          <Link href="#">#SalesStrategy</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="social-icons">
                      <ul>
                        <li className="text">Share:</li>
                        <li className="icon">
                          <Link href="#">
                            <FaFacebookF className="fa-brands" />
                          </Link>
                        </li>
                        <li className="icon">
                          <Link href="#">
                            <FaInstagram className="fa-brands" />
                          </Link>
                        </li>
                        <li className="icon">
                          <Link href="#">
                            <FaXTwitter className="fa-brands" />
                          </Link>
                        </li>
                        <li className="icon">
                          <Link href="#">
                            <FaLinkedinIn className="fa-brands" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="details-border" />
                <div className="comment-area heading2">
                  <h3>Blog Comments (2)</h3>
                  <div className="details-single-comment mt-30">
                    <div className="top-area">
                      <div className="author-area">
                        <div className="author-image">
                          <Image src={box1} alt="" />
                        </div>
                        <div className="text">
                          <Link href="#" className="date">
                            <Image src={date} alt="" /> 8 December 2025
                          </Link>
                          <h4>
                            <Link href="#">Alex Robertson</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="reply">
                        <Link href="#">
                          <FaReply className="fa-solid" /> Reply
                        </Link>
                      </div>
                    </div>
                    <p>
                      In today’s dynamic business landscape, organizations face numerous challenges that require strategic thinking and expert
                      guidance. Business consulting serves as a crucial resource, providing companies with the insights an tools necessary.
                    </p>
                  </div>
                  <div className="details-single-comment mt-30 ml-30 sm:ml-0">
                    <div className="top-area">
                      <div className="author-area">
                        <div className="author-image">
                          <Image src={box2} alt="" />
                        </div>
                        <div className="text">
                          <Link href="#" className="date">
                            <Image src={date} alt="" /> 8 December 2025
                          </Link>
                          <h4>
                            <Link href="#">Theo Hernandez</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="reply">
                        <Link href="#">
                          <FaReply className="fa-solid" /> Reply
                        </Link>
                      </div>
                    </div>
                    <p>
                      At Advicx, our consulting services are tailored to meet the unique needs of each client, focusing on areas such as operational
                      efficiency, market expansion, and digital transformation. By leveraging data analytics and.
                    </p>
                  </div>
                </div>
                <div className="contact-details-form heading2 mt-40">
                  <h3>Leave a Reply</h3>
                  <p className="mt-12">Provide clear contact information, including phone number, email, and address.</p>
                  <form action="#">
                    <Row className="mt-16">
                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="number" placeholder="Phone Number" />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="single-input">
                          <CustomNiceSelect className="wide">
                            <option value={1}>Service Type</option>
                            <option value={2}>Option 1</option>
                            <option value={3}>Option 2</option>
                            <option value={4}>Option 3</option>
                          </CustomNiceSelect>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="single-input">
                          <textarea rows={5} placeholder="How can we help you?" />
                        </div>
                        <div className="button mt-30">
                          <button className="theme-btn3" type="submit">
                            Send{' '}
                            <span className="arrow1">
                              <FaArrowRight className="fa-solid" />
                            </span>
                            <span className="arrow2">
                              <FaArrowRight className="fa-solid" />
                            </span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BlogDetail
