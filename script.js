// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon based on state
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
    } else {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
    }
});

// Close menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
    });
});

// Navbar Scroll Effect (Y2K update)
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000000';
        navbar.style.borderBottom = '2px solid #39ff14';
        navbar.style.boxShadow = '0 0 10px #39ff14';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.borderBottom = '2px solid #39ff14';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Trigger once on load
revealOnScroll();

// Image Modal Logic
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close-modal')[0];

// Select buttons that trigger the modal
// Specifically targeting the "RUN_program" buttons in the exhibition items
const runProgramBtns = document.querySelectorAll('.exhibition-item .btn-outline');

runProgramBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior

        // Find the image in the same container
        const parentItem = btn.closest('.exhibition-item');
        const img = parentItem.querySelector('.exh-image img');

        if (img) {
            modal.style.display = "block";
            modalImg.src = img.src;

            // Optional: Set caption from the title
            const title = parentItem.querySelector('h3').innerText;
            captionText.innerHTML = "DISPLAYING_FILE: " + title;
        }
    });
});

// Close functionality
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Close if clicked outside the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Generic clickable images (for commissions, samples, etc)
const clickableImages = document.querySelectorAll('.clickable-image');

clickableImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = img.src;

        // Optional caption
        captionText.innerHTML = "DISPLAYING_FILE: " + (img.alt || "IMAGE_ASSET");
    });
});
