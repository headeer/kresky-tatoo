// Webpack Imports


(function () {
	'use strict';

	// let vw = window.innerWidth;
	// // Then we set the value in the --vh custom property to the root of the document
	// document.documentElement.style.setProperty("--vw", `${vw}px`);

	// // We listen to the resize event
	// window.addEventListener("resize", () => {
	// 	// We execute the same script as before
	// 	let vw = window.innerWidth;
	// 	document.documentElement.style.setProperty("--vw", `${vw}px`);
	// });

	// const tobii = new Tobii();

	// // Focus input if Searchform is empty
	// [].forEach.call(document.querySelectorAll('.search-form'), (el) => {
	// 	el.addEventListener('submit', function (e) {
	// 		var search = el.querySelector('input');
	// 		if (search.value.length < 1) {
	// 			e.preventDefault();
	// 			search.focus();
	// 		}
	// 	});
	// });

	// // Initialize Popovers: https://getbootstrap.com/docs/5.0/components/popovers
	// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	// 	return new bootstrap.Popover(popoverTriggerEl, {
	// 		trigger: 'focus',
	// 	});
	// });

	// var slidesExist = document.getElementsByClassName('glide__slide');

	// // if (slidesExist.length > 0) {
	// // 	new Glide('#portfolio-carousel',{
	// // 		type: 'carousel',
	// // 		startAt: 0,
	// // 		gap: 16,
	// // 		perView: 2,
	// // 		peek: 100,
	// // 	}).mount();
	// // }
	// if (slidesExist.length > 0) {
	// new Glide('#carousel',{
	// 	type: 'carousel',
	// 	startAt: 0,
	// 	gap: 0,
	// 	perView: 1,
	// 	peek: 100,
	// }).mount();
	// }
	const loader = document.querySelector('.loader-container');
	setTimeout(() => {
		if (loader) {
			loader.classList.add('dissapear');
		}
	}, 5000);

	const text = document.querySelector('.text-animated');
	if (text) {
		text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
	}
	const el = document.querySelectorAll('.text-animated span');
	for (let i = 0; i < el.length; i++) {
		if (el[i].innerHTML === 'z') {
			el[i].innerHTML = ' ';
		}
		el[i].style.transform = 'rotate(' + (i * 11.5) + 'deg)';
	}
	const text2 = document.querySelector('.text-animated-2');
	if (text2) {
		text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>");
	}
	const el2 = document.querySelectorAll('.text-animated-2 span');
	for (let i = 0; i < el2.length; i++) {
		if (el2[i].innerHTML === 'z') {
			el2[i].innerHTML = ' ';
		}
		el2[i].style.transform = 'rotate(' + i * 11.5 + 'deg)';
	}
	const text_loader = document.querySelector('.loader_text');
	if (text_loader) {
		text_loader.innerHTML = text_loader.textContent.replace(/\S/g, "<span>$&</span>");
	}
	const text_loader_1 = document.querySelectorAll('.loader_text span');
	if (text_loader_1) {

		for (let i = 0; i < text_loader_1.length; i++) {
			if (text_loader_1[i].innerHTML === 'z') {
				text_loader_1[i].innerHTML = ' ';
			}
			text_loader_1[i].style.transform = 'rotate(' + (i * 11.5) + 'deg)';
		}
	}

	const text_loader2 = document.querySelector('.loader_text-2');
	if (text_loader2) {

		text_loader2.innerHTML = text_loader2.textContent.replace(/\S/g, "<span>$&</span>");
	}

	const text_loader_2 = document.querySelectorAll('.loader_text-2 span');
	if (text_loader_2) {
		for (let i = 0; i < text_loader_2.length; i++) {
			if (text_loader_2[i].innerHTML === 'z') {
				text_loader_2[i].innerHTML = ' ';
			}
			text_loader_2[i].style.transform = 'rotate(' + i * 11.5 + 'deg)';
		}
	}

	// bind filter button click
	// var filtersElem = document.querySelector('.filters-button-group');
	// filtersElem?.addEventListener('click', function (event) {
	// 	// only work with buttons
	// 	if (!matchesSelector(event.target, 'button')) {
	// 		return;
	// 	}
	// 	var filterValue = event.target.getAttribute('data-filter');
	// 	// use matching filter function
	// 	filterValue = filterFns[filterValue] || filterValue;
	// 	iso.arrange({ filter: filterValue });
	// });
	const windowHeight = window.innerHeight;
	const scrollArea = windowHeight;


	let maxPx = 0;
	// update position of square 1 and square 2 when scroll event fires.
	// window.addEventListener('scroll', () => {
	// 	const scroll = window.scrollY;

	// 	if (scroll > 1100) return;
	// 	const scrollTop = window.pageYOffset || window.scrollTop;
	// 	const scrollPercent = scrollTop / scrollArea || 0;
	// 	if (window.innerWidth < 768) {
	// 		[square1.style.top, square2.style.bottom] = changePosition(scrollPercent, window.innerHeight, window.innerWidth, square1.style.top, square2.style.bottom, 300, 700);
	// 	} else {
	// 		[square1.style.left, square2.style.right] = changePosition(scrollPercent, window.innerHeight, window.innerWidth, square1.style.left, square2.style.right, 0, 469);
	// 	}

	// });

	// function changePosition(scrollPercent, innerHeight, innerWidth, square1, square2, bottom, maxHeight) {
	// 	if (scrollPercent * innerHeight <= maxHeight) {
	// 		square1 = scrollPercent * innerWidth - bottom + 'px';
	// 		square2 = scrollPercent * innerWidth - bottom + 'px';
	// 		if (scrollPercent * innerWidth > maxPx) {
	// 			maxPx = scrollPercent * innerWidth;
	// 		}
	// 	} else {
	// 		square1 = maxPx - bottom + 'px';
	// 		square2 = maxPx - bottom + 'px';
	// 	}
	// 	return [square1, square2];
	// }
})();