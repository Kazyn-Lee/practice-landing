// Mobile Navigation Toggle
const navToggle = document.querySelector('.mobile-nav-toggle');
const header = document.querySelector('#main-header');

navToggle.addEventListener('click', () => {
    header.classList.toggle('mobile-nav-active');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !isExpanded);
});

// Add active class to navigation links on scroll (basic implementation)
const navLinks = document.querySelectorAll('#main-header nav ul li a');

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (!section) return; // Skip if section doesn't exist

        if (
            section.offsetTop <= fromTop + 100 && // Add a buffer
            section.offsetTop + section.offsetHeight > fromTop + 100
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Animate on Scroll - REMOVED
