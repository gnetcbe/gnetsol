'use client'
import details5 from '@/assets/img/service/service-details5-image.png'
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
                    <Image className="w-full" src={details5} alt="" height={775} />
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
                      <h3>Expert Travel Guides for Unforgettable Journeys </h3>
                      <p className=" mt-16">
                        We provide expert travel guidance to help you explore the world with confidence. Our experienced travel experts curate
                        personalized itineraries, offer insightful recommendations, and ensure a hassle-free travel experience tailored to your
                        preferences. Whether you're looking for adventure, cultural exploration, or luxury getaways, our travel guides equip you with
                        essential information, from must-visit destinations to local tips and safety advice. With a deep understanding of global
                        travel trends and insider knowledge, we help travelers make the most of their journeys, ensuring every trip is enriching,
                        seamless, and unforgettable.
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>What we Offer </h3>
                    </div>
                    <Row className="pt-10">
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Personalized Itineraries</Link>
                          </h4>
                          <p className="mt-12">Tailored travel plans that match your interests and preferences.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Destination Insights</Link>
                          </h4>
                          <p className="mt-12">In-depth information about attractions, local experiences, and must-visit spots.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Social Media Advertising</Link>
                          </h4>
                          <p className="mt-12">Leverage platforms like Facebook, Instagram, LinkedIn, and Twitter to reach your ideal audience.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Cultural &amp; Safety Tips</Link>
                          </h4>
                          <p className="mt-12">Essential guidelines to help you navigate different cultures and travel safely.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Local Dining &amp; Activities</Link>
                          </h4>
                          <p className="mt-12">Discover the best restaurants, nightlife, and adventure opportunities.</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="details-content-text-box heading2 mt-30">
                          <h4>
                            <Link href="#">Visa &amp; Travel Documentation </Link>
                          </h4>
                          <p className="mt-12"> Guidance on visa applications, travel insurance, and essential paperwork.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-content mt-40">
                    <div className="heading2">
                      <h3>Why Choose SEOX for Travel Guidance?</h3>
                      <p className=" mt-16">
                        Our travel specialists offer in-depth knowledge of destinations worldwide. Every itinerary is customized to suit your
                        interests and travel style. We go beyond tourist hotspots to bring you authentic experiences. From flights to accommodations,
                        we help organize every aspect of your trip. Travel with confidence knowing expert help is just a call away.{' '}
                      </p>
                    </div>
                    <div className="heading2 mt-40">
                      <h3>Our Travel Guide Process</h3>
                      <p className=" mt-16">
                        we make travel planning effortless and enriching with our expert travel guidance. Whether you're seeking an adventurous
                        getaway, a cultural exploration, or a relaxing retreat, our travel specialists provide personalized itineraries, essential
                        travel tips, and local insights to enhance your journey. We help you discover hidden gems, navigate different cultures, and
                        ensure a hassle-free experience from start to finish. With a focus on seamless planning, safety, and unique experiences, we
                        turn your travel dreams into reality, allowing you to explore with confidence and make unforgettable memories.
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
                          <Link href="#">Campaign Strategy Development</Link>
                        </h4>
                        <p className="mt-2">We start by researching your business goals, target audience, and competitors.</p>
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
                          <Link href="#">Crafting the Perfect Itinerary</Link>
                        </h4>
                        <p className="mt-2">
                          Our experts design an itinerary with must-visit landmarks, hidden gems, and local favorites, ensuring a well-balanced trip.
                        </p>
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
                          <Link href="#">Providing Essential Travel Tips</Link>
                        </h4>
                        <p className="mt-2">
                          From cultural etiquette to packing checklists, we equip you with insights to enhance your travel experience.
                        </p>
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
                          <Link href="#">Ongoing Support &amp; Recommendations</Link>
                        </h4>
                        <p className="mt-2">Even during your trip, we provide real-time support and updates to make your journey hassle-free.</p>
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
