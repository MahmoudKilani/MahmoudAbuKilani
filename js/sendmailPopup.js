// Function to show the email popup
function showPopup(message, success) {
    var overlay = document.createElement('div');
    overlay.className = 'email-popup-overlay';

    var popup = document.createElement('div');
    popup.className = 'email-popup' + (success ? ' success' : ' error');

    var icon = document.createElement('i');
    icon.className = success ? 'uil uil-check-circle' : 'uil uil-exclamation-octagon';

    var messageHeading = document.createElement('h1');
    messageHeading.textContent = success ? 'Sent Successfully' : 'Error Sending';

    var messageText = document.createElement('p');
    messageText.textContent = message;

    var closeButton = document.createElement('span');
    closeButton.className = 'close-icon';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    popup.appendChild(icon);
    popup.appendChild(messageHeading);
    popup.appendChild(messageText);
    popup.appendChild(closeButton);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}


// Function to close the popup
function closePopup() {
    var overlay = document.querySelector('.email-popup-overlay');
    if (overlay) {
        var popup = overlay.querySelector('.email-popup');
        if (popup) {
            popup.style.opacity = '0';
            popup.style.transform = 'translateY(20px)';
            setTimeout(function() {
                document.body.removeChild(overlay);
            }, 300);
        }
    }
}

// Function to send the email using AJAX
function sendEmail(name, email, message) {
    var xhr = new XMLHttpRequest();
    var url = 'https://mahmoudkilani.000webhostapp.com/php/send-email.php'; // Replace with your correct PHP file URL
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
document.getElementById('contact-form').addEventListener('submit', handleSubmit);// Function to show the email popup

function showPopup(message, success) {
    var overlay = document.createElement('div');
    overlay.className = 'email-popup-overlay';

    var popup = document.createElement('div');
    popup.className = 'email-popup' + (success ? ' success' : ' error');

    var icon = document.createElement('i');
    icon.className = success ? 'uil uil-check-circle' : 'uil uil-exclamation-octagon';

    var messageHeading = document.createElement('h1');
    messageHeading.textContent = success ? 'Sent Successfully' : 'Error Sending';

    var messageText = document.createElement('p');
    messageText.textContent = message;

    var closeButton = document.createElement('span');
    closeButton.className = 'close-icon';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    popup.appendChild(icon);
    popup.appendChild(messageHeading);
    popup.appendChild(messageText);
    popup.appendChild(closeButton);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
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
