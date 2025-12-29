'use client'

import { Container } from 'react-bootstrap'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const MaintenanceCTA = () => {
  return (
    <section className="maintenance-contact">
      <Container>
        {/* INTRO */}
        <div className="contact-intro">
          <h2>
            Need <span>Reliable Website Maintenance?</span>
          </h2>

          <p className="lead-text">
            Keep your site secure, fast, and up-to-date with our expert
            maintenance services.
          </p>

          <p className="cta-text">
            📞 Contact us today to discuss your needs and get a customized plan.
          </p>

          <div className="contact-info">
            <div>
              <FaEnvelope />
              <a href="mailto:ramesh@gnet.in">ramesh@gnet.in</a>
            </div>
            <div>
              <FaPhoneAlt />
              <a href="tel:+919751959300">+91-9751959300</a>
            </div>
          </div>
        </div>

        {/* FORM */}
       <form className="contact-form">
  <h4>Send Us A Message</h4>

  <div className="form-grid">
    {/* Row 1 */}
    <div className="field">
      <label>Name</label>
      <input type="text" placeholder="Your Full Name" required />
    </div>

    <div className="field">
      <label>Company Name (if any)</label>
      <input type="text" placeholder="Company Name" />
    </div>

    <div className="field">
      <label>Email Address</label>
      <input type="email" placeholder="Email Address" required />
    </div>

    {/* Row 2 */}
    <div className="field">
      <label>Phone Number</label>
      <input type="tel" placeholder="Mobile Number" required />
    </div>

    <div className="field">
      <label>Website URL</label>
      <input type="url" placeholder="https://example.com" />
    </div>

    <div className="field">
      <label>Hosting Provider (optional)</label>
      <input type="text" placeholder="e.g. Bluehost, SiteGround" />
    </div>

    {/* FULL WIDTH */}
    <div className="field full">
      <label>What type of maintenance are you looking for?</label>
      <div className="checkbox-group">
        <label><input type="checkbox" /> Security & Updates</label>
        <label><input type="checkbox" /> Content Management</label>
        <label><input type="checkbox" /> Performance Optimization</label>
        <label><input type="checkbox" /> Bug Fixes & Troubleshooting</label>
        <label><input type="checkbox" /> Backups & Monitoring</label>
      </div>
    </div>

    <div className="field">
      <label>Others</label>
      <input type="text" placeholder="Please specify" />
    </div>

    <div className="field full">
      <label>Maintenance Frequency Preference:</label>
      <div className="radio-group">
        <label><input type="radio" name="freq" /> One-time fix</label>
        <label><input type="radio" name="freq" /> Weekly</label>
        <label><input type="radio" name="freq" /> Monthly</label>
        <label><input type="radio" name="freq" /> Quarterly</label>
        <label><input type="radio" name="freq" /> Not sure yet</label>
      </div>
    </div>

    <div className="field full">
      <label>Describe any current issues or concerns:</label>
      <textarea
        rows={3}
        placeholder="Explain any issues you're facing..."
        required
      />
    </div>
  </div>

  <button type="submit">Submit</button>
</form>

      </Container>

      {/* STYLES */}
      <style jsx>{`
        .maintenance-contact {
          padding: 50px 0;
          background: linear-gradient(180deg, #f8fbff 0%, #fff 100%);
        }

        .contact-intro {
          max-width: 760px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .contact-intro h2 {
          font-size: 40px;
          font-weight: 700;
        }

        .contact-intro h2 span {
          background: linear-gradient(135deg, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .lead-text {
          margin-top: 14px;
          font-size: 17px;
          color: #444;
        }

        .cta-text {
          margin-top: 12px;
          font-size: 16px;
        }

        .contact-info {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .contact-info div {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 17px;
        }

        .contact-info a {
          color: #000;
          font-weight: 500;
        }

        /* FORM */
        .contact-form {
          max-width: 760px;
          margin: 0 auto;
          background: #fff;
          padding: 40px;
          border-radius: 22px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .contact-form h4 {
          text-align: center;
          margin-bottom: 26px;
          font-size: 22px;
        }

        .field {
          margin-bottom: 18px;
        }

        .field label {
          display: block;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .field input,
        .field textarea {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          font-size: 16px;
          outline: none;
        }

        .field textarea {
          resize: none;
        }

        .checkbox-group,
        .radio-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .checkbox-group label,
        .radio-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
        }

        .checkbox-group input,
        .radio-group input {
          accent-color: #2563eb;
        }

        .contact-form button {
          margin-top: 10px;
          width: 100%;
          padding: 14px;
          border-radius: 30px;
          background: #2563eb;
          color: #fff;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }

        .contact-form button:hover {
          background: #1e40af;
        }

/* Wider form */
.contact-form {
  max-width: 1100px; /* 🔥 increased width */
  margin: 0 auto;
  background: #fff;
  padding: 40px;
  border-radius: 22px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

/* GRID LAYOUT */
.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 🔥 3 columns */
  gap: 18px;
}

/* Full width rows */
.field.full {
  grid-column: 1 / -1;
}

/* Inputs */
.field label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
}

.field input,
.field textarea {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font-size: 16px;
  outline: none;
}

 /* CHECKBOX & RADIO GROUPS – LEFT ALIGNED */
.checkbox-group,
.radio-group {
  display: flex;              /* 🔥 not grid */
  flex-wrap: wrap;            /* wrap to next line */
  gap: 12px 24px;             /* row / column gap */
  align-items: flex-start;    /* left aligned */
  justify-content: flex-start;
}

/* Each option */
.checkbox-group label,
.radio-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #444;
  cursor: pointer;
  white-space: nowrap;        /* keeps label inline */
}

/* Inputs */
.checkbox-group input,
.radio-group input {
  accent-color: #2563eb;
}

/* Responsive */
@media (max-width: 992px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}



      `}</style>
    </section>
  )
}

export default MaintenanceCTA
