const introBgEl = document.querySelector('.bg-intro');
const phoneIntroEl = document.querySelector('.phones-intro');


window.addEventListener('load', changeIntro);
window.addEventListener('resize', changeIntro);


const menuIconEl = document.querySelector('.menu-icon');
const headerMenuEl = document.querySelector('.header__menu');
const menuOverlay = document.querySelector('.menu-overlay');

menuIconEl.addEventListener('click', function (e) {
    if (menuIconEl.ariaExpanded == 'false') {
        headerMenuEl.style = 'display: block';
        menuIconEl.ariaExpanded = 'true';
        menuOverlay.style = 'display: block';
    }
    else {
        headerMenuEl.removeAttribute('style');
        menuIconEl.ariaExpanded = 'false';
        menuOverlay.removeAttribute('style');
    }

});

function changeIntro(e) {
    if (window.matchMedia('(max-width: 500px)').matches === true) {
        introBgEl.src = '/images/bg-intro-mobile.svg';
    }
    else if (window.matchMedia('(max-width: 500px)').matches == false) {
        introBgEl.src = '/images/bg-intro-desktop.svg'
    }
}