'use client'
import detail3 from '@/assets/img/service/service-details3-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'
import Blog from '../../components/Blog'
import ImgBlog from '../../components/ImgBlog'
import SideBar from '../../components/SideBar'

const BlogDetail = () => {
  return (
    <>
      <div className="blog-details-area sp">
        <Container>
          <Row>
            <Col lg={12}>
              <article>
                <div className="details-content">
                  <div className="image">
                    <Image className="w-full" src={detail3} alt="" height={775} />
                  </div>
                </div>
              </article>
            </Col>
            <SideBar />
            <Col lg={8}>
              <div className="blog-details-content ml-30 md:ml-0 sm:ml-0 mt-50">
                <article>
                  <div className="details-content">
                    <div className="heading2 mt-24">
                      <h3>Drive Growth with Strategic Content Marketing </h3>
                      <p className=" mt-16">
                        We craft compelling content strategies designed to attract, engage, convert your audience. Our data-driven approach ensures
                        that every piece of content serves a purpose—whether it's boosting brand awareness, increasing website traffic, or generating
                        leads. From blog posts and website copy to videos and social media content, we create high-quality, SEO-optimized content that
                        resonates with your target audience and strengthens your brand authority.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Our Process About Content Marketing </h3>
                    </div>
                    <Row className="pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Research &amp; Strategy Development</Link>
                          </h4>
                          <p className="mt-12">
                            We analyze your industry, competitors, and audience insights to craft a content strategy that aligns with your goals.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Content Creation &amp; Optimization</Link>
                          </h4>
                          <p className="mt-12">
                            Our expert writers and designers create high-quality, SEO-friendly content that educates, engages, and converts.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Multi-Channel Distribution</Link>
                          </h4>
                          <p className="mt-12">
                            We amplify your content across websites, blogs, social media, and email marketing to maximize reach and impact.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Performance Tracking &amp; Continuous</Link>
                          </h4>
                          <p className="mt-12">We measure key metrics, analyze engagement, optimize content strategies for ongoing success.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2">
                      <h3>Content Marketing That Delivers Value &amp; Results</h3>
                      <p className=" mt-16">
                        we create powerful content marketing strategies designed to attract, engage, and convert your target audience. Our approach
                        focuses on crafting high-quality, SEO-optimized content that not only boosts your brand’s visibility but also establishes your
                        authority in the industry. From compelling blog articles and website copy to engaging social media posts and email campaigns,
                        we develop content that resonates with and drives meaningful interactions.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Captivating Content That Drives Results</h3>
                      <p className=" mt-16">
                        By combining data-driven insights with creative storytelling, we ensure that your content delivers real results—more traffic,
                        higher engagement, and increased conversions. Whether you're looking to educate your audience, nurture leads, or enhance brand
                        loyalty, our expertly crafted content strategies will help you achieve your marketing goals.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Why Choose SEOX For Content Marketing</h3>
                      <p className=" mt-16">
                        we combine creative expertise with data-driven strategies to deliver content marketing solutions that achieve tangible
                        results. Our team of experienced writers, designers, strategists works collaboratively to create content that resonates with
                        your audience and aligns with your business objectives
                      </p>
                    </div>
                    <div className="service-details-check-list heading2 mt-30">
                      <div className="check-icon">
                        <span>
                          <FaCheck className="fa-solid" />
                        </span>
                      </div>
                      <div className="text">
                        <h4>
                          <Link href="#">Data Driven Strategies</Link>
                        </h4>
                        <p className="mt-2">We create content based on insights, trends, and audience behavior.</p>
                      </div>
                    </div>
                    <div className="service-details-check-list heading2 mt-30">
                      <div className="check-icon">
                        <span>
                          <FaCheck className="fa-solid" />
                        </span>
                      </div>
                      <div className="text">
                        <h4>
                          <Link href="#">SEO-Focused Approach</Link>
                        </h4>
                        <p className="mt-2">Every piece of content is optimized to improve search rankings.</p>
                      </div>
                    </div>
                    <div className="service-details-check-list heading2 mt-30">
                      <div className="check-icon">
                        <span>
                          <FaCheck className="fa-solid" />
                        </span>
                      </div>
                      <div className="text">
                        <h4>
                          <Link href="#">Engaging &amp; Shareable Content</Link>
                        </h4>
                        <p className="mt-2">We craft compelling narratives that resonate with your audience.</p>
                      </div>
                    </div>
                    <div className="service-details-check-list heading2 mt-30">
                      <div className="check-icon">
                        <span>
                          <FaCheck className="fa-solid" />
                        </span>
                      </div>
                      <div className="text">
                        <h4>
                          <Link href="#">Consistent &amp; Scalable Solutions</Link>
                        </h4>
                        <p className="mt-2">From startups to enterprises, we deliver tailored content strategies.</p>
                      </div>
                    </div>
                    <ImgBlog />
                  </div>
                </article>
                <div className="details-border" />
                <Blog />
                <div className="details-border" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BlogDetail
