document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.sidebar-image');

    function animateImage(image) {
        if (image.getBoundingClientRect().top < window.innerHeight) {
            image.style.animation = 'fadein 2s';
        }
    }

    images.forEach(animateImage);

    window.addEventListener('scroll', function() {
        images.forEach(animateImage);
    });

    loadContent('attractions.html');
});

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
}
