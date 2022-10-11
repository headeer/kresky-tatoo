$(function () {

    const toggleNight = document.querySelector('.toggle_night');
    const toggleDay = document.querySelector('.toggle_day');
    const logo_dark = document.querySelector('.logo_dark');
    const logo_light = document.querySelector('.logo_light');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleNight.classList.add('activated');
            logo_dark.style.display = 'block';
            logo_light.style.display = 'none';
            toggleDay.classList.remove('activated');
        } else {
            toggleNight.classList.remove('activated');
            logo_dark.style.display = 'none';
        }
    } else {
        toggleNight.classList.remove('activated');
        logo_dark.style.display = 'none';
    }

    function switchTheme(color) {
        if (color === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark');
            toggleDay.classList.remove('activated');
            toggleNight.classList.add('activated');
            logo_dark.style.display = 'block';
            logo_light.style.display = 'none';
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleDay.classList.add('activated');
            toggleNight.classList.remove('activated');
            logo_dark.style.display = 'none';
            logo_light.style.display = 'block';
        }
    }

    toggleNight.addEventListener('click', () => {
        switchTheme('dark');
    });
    toggleDay.addEventListener('click', () => {
        switchTheme('light');
    });
});