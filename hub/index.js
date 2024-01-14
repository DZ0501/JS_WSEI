const slider = document.getElementById("slider");
const slideLink = document.getElementById("slideLink");
const numSlides = 6;
let currentSlide = 0;
let autoSlideInterval;



function nextSlide() {
    currentSlide = (currentSlide + 1) % numSlides;
    updateActiveDot(currentSlide);
    updateSlideLink();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + numSlides) % numSlides;
    updateActiveDot(currentSlide);
    updateSlideLink();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateActiveDot(currentSlide);
    updateSlideLink();
}

function createDots() {
    const dotsContainer = document.getElementById("dots-container");
    for (let i = 0; i < numSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("slider-dot");
        dot.setAttribute("data-index", i);
        dot.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index"));
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    }
}

function updateActiveDot(currentSlide) {
    const dots = document.getElementsByClassName("slider-dot");
    for (let i = 0; i < dots.length; i++) {
        if (i === currentSlide) {
            dots[i].classList.add("active");
        } else {
            dots[i].classList.remove("active");
        }
    }
}

function autoSlide() {
    nextSlide();
}

function toggleAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    } else {
        autoSlideInterval = setInterval(autoSlide, 1500);
    }
}

function updateSlideLink() {
    slideLink.href = `/lab_${currentSlide + 1}`;
    slideLink.innerText = `lab_${currentSlide + 1}`;
}

createDots();
updateActiveDot(currentSlide);
toggleAutoSlide();

