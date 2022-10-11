$(function () {
    let eventListenerExist = false;
    let currentProjectIndex = 0;
    const galleryItems = document.querySelectorAll('.gallery .hoverbox');
    const gallery = document.querySelector('.gallery-container-show');
    const closeGallery = document.querySelector('.gallery-container-show .top-bar .x-icon');
    const nextButton = document.querySelector('.gallery-container-show .arrow-right');
    const previousButton = document.querySelector('.gallery-container-show .arrow-left');
    const moon_square = document.querySelector('.moon_square');

    //listeners    
    galleryItems.forEach((img, idx) => {
        img.addEventListener('click', () => handleEvent(img, idx));
    });

    closeGallery.addEventListener('click', () => {
        gallery.classList.remove('open');
        moon_square.classList.remove('hide');
    });

    nextButton.addEventListener('click', () => {
        const centerImg = document.querySelector('.gallery-container-show .center')
        const images = document.querySelectorAll('.gallery-container-show .img-clickable');
        if (currentProjectIndex > 0) {
            changeImages(images, currentProjectIndex - 1, centerImg);
        } else {
            changeImages(images, projects.length - 1, centerImg);
        }
    });

    previousButton.addEventListener('click', () => {
        const centerImg = document.querySelector('.gallery-container-show .center')
        const images = document.querySelectorAll('.gallery-container-show .img-clickable');
        if (currentProjectIndex < projects.length - 1) {
            changeImages(images, currentProjectIndex + 1, centerImg);
        } else {
            changeImages(images, 0, centerImg);
        }
    });

    function changeImages(images, idx, centerImg) {
        moon_square.classList.add('hide');
        const currentProject = projects.filter(project => project.id === idx);
        currentProjectIndex = idx;
        for (let index = 0; index < images.length; index++) {
            images[index].classList.add('default-position');
        }
        centerImg.classList.add('default-position-center');
        centerImg.childNodes[1].innerHTML = currentProject[0].svg;
        images.forEach((image, i) => {
            console.log(image.childNodes);
            image.childNodes[1].innerHTML = currentProject[0].svg;
            switch (i) {
                case 0:
                    image.childNodes[3].src = currentProject[0].imgRightTop;
                    break;
                case 1:
                    image.childNodes[3].src = currentProject[0].imgRightBottom;
                    break;
                case 2:
                    image.childNodes[3].src = currentProject[0].imgLeftTop;
                    break;
                case 3:
                    image.childNodes[3].src = currentProject[0].imgLeftBottom;
                    break;
                default:
                    break;
            }
        });

    }
    function handleEvent(img, idx) {
        gallery.classList.add('open');
        const centerImg = document.querySelector('.gallery-container-show .center')
        const images = document.querySelectorAll('.gallery-container-show .img-clickable');

        changeImages(images, idx, centerImg);
        images.forEach((image, i) => {
            if (!eventListenerExist) {
                image.addEventListener('click', function (div) {
                    const oldSrc = image.childNodes[3].src;
                    if (image.classList.contains('default-position')) {
                        for (let index = 0; index < images.length; index++) {
                            images[index].classList.add('default-position');
                        }
                        image.classList.remove('default-position');
                        centerImg.classList.remove('default-position-center');
                        centerImg.childNodes[3].src = oldSrc;
                    } else {
                        image.classList.add('default-position');
                        centerImg.classList.add('default-position-center');
                    }

                });
            }
        });
        eventListenerExist = true;
    }
});
