const downloadCvBtn = document.getElementById("download-cv-btn");
const popup = document.getElementById("popup");
const passwordInput = document.getElementById("password-input");
const submitPasswordBtn = document.getElementById("submit-password-btn");
const closePopupBtn = document.getElementById("close-popup-btn");
const passwordErrorMessage = document.getElementById("password-error-message");

// Hide the popup element by default using CSS
popup.style.display = "none";

downloadCvBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
    passwordInput.value = "";
    passwordErrorMessage.style.display = "none";
});

submitPasswordBtn.addEventListener("click", () => {
    const password = passwordInput.value;

    if (password === "123") {
        // Open the Google Drive link
        window.location.href = "https://drive.google.com/file/d/1uE0ud3y2vOgLjqMlovL9uQgJRyk-FuaK/view?usp=sharing";

        // Close the popup
        popup.style.display = "none";

        // Clear the password input field
        passwordInput.value = "";
        passwordErrorMessage.style.display = "none";
    } else {
        passwordErrorMessage.style.display = "block";
    }
});
