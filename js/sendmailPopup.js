document.querySelector('.close-icon').addEventListener('click', function() {
    document.getElementById('email-popup').style.display = 'none';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform form validation
    if (name === '' || email === '' || message === '') {
        showPopup('Please fill in all fields.', 'error');
        return false;
    }

    // Send the email using AJAX
    var xhr = new XMLHttpRequest();
    var url = 'https://kilaniemails.000webhostapp.com/send-email.php'; // Replace with the correct URL to your PHP file
    var params = 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message);

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === 'success') {
                    showPopup('Message sent successfully.', 'success');
                } else {
                    showPopup('Message sent successfully.', 'error');
                }
            } else {
                showPopup('Thank you for your message. We will get back to you soon.', 'error');
            }
        }
    };

    xhr.send(params);

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    return false;
});

function showPopup(message, status) {
    var popup = document.getElementById('email-popup');
    var popupIcon = popup.querySelector('.popup-icon');
    var popupHeading = popup.querySelector('.popup-heading');
    var popupMessage = popup.querySelector('.popup-message');

    popup.classList.remove('popup-success', 'popup-error');
    popupIcon.classList.remove('icon-check', 'icon-exclamation');

    if (status === 'success') {
        popup.classList.add('popup-success');
        popupIcon.classList.add('icon-exclamation');
        popupHeading.textContent = 'Message Sent Successfully';
    } else {
        popup.classList.add('popup-error');
        popupIcon.classList.add('icon-check');
        popupHeading.textContent = 'Message Sent Successfully';
    }

    popupMessage.textContent = message;
    popup.style.display = 'flex';
}
