// main.js – Small helper functions for Adrian Mauro's website

// Update copyright year dynamically
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Scroll-triggered animations using Intersection Observer
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    animatedEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all elements immediately if IntersectionObserver not supported
    animatedEls.forEach(el => el.classList.add('animated'));
  }
});

// Note: This file can be extended to add interactivity (e.g., mobile menu toggle).