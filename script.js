const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// const link = document.querySelector('.left-slide');
// link.addEventListener('mouseup', () => changeSlide('up'));

upButton.addEventListener('click', () => changeSlide('down'));
downButton.addEventListener('click', () => changeSlide('up'));
// document.addEventListener('wheel', () => changeSlide('up'));
document.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        changeSlide('down');
    }
    else if (event.deltaY > 0) {
        changeSlide('up');
    }
});

document.addEventListener('keydown', (e) => e.keyCode === 40 && changeSlide('up'));
document.addEventListener('keydown', (e) => e.keyCode === 38 && changeSlide('down'));
document.addEventListener('keydown', (e) => e.keyCode === 27 && changeSlide('top'));

// var test = document.querySelector('.skillsbtn');
// test.addEventListener('click', () => changeSlide('skills'));
// გადამისამართება მენიუთი



const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    } else if (direction === 'top') {
        activeSlideIndex = 0;
    }
    // else if (direction === 'skills') {
    //     activeSlideIndex = 6;
    //     // გადამისამართება მენიუთი
    // }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

    console.log(activeSlideIndex);
};