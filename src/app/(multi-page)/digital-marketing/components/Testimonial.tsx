
'use client'
import quote from '@/assets/img/icons/qoute4.png';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import span1 from '@/assets/img/icons/span1.svg'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { testimonialData } from '../data';
import Link from 'next/link';

const SlickSlider = () => {
  // Configuration for the slider
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
  };

  return (
    <>
      <div className="tes4 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading4">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={900}>
                  <Image src={span1} alt="" /> TESTIMONIALS
                </span>
                <h2 className="text-anime-style-3">What Our Client Say’s </h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-end button md:mt-20 sm:mt-20 md:text-start sm:text-start" data-aos="fade-left" data-aos-duration={800}>
                <Link href="/service" className="theme-btn8">
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__shape" />
                  <span className="theme-btn8__text">View All Blogs </span>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <div className='col-lg-8 m-auto'>
              <div className='tes4-slider-all mt-60 aos-init aos-animate'>
                <div className="tes4-slider">
                  <Slider {...settings}>
                    {testimonialData.map((item, idx) => (
                      <div key={idx} className="tes4-single-slider">
                        <Row className="align-items-center">
                          <Col md={5}>
                            <div className="auhtor_thumb">
                              <Image src={item.image} alt="" width={282} />
                            </div>
                          </Col>
                          <Col lg={7}>
                            <div className="author_text">
                              <div className="qoute">
                                <Image src={quote} alt="" />
                              </div>
                              <h5>{item.comment}</h5>
                              <p className="content">{item.description}</p>
                              <div className="info">
                                <Link href="#">{item.name}</Link>
                                <p>{item.title}</p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SlickSlider;