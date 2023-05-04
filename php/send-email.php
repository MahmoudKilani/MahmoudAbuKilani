<?php
if(isset($_POST['submit'])){
    $to = "mahmoudahmedkilani@gmail.com";
    $subject = "New message from your website";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
      // Get IP address of the user
    $ip = $_SERVER['REMOTE_ADDR'];
    
    // Make a request to a geolocation API to get the location data
    $url = "http://ip-api.com/json/$ip";
    $data = file_get_contents($url);
    $location = json_decode($data);
    
    // Format the location data into a string
    $location_str = $location->city . ', ' . $location->regionName . ', ' . $location->country;
    
    // Add the location to the message
    $message .= "\n\nLocation: $location_str";
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
