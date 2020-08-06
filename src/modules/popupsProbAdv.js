const popupProbAdv = () => {
    const problem = () => {

        const problemItems = document.querySelectorAll('div.mobile-hide div.problems-item');


        problemItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                const pop = document.querySelector(`.problems-item-popup-${index+1}`);

                pop.style.visibility = 'visible';
                pop.style.opacity = '1';
                const coordY = item.getBoundingClientRect().top;

                const popHeight = pop.clientHeight;
                item.classList.toggle('active-item');

                if (index != 1) {
                    pop.classList.remove('problems-item-popup-1');
                    pop.classList.remove('problems-item-popup-3');
                    pop.classList.remove('problems-item-popup-4');
                    pop.classList.add('problems-item-popup-2');
                }


                if (coordY < popHeight) {

                    pop.classList.remove('problems-item-popup-2');
                    pop.classList.add('problems-item-popup-1');

                }

            });


            item.addEventListener('mouseleave', (e) => {

                item.classList.toggle('active-item');
                document.querySelectorAll('.mobile-hide.tablet-hide .problems-item-popup').forEach((item, index) => {
                    item.style.opacity = '0.5';
                    item.style.visibility = 'hidden';
                    item.classList.remove('problems-item-popup-1');
                    item.classList.remove('problems-item-popup-2');
                    item.classList.add(`problems-item-popup-${index+1}`);

                })

            });
        })
    }

    problem();


    const formula = () => {

        const advItems = document.querySelectorAll('div.mobile-hide div.formula-item');

        advItems.forEach((item) => {

            item.addEventListener('mouseenter', () => {
                const pop = document.querySelector(`.formula-item-popup-0${item.className.replace(/[^1-9]/g, '')}`);
         
                pop.style.visibility = 'visible';
                pop.style.opacity = '1';
                const coordY = item.getBoundingClientRect().top;
                const popHeight = pop.clientHeight;               
                pop.style.bottom = '80px';
                item.classList.add('active-item');

                if (coordY < popHeight) {
                  
                    pop.style.top = '140px';
                    pop.classList.add('formulaFormula');

                }

            });


            item.addEventListener('mouseleave', () => {

                document.querySelectorAll('.mobile-hide.tablet-hide .formula-item-popup').forEach((it) => {

                    it.style.opacity = '0.5';
                    it.style.visibility = 'hidden';
                    it.classList.remove('formulaFormula');
                    it.style.top = '';

                })
               
                item.classList.remove('active-item');

            });
        })
    }

    formula();
}

export default popupProbAdv;