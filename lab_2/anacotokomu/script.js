const slider = document.getElementById("slider");
const numSlides = slider.children.length;
const dotsButtons = document.querySelectorAll('.dots-button');
const prevButton = document.getElementById('prevButton');
const pauseButton = document.getElementById('pauseButton');
const nextButton = document.getElementById('nextButton');
let currentSlide = 0;
let animationIsPaused = false;

dotsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        goToSlide(index)
    })
});

prevButton.addEventListener('click', prevSlide);
pauseButton.addEventListener('click', pause);
nextButton.addEventListener('click', nextSlide);

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 50}vw)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % numSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + numSlides) % numSlides;
    updateSlider();
}

function autoSlide() {
    if (!animationIsPaused) {
        nextSlide();
    }
}

let interval = setInterval(autoSlide, 3000)

function goToSlide(slideindex) {
    currentSlide = slideindex;
    updateSlider();
}

function pause() {
    if (!animationIsPaused) {
        clearInterval(interval);
        animationIsPaused = true;
    } else {
        interval = setInterval(autoSlide, 3000);
        animationIsPaused = false;
    }
}

