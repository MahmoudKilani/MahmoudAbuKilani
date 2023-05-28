document.querySelector('.close-icon').addEventListener('click', function() {
    document.getElementById('email-popup').style.display = 'none';
});

function showPopup(message, success) {
    var popup = document.getElementById('email-popup');
    var popupIcon = popup.querySelector('.popup-icon');
    var popupHeading = popup.querySelector('.popup-heading');
    var popupMessage = popup.querySelector('.popup-message');

    popup.classList.remove('popup-success', 'popup-error');
    popupIcon.classList.remove('uil-check-circle', 'uil-exclamation-octagon');

    if (success) {
        popup.classList.add('popup-success');
        popupIcon.classList.add('uil-check-circle');
        popupHeading.textContent = 'Sent Successfully';
    } else {
        popup.classList.add('popup-error');
        popupIcon.classList.add('uil-exclamation-octagon');
        popupHeading.textContent = 'Error Sending';
    }

    popupMessage.textContent = message;
    popup.style.display = 'flex';
}
