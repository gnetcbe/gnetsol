import nodemailer from 'nodemailer'

export async function handler(event) {
  console.log('🔥 CONTACT FUNCTION HIT')

  /* 🔐 Allow only POST */
  if (event.httpMethod !== 'POST') {
    console.log('❌ Not a POST request')
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    }
  }

  try {
    if (!event.body) {
      console.log('❌ Empty request body')
      return {
        statusCode: 400,
        body: JSON.stringify({ status: 'empty_body' }),
      }
    }

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

    console.log('📨 Form data received:', {
      name,
      email,
      phone,
      location,
      service,
    })

    /* 🔒 Honeypot */
    if (company_website) {
      console.log('🤖 Honeypot triggered')
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'ok' }),
      }
    }

    /* ===== BASIC CHECK ===== */
    if (!name || !email || !phone || !message) {
      console.log('❌ Missing required fields')
      return {
        statusCode: 400,
        body: JSON.stringify({ status: 'invalid' }),
      }
    }

    /* ===== SMTP CONFIG (NETLIFY SAFE) ===== */
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailssecured.com',
      port: 587,            // ✅ more reliable on Netlify
      secure: false,        // ✅ must be false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ✅ avoids cert issues
      },
    })

    /* ===== VERIFY SMTP ===== */
    await transporter.verify()
    console.log('✅ SMTP VERIFIED')

    /* ===== EMAIL TEMPLATE ===== */
    const htmlTemplate = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px;font-family:Arial,Helvetica,sans-serif">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden">
        <tr>
          <td style="background:#2563eb;padding:20px;color:#ffffff">
            <h2 style="margin:0">📩 New Website Enquiry</h2>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;font-size:14px;color:#111">
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Location:</b> ${location}</p>
            <p><b>Service:</b> ${service}</p>
            <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>
          </td>
        </tr>
        <tr>
          <td style="background:#f1f5f9;padding:14px;font-size:12px;color:#555;text-align:center">
            Submitted via g-netsolutions.com
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
      to: 'gnet.cbe@gmail.com',
      replyTo: email,
      subject: `New Enquiry – ${service || 'Website'}`,
      html: htmlTemplate,
    })

    console.log('✅ MAIL SENT SUCCESSFULLY')

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success' }),
    }
  } catch (error) {
    console.error('🔥 MAIL ERROR:', error)

    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 'error',
        message: error.message,
      }),
    }
  }
}
