// Update the year in the footer automatically
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const now = new Date();
  yearSpan.textContent = now.getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Only handle internal links
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
        // close mobile menu after click
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) navToggle.checked = false;
      }
    });
  });

  // Highlight nav items when sections are in view using IntersectionObserver
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-menu li a');
  const observerOptions = {
    threshold: 0.6
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href').slice(1) === id);
        });
      }
    });
  }, observerOptions);
  sections.forEach(section => {
    observer.observe(section);
  });
});