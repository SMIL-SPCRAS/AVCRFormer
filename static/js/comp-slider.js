const btn = document.querySelector('#btt-button');
const bttArr = document.querySelector('#btt-arr');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');
const showMore = document.querySelectorAll('.show-more__table');
const tableRows = Array.from(document.querySelectorAll('.table__row'));

// Появление стрелочки навверх в середине страницы
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

btn.addEventListener('mouseover', function (e) {
    bttArr.classList.add("btt-hover");
});

btn.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    bttArr.classList.remove('btt-hover');
});

btn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

let sliderCount = 0;
let sliderWidth;

// адаптивность
window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderItems.length + 'px';
    sliderItems.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}

showSlide();

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderItems.length) sliderCount = 0;

    if (sliderCount == 0) {
        hideTableRows(tableRows[1], 'none');
    } else {
        showMore[1].innerHTML = showMore[0].innerHTML
    }
    rollSlider();
    thisSlide(sliderCount);
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderItems.length - 1;

    if (sliderCount == 0) {
        hideTableRows(tableRows[1], 'none');
    } else {
        showMore[0].innerHTML = showMore[1].innerHTML;
    }

    rollSlider();
    thisSlide(sliderCount);
}

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot')
}

function hideTableRows(element, display) {
    if (getComputedStyle(tableRows[1]).display != display) {
        tableRows.forEach((item) => item.classList.add('hidden'));
        showMore.forEach((btn) => btn.innerHTML = 'Show more');
        document.querySelector('.data-section').scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }
}

// клик на dots
sliderDots.forEach((dot,index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        if (index == 0) {
            hideTableRows(tableRows[1], 'none');
        } else {
            showMore[0].innerHTML = showMore[1].innerHTML;
        }
        rollSlider();
        thisSlide(sliderCount);
    })
})

showMore.forEach( btn => {
    btn.addEventListener('click', (e) => {

        if (btn.innerHTML == "Show more") {
            tableRows.forEach((item) => item.classList.remove('hidden'));
            // showMore.classList.add('hidden');
            btn.innerHTML = 'Hide';
            document.querySelector('.data-section').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        } else {
            tableRows.forEach((item) => item.classList.add('hidden'));
            btn.innerHTML = 'Show more';
            document.querySelector('.scroll_to').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    })
})

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
