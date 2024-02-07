let slideIndex = 1;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const slideTexts = document.querySelectorAll('.slide-text');

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide, index) => {
        if (index === slideIndex - 1) {
            slide.style.transform = `translateY(-${index * 100}%)`;
            slideTexts[index].style.display = 'block';
        } else {
            slideTexts[index].style.display = 'none';
        }
    });
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

showSlides();
