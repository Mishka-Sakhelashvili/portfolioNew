const sliderContainer = document.querySelector('.mainContainer');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.arrowbtn-up');
const downButton = document.querySelector('.arrowbtn-down');
const slidesLength = slideRight.querySelectorAll('div').length;

// toggle menu active
const menuTbn = document.querySelector(".menu-btn");
const menuElement = document.querySelector(".navigation");
menuTbn.addEventListener('click', () => toggleActiveMenu());
function toggleActiveMenu() {
    menuElement.classList.toggle("active");
}

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// const link = document.querySelector('.left-slide');
// link.addEventListener('mouseup', () => changeSlide('up'));



upButton.addEventListener('click', () => changeSlide('down'));
downButton.addEventListener('click', () => changeSlide('up'));
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



