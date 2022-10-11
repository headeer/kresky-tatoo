$(function () {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const about = document.querySelector('.about_page');
    const show = document.querySelector('.show-case');
    menu.addEventListener('click', () => {
        if (nav.classList.contains('collapsed')) {
            nav.classList.remove('collapsed');
            if (about || show) {
                header.classList.remove('scroll-down');
            }
        } else {
            nav.classList.add('collapsed');
            if (about || show) {
                header.classList.add('scroll-down');
            }
        }

    });
});