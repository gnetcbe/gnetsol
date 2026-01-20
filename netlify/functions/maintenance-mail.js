import nodemailer from 'nodemailer'

export async function handler(event) {
  console.log('🔥 MAINTENANCE FUNCTION HIT')

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
      company,
      email,
      phone,
      website,
      hosting,
      services,
      frequency,
      message,
      company_website,
    } = JSON.parse(event.body)

    console.log('📨 Maintenance form data received:', {
      name,
      company,
      email,
      phone,
      website,
      hosting,
      services,
      frequency,
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

    /* ===== SMTP CONFIG (SAME AS CONTACT) ===== */
    const transporter = nodemailer.createTransport({
      host: '152.160.207.207',
      port: 587,            // ✅ Netlify safe
      secure: false,        // ✅ must be false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    /* ===== VERIFY SMTP ===== */
    await transporter.verify()
    console.log('✅ SMTP VERIFIED')

    /* ===== FORMAT SERVICES ===== */
    const servicesText =
      Array.isArray(services) && services.length
        ? services.join(', ')
        : 'Not specified'

    /* ===== EMAIL TEMPLATE ===== */
    const htmlTemplate = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px;font-family:Arial,Helvetica,sans-serif">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden">
        <tr>
          <td style="background:#2563eb;padding:20px;color:#ffffff">
            <h2 style="margin:0">🛠 Website Maintenance Enquiry</h2>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;font-size:14px;color:#111">
            <p><b>Name:</b> ${name}</p>
            <p><b>Company:</b> ${company || '-'}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Website:</b> ${website || '-'}</p>
            <p><b>Hosting Provider:</b> ${hosting || '-'}</p>
            <p><b>Requested Services:</b> ${servicesText}</p>
            <p><b>Maintenance Frequency:</b> ${frequency || '-'}</p>
            <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>
          </td>
        </tr>
        <tr>
          <td style="background:#f1f5f9;padding:14px;font-size:12px;color:#555;text-align:center">
            Submitted via g-netsolutions.com – Maintenance Page
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`

    /* ===== SEND MAIL ===== */
    await transporter.sendMail({
      from: `"Website Maintenance" <${process.env.SMTP_USER}>`,
      to: 'gnet.cbe@gmail.com',       // 🔁 Admin / Support mail
      replyTo: email,
      subject: `Website Maintenance Enquiry – ${name}`,
      html: htmlTemplate,
    })

    console.log('✅ MAINTENANCE MAIL SENT SUCCESSFULLY')

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
