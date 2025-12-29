<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

/* STOP OPTIONS */
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Include PHPMailer */
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

/* Get JSON data */
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
    exit;
}

/* 🔒 Silent CAPTCHA */
if (!empty($data['company_website'])) {
    exit; // bot detected
}

/* Sanitize */
$name     = htmlspecialchars(trim($data['name'] ?? ''));
$email    = htmlspecialchars(trim($data['email'] ?? ''));
$phone    = htmlspecialchars(trim($data['phone'] ?? ''));
$location = htmlspecialchars(trim($data['location'] ?? ''));
$service  = htmlspecialchars(trim($data['service'] ?? ''));
$message  = nl2br(htmlspecialchars(trim($data['message'] ?? '')));

/* ===== VALIDATION ===== */
if ($name === '' || strlen($name) > 50) {
    echo json_encode(["status" => "error", "message" => "Invalid name"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit;
}

if (!preg_match('/^[0-9]{8,13}$/', $phone)) {
    echo json_encode(["status" => "error", "message" => "Invalid phone"]);
    exit;
}

if ($location === '' || strlen($location) > 100) {
    echo json_encode(["status" => "error", "message" => "Invalid location"]);
    exit;
}

if ($service === '') {
    echo json_encode(["status" => "error", "message" => "Service required"]);
    exit;
}

if ($message === '') {
    echo json_encode(["status" => "error", "message" => "Message required"]);
    exit;
}

/* Create mail */
$mail = new PHPMailer(true);

try {
    /* ❌ NO SMTP — straight server */
    // $mail->isSMTP();  ❌ removed

    /* Sender */
    $mail->setFrom("info@g-netsolutions.in", "Website Enquiry");

    /* Receiver */
    $mail->addAddress("gnet.cbe@gmail.com");

    /* Reply To */
    $mail->addReplyTo($email, $name);

    /* Mail Content */
    $mail->isHTML(true);
    $mail->Subject = "New Website Enquiry – g-netsolutions.in";

    /* ===== STYLED BODY ===== */
    $mail->Body = "
<!DOCTYPE html>
<html>
<body style='margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;'>

<table width='100%' cellpadding='0' cellspacing='0' style='padding:30px 0;'>
<tr><td align='center'>

<table width='600' cellpadding='0' cellspacing='0'
style='background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);'>

<tr>
<td style='background:linear-gradient(135deg,#2563eb,#9333ea);padding:22px;color:#fff;text-align:center;'>
<h2 style='margin:0;font-size:22px;'>New Website Enquiry</h2>
<p style='margin:6px 0 0;font-size:14px;'>g-netsolutions.in</p>
</td>
</tr>

<tr>
<td style='padding:26px;'>

<table width='100%' cellpadding='6' style='font-size:15px;color:#333;'>
<tr><td width='35%'><b>Name</b></td><td>{$name}</td></tr>
<tr><td><b>Email</b></td><td><a href='mailto:{$email}'>{$email}</a></td></tr>
<tr><td><b>Phone</b></td><td>{$phone}</td></tr>
<tr><td><b>Location</b></td><td>{$location}</td></tr>
<tr><td><b>Service</b></td><td>{$service}</td></tr>
</table>

<div style='margin-top:20px;padding:14px;background:#f8fafc;border-radius:8px;'>
<p style='margin:0 0 6px;font-weight:bold;'>Message</p>
<p style='margin:0;line-height:1.6;'>{$message}</p>
</div>

</td>
</tr>

<tr>
<td style='background:#f1f5f9;padding:12px;text-align:center;font-size:13px;color:#555;'>
Sent from <b>www.g-netsolutions.in</b>
</td>
</tr>

</table>

</td></tr>
</table>

</body>
</html>
";

    $mail->send();
    echo json_encode(["status" => "success"]);

} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Mail failed"]);
}
