// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function() {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

const prevSlide = document.querySelector(".btn-prev");

// current slide counter
let prev = 0;
// maximum number of slides
let max = slides.length - 1;

// add event listener and navigation functionality
prevSlide.addEventListener("click", function() {
    // check if current slide is the last and reset current slide
    if (prev === 0) {
        prev == max;

    } else {
        prev--;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - prev)}%)`;
    });
});

var splide = new Splide('.splide', {
    perPage: 3,
    gap: '7rem',
    focus: 0,
    omitEnd: true,
});

splide.mount();