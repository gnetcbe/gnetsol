import nodemailer from 'nodemailer'

export async function handler(event) {
  /* 🔐 Allow only POST */
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    }
  }

  try {
    /* ===== PARSE REQUEST ===== */
    const {
      name,
      email,
      phone,
      location,
      service,
      message,
      company_website,
    } = JSON.parse(event.body)

    /* 🔒 Honeypot (Silent CAPTCHA) */
    if (company_website) {
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'ok' }),
      }
    }

    /* ===== BASIC SAFETY CHECK ===== */
    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ status: 'invalid' }),
      }
    }

    /* ===== SMTP CONFIG ===== */
    const transporter = nodemailer.createTransport({
      host: 'mail.gnetsolutions.com',   // 🔁 your SMTP host
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,    // set in Netlify
        pass: process.env.SMTP_PASS,    // set in Netlify
      },
    })

    /* ===== STYLED EMAIL ===== */
    const htmlTemplate = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px;font-family:Arial,Helvetica,sans-serif">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08)">
        
        <tr>
          <td style="background:#2563eb;padding:20px 24px;color:#ffffff">
            <h2 style="margin:0;font-size:20px;">📩 New Website Enquiry</h2>
            <p style="margin:4px 0 0;font-size:13px;opacity:0.9">
              G-Net Solutions Contact Form
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:24px">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#111827">
              <tr><td style="padding:8px 0"><strong>Name</strong></td><td>${name}</td></tr>
              <tr><td style="padding:8px 0"><strong>Email</strong></td><td>${email}</td></tr>
              <tr><td style="padding:8px 0"><strong>Phone</strong></td><td>${phone}</td></tr>
              <tr><td style="padding:8px 0"><strong>Location</strong></td><td>${location}</td></tr>
              <tr><td style="padding:8px 0"><strong>Service</strong></td><td>${service}</td></tr>
            </table>

            <div style="margin-top:18px">
              <p style="margin:0 0 6px;font-weight:bold">Message</p>
              <div style="background:#f1f5f9;padding:14px;border-radius:8px;color:#334155;line-height:1.6">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td style="background:#f8fafc;padding:16px 24px;font-size:12px;color:#6b7280;text-align:center">
            Submitted via <strong>g-netsolutions.com</strong>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`

    /* ===== SEND MAIL ===== */
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: 'gnet.cbe@gmail.com',      // 🔁 receiving email
      replyTo: email,
      subject: `New Enquiry – ${service}`,
      html: htmlTemplate,
    })

    /* ===== SUCCESS ===== */
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error' }),
    }
  }
}
