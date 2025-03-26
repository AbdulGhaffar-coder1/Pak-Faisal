// navbar.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-menu");
    const navLinks = document.querySelector("header nav");

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
document.querySelectorAll(".book-now-btn").forEach(button => {
    button.addEventListener("click", function () {
        const phoneNumber = "009203042440396"; // Replace with the owner's WhatsApp number
        const message = "Hello, I am interested in booking your services."; // Predefined message
        const encodedMessage = encodeURIComponent(message);

        // Construct the WhatsApp link
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open the WhatsApp chat in a new tab
        window.open(whatsappURL, "_blank");
    });
});


