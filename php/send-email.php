<?php
if(isset($_POST['submit'])){
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/SMTP.php';

    $to = "mahmoudahmedkilani@gmail.com"; // Recipient email address
    $subject = "New message from your website";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Create the PHPMailer object
    $mail = new PHPMailer(true);

    try {
        // Configure the SMTP connection
        $mail->isSMTP();                                            
        $mail->Host       = 'smtp.gmail.com';                     
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = 'mahmoudahmedkilani@gmail.com';                     
        $mail->Password   = '7A\iRT&=czd*&*0[x]Io<?Vx1$$';                               
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;           
        $mail->Port       = 465;                                    

        // Set the message properties
        $mail->setFrom($email, $name);
        $mail->addAddress($to);
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = $message;

        // Send the message
        $mail->send();
        // Show success message popup
        echo '<div class="popup success">Thank you for contacting us, we will get back to you soon!</div>';
    } catch (Exception $e) {
        // Show error message popup
        echo '<div class="popup error">Sorry, an error occurred. Please try again later.</div>';
    }
}
?>

