const slider_first = document.querySelector('.slider-first');
const slider_second = document.querySelector('.slider-second');
const slider_third = document.querySelector('.slider-third');
const btn = document.querySelector('#btt-button');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

btn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


console.clear();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

setTimeout(function () {
    checkboxes[0].setAttribute('checked', true);
}, 200);

// setTimeout(function () {
//     checkboxes[1].setAttribute('checked', true);
// }, 1000);

// setTimeout(function () {
//     checkboxes[2].setAttribute('checked', true);
// }, 1800);

// setTimeout(function () {
//     checkboxes[3].setAttribute('checked', true);
// }, 2600);
