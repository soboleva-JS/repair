const toggleMenu = () => {
  const modalMenu = document.querySelector('.popup-dialog-menu');
  modalMenu.style.visibility = 'hidden';

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 575) {
      if (modalMenu.style.transform == 'translate3d(645px, 0px, 0px)') modalMenu.style.transform = 'translate3d(0px, -100vh, 0px)';
    } else {
      if (modalMenu.style.transform == 'translate3d(0px, -100vh, 0px)') modalMenu.style.transform = 'translate3d(645px, 0px, 0px)';
    }

  });


  const handlerMenu = () => {

    if (window.innerWidth <= 575) {

      if (modalMenu.style.transform == '' || modalMenu.style.transform == 'translate3d(0px, -100vh, 0px)') {
        modalMenu.style.transform = 'translate3d(0px, 0px, 0px)';
        modalMenu.style.visibility = 'visible';
      } else {
        modalMenu.style.transform = 'translate3d(0px, -100vh, 0px)';
        modalMenu.style.visibility = 'hidden';
      }
    } else {

      if (modalMenu.style.transform == '' || modalMenu.style.transform == 'translate3d(645px, 0px, 0px)') {
        modalMenu.style.transform = 'translate3d(0px, 0px, 0px)';
        modalMenu.style.visibility = 'visible';
      } else {
        modalMenu.style.transform = 'translate3d(645px, 0px, 0px)';
        modalMenu.style.visibility = 'hidden';
      }
    };

  };

  const handlerPhone = () => {
    const secondPhone = document.querySelector('.header-contacts__phone-number-accord');
if (secondPhone.style.position == 'absolute'||!secondPhone.style.position) {
  secondPhone.childNodes[0].style.opacity = '1';
  secondPhone.style.position='relative';
} else  {
  secondPhone.childNodes[0].style.opacity = '0';
  secondPhone.style.position = 'absolute';
}
   

  }

  const scroll = function (event) {
    event.preventDefault();
    let link;
    if (event.target.getAttribute('href')) link = document.getElementById(event.target.getAttribute('href').slice(1));
    else link = document.getElementById(event.target.parentNode.getAttribute('href').slice(1));
    link.scrollIntoView({
      behavior: 'smooth'
    });
  };

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.header-contacts__arrow')) {
      handlerPhone();
    }

    if (!e.target.closest('.popup-dialog-menu') && modalMenu.style.transform === 'translate3d(0px, 0px, 0px)') handlerMenu();

    if (e.target.closest('.menu') || e.target.closest('.close-menu')) {
      handlerMenu();
    }


    if (e.target.closest('.popup-menu-nav__item')) {
      handlerMenu();
      scroll(event)
    };

    if (e.target.closest('.button-footer')) scroll(e);

    if (e.target.closest('.link-list-menu')) {
      handlerMenu();
    }
  });
};

export default toggleMenu;