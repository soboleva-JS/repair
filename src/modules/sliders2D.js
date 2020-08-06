import Slider2D from './slider2D.js';

const sliders2D = () => { 

    const carouselDesign = new Slider2D({
    index: '1',
    block: '.designs',
    main: '.designs-slider',
    wrap: '.customWrapDesign',
    positionX: 0,
    positionY: 0,
    next: '.slider-arrow-tablet-mobile.slider-arrow-tablet-mobile_right.desktop-hide', 
    prev: '.slider-arrow-tablet-mobile.slider-arrow-tablet-mobile_left.desktop-hide',
    slidesToShow: 1,
    infinity: true,
    counterCurrent: '.slider-counter-content__current',
    counterTotal: '.slider-counter-content__total',
    btnsSel: '.button_o.designs-nav__item.designs-nav__item_base',
    previewSel: '.preview-block'

});

carouselDesign.init();

};


export default sliders2D;