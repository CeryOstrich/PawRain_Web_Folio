// Initial fade in
document.addEventListener("DOMContentLoaded", () => {
    // Modal Logic
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close-modal')[0];

    const galleryImages = document.querySelectorAll('.gallery-item img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = "VIEWING: " + img.getAttribute('alt');
        });
    });

    // Close functionality
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

