$(function () {
    //define pieces
    const underneath = document.querySelector('.moon_square .underneath');
    const underneath_2 = document.querySelector('.moon_square-2 .underneath');
    const underneath_3 = document.querySelector('.moon_square-3 .underneath');
    const underneath_4 = document.querySelector('.moon_square-4 .underneath');
    const underneath_5 = document.querySelector('.moon_square-5 .underneath');
    const moon_square_2 = document.querySelector('.moon_square-2');
    const moon_square_3 = document.querySelector('.moon_square-3');
    const moon_square = document.querySelector('.moon_square');
    const moon_square_4 = document.querySelector('.moon_square-4');
    const moon_square_5 = document.querySelector('.moon_square-5');
    const main = document.querySelector('.show__scroll-content');
    const textY = document.querySelector('.text-size-2 h2').getBoundingClientRect().y;
    const textHeight3 = document.querySelector('.text-size-3').getBoundingClientRect().height;
    const textY3 = document.querySelector('.text-size-3').getBoundingClientRect().y;
    const menu = document.querySelector('header').getBoundingClientRect().height;
    const fishes__svg = document.querySelector('.fishes__svg');
    const svg_cat__content = document.querySelector('.svg_cat__content');
    const koffee = document.querySelector('.coffee');
    const rabbit = document.querySelector('.rabbit');
    const text_right_3 = document.querySelector('.text-right-3 h2').getBoundingClientRect();
    const text_4 = document.querySelector('.text-size-4 h2').getBoundingClientRect();
    const text_right_4 = document.querySelector('.text-right-4 h2').getBoundingClientRect();;
    const triangle = document.querySelector('.triangle');
    const dogs_svg = document.querySelector('.dogs_svg');

    //define objects
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    //The passed argument has to be at least a empty object or a object with your desired options
    $('.show__scroll-content').overlayScrollbars({
        callbacks: {
            onScroll: (e) => scrollMove(e),
        }
    });

    let ticking = false;
    let i = 0;
    let lastKnownScrollPositionisHigher = 0;
    let animation4Playing,
        animation3Playing,
        animation2Playing,
        animation5Playing = false;
    function stopForASec(textY, textHeight, scrollPos, moon_square, underneath, main, lastKnownScrollPosition) {
        const fixedScroll = scrollPos - 195;

        if (fixedScroll > 0) {
            moon_square.style.top = 322 + lastKnownScrollPosition + 'px';
            underneath.style.top = -322 - lastKnownScrollPosition + 'px';
        } else if (fixedScroll < 0 && fixedScroll > -600) {
            moon_square.style.top = textY - textHeight + 8 + menu + 'px';
            underneath.style.top = -(textY - textHeight + 8) - menu + 'px';
        }
        if (fixedScroll < -150) {
            moon_square.classList.add('hideSquare');
        } else {
            moon_square.classList.remove('hideSquare');
        }
    }
    function scrollMove(e) {
        const parsed = parseInt(getComputedStyle(document.querySelector('.text-size-2 h2'))['height']);
        let heightText = parsed;
        let lastKnownScrollPosition = e.target.scrollTop;
        const scrollGoingDown = lastKnownScrollPositionisHigher < lastKnownScrollPosition;
        const scrollPos = (textY - heightText) - lastKnownScrollPosition;
        const scrollPos3 = (textY3 - textHeight3) - lastKnownScrollPosition;
        if (lastKnownScrollPosition > 0) {
            header.classList.add('scroll-down');
            nav.classList.add('collapsed');
            main.classList.add('menu-collapse');
        } else {
            nav.classList.remove('collapsed');
            header.classList.remove('scroll-down');
            main.classList.add('menu-collapse');
        }

        moon_square_5.addEventListener("animationstart", () => { animation5Playing = true; }, false);
        moon_square_5.addEventListener("animationend", () => { animation5Playing = false; }, false);
        moon_square_2.addEventListener("animationstart", () => { animation2Playing = true; }, false);
        moon_square_2.addEventListener("animationend", () => { animation2Playing = false; }, false);
        stopForASec(textY, heightText, scrollPos, moon_square, underneath, main, lastKnownScrollPosition);

        if (scrollPos < -601) {
            stopForASec3(scrollPos3, moon_square, underneath, textY3, textHeight3, scrollGoingDown)
        }
        if (lastKnownScrollPosition > 700) {
            svg_cat__content.classList.add('appear');
        }
        if (lastKnownScrollPosition > 1600) {
            koffee.classList.add('appear');
        }
        if (lastKnownScrollPosition > 2300) {
            rabbit.classList.add('appear');
        }
        if (scrollGoingDown) {

            const styleTopMoon4 = text_4.top - (text_4.height / 1.4) + menu - 5 + 'px'
            const styleLeftMoon4 = text_4.left + (text_4.width / 2) + 24 + 'px'
            const styleTopUnder4 = -text_4.top + (text_4.height / 1.4) - menu + 5 + 'px'
            const styleLeftUnder4 = -text_4.left + 'px';
            moon_square_4.addEventListener("animationstart", () => { animation4Playing = true; }, false);
            moon_square_4.addEventListener("animationend", () => { animation4Playing = false; }, false);
            if (lastKnownScrollPosition > 2400 && lastKnownScrollPosition < 2700 && !animation4Playing) {
                showSquare(moon_square_4, underneath_4, styleTopMoon4, styleLeftMoon4, styleTopUnder4, styleLeftUnder4, 'showSquare', false);
            } else if (lastKnownScrollPosition >= 2700 && !animation4Playing) {
                showSquare(moon_square_4, underneath_4, styleTopMoon4, styleLeftMoon4, styleTopUnder4, styleLeftUnder4, 'showSquare', true);
            }
            const styleTopMoon3 = text_right_4.top - (text_right_4.height / 2) + menu - 10 + 'px';
            const styleLeftMoon3 = text_right_4.left + (text_4.width / 2) + 24 + 'px';
            const styleTopUnder3 = -text_right_4.top + (text_right_4.height / 2) - menu + 10 + 'px';
            const styleLeftUnder3 = -text_right_4.left + 'px';
            moon_square_3.addEventListener("animationstart", () => { animation3Playing = true; }, false);
            moon_square_3.addEventListener("animationend", () => { animation3Playing = false; }, false);
            if (lastKnownScrollPosition > 3200 && lastKnownScrollPosition < 3800 && !animation3Playing) {
                showSquare(moon_square_3, underneath_3, styleTopMoon3, styleLeftMoon3, styleTopUnder3, styleLeftUnder3, 'showingSquare', false);
            } else if (lastKnownScrollPosition >= 3800 && !animation3Playing) {
                showSquare(moon_square_3, underneath_3, styleTopMoon3, styleLeftMoon3, styleTopUnder3, styleLeftUnder3, 'showingSquare', true);
            }
        }

        if (lastKnownScrollPosition > 3100) {
            moveCat();
        }
        if (lastKnownScrollPosition > 100) {
            fishes__svg.style.transform = 'rotate(' + (i) + 'deg)';
            if (scrollGoingDown) {
                i += 2;
            } else {
                i -= 2;
            }
            lastKnownScrollPositionisHigher = lastKnownScrollPosition;
        }

        if (!scrollGoingDown) {
            controlGoingUp(lastKnownScrollPosition, 3200, moon_square_3, 'showingSquare', false);
            controlGoingUp(lastKnownScrollPosition, 2400, moon_square_4, 'showSquare', false);
            controlGoingUp(lastKnownScrollPosition, 1600, moon_square_5, 'moon_second', false);
            controlGoingUp(lastKnownScrollPosition, 2000, moon_square_2, 'showSquare', false);
        } else {
            controlGoingUp(lastKnownScrollPosition, 3100, moon_square_3, 'showingSquare', true);
            controlGoingUp(lastKnownScrollPosition, 2400, moon_square_4, 'showSquare', true);
            controlGoingUp(lastKnownScrollPosition, 1600, moon_square_5, 'moon_second', true);
            controlGoingUp(lastKnownScrollPosition, 2000, moon_square_2, 'showSquare', true);
        }

    }
    function stopForASec3(scrollPos, moon_square, underneath, textY, textHeight, scrollGoingDown) {
        if (scrollPos < 200 && scrollPos > -80 && !animation5Playing) {
            if (!scrollGoingDown) {
                setTimeout(() => {
                    moon_square_5.classList.add('moon_second');
                    moon_square_5.style.top = textY - textHeight + menu + 'px';
                    underneath_5.style.top = -(textY - textHeight) - menu + 'px';
                }, 2000);
            } else {
                moon_square_5.classList.add('moon_second');
                moon_square_5.style.top = textY - textHeight + menu + 'px';
                underneath_5.style.top = -(textY - textHeight) - menu + 'px';
            }
        } else if (scrollPos < -80 && !animation5Playing) {
            moon_square_5.classList.remove('moon_second');
            if (scrollGoingDown) {
                setTimeout(() => {
                    show2(scrollPos);
                }, 2000);
            } else {
                show2(scrollPos);
            }
        }
    }
    function show2(scrollPos) {
        const styleTopMoon = text_right_3.top - (text_right_3.height / 1.5) - 10 + menu + 'px';
        const styleLeftMoon = text_right_3.left + (text_4.width / 2) + 24 + 'px';
        const styleTopUnder = -text_right_3.top + (text_right_3.height / 1.5) + 10 - menu + 'px';
        const styleLeftUnder = -text_right_3.left + 'px';
        if (scrollPos > -250 && !animation2Playing && !animation5Playing) {
            showSquare(moon_square_2, underneath_2, styleTopMoon, styleLeftMoon, styleTopUnder, styleLeftUnder, 'showSquare', false);
        } else if (scrollPos <= -250 && !animation2Playing && !animation5Playing) {
            showSquare(moon_square_2, underneath_2, styleTopMoon, styleLeftMoon, styleTopUnder, styleLeftUnder, 'showSquare', true);
        }
    }
    function showSquare(moon, underneath, styleTopMoon, styleLeftMoon, styleTopUnder, styleLeftUnder, className, below) {
        moon.style.top = styleTopMoon;
        moon.style.left = styleLeftMoon;
        underneath.style.top = styleTopUnder;
        if (below) {
            moon.classList.remove(className);
        } else {
            moon.classList.add(className);
            underneath.style.left = styleLeftUnder;
        }
    }
    function moveCat() {
        triangle.classList.add('loading');
        dogs_svg.classList.add('draw');
        setTimeout(() => {
            dogs_svg.classList.add('walkTheCat');
        }, 8000);
    }

    function controlGoingUp(scroll, scrollLimit, moon, classToRemove, goingDown) {
        if (scroll < scrollLimit && !goingDown) {
            moon.classList.remove(classToRemove);
            moon.classList.add('.goingUp');
        } else if (goingDown) {
            moon.classList.remove('.goingUp');
        }
    }
});