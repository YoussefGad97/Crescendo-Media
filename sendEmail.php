<?php
// Define the recipient email address where the form data should be sent
$to = "mryoussefaymangad@outlook.com";

// Get form fields and remove any unnecessary spaces
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$message = trim($_POST['message']);

// Validate form fields
if (!empty($name) && !empty($phone) && !empty($message)) {

    // Construct the email subject and body
    $subject = "New Contact Form Submission from $name";
    $body = "You have received a new message from the contact form on your website:\n\n";
    $body .= "Name: $name\n";
    $body .= "Phone: $phone\n";
    $body .= "Message: $message\n";

    // Set headers
    $headers = "From: no-reply@crescendomedia.com" . "\r\n" .
        "Reply-To: $name" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        echo "success";
    } else {
        // Failed to send email
        echo "error";
    }
} else {
    // Validation failed
    echo "invalid";
}
?>