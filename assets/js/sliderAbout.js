$(function () {

    const first_slide = document.querySelector('.first_slide');
    let ticking = false;

    createSquare(first_slide);


    function createSquare(el) {
        const underneath = document.querySelector('.moon_square .underneath');
        const moon_square = document.querySelector('.moon_square');
        const main = document.querySelector('.show__scroll-content');
        const textY = document.querySelector('.text-size-2 h2').getBoundingClientRect().y;
        const menu = document.querySelector('nav').getBoundingClientRect().height;
        const about = document.querySelector('.about');

        // underneath.style.top = '-12.5vh';

        main.addEventListener('scroll', function (e) {

            const parsed = parseInt(getComputedStyle(document.querySelector('.text-size-2 h2'))['height']);
            let heightText = 0.8 * parsed;

            // if (window.innerWidth < 1612) {
            //     heightText = 0.9 * parsed;
            // } else if (window.innerWidth < 1490) {
            //     heightText = parsed;
            // } else if (window.innerWidth < 1390) {
            //     heightText = 1.1 * parsed;

            // }
            let lastKnownScrollPosition = e.target.scrollTop;

            const scrollPos = (textY - heightText - menu) - lastKnownScrollPosition;
            stopForASec(textY, heightText, scrollPos, moon_square, underneath, main, lastKnownScrollPosition);
            if (!ticking) {
                window.requestAnimationFrame(function () {

                    ticking = false;

                });

                ticking = true;
            }
        });
        const bodyWidth = document.body.offsetWidth;
        setTimeout(() => {
            // element.style.transition = 'none'
            // underneath.style.transform = `translateY(-${(e.pageX - 12.5 - (bodyWidth / 16)) + 'vh'})`;
            // element.style.width = (360 * 0.33 + 360) + 'px';
            // element.style.left = (e.pageX - 180 - (bodyWidth / 16)) + 'px';;
        }, 140);
    }
    let resetTimeout = false;
    function stopForASec(textY, textHeight, scrollPos, moon_square, underneath, main, lastKnownScrollPosition) {
        if (scrollPos > 0) {
            moon_square.style.top = 128.875 + lastKnownScrollPosition + 'px';
            underneath.style.top = -128.875 - lastKnownScrollPosition + 'px';
        } else if (scrollPos < 0) {
            moon_square.style.top = textY - textHeight + 'px';
            underneath.style.top = -(textY - textHeight) + 'px';
            if (!resetTimeout) {
                main.style.overflow = "hidden";
                document.querySelector('.fishes__svg').classList.add('animate');
                setTimeout(function () {
                    main.style.overflow = "hidden auto";
                    resetTimeout = true;
                    // document.querySelector('.fishes__svg').classList.remove('animate');
                }, 2000 /* miliseconds */);

            }
        }
    }
})