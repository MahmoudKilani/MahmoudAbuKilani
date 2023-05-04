<?php
if(isset($_POST['submit'])){
    require_once "vendor/autoload.php"; // Path to the Composer autoloader

    $to = "recipient@example.com"; // Recipient email address
    $subject = "New message from your website";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Configure the SMTP connection
    $transport = (new Swift_SmtpTransport('smtp.gmail.com', 465, 'ssl'))
        ->setUsername('mahmoudahmedkilani@gmail.com') // Your Gmail email address
        ->setPassword('7A\iRT&=czd*&*0[x]Io<?Vx1$$'); // Your Gmail password

    // Create the Mailer using the SMTP connection
    $mailer = new Swift_Mailer($transport);

    // Create the message
    $message = (new Swift_Message($subject))
        ->setFrom([$email => $name])
        ->setTo([$to])
        ->setBody($message);

    // Send the message
    if($mailer->send($message)){
        // Show success message popup
        echo '<div class="popup success">Thank you for contacting us, we will get back to you soon!</div>';
    } else {
        // Show error message popup
        echo '<div class="popup error">Sorry, an error occurred. Please try again later.</div>';
    }
}
?>
