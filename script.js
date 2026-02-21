// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });
});

// Navigation & Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Hamburger animation
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu on click
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTotal / heightTotal) * 100;
    
    document.querySelector('.scroll-progress').style.width = scrollPercentage + '%';
});

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// Project Details Toggle
function toggleProject(id, btn) {
    const details = document.getElementById(id);
    const isExpanded = details.classList.contains('active');
    
    // Close all other details first (optional, for accordion effect)
    // document.querySelectorAll('.project-details').forEach(d => d.classList.remove('active'));
    // document.querySelectorAll('.project-toggle').forEach(b => b.classList.remove('active'));
    // document.querySelectorAll('.project-toggle').forEach(b => b.innerHTML = 'View Details <span class="arrow">↓</span>');

    if (isExpanded) {
        details.classList.remove('active');
        btn.classList.remove('active');
        btn.innerHTML = 'View Details <span class="arrow">↓</span>';
    } else {
        details.classList.add('active');
        btn.classList.add('active');
        btn.innerHTML = 'Hide Details <span class="arrow">↓</span>';
    }
}

// Navbar background transparency on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(17, 24, 39, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
