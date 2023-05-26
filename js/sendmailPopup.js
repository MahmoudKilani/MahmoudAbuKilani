// Function to show the email popup
function showPopup(message, success) {
    var overlay = document.createElement('div');
    overlay.className = 'email-popup-overlay';

    var popup = document.createElement('div');
    popup.className = 'email-popup' + (success ? ' success' : ' error');

    var checkIcon = document.createElement('i');
    checkIcon.className = 'uil uil-check-circle';

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

    popup.appendChild(checkIcon);
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

    // Simulate sending the email
    setTimeout(function() {
        // Display success message
        showPopup('Thank you for contacting us! We appreciate your interest and will get back to you soon.', true);

        // Reset form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }, 2000);

    return false;
}

// Attach form submission event listener
document.getElementById('contact-form').addEventListener('submit', handleSubmit);