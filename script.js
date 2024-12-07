// Select the hamburger menu and navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav__link');

// Toggle menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
