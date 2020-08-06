import maskPhone from "./maskPhone";


const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {

        const trigger = document.querySelectorAll(triggerSelector);

        const modal = document.querySelector(modalSelector);

        const close = modal.querySelectorAll(closeSelector);



        document.addEventListener('click', (e) => {


            if (e.target === modal) {
                modal.style.visibility = 'hidden';    
                modal.querySelectorAll('.nav-arrow').forEach( item => item.style.visibility = 'hidden');
            }

            trigger.forEach(trig => {

                if (e.target.closest(triggerSelector)) {
                    modal.style.visibility = 'visible';
                    modal.querySelector('.nav-arrow_right').style.visibility = 'visible';

                }
            });

            close.forEach(cl => {
                if (cl === e.target) {
                    modal.style.visibility = 'hidden';
                    modal.querySelectorAll('.nav-arrow').forEach( item => item.style.visibility = 'hidden');
                }

            });

        })


    };

    const bindModalOnlyClose = (modalSelector, closeSelector) => {

        const modal = document.querySelector(modalSelector);
        const close = modal.querySelectorAll(closeSelector);

        document.addEventListener('click', (e) => {

            if (e.target === modal) modal.style.visibility = 'hidden';


            modal.querySelectorAll('.nav-arrow').forEach( item => item.style.visibility = 'hidden');

            close.forEach(cl => {
                if (cl === e.target) {
                    modal.closest('.popup').style.visibility = 'hidden';
                }

            });


        })


    }
    maskPhone('input[name="phone"]');
    bindModal('.link-list-repair', '.popup-repair-types', '.close');
    bindModal('.link-list-menu', '.popup-repair-types', '.close');
    bindModal('.button_wide', '.popup-consultation', '.close');
    bindModal('.checkbox__descr_round-feedback', '.popup-privacy', '.close');
    bindModal('.checkbox__descr', '.popup-privacy', '.close');
    bindModalOnlyClose('.popup-thank', '.close');
    bindModalOnlyClose('.popup-portfolio', '.close');
    bindModal('.transparency-item', '.popup-transparency', '.close');

};

export default modals;