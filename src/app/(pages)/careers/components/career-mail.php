<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

/* Silent OPTIONS */
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

/* 🔒 Silent CAPTCHA */
if (!empty($_POST['company_website'])) {
    exit;
}

/* Sanitize */
$name         = htmlspecialchars(trim($_POST['name'] ?? ''));
$email        = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone        = htmlspecialchars(trim($_POST['phone'] ?? ''));
$position     = htmlspecialchars(trim($_POST['position'] ?? ''));
$qualification= htmlspecialchars(trim($_POST['qualification'] ?? ''));
$experience   = htmlspecialchars(trim($_POST['experience'] ?? ''));
$location     = htmlspecialchars(trim($_POST['location'] ?? ''));
$message      = nl2br(htmlspecialchars(trim($_POST['message'] ?? '')));

/* Validation */
if (
    !$name || !$email || !$phone || !$position || !$qualification || !$experience
) {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit;
}

/* Resume */
if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== 0) {
    echo json_encode(["status" => "error", "message" => "Resume upload failed"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    /* Force mail() */
    $mail->isMail();

    $mail->setFrom('no-reply@g-netsolutions.in', 'Career Application');
    $mail->Sender = 'no-reply@g-netsolutions.in';

    $mail->addAddress('gnet.cbe@gmail.com');
    $mail->addReplyTo($email, $name);

    /* Attachment */
    $mail->addAttachment(
        $_FILES['resume']['tmp_name'],
        $_FILES['resume']['name']
    );

    $mail->isHTML(true);
    $mail->Subject = "New Career Application – {$position}";

    /* Styled Mail */
    $mail->Body = "
<!DOCTYPE html>
<html>
<body style='background:#f4f6f8;font-family:Arial;padding:30px;'>
<table width='600' align='center' style='background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.08);'>
<tr>
<td style='background:#2563eb;color:#fff;padding:22px;text-align:center;'>
<h2 style='margin:0;'>Career Application</h2>
<p style='margin:6px 0 0;'>g-netsolutions.in</p>
</td>
</tr>
<tr>
<td style='padding:26px;'>
<table width='100%' cellpadding='6'>
<tr><td><b>Name</b></td><td>{$name}</td></tr>
<tr><td><b>Email</b></td><td>{$email}</td></tr>
<tr><td><b>Phone</b></td><td>{$phone}</td></tr>
<tr><td><b>Position</b></td><td>{$position}</td></tr>
<tr><td><b>Qualification</b></td><td>{$qualification}</td></tr>
<tr><td><b>Experience</b></td><td>{$experience}</td></tr>
<tr><td><b>Location</b></td><td>{$location}</td></tr>
</table>

<div style='margin-top:18px;padding:14px;background:#f8fafc;border-radius:8px;'>
<b>Message</b>
<p>{$message}</p>
</div>
</td>
</tr>
<tr>
<td style='background:#f1f5f9;padding:12px;text-align:center;font-size:13px;'>
Resume attached with this email
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
