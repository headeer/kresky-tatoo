$(function () {

    const arrow_next = document.querySelector('.grey-container .arrow-top');
    const arrow_previous = document.querySelector('.grey-container .arrow-bottom');
    const slides = document.querySelectorAll('.glide__slide');
    const slider_num = document.querySelector('.slider-num h5');
    const first_slide = document.querySelector('.first_slide');

    createSquare(first_slide);
    if (arrow_next) {

        arrow_next.addEventListener('click', (a) => {
            const activeSlide = document.querySelector('.active');
            $('.carousel').carousel('next');

            if (activeSlide.classList.contains('second_slide')) {
                slider_num.innerHTML = '0' + 3;
            } else if (activeSlide.classList.contains('first_slide')) {
                slider_num.innerHTML = '0' + 2;
            } else {
                slider_num.innerHTML = '0' + 1;
            }
            if (!activeSlide.nextElementSibling) {
                createSquare(first_slide);
            } else {
                createSquare(activeSlide.nextElementSibling);
            }
        });
    }
    if (arrow_previous) {
        arrow_previous.addEventListener('click', () => {
            const activeSlide = document.querySelector('.active');
            $('.carousel').carousel('prev');
            if (activeSlide.classList.contains('second_slide')) {
                slider_num.innerHTML = '0' + 1;
            } else if (activeSlide.classList.contains('first_slide')) {
                slider_num.innerHTML = '0' + 3;
            } else {
                slider_num.innerHTML = '0' + 2;
            }
            if (!activeSlide.previousElementSibling) {
                const last_slide = document.querySelector('.third_slide');
                createSquare(last_slide);
            } else {
                createSquare(activeSlide.previousElementSibling);
            }
        });
    }
    function createSquare(el) {
        let oldScroll = 0;
        let isHigher;
        const visibleSecondSlide = document.querySelector('.visible');
        if (visibleSecondSlide) {
            visibleSecondSlide.classList.remove('visible');
        }

        const element = document.createElement("div");
        element.classList.add('moon_square');

        if (!el.children[1].classList.contains('moon_square')) {
            el.appendChild(element);
            element.appendChild(el.childNodes[3]);
            element.childNodes[0].classList.add('visible');
            window.addEventListener('deviceorientation', (e) => {
                const x = Math.round(e.beta);
                const y = Math.round(e.gamma);
                const z = Math.round(e.alpha);
                element.style.transform = `translateY(${x * 10}%)`;
                element.childNodes[0].style.transform = `translateY(-${x * 10}%)`
            });
            if ($(window).width() > 768) {
                $(el).on('mousemove', _.throttle(function (e) {
                    const bodyWidth = document.body.offsetWidth;
                    isHigher = e.pageX > oldScroll;
                    oldScroll = e.pageX;
                    setTimeout(() => {
                        if (e.pageX > (180 + (bodyWidth / 16)) && e.pageX < (bodyWidth - (180 + (bodyWidth / 16)))) {
                            element.style.transition = 'none'
                            element.childNodes[0].style.transform = `translateX(-${(e.pageX - 180 - (bodyWidth / 16)) + 'px'})`;
                            // element.style.width = (360 * 0.33 + 360) + 'px';
                            element.style.left = (e.pageX - 180 - (bodyWidth / 16)) + 'px';;
                            if (isHigher) {
                                // element.style.transition = 'all 0.2s ease-in'
                                // element.style.transform = `translateX(-${360 * 0.33}px)`;

                            } else {
                                element.style.transform = `translateX(0px)`;
                            }

                        } else if (e.pageX > (180 + (bodyWidth / 16))) {
                            element.childNodes[0].style.transform = `translateX(-${bodyWidth - 360 - (2 * (bodyWidth / 16)) + 'px'})`;
                            element.style.left = bodyWidth - 360 - (2 * (bodyWidth / 16)) + 'px';
                        } else {
                            element.style.left = '0px';
                            element.childNodes[0].style.transform = `translateX(0px)`;
                        }
                        if (timeout !== undefined) {
                            window.clearTimeout(timeout);
                        }
                        timeout = window.setTimeout(function () {
                            // trigger the new event on event.target, so that it can bubble appropriately
                            $(e.target).trigger('mousemoveend');
                        }, 100);
                    }, 140);

                }, 20));
            }
            $(el).on('mousemoveend', function () {
                const bodyWidth = document.body.offsetWidth;
                // element.style.transform = `translateX(0px)`;
                // element.style.width = '360px';
                element.style.transition = 'all 0.2s ease-in';
            });
        } else {
            el.children[1].childNodes[0].classList.add('visible');
        }
    }
    var timeout;

})