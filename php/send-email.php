if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Call the external PHP file to send the email
    $result = include('http://example.com/send-email.php?name=' . $name . '&email=' . $email . '&message=' . $message);
    
    if($result){
        // Show success message popup
        echo '<div class="popup success">Thank you for contacting us, we will get back to you soon!</div>';
    } else {
        // Show error message popup
        echo '<div class="popup error">Sorry, an error occurred. Please try again later.</div>';
    }
}
