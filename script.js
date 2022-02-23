const sliderContainer = document.querySelector('.mainContainer');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.arrowbtn-up');
const downButton = document.querySelector('.arrowbtn-down');
const slidesLength = slideRight.querySelectorAll('div').length;

const navHome = document.getElementById('navHome');
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navSkills = document.getElementById('navSkills');
const navFront = document.getElementById('navFront');
const navFull = document.getElementById('navFull');
const navMobile = document.getElementById('navMobile');
const navResume = document.getElementById('navResume');
const navContact = document.getElementById('navContact');
const navArray = document.querySelectorAll(".navItem");

// toggle menu active
const menuTbn = document.querySelector(".menu-btn");
const menuElement = document.querySelector(".navigation");
function closeMenu() {
    menuElement.classList.remove("active");
}
menuTbn.addEventListener('click', () => toggleActiveMenu());
function toggleActiveMenu() {
    menuElement.classList.toggle("active");
}

// const link = document.querySelector('.left-slide');
// link.addEventListener('mouseup', () => changeSlide('up'));
// upButton.classList.add("hide");

// document.addEventListener('wheel', function (event) {
//     if (event.deltaY < 0) {
//         changeSlide('down');
//     }
//     else if (event.deltaY > 0) {
//         changeSlide('up');
//     }
// });
let activeSlideIndex = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
upButton.addEventListener('click', () => changeSlide('down'));
downButton.addEventListener('click', () => changeSlide('up'));
document.addEventListener('keydown', (e) => e.keyCode === 40 && changeSlide('up'));
document.addEventListener('keydown', (e) => e.keyCode === 38 && changeSlide('down'));
document.addEventListener('keydown', (e) => e.keyCode === 27 && changeSlide('top'));

// გადამისამართება მენიუთი
navHome.addEventListener('click', () => { changeSlide('navHome'), closeMenu(); });
navAbout.addEventListener('click', () => { changeSlide('navAbout'); closeMenu(); });
navServices.addEventListener('click', () => { changeSlide('navServices'); closeMenu(); });
navSkills.addEventListener('click', () => { changeSlide('navSkills'); closeMenu(); });
navFront.addEventListener('click', () => { changeSlide('navFront'); closeMenu(); });
navFull.addEventListener('click', () => { changeSlide('navFull'); closeMenu(); });
navMobile.addEventListener('click', () => { changeSlide('navMobile'); closeMenu(); });
navResume.addEventListener('click', () => { changeSlide('navResume'); closeMenu(); });
navContact.addEventListener('click', () => { changeSlide('navContact'); closeMenu(); });


function hide(element) {
    element.classList.add("hide");
}
function show(element) {
    element.classList.remove("hide");
}
hide(upButton);

navHome.classList.add("active");

const changeSlide = (direction) => {
    for (var i = 0; i < navArray.length; i++) {
        navArray[i].classList.remove("active");
    }
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        show(upButton);
        if (activeSlideIndex === 0) {
            hide(upButton);
        }
        if (activeSlideIndex === slidesLength - 1) {
            hide(downButton);
        }
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex === 0) {
            hide(upButton);
        }
        if (activeSlideIndex < 0) {
            activeSlideIndex = 0;
        }
        if (activeSlideIndex < slidesLength - 1) {
            show(downButton);
        }
    } else if (direction === 'top') {
        activeSlideIndex = 0;
    } else if (direction === 'navHome') {
        hide(upButton);
        show(downButton);
        navHome.classList.add("active");
        activeSlideIndex = 0;
    }
    else if (direction === 'navAbout') {
        show(upButton);
        show(downButton);
        navAbout.classList.add("active");
        activeSlideIndex = 1;
    }
    else if (direction === 'navServices') {
        show(upButton);
        show(downButton);
        navServices.classList.add("active");
        activeSlideIndex = 2;
    }
    else if (direction === 'navSkills') {
        show(upButton);
        show(downButton);
        navSkills.classList.add("active");
        activeSlideIndex = 3;
    }
    else if (direction === 'navFront') {
        show(upButton);
        show(downButton);
        navFront.classList.add("active");
        activeSlideIndex = 4;
    }
    else if (direction === 'navFull') {
        show(upButton);
        show(downButton);
        navFull.classList.add("active");
        activeSlideIndex = 5;
    }
    else if (direction === 'navMobile') {
        show(upButton);
        show(downButton);
        navMobile.classList.add("active");
        activeSlideIndex = 6;
    }
    else if (direction === 'navResume') {
        show(upButton);
        show(downButton);
        navResume.classList.add("active");
        activeSlideIndex = 7;
    }
    else if (direction === 'navContact') {
        show(upButton);
        hide(downButton);
        navContact.classList.add("active");
        activeSlideIndex = 8;
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};





