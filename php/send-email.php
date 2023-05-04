<?php
if(isset($_POST['submit'])){
    $to = "mahmoudahmedkilani@gmail.com";
    $subject = "New message from your website";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    if(mail($to, $subject, $message, $headers)){
        // Show success message popup
        echo '<div class="popup success">Thank you for contacting us, we will get back to you soon!</div>';
    } else {
        // Show error message popup
        echo '<div class="popup error">Sorry, an error occurred. Please try again later.</div>';
    }
}
?>
