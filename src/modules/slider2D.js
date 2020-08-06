export default class Slider2D {
    constructor({
        index,
        block,
        main,
        wrap,
        positionX = 0,
        positionY = 0,
        next,
        prev,
        slidesToShow = 1,
        infinity = false,
        responsive = [],
        counterCurrent,
        counterTotal,
        activeClass,
        changeTexts,
        btnsSel,
        previewSel


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
        this.btns = [...document.querySelectorAll(btnsSel)]; 
        this.previews = [...document.querySelectorAll(previewSel)]; 
        this.options = {
            positionX,
            positionY,
            widthSlide: Math.floor(100 / this.slidesToShow),
            heightSlide: Math.floor(100 / [...this.slides[positionX].children].length),
            infinity,


        }
        this.responsive = responsive;
        this.activeClass = activeClass;
        this.counterCurrent = this.block.querySelector(counterCurrent);
        this.counterTotal = this.block.querySelector(counterTotal);

        this.texts = [...document.querySelectorAll(changeTexts)]



    }
    init() {
        if (document.documentElement.clientWidth>575) this.options.heightSlide = Math.floor(100 / [...this.slides[this.options.positionX].children].length);
        else this.options.heightSlide = Math.floor(100 / this.slidesToShow);
        
        this.previews.forEach((item, index) => {

            item.classList.remove('visible');

            if (index == this.options.positionX) {
                item.classList.add('visible');
                item.children[0].children[0].classList.add('preview_active');
            }
        })


        if (this.counterTotal)
            this.counterTotal.textContent = [...this.slides[0].children].length;

        if (this.counterCurrent)
            this.counterCurrent.textContent = this.options.positionY + 1;



        if (this.activeClass) {

            if (!this.slides[this.options.positionX].classList.contains(this.activeClass)) this.slides[this.options.positionX].classList.add(this.activeClass);
        }

        this.addGloClass();
        this.addStyle();

        this.changeSlider();
        this.changePreview();


        this.prev.addEventListener('click', () => {
            if (this.options.infinity || this.options.positionY > 0) {
                this.options.positionY--;

                if (this.options.positionY < 0) {
                    this.options.positionY = [...this.slides[this.options.positionX].children].length - this.slidesToShow;
                }
                this.slides[this.options.positionX].style.transform = `translateY(-${this.options.positionY * this.options.widthSlide}%)`;
                if (this.counterCurrent)
                    this.counterCurrent.textContent = this.options.positionY + 1;



            }
        });
        this.next.addEventListener('click', () => {
            if (this.options.infinity || this.options.positionY < [...this.slides[this.options.positionX].children].length - this.slidesToShow) {
                this.options.positionY++;

                if (this.options.positionY > [...this.slides[this.options.positionX].children].length - this.slidesToShow) {
                    this.options.positionY = 0;
                }
                this.slides[this.options.positionX].style.transform = `translateY(-${this.options.positionY * this.options.widthSlide}%)`;

                if (this.counterCurrent)
                    this.counterCurrent.textContent = this.options.positionY + 1;



            }
        });
        if (this.responsive) {
            this.responseInit();
        }

    }

    addGloClass() {
        this.main.classList.add(`glo-slider${this.index}`);
        this.wrap.classList.add(`glo-slider__wrap${this.index}`);
        for (const item of this.slides) {
            item.classList.add(`glo-slider__item${this.index}`);
            for (const it of item.children) {
                it.classList.add(`glo-slider__item${this.index}`);
            }

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
        position: relative;
    }
    .custom-slider__wrap${this.index}{
        display: flex;
        transition: transform .5s;
        will-change: transform;
        width: 100%;
        height: 100%;
        position: relative;
    }
    .custom-slider__item${this.index}{
        width: 100%;
        height: 100%;
        position: relative;
        flex: 0 0 ${this.options.widthSlide}%;
        margin: 0 auto;
    }
    `;
        document.head.appendChild(style);
    }


    changeSlider() {

        this.btns.forEach((item, index) => {
            item.addEventListener('click', () => {

                document.querySelectorAll('.preview-block__item-inner.preview_active').forEach((item) => item.classList.remove('preview_active'));
                this.slides[this.options.positionX].style.transform = `translateY(0px)`;

                this.wrap.style.transform = `translateX(-${index * this.options.widthSlide}%)`;
                this.options.positionX = index;

                if ( this.previews.length>0 && document.documentElement.clientWidth > 1024) {
                    this.previews.forEach((item, index) => {

                        item.classList.remove('visible');

                        if (index == this.options.positionX) {
                            item.classList.add('visible');
                            item.children[0].children[0].classList.add('preview_active');
                        }
                    })
                } else {
                    this.slides.forEach(sl => {
                        sl.style.transform = `translateY(0px)`;

                    })

                    this.options.positionY = 0;

                    if (this.counterCurrent) {

                        this.counterCurrent.textContent = this.options.positionY + 1;

                        this.counterTotal.textContent = [...this.slides[this.options.positionX].children].length;
                    }
                }

            })
        })
    }


    changePreview() {
        this.previews.forEach((item, index) => {
            item.addEventListener('click', (e) => {


                item.querySelectorAll('.preview-block__item-inner.preview_active').forEach((item) => item.classList.remove('preview_active'));
                for (const i in item.children) {
                    if (item.children[i] == e.target.closest('.preview-block__item')) {
                        item.children[i].children[0].classList.add('preview_active');
                        this.options.positionY = i;
                        this.slides[this.options.positionX].style.transform = `translateY(-${i * this.options.widthSlide}%)`;
                    }
                }

            })
        })
    };


    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        this.prev.className = `glo-slider__prev${this.index}`;
        this.next.className = `glo-slider__next${this.index}`;
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
        this.prev.textContent = '<'
        this.next.textContent = '>'
    }

    responseInit() {

        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = (pos) => {
            if (pos = true) {

                this.options.positionX = 0;
                this.options.positionY = 0;
                this.wrap.style.transform = `translateX(0)`;
                this.slides[this.options.positionX].style.transform = `translateY(0px)`;


                if (this.activeClass) {
                    for (const item of this.slides) {
                        item.classList.remove(this.activeClass);
                    };
                    this.slides[this.options.positionX].classList.add(this.activeClass);
                }


                if (this.texts.length > 0) {

                    for (const item of this.texts) {
                        item.style.display = 'none';
                    };
                    this.texts[this.options.positionX].style.display = 'block';
                }


                this.previews.forEach((item, index) => {

                    item.classList.remove('visible');

                    if (index == this.options.positionX) {
                        item.classList.add('visible');
                        item.children[0].children[0].classList.add('preview_active');
                    }
                })


                if (this.counterTotal)
                    this.counterTotal.textContent = [...this.slides[0].children].length;

                if (this.counterCurrent)
                    this.counterCurrent.textContent = this.options.positionY + 1;




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
            this.counterCurrent.textContent = this.options.positionX + 1;
    };
}