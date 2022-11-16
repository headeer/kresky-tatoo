$(function () {
    const menu = document.querySelector('.menu-mobile');
    const toggle = document.querySelector('nav .menu');
    const closeToggle = document.querySelector('.menu-mobile .exit');
    closeToggle.addEventListener('click', () => {
        if (menu.classList.contains('collapsed')) {
            menu.classList.remove('collapsed');
        }
    });
    toggle.addEventListener('click', () => {
        menu.classList.add('collapsed');
    });

});
