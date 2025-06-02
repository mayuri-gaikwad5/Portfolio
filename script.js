// Toggle nav menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Add active class on link click
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navItems.forEach(item => item.classList.remove('active'));
    link.classList.add('active');

    // Close menu on mobile after clicking
    navLinks.classList.remove('active');
  });
});
