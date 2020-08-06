import Slider from './slider.js';

const sliders = () => {

	const content = document.querySelector('.designs-slider-wrap').innerHTML;

	const carouselPartners = new Slider({
		index: 0,
		block: '.partners',
		main: '.partners-slider',
		wrap: '.partnersSliderWrap',
		position: 0,
		next: '.slider-arrow_right',
		prev: '.slider-arrow_left',
		slidesToShow: 4,
		infinity: true,
		responsive: [{
				breakpoint: 1024,
				slideToShow: 3
			},
			{
				breakpoint: 768,
				slideToShow: 2
			},
			{
				breakpoint: 576,
				slideToShow: 1
			},

		]
	});
	carouselPartners.init();


	const carouselReviews = new Slider({
		index: 1,
		block: '.reviews',
		main: '.reviews-slider',
		wrap: '.reviewsSliderWrap',
		position: 0,
		next: '.slider-arrow_right',
		prev: '.slider-arrow_left',
		slidesToShow: 1,
		infinity: true,

	});
	carouselReviews.init();


	const carouselTransparency = new Slider({
		index: 2,
		block: '.transparency',
		main: '.transparency-slider',
		wrap: '.transparencySliderWrap',
		position: 0,
		next: '.slider-arrow_right',
		prev: '.slider-arrow_left',
		slidesToShow: 3,
		infinity: true,
		responsive: [{
			breakpoint: 1090,
			slideToShow: 1
		}]

	});
	carouselTransparency.init();

	const carouselPopupTransparency = new Slider({
		index: 3,
		block: '.popup-transparency',
		main: '.popup-transparency-slider',
		wrap: '.popupTransparencySliderWrap', //
		position: 0,
		next: '.popup-arrow_transparency_right',
		prev: '.popup-arrow_transparency_left',
		slidesToShow: 1,
		infinity: true,
		counterCurrent: '.slider-counter-content__current',
		counterTotal: '.slider-counter-content__total'


	});
	carouselPopupTransparency.init();



	const repairTypes = () => {
		const block = document.querySelector('.repair-types');
		const tabs = block.querySelector('.nav-list-repair');
		const main = block.querySelector('.repair-types-slider');
		const sliders = [...main.children];

		let carouselRepairTypes = new Slider({
			index: 'LLL',
			block: '.repair-types',
			main: '.repair-types-slider',
			wrap: `.types-repair1`,
			position: 0,
			next: '.slider-arrow_right',
			prev: '.slider-arrow_left',
			slidesToShow: 1,
			infinity: true,
			counterCurrent: '.slider-counter-content__current',
			counterTotal: '.slider-counter-content__total'

		});
		carouselRepairTypes.init();

		block.addEventListener('click', (e) => {
			if (e.target.closest('.repair-types-nav__item')) {
				carouselRepairTypes = null;
				const n = e.target.className.replace(/[^0-9]/g, '');
				sliders.forEach((item) => {
					if (item.className.replace(/[^0-9]/g, '') === n) {

						block.querySelector('.repair-types-slider').children[0].before(item);
						carouselRepairTypes = new Slider({
							index: 'LLL',
							block: '.repair-types',
							main: '.repair-types-slider',
							wrap: `.types-repair${n}`,
							position: 0,
							next: '.slider-arrow_right',
							prev: '.slider-arrow_left',
							slidesToShow: 1,
							infinity: true,
							counterCurrent: '.slider-counter-content__current',
							counterTotal: '.slider-counter-content__total'

						});
						carouselRepairTypes.init();
					}
				})
			}
		})

	}

	repairTypes();

	const carouselProblemsMobile = new Slider({
		index: 4,
		block: '.problems .wrapper_small.desktop-hide',
		main: '.problems-slider',
		wrap: '.problemsSliderWrapWrap',
		position: 0,
		next: '.slider-arrow_right-problems',
		prev: '.slider-arrow_left-problems',
		slidesToShow: 1,
		infinity: true,
		activeClass: 'active-item'

	});
	carouselProblemsMobile.init();

	const carouselFormulaMobile = new Slider({
		index: 7,
		block: '.formula .wrapper_small.desktop-hide',
		main: '.formula-slider',
		wrap: '.formulaSliderWrapWrap',
		position: 0,
		next: '.slider-arrow_right-formula',
		prev: '.slider-arrow_left-formula',
		slidesToShow: 1,
		infinity: true,
		activeClass: 'active-item'

	});
	carouselFormulaMobile.init();

	const portfolioDesktop = () => {
		const main = document.querySelector('.portfolio-slider.mobile-hide');
		const wrap = main.querySelector('.portfolioSliderDesktopWrapWrap');
		const next = document.querySelector('.slider-arrow_right-portfolio.mobile-hide');
		const prev = document.querySelector('.slider-arrow_left-portfolio.mobile-hide');
		let step1;
		let step2;
		let step3;
		let step4;

		const toggleTabContentNext = () => {
			const t = +Math.floor(wrap.style.transform.replace(/[^0-9\-]/g, ''));

			if (document.documentElement.clientWidth > 1024) {
				step1 = Math.floor(main.clientWidth / 3);
				step2 = Math.floor(main.clientWidth / 3 * 2);


				if (t == 0 || !t) {
					wrap.style.transform = `translateX(-${step1}px)`;

					prev.style.display = 'flex';
				} else if (t < 0) {
					wrap.style.transform = `translateX(-${step2}px)`;
					next.style.display = 'none'
				}

			} else if (document.documentElement.clientWidth > 900) {
				step1 = Math.floor(main.clientWidth / 2);
				step2 = Math.floor(main.clientWidth / 2 * 2);
				step3 = Math.floor(main.clientWidth / 2 * 3);

				if (t == 0 || !t) {
					wrap.style.transform = `translateX(-${step1}px)`;

					prev.style.display = 'flex';
				} else if (t > -step2) {
					wrap.style.transform = `translateX(-${step2}px)`;

				} else if (t > -step3) {
					wrap.style.transform = `translateX(-${step3}px)`;
					next.style.display = 'none'
				}
			} else if (document.documentElement.clientWidth > 575) {
				step1 = Math.floor(main.clientWidth * 0.85);
				step2 = Math.floor(main.clientWidth * 0.85 * 2);
				step3 = Math.floor(main.clientWidth * 0.85 * 3);
				step4 = Math.floor(main.clientWidth * 0.85 * 4);

				if (t == 0 || !t) {
					wrap.style.transform = `translateX(-${step1}px)`;

					prev.style.display = 'flex';
				} else if (t > -step2) {
					wrap.style.transform = `translateX(-${step2}px)`;
					// next.style.display='none'
				} else if (t > -step3) {
					wrap.style.transform = `translateX(-${step3}px)`;
					// next.style.display='none'
				} else if (t > -step4) {
					wrap.style.transform = `translateX(-${step4}px)`;
					next.style.display = 'none'
				}
			}
		};


		const toggleTabContentPrev = () => {

			const t = +Math.floor(wrap.style.transform.replace(/[^0-9\-]/g, ''));

			if (document.documentElement.clientWidth > 1024) {
				step1 = Math.floor(main.clientWidth / 3);
				step2 = Math.floor(main.clientWidth / 3 * 2);
				if (t < -step1) {

					wrap.style.transform = `translateX(${-step1}px)`;

				} else if (t < 0 && t > -step2) {
					wrap.style.transform = `translateX(0px)`;
					prev.style.display = 'none';
					next.style.display = 'flex'
				}
			} else if (document.documentElement.clientWidth > 900) {
				step1 = Math.floor(main.clientWidth / 2);
				step2 = Math.floor(main.clientWidth / 2 * 2);
				step3 = Math.floor(main.clientWidth / 2 * 3);

				if (t < -step2) {

					wrap.style.transform = `translateX(${-step2}px)`;

					next.style.display = 'flex'

				} else if (t < -step1) {
					wrap.style.transform = `translateX(${-step1}px)`;

				} else if (t < 0) {
					wrap.style.transform = `translateX(0px)`;
					prev.style.display = 'none';
					next.style.display = 'flex'
				}
			} else if (document.documentElement.clientWidth > 575) {
				step1 = Math.floor(main.clientWidth * 0.85);
				step2 = Math.floor(main.clientWidth * 0.85 * 2);
				step3 = Math.floor(main.clientWidth * 0.85 * 3);
				step4 = Math.floor(main.clientWidth * 0.85 * 4);

				if (t < -step3) {

					wrap.style.transform = `translateX(${-step3}px)`;

					prev.style.display = 'flex';

				} else if (t < -step2) {

					wrap.style.transform = `translateX(${-step2}px)`;

				} else if (t < -step1) {
					wrap.style.transform = `translateX(${-step1}px)`;

				} else if (t < 0) {
					wrap.style.transform = `translateX(0px)`;
					prev.style.display = 'none';
					next.style.display = 'flex'
				}
			} else {
				step1 = Math.floor(main.clientWidth * 0.85);
				step2 = Math.floor(main.clientWidth * 0.85 * 2);
				step3 = Math.floor(main.clientWidth * 0.85 * 3);
				step4 = Math.floor(main.clientWidth * 0.85 * 4);

				if (t < -step3) {

					wrap.style.transform = `translateX(${-step3}px)`;

					prev.style.display = 'flex';

				} else if (t < -step2) {

					wrap.style.transform = `translateX(${-step2}px)`;

				} else if (t < -step1) {
					wrap.style.transform = `translateX(${-step1}px)`;

				} else if (t < 0) {
					wrap.style.transform = `translateX(0px)`;
					prev.style.display = 'none';
					next.style.display = 'flex'
				}
			}


		};
		next.addEventListener('click', () => {
			toggleTabContentNext()
		})

		prev.addEventListener('click', () => {
			toggleTabContentPrev()
		})


		window.addEventListener('resize', () => {

			wrap.style.transform = `translateX(0px)`;
			if (document.documentElement.clientWidth > 575) {
				prev.style.display = 'none';
				next.style.display = 'flex'

			} else {
				prev.style.display = 'none';
				next.style.display = 'none'
			}
		})
	}

	portfolioDesktop();

	const carouselPortfolioPopup = new Slider({
		index: 6,
		block: '.popup-portfolio',
		main: '.popup-portfolio-slider',
		wrap: '.popupPortfolioSliderWrap',
		position: 0,
		next: '.popup-arrow_right',
		prev: '.popup-arrow_left',
		slidesToShow: 1,
		infinity: true,
		counterCurrent: '.slider-counter-content__current',
		counterTotal: '.slider-counter-content__total',
		changeTexts: '.popup-portfolio-text'

	});
	carouselPortfolioPopup.init();


	const carouselPortfolioMobile = new Slider({
		index: 5,
		block: '.portfolio',
		main: '.portfolio-slider-mobile.tablet-hide.desktop-hide',
		wrap: '.portfolioSliderMobileWrapWrap',
		position: 0,
		next: '.slider-arrow-tablet-mobile_right',
		prev: '.slider-arrow-tablet-mobile_left',
		slidesToShow: 1,
		infinity: true,
		counterCurrent: '.slider-counter-content__current',
		counterTotal: '.slider-counter-content__total'

	});
	carouselPortfolioMobile.init();

	document.querySelector('.portfolio-slider-wrap').addEventListener('click', (e) => {

		if (e.target.closest('.portfolio-slider.mobile-hide')) {

			document.querySelectorAll('.portfolio-slider.mobile-hide .portfolio-slider__slide-frame').forEach((item, index) => {

				if (item == e.target.closest('.portfolio-slider__slide-frame')) {
					const porPop = document.querySelector('.popup-portfolio');
					porPop.style.visibility = 'visible';
					porPop.querySelectorAll('.popup-portfolio-text').forEach((it, ind) => {
						it.style.display = 'none';

						if (ind == index) {
							carouselPortfolioPopup.options.position = ind;
							carouselPortfolioPopup.wrap.style.transform = `translateX(-${carouselPortfolioPopup.options.position * carouselPortfolioPopup.options.widthSlide}%)`;
							carouselPortfolioPopup.counterCurrent.textContent = carouselPortfolioPopup.options.position + 1;
							it.style.display = 'block';

						}
					})
				}
			})

		} else if (e.target.closest('.portfolio-slider-mobile.tablet-hide.desktop-hide')) {

			document.querySelectorAll('.portfolio-slider-mobile.tablet-hide.desktop-hide .portfolio-slider__slide-frame').forEach((item, index) => {

				if (item == e.target.closest('.portfolio-slider__slide-frame')) {
					const porPop = document.querySelector('.popup-portfolio');
					porPop.style.visibility = 'visible';
					porPop.querySelectorAll('.popup-portfolio-text').forEach((it, ind) => {
						it.style.display = 'none';

						if (ind == index) {
							carouselPortfolioPopup.options.position = ind;
							carouselPortfolioPopup.wrap.style.transform = `translateX(-${carouselPortfolioPopup.options.position * carouselPortfolioPopup.options.widthSlide}%)`;
							carouselPortfolioPopup.counterCurrent.textContent = carouselPortfolioPopup.options.position + 1;
							it.style.display = 'block';

						}
					})
				}
			})
		}
	})


	window.addEventListener('resize', () => {
		document.querySelector('.popupPortfolioSliderWrap').style.transform = `translateY(0px)`;
		document.querySelectorAll('.popup-portfolio-text').forEach((it, ind) => {
			if (ind == 0) it.style.display = 'block';
			else it.style.display = 'none';
		})
	})

}

export default sliders;