var splide = new Splide('.splide', {
    perPage: 3,
    gap: '7rem',
    focus: 0,
    omitEnd: true,
});

splide.mount();

let slideIndex = 0;
slideshow();

function slideshow() {
    let slides = document.getElementsByClassName('slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(slideshow, 2000);
}