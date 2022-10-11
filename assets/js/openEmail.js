$(function () {
    const send = document.querySelector('#show-popup');
    const closeButton = document.querySelector('.pop-up .close-button');
    const popUp = document.querySelector('.pop-up ');
    const firstSlide = document.querySelector('.first_slide');
    send.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(firstSlide);
        firstSlide.classList.add('hide');
        popUp.classList.add('show');
    });
    closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        popUp.classList.remove('show');
        firstSlide.classList.remove('hide');
    });
})
