<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// PHPMailer includes (public_html level)
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
    exit;
}

// 🔒 Silent CAPTCHA (honeypot)
if (!empty($data['company_website'])) {
    exit; // bot detected
}

// Sanitize
$name      = htmlspecialchars(trim($data['name'] ?? ''));
$company   = htmlspecialchars(trim($data['company'] ?? ''));
$email     = htmlspecialchars(trim($data['email'] ?? ''));
$phone     = htmlspecialchars(trim($data['phone'] ?? ''));
$website   = htmlspecialchars(trim($data['website'] ?? ''));
$hosting   = htmlspecialchars(trim($data['hosting'] ?? ''));
$services  = $data['services'] ?? [];
$frequency = htmlspecialchars(trim($data['frequency'] ?? ''));
$message   = nl2br(htmlspecialchars(trim($data['message'] ?? '')));

// Validate
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit;
}

$servicesList = !empty($services) ? implode(', ', $services) : 'Not specified';

$mail = new PHPMailer(true);

try {
    /* ===== SMTP (RECOMMENDED) ===== */
    /*
    $mail->isSMTP();
    $mail->Host       = 'mail.yourdomain.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@yourdomain.com';
    $mail->Password   = 'EMAIL_PASSWORD';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    */

    // Sender
    $mail->setFrom('info@g-netsolutions.in', 'Website Maintenance Enquiry');

    // Receiver
    $mail->addAddress('gnet.cbe@gmail.com');

    // Reply to user
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Website Maintenance Enquiry';

    $mail->Body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
</head>
<body style='margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;'>

  <table width='100%' cellpadding='0' cellspacing='0' style='background:#f4f6f8;padding:30px 0;'>
    <tr>
      <td align='center'>

        <!-- CARD -->
        <table width='600' cellpadding='0' cellspacing='0' style='background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);'>

          <!-- HEADER -->
          <tr>
            <td style='background:linear-gradient(135deg,#2563eb,#9333ea);padding:24px;color:#ffffff;text-align:center;'>
              <h2 style='margin:0;font-size:22px;font-weight:600;'>
                Website Maintenance Enquiry
              </h2>
              <p style='margin:6px 0 0;font-size:14px;opacity:0.9;'>
                g-netsolutions.in
              </p>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style='padding:28px;'>

              <table width='100%' cellpadding='6' cellspacing='0' style='font-size:15px;color:#333;'>
                <tr>
                  <td width='35%' style='font-weight:600;'>Name</td>
                  <td>{$name}</td>
                </tr>
                <tr>
                  <td style='font-weight:600;'>Company</td>
                  <td>{$company}</td>
                </tr>
                <tr>
                  <td style='font-weight:600;'>Email</td>
                  <td><a href='mailto:{$email}' style='color:#2563eb;text-decoration:none;'>{$email}</a></td>
                </tr>
                <tr>
                  <td style='font-weight:600;'>Phone</td>
                  <td>{$phone}</td>
                </tr>
                <tr>
                  <td style='font-weight:600;'>Website</td>
                  <td>{$website}</td>
                </tr>
                <tr>
                  <td style='font-weight:600;'>Hosting</td>
                  <td>{$hosting}</td>
                </tr>
                <tr>
                  <td style='font-weight:600;'>Services</td>
                  <td>{$servicesList}</td>
                </tr>
                <tr>
                  <td style='font-weight:600;'>Frequency</td>
                  <td>{$frequency}</td>
                </tr>
              </table>

              <!-- MESSAGE -->
              <div style='margin-top:22px;padding:16px;background:#f8fafc;border-radius:8px;'>
                <p style='margin:0 0 6px;font-weight:600;'>Message</p>
                <p style='margin:0;line-height:1.6;color:#444;'>{$message}</p>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style='background:#f1f5f9;padding:14px;text-align:center;font-size:13px;color:#555;'>
              This enquiry was submitted from  
              <strong>g-netsolutions.in</strong>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
";

   $mail->send();

    echo json_encode(["status" => "success"]);

} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Mail failed"]);
}
