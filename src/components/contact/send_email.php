<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'a1125189291@gmail.com';
  $subject = 'New message from ' . $name;
  $body = "From: $name\nEmail: $email\n\n$message";

  if (mail($to, $subject, $body)) {
    http_response_code(200);
    echo 'Email sent successfully!';
  } else {
    http_response_code(500);
    echo 'An error occurred while sending the email.';
  }
?>