const slider = document.getElementById("slider");
const slides = slider.children;
const numSlides = slides.length;
let currentSlide = 0;
let autoSlideInterval;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % numSlides;
  updateSlider();
  updateActiveDot(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + numSlides) % numSlides;
  updateSlider();
  updateActiveDot(currentSlide);
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
  updateActiveDot(currentSlide);
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
    autoSlideInterval = setInterval(autoSlide, 2500);
  }
}

createDots();
toggleAutoSlide(); 
