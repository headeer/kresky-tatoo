$(function () {
    const accordions = document.querySelectorAll('.underneath .can-use');
    const accordionsBelow = document.querySelectorAll('.mainer-view .can-use');
    const default_accordion = document.querySelectorAll('.default-accordion');
    accordions.forEach((item, id) => {
        item.childNodes[1]?.addEventListener('click', () => {
            console.log(accordionsBelow);
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                accordions.forEach((elem) => {
                    elem.classList.remove('active');
                });
                accordionsBelow.forEach((element, elId) => {
                    element.classList.remove('active');
                });
                default_accordion.forEach(item => {
                    item.classList.remove('hide');
                });
            } else {
                default_accordion.forEach(item => {
                    item.classList.add('hide');
                });
                setTimeout(() => {
                    accordions.forEach((elem) => {
                        elem.classList.remove('active');
                    });
                    accordionsBelow.forEach((element, elId) => {
                        element.classList.remove('active');
                    });
                    item.classList.add('active');
                    accordionsBelow.forEach((element, elId) => {
                        if (id === elId)
                            element.classList.add('active');
                    });
                }, 300);
            }
        });
    });
});
