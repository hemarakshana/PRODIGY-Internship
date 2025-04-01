// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to detect scroll and add/remove class
window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};