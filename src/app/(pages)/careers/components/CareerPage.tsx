'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import dynamic from 'next/dynamic'
import span3 from '@/assets/img/icons/span3.svg'

// ✅ FIX — nice-select2 uses 'self' which is browser-only
const CustomNiceSelect = dynamic(() => import('@/components/CustomNiceSelect'), { ssr: false })

const CareerPage = () => {

  /* 🔄 SUBMIT STATE */
  const [isSubmitting, setIsSubmitting] = useState(false)

  /* PHONE: digits only */
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 13)
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
    const name = (form.querySelector('input[name="name"]') as HTMLInputElement)?.value.trim()
    const email = (form.querySelector('input[name="email"]') as HTMLInputElement)?.value.trim()
    const phone = (form.querySelector('input[name="phone"]') as HTMLInputElement)?.value.trim()
    const position = (form.querySelector('input[name="position"]') as HTMLInputElement)?.value.trim()
    const qualification = (form.querySelector('input[name="qualification"]') as HTMLInputElement)?.value.trim()
    const location = (form.querySelector('input[name="location"]') as HTMLInputElement)?.value.trim()
    const message = (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement)?.value.trim()

    const experience = (
      form.querySelector('.nice-select .current') as HTMLElement
    )?.textContent?.trim()

    /* ===== VALIDATIONS ===== */
    if (!name || name.length > 50) return alert('Please enter a valid name')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) return alert('Please enter a valid email address')

    if (!phone || phone.length < 8 || phone.length > 13)
      return alert('Please enter a valid phone number')

    if (!position) return alert('Please enter position applied for')

    if (!qualification) return alert('Please enter qualification')

    if (!experience || experience === 'Total Experience *')
      return alert('Please select total experience')

    const resumeInput = form.querySelector('input[type="file"]') as HTMLInputElement
    if (!resumeInput?.files?.length) return alert('Please upload your resume')

    /* ===== PREPARE FORM DATA ===== */
    const formData = new FormData(form)
    formData.append('experience', experience || '')

    /* ===== SEND ===== */
    try {
      setIsSubmitting(true)

      const res = await fetch('/.netlify/functions/career-mail', {
        method: 'POST',
        body: formData,
      })

      const result = await res.json()

      if (result.status === 'success') {
        alert('Application submitted successfully')
        form.reset()
      } else {
        alert(result.message || 'Submission failed')
      }
    } catch {
      alert('Server error. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="career-page sp">
        <Container>

          {/* HEADING */}
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="heading2 text-center mb-40">
                <span className="sub-title">
                  <Image src={span3} alt="g-net solutions" />
                  CAREERS
                </span>
                <h2 className="text-anime-style-3">
                  Build Your Career With G-Net Solutions
                </h2>
                <p className="mt-16">
                  We're always looking for talented individuals who are passionate
                  about technology, creativity, and growth.
                </p>
              </div>
            </Col>
          </Row>

          {/* FORM */}
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="career-form">
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                  {/* 🔒 Silent CAPTCHA */}
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: 'none' }}
                  />

                  <Row>

                    <Col md={6}>
                      <div className="single-input">
                        <input type="text" name="name" placeholder="Full Name *" maxLength={50} required />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="single-input">
                        <input type="email" name="email" placeholder="Email Address *" maxLength={80} required />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="single-input">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number *"
                          maxLength={13}
                          required
                          onChange={handlePhoneInput}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="single-input">
                        <input type="text" name="position" maxLength={50} placeholder="Position Applied For *" required />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="single-input">
                        <input type="text" name="qualification" maxLength={50} placeholder="Qualification *" required />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="single-input">
                        <CustomNiceSelect className="wide">
                          <option value="">Total Experience *</option>
                          <option value="0-1">0 – 1 Years</option>
                          <option value="1-3">1 – 3 Years</option>
                          <option value="3-5">3 – 5 Years</option>
                          <option value="5+">5+ Years</option>
                        </CustomNiceSelect>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="single-input">
                        <input type="text" name="location" maxLength={50} placeholder="Current Location" />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="single-input">
                        <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="single-input">
                        <textarea
                          name="message"
                          rows={5}
                          maxLength={500}
                          placeholder="Tell us about yourself or cover message"
                        />
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="button mt-30 text-center">
                        <button className="theme-btn3" type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <span className="sending">
                              <span className="spinner" />
                              Sending...
                            </span>
                          ) : (
                            <>
                              Apply Now
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
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🔄 SPINNER + FORM STYLES */}
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

        .career-form {
          background: linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%);
          padding: 40px;
          border-radius: 22px;
          border: 1px solid #cbd5e1;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
        }

        .career-form .single-input {
          margin-bottom: 20px;
        }

        .career-form input,
        .career-form textarea,
        .career-form select {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          font-size: 15px;
          background: #ffffff;
        }

        .career-form input:focus,
        .career-form textarea:focus,
        .career-form select:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        @media (max-width: 768px) {
          .career-form {
            padding: 26px;
          }
        }
      `}</style>
    </>
  )
}

export default CareerPage