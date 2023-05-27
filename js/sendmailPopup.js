// Function to show the email popup
function showPopup(message, success) {
    var overlay = document.getElementById('email-popup-overlay');
    var popup = document.getElementById('email-popup');
    var popupMessage = document.getElementById('popup-message');
    var closeButton = document.getElementById('close-icon');

    // Set the popup content
    popup.className = success ? 'success' : 'error';
    popupMessage.textContent = message;

    // Show the popup
    overlay.style.display = 'flex';

    // Close the popup when the close icon is clicked
    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
}

// Function to send the email using AJAX
function sendEmail(name, email, message) {
    var xhr = new XMLHttpRequest();
    var url = 'https://kilaniemails.000webhostapp.com/send-email.php'; // Replace with your correct PHP file URL
    var params = 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message);

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = xhr.responseText;
                // Display success or error message based on the response
                showPopup(response, response === 'success');
            } else {
                // Show error message if there was an issue with the AJAX request
                showPopup('Sorry, an error occurred. Please try again later.', false);
            }
        }
    };

    xhr.send(params);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform form validation
    if (name === '' || email === '' || message === '') {
        showPopup('Please fill in all fields.', false);
        return false;
    }

    // Send the email using AJAX
    sendEmail(name, email, message);

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    return false;
}

// Attach form submission event listener
document.getElementById('contact-form').addEventListener('submit', handleSubmit);