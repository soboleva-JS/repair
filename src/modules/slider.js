export default class Slider {
    constructor({
        index,
        block,
        main,
        wrap,
        position = 0,
        next,
        prev,
        slidesToShow = 3,
        infinity = false,
        responsive = [],
        counterCurrent,
        counterTotal,
        activeClass,
        changeTexts

    }) {
        // if (!this.main || !this.wrap) {
        // 	console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!');
        // }
        this.index = index;
        this.block = document.querySelector(block);
        this.main = this.block.querySelector(main);
        this.wrap = this.block.querySelector(wrap);
        this.slides = [...document.querySelector(wrap).children];
        this.next = this.block.querySelector(next);
        this.prev = this.block.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            widthSlide: Math.floor(100 / this.slidesToShow),
            infinity,


        }
        this.responsive = responsive;
        this.activeClass = activeClass;
        this.counterCurrent = this.block.querySelector(counterCurrent);
        this.counterTotal = this.block.querySelector(counterTotal);
      
        this.texts = [...document.querySelectorAll(changeTexts)]



    }
    init() {


        if (this.counterTotal)
            this.counterTotal.textContent = this.slides.length;

        if (this.counterCurrent)
            this.counterCurrent.textContent = this.options.position + 1;



        if (this.activeClass) {

            if (!this.slides[this.options.position].classList.contains(this.activeClass)) this.slides[this.options.position].classList.add(this.activeClass);
        }


        this.addGloClass();
        this.addStyle();
        this.controlSlider();
        if (this.responsive) {
            this.responseInit();
        }

    }

    addGloClass() {
        this.main.classList.add(`glo-slider${this.index}`);
        this.wrap.classList.add(`glo-slider__wrap${this.index}`);
        for (const item of this.slides) {
            item.classList.add(`glo-slider__item${this.index}`);
        }
    }

    addStyle() {
        let style = document.getElementById(`sliderCarousel-style${this.index}`);
        if (!style) {
            style = document.createElement('style');
            style.id = `sliderCarousel-style${this.index}`;
        }
        style.textContent = `
    .custom-slider${this.index}{
        overflow: hidden;
    }
    .custom-slider__wrap${this.index}{
        display: flex;
        transition: transform .5s;
        will-change: transform;
    }
    .custom-slider__item${this.index}{
        display: flex;
        align-items: center;
        flex: 0 0 ${this.options.widthSlide}%;
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }
    `;
        document.head.appendChild(style);
    }

    controlSlider() {

        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));

    }

    prevSlider() {

        if (this.options.infinity || this.options.position > 0) {
            this.options.position--;

            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            if (this.counterCurrent)
                this.counterCurrent.textContent = this.options.position + 1;
            if (this.activeClass) {
                this.slides[this.options.position].classList.add(this.activeClass);
                if (this.options.position == this.slides.length - 1) this.slides[0].classList.remove(this.activeClass);
                else this.slides[this.options.position + 1].classList.remove(this.activeClass);
            }

            if (this.texts.length>0) {

                for (const item of this.texts) {
                    item.style.display = 'none';
                };
                this.texts[this.options.position].style.display = 'block';
            }


        }
    }

    nextSlider() {

        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            this.options.position++;

            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;

            if (this.counterCurrent)
                this.counterCurrent.textContent = this.options.position + 1;

            if (this.activeClass) {

                this.slides[this.options.position].classList.add(this.activeClass);
                if (this.options.position == 0) this.slides[this.slides.length - 1].classList.remove(this.activeClass);
                else this.slides[this.options.position - 1].classList.remove(this.activeClass);
            }



            if (this.texts.length>0) {
                for (const item of this.texts) {
                    item.style.display = 'none';
                };
                this.texts[this.options.position].style.display = 'block';
            }


        }
    }


    responseInit() {

        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = (pos) => {
            if (pos = true) {
                this.wrap.style.transform = `translateX(0)`;
                this.options.position = 0;



                if (this.activeClass) {
                    for (const item of this.slides) {
                        item.classList.remove(this.activeClass);
                    };

                    this.slides[this.options.position].classList.add(this.activeClass);

                }


                if (this.texts.length>0) {

                    for (const item of this.texts) {
                        item.style.display = 'none';
                    };
                    this.texts[this.options.position].style.display = 'block';
                }

                if (this.counterCurrent)
                this.counterCurrent.textContent = this.options.position + 1;
            }

            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slideToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }

        };
        window.addEventListener('resize', () => {
                checkResponse(true)
            }

        )
        if (this.counterCurrent)
            this.counterCurrent.textContent = this.options.position + 1;
    };
}