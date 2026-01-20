import nodemailer from 'nodemailer'
import multiparty from 'multiparty'
import fs from 'fs'

export async function handler(event) {
  console.log('🔥 CAREER FUNCTION HIT')

  /* 🔐 Allow only POST */
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    }
  }

  return new Promise((resolve) => {
    const form = new multiparty.Form()

    // 🔥 Decode body correctly (Netlify sends base64 sometimes)
    const body = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64')
      : Buffer.from(event.body)

    // 🔥 Create fake request object for multiparty
    const fakeReq = {
      headers: {
        'content-type': event.headers['content-type'] || event.headers['Content-Type'],
        'content-length': body.length,
      },
      on: () => {}, // dummy stream handler
    }

    form.parse(fakeReq, async (err, fields, files) => {
      if (err) {
        console.error('❌ Form parse error:', err)
        resolve({
          statusCode: 500,
          body: JSON.stringify({ status: 'error', message: 'Form parsing failed' }),
        })
        return
      }

      /* 🔒 Honeypot */
      if (fields.company_website?.[0]) {
        console.log('🤖 Honeypot triggered')
        resolve({
          statusCode: 200,
          body: JSON.stringify({ status: 'ok' }),
        })
        return
      }

      /* ===== COLLECT VALUES ===== */
      const name = fields.name?.[0]
      const email = fields.email?.[0]
      const phone = fields.phone?.[0]
      const position = fields.position?.[0]
      const qualification = fields.qualification?.[0]
      const experience = fields.experience?.[0]
      const location = fields.location?.[0]
      const message = fields.message?.[0]

      console.log('📨 Career form data received:', {
        name,
        email,
        phone,
        position,
        qualification,
        experience,
        location,
      })

      /* ===== BASIC CHECK ===== */
      if (!name || !email || !phone || !position) {
        console.log('❌ Missing required fields')
        resolve({
          statusCode: 400,
          body: JSON.stringify({ status: 'invalid' }),
        })
        return
      }

      const resumeFile = files.resume?.[0]

      if (!resumeFile) {
        console.log('❌ Resume missing')
        resolve({
          statusCode: 400,
          body: JSON.stringify({ status: 'resume_missing' }),
        })
        return
      }

      /* ===== SMTP CONFIG (SAME AS CONTACT) ===== */
      const transporter = nodemailer.createTransport({
        host: '152.160.207.207',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      })

      /* ===== VERIFY SMTP ===== */
      try {
        await transporter.verify()
        console.log('✅ SMTP VERIFIED')
      } catch (e) {
        console.error('🔥 SMTP VERIFY FAILED:', e)
        resolve({
          statusCode: 500,
          body: JSON.stringify({ status: 'smtp_error' }),
        })
        return
      }

      /* ===== EMAIL TEMPLATE ===== */
      const htmlTemplate = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px;font-family:Arial,Helvetica,sans-serif">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden">
        <tr>
          <td style="background:#2563eb;padding:20px;color:#ffffff">
            <h2 style="margin:0">💼 New Job Application</h2>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;font-size:14px;color:#111">
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Position Applied:</b> ${position}</p>
            <p><b>Qualification:</b> ${qualification}</p>
            <p><b>Experience:</b> ${experience}</p>
            <p><b>Location:</b> ${location || '-'}</p>
            <p><b>Message:</b><br/>${(message || '-').replace(/\n/g, '<br/>')}</p>
          </td>
        </tr>
        <tr>
          <td style="background:#f1f5f9;padding:14px;font-size:12px;color:#555;text-align:center">
            Submitted via g-netsolutions.com – Careers Page
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`

      /* ===== SEND MAIL WITH ATTACHMENT ===== */
      try {
        await transporter.sendMail({
          from: `"Career Applications" <${process.env.SMTP_USER}>`,
          to: 'gnet.cbe@gmail.com',
          replyTo: email,
          subject: `New Job Application – ${position}`,
          html: htmlTemplate,
          attachments: [
            {
              filename: resumeFile.originalFilename,
              content: fs.readFileSync(resumeFile.path),
            },
          ],
        })

        console.log('✅ CAREER MAIL SENT SUCCESSFULLY')

        resolve({
          statusCode: 200,
          body: JSON.stringify({ status: 'success' }),
        })
      } catch (error) {
        console.error('🔥 MAIL ERROR:', error)

        resolve({
          statusCode: 500,
          body: JSON.stringify({
            status: 'error',
            message: error.message,
          }),
        })
      }
    })

    // 🔥 FEED BODY INTO MULTIPARTY
    form.write(body)
    form.end()
  })
}
