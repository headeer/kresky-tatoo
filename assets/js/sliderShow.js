$(function () {
    const underneath = document.querySelector('.moon_square .underneath');
    const moon_square = document.querySelector('.moon_square');
    const main = document.querySelector('.show__scroll-content');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    let lastKnownScrollPositionx;
    const first_slide = document.querySelector('.first_slide');
    let ticking = false;
    $('.show__scroll-content').overlayScrollbars({
        callbacks: {
            onScroll: (e) => scrollMove(e),
        }
    });

    function scrollMove(event) {
        let lastKnownScrollPosition = event.target.scrollTop;
        if (lastKnownScrollPosition > 0) {
            header.classList.add('scroll-down');
            nav.classList.add('collapsed');
            main.classList.add('menu-collapse');
        } else {
            nav.classList.remove('collapsed');
            header.classList.remove('scroll-down');
            main.classList.add('menu-collapse');
        }
        if (!ticking) {
            window.requestAnimationFrame(function () {
                underneath.style.top = (lastKnownScrollPosition) + 'px';
                ticking = false;
                lastKnownScrollPositionx = lastKnownScrollPosition;

            });

            ticking = true;
        }
    }
});