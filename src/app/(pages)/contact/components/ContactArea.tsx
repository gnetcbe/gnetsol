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

/* ✅ TYPE GUARD */
const isContactItem = (
  item: ContactType | undefined
): item is ContactType => Boolean(item)

const ContactArea = () => {

  /* PHONE: digits only */
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 13)
  }

 

  /* FORM SUBMIT */
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.currentTarget

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

  // Name
  if (!name || name.length > 50) {
    alert('Please enter a valid name')
    return
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email) || email.length > 80) {
    alert('Please enter a valid email address')
    return
  }

  // Phone
  if (!phone || phone.length < 8 || phone.length > 13) {
    alert('Please enter a valid phone number')
    return
  }

  // Location
  if (!location || location.length > 100) {
    alert('Please enter a valid location')
    return
  }

  // Service Type
  if (!service) {
    alert('Please select a service type')
    return
  }

  // Message
  if (!message || message.length > 500) {
    alert('Please enter your message (max 500 characters)')
    return
  }

  /* ===== PAYLOAD ===== */
  const formData = {
    name,
    email,
    phone,
    location,
    service,
    message,
    company_website: honeypot, // silent captcha
  }

  /* ===== SEND TO PHP ===== */
  try {
    const res = await fetch(
      'https://gnetsolutions.in/contact-mail.php', // 🔁 CHANGE DOMAIN
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }
    )

    const result = await res.json()

    if (result.status === 'success') {
      alert('Message sent successfully')
      form.reset()
    } else {
      alert('Mail sending failed. Please try again.')
    }
  } catch {
    alert('Server error. Please try later.')
  }
}


  /* ORDERED CONTACT DATA */
  const addressItem = contactData.find(item => item.name === 'Office Address')
  const phoneItem   = contactData.find(item => item.name === 'Phone Number')
  const emailItem   = contactData.find(item => item.name === 'Email Address')

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

                    {/* 🔒 Silent CAPTCHA */}
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
    <input
      type="text"
      placeholder="Name"
      maxLength={50}
      required
    />
  </div>
</Col>


  {/* 1️⃣ EMAIL */}
  <Col md={6}>
    <div className="single-input">
      <input
        type="email"
        placeholder="Email Address"
        maxLength={80}
        required
      />
    </div>
  </Col>

  {/* 2️⃣ PHONE */}
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

  {/* 3️⃣ LOCATION */}
  <Col md={6}>
    <div className="single-input">
      <input
        type="text"
        placeholder="Location"
        maxLength={100}
        required
      />
    </div>
  </Col>

  {/* 4️⃣ SERVICE TYPE */}
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

  {/* MESSAGE */}
  <Col md={12}>
    <div className="single-input">
      <textarea
        rows={5}
        placeholder="How can we help you?"
        maxLength={500}
        required
      />
    </div>

    <div className="button mt-30">
      <button className="theme-btn3" type="submit">
        Send
        <span className="arrow1"><FaArrowRight /></span>
        <span className="arrow2"><FaArrowRight /></span>
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

                <div className="contact-social">
                  <h3>Follow Us</h3>
                  <div className="social-icons mt15">
                    <a href="https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/" target="_blank" rel="noopener noreferrer" className="fb"><FaFacebookF /></a>
                    <a href="https://www.youtube.com/@g-netsolutions5132" target="_blank" rel="noopener noreferrer" className="yt"><FaYoutube /></a>
                    <a href="https://www.linkedin.com/in/gnetsolutions" target="_blank" rel="noopener noreferrer" className="in"><FaLinkedinIn /></a>
                    <a href="https://x.com/gnetcoimbatore" target="_blank" rel="noopener noreferrer" className="x"><FaXTwitter /></a>
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
 /* FIX CustomNiceSelect dropdown scroll */
.nice-select .list {
  max-height: 260px;   /* shows ~8–10 items */
  overflow-y: auto;   /* enables scrollbar */
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
