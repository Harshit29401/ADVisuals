const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        hideAllSlides();
        hideAllDots();

        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
        dots[index].classList.add('active');
    });
});

function hideAllSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

function hideAllDots() {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
}
