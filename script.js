// 1. Sticky navbar — turns dark on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// 2. Hero text fade-in + slide-up on page load
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('heroTitle').classList.add('visible'), 150);
    setTimeout(() => document.getElementById('heroSub').classList.add('visible'), 350);
});

// 3. Smooth scroll for ALL anchor links (buttons + navbar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});