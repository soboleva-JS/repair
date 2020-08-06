const tabs = () => {

  //смена слайдов схема работы
  const scheme = () => {
    const block = document.querySelector('.scheme');
    const tabHeader = document.querySelector('#scheme-list');
    const tab = tabHeader.querySelectorAll('.scheme-nav__item');
    const contentItems = block.querySelectorAll('.scheme-description-block');
    const wrap = block.querySelector('.wrap-wrap');

    const toggleTabContent = (index) => {

      for (let i = 0; i < contentItems.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          wrap.style.transform = `translateX(-${1176*i}px)`;
          contentItems[i].classList.add('visible-content-block');

        } else {
          tab[i].classList.remove('active');
          contentItems[i].classList.remove('visible-content-block');

        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target.closest('.scheme-nav__item');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
        return;
      }

    });
  }
  scheme();

  const tab = (blockSel, contentBlockSel, tabHeaderSel, prevSel, nextSel) => {

    const block = document.querySelector(blockSel);
    const contentBlock = document.querySelector(contentBlockSel);
    const tabHeader = block.querySelector(tabHeaderSel);
    const prev = block.querySelector(prevSel);
    const next = block.querySelector(nextSel);
    const sliders = [...tabHeader.children];

    prev.style.visibility = 'hidden';

    block.addEventListener('click', (e) => {

      const contentWidth = +tabHeader.clientWidth;
      const showWidth = +contentBlock.clientWidth;
      let step = Math.floor((contentWidth - showWidth) / (sliders.length - 2));


      if (e.target == next || e.target.parentNode == next) {
        prev.style.visibility = 'visible';

        const t = +tabHeader.style.transform.replace(/[^0-9\-]/g, '');

        if (t >= -(contentWidth - showWidth) + step) tabHeader.style.transform = `translateX(${t-step}px)`;

        if (t < -(contentWidth - showWidth) + 2 * step) next.style.visibility = 'hidden';

      }

      if (e.target == prev || e.target.parentNode == prev) {
        next.style.visibility = 'visible';
        const t = +tabHeader.style.transform.replace(/[^0-9\-]/g, '');
        if (t < 0) tabHeader.style.transform = `translateX(${t+step}px)`;
        if (t > -2 * step) prev.style.visibility = 'hidden';

      }
    });

    window.addEventListener('resize', () => {
      tabHeader.style.transform = `translateX(0px)`;
      prev.style.visibility = 'hidden';
  

    });

  }

  //blockSel, contentBlockSel, tabHeaderSel, prevSel, nextSel
  //Таб виды ремонта
  tab('.repair-types', '.repair-types-tab', '.nav-list-repair', '.nav-arrow_left', '.nav-arrow_right');

  //Таб схема работы
  tab('.scheme', '.nav', '.nav-list', '.nav-arrow_left', '.nav-arrow_right');

  //Таб дизайнерские решения
  tab('.designs', '.nav-designs', '.nav-list-designs', '.nav-arrow_left', '.nav-arrow_right');




  //назначение активного класса 
  const setActiveTubs = (blockSel, wrapSel, nameCl) => {
    const block = document.querySelector(blockSel);
    const wrap = block.querySelector(wrapSel);
    const btns = [...wrap.children];

    block.addEventListener('click', (e) => {
      if (e.target.closest(wrapSel)) {
        btns.forEach(item => {
          if (e.target == item) item.classList.add(nameCl);
          else item.classList.remove(nameCl);
        })
      }
    })


    window.addEventListener('resize', () => {

      btns.forEach((item,i) => {
        item.classList.remove(nameCl);
        if (i==0) item.classList.add(nameCl);
      })


    });

  }

  //   назначение активного класса видам ремонта
  setActiveTubs('.repair-types-tab', '.nav-list-repair', 'active');
   // назначение активного класса дизайнерским решениям
  setActiveTubs('.designs', '.nav-list-designs', 'active');



}

export default tabs;