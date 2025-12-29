'use client'

import span3 from '@/assets/img/icons/span3.svg'
import CustomNiceSelect from '@/components/CustomNiceSelect'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'
import { contactData } from '../data'
import type { ContactType } from '../data'

/* ✅ TYPE GUARD — FIXES TS ERROR */
const isContactItem = (
  item: ContactType | undefined
): item is ContactType => Boolean(item)

const ContactArea = () => {
  /* ✅ HARD GUARANTEED ORDER */
  const addressItem = contactData.find(
    item => item.name === 'Office Address'
  )
  const phoneItem = contactData.find(
    item => item.name === 'Phone Number'
  )
  const emailItem = contactData.find(
    item => item.name === 'Email Address'
  )

  const orderedContactData = [
    addressItem,
    phoneItem,
    emailItem,
  ].filter(isContactItem)

  return (
    <>
      <div className="contact2 sp">
        <Container>
          <Row>

            {/* LEFT – FORM */}
            <Col lg={6} className="mt-60">
              <div className="heading2">
                <div className="contact2-form">
                  <span className="sub-title">
                    <Image src={span3} alt="g-net solutions -A global custom software development company" />
                    CONTACT US
                  </span>

                  <h1 className="text-anime-style-3">Lets Work Together</h1>

                 

                  <form>
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
                           <option value="">Select Service Type</option>
<option value="web-development">Website Development</option>
<option value="web-design">Custom Web Design</option>
<option value="ecommerce-development">E-Commerce Development</option>
<option value="responsive-design">Responsive Web Design</option>
<option value="cms-development">CMS Development (WordPress / Custom)</option>
<option value="website-maintenance">Website Maintenance & Support</option>
<option value="domain-registration">Domain Registration</option>
<option value="web-hosting">Web Hosting Services</option>
<option value="email-hosting">Business Email / Google Workspace</option>
<option value="seo">Search Engine Optimization (SEO)</option>
<option value="digital-marketing">Digital Marketing</option>
<option value="other">Other / Consultation</option>

                          </CustomNiceSelect>
                        </div>
                      </Col>

                      <Col md={12}>
                        <div className="single-input">
                          <textarea rows={5} placeholder="How can we help you?" />
                        </div>

                        <div className="button mt-30">
                          <button className="theme-btn3" type="submit">
                            Send
                            <span className="arrow1">
                              <FaArrowRight />
                            </span>
                            <span className="arrow2">
                              <FaArrowRight />
                            </span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>

            {/* RIGHT – CONTACT INFO */}
            <Col lg={6} className="mt-60">
              <div className="contact-box-wrapper">
                {orderedContactData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`contact-page-box enhanced item-${idx}`}
                  >
                    <div className="icon">
                      <Image src={item.image} alt="g-net solutions -A global custom software development company" />
                    </div>
                    <div className="content">
                      <h3>{item.name}</h3>
                      {item.title && <p>{item.title}</p>}
                      {item.comment && <p>{item.comment}</p>}
                    </div>
                  </div>
                ))}

                {/* SOCIAL MEDIA */}
                <div className="contact-social">
                  <h3>Follow Us</h3>
                  <div className="social-icons mt15">
                    <a
                      href="https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="https://www.youtube.com/@g-netsolutions5132"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="yt"
                    >
                      <FaYoutube />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/gnetsolutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="in"
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href="https://x.com/gnetcoimbatore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="x"
                    >
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .contact-box-wrapper {
          display: grid;
          gap: 22px;
        }

.contact2-form {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
}


.contact2-form .single-input input,
.contact2-form .single-input textarea,
.contact2-form .single-input select {
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 10px;
}

.contact2-form .single-input input:focus,
.contact2-form .single-input textarea:focus,
.contact2-form .single-input select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

        .contact-page-box.enhanced {
          display: flex;
          gap: 18px;
          padding: 24px;
          border-radius: 18px;
          background: #f1f5f9;
          border-left: 6px solid #2563eb;
        }

        /* Address */
        .item-0 {
          background: #e0f2fe;
          border-left-color: #0284c7;
        }

        /* Phone */
        .item-1 {
          background: #ecfdf5;
          border-left-color: #16a34a;
        }

        /* Email */
        .item-2 {
          background: #fff7ed;
          border-left-color: #ea580c;
        }

        .icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* SOCIAL */
        .contact-social {
          margin-top: 14px;
          padding-top: 18px;
          border-top: 1px dashed #cbd5f5;
        }

        .social-icons {
          display: flex;
          gap: 14px;
        }

        .social-icons a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #ffffff;
        }

        .fb { background: #1877f2; }
        .yt { background: #ff0000; }
        .in { background: #0a66c2; }
        .x { background: #000000; }
      `}</style>
    </>
  )
}

export default ContactArea
