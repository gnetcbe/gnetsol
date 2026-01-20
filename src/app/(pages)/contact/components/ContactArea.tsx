'use client'

import { useState } from 'react'
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

/* ✅ TYPE GUARD */
const isContactItem = (
  item: ContactType | undefined
): item is ContactType => Boolean(item)

const ContactArea = () => {

  /* 🔄 SUBMIT STATE */
  const [isSubmitting, setIsSubmitting] = useState(false)

  /* PHONE: digits only */
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 13)
  }

  /* FORM SUBMIT */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (isSubmitting) return

    /* 🔒 Silent CAPTCHA */
    const honeypot = (
      form.querySelector('input[name="company_website"]') as HTMLInputElement
    )?.value
    if (honeypot) return

    /* ===== COLLECT VALUES ===== */
    const name = (
      form.querySelector('input[placeholder="Name"]') as HTMLInputElement
    )?.value.trim()

    const email = (
      form.querySelector('input[type="email"]') as HTMLInputElement
    )?.value.trim()

    const phone = (
      form.querySelector('input[placeholder="Phone Number"]') as HTMLInputElement
    )?.value.trim()

    const location = (
      form.querySelector('input[placeholder="Location"]') as HTMLInputElement
    )?.value.trim()

    const service = (
      form.querySelector('select') as HTMLSelectElement
    )?.value

    const message = (
      form.querySelector('textarea') as HTMLTextAreaElement
    )?.value.trim()

    /* ===== VALIDATIONS ===== */
    if (!name || name.length > 50) return alert('Please enter a valid name')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email) || email.length > 80)
      return alert('Please enter a valid email address')

    if (!phone || phone.length < 8 || phone.length > 13)
      return alert('Please enter a valid phone number')

    if (!location || location.length > 100)
      return alert('Please enter a valid location')

    if (!service) return alert('Please select a service type')

    if (!message || message.length > 500)
      return alert('Please enter your message (max 500 characters)')

    /* ===== PAYLOAD ===== */
    const formData = {
      name,
      email,
      phone,
      location,
      service,
      message,
      company_website: honeypot,
    }

    /* ===== SEND ===== */
    try {
      setIsSubmitting(true)

      const res = await fetch('/.netlify/functions/contact-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (result.status === 'success') {
        alert('Message sent successfully')
        form.reset()
      } else {
        alert('Mail sending failed. Please try again.')
      }
    } catch {
      alert('Server error. Please try later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ORDERED CONTACT DATA */
  const addressItem = contactData.find(item => item.name === 'Office Address')
  const phoneItem = contactData.find(item => item.name === 'Phone Number')
  const emailItem = contactData.find(item => item.name === 'Email Address')

  const orderedContactData = [addressItem, phoneItem, emailItem].filter(isContactItem)

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
                    <Image src={span3} alt="g-net solutions" />
                    CONTACT US
                  </span>

                  <h1 className="text-anime-style-3">Lets Work Together</h1>

                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ display: 'none' }}
                    />

                    <Row className="mt-16">
                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="Name" maxLength={50} required />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="single-input">
                          <input type="email" placeholder="Email Address" maxLength={80} required />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="single-input">
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            maxLength={13}
                            required
                            onChange={handlePhoneInput}
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="Location" maxLength={50} required />
                        </div>
                      </Col>

                      <Col md={12}>
                        <div className="single-input">
                          <CustomNiceSelect className="wide">
                            <option value="">Select Service Type</option>
                            <option value="website-development">Website Development</option>
                            <option value="web-design">Custom Web Design</option>
                            <option value="ecommerce-development">E-Commerce Development</option>
                            <option value="responsive-design">Responsive Web Design</option>
                            <option value="cms-development">CMS Development</option>
                            <option value="website-maintenance">Website Maintenance</option>
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
                          <textarea rows={5} placeholder="How can we help you?" maxLength={500} required />
                        </div>

                        <div className="button mt-30">
                          <button className="theme-btn3" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <span className="sending">
                                <span className="spinner" />
                                Sending...
                              </span>
                            ) : (
                              <>
                                Send
                                <span className="arrow1"><FaArrowRight /></span>
                                <span className="arrow2"><FaArrowRight /></span>
                              </>
                            )}
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
                  <div key={idx} className={`contact-page-box enhanced item-${idx}`}>
                    <div className="icon">
                      <Image src={item.image} alt="g-net solutions" />
                    </div>
                    <div className="content">
                      <h3>{item.name}</h3>
                      {item.title && <p>{item.title}</p>}
                      {item.comment && <p>{item.comment}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <style jsx>{`
        .sending {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .spinner {
          width: 18px;
          height: 18px;
          border: 3px solid rgba(255,255,255,0.4);
          border-top: 3px solid #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}

export default ContactArea
