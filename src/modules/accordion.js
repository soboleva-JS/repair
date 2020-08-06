const accordion = () => {
    const acc = document.querySelector('.accordion');
    const accUl = acc.querySelector('ul');
    const accLi = accUl.querySelectorAll('li');

    const changeActive = (i) => {
        accLi.forEach((item,index)=>{
            if (index === i) {
                item.querySelector('h2').classList.add('msg-active');
                item.querySelector('div').style.opacity = '1';
            } else {
                item.querySelector('h2').classList.remove('msg-active');
                item.querySelector('div').style.opacity = '0';

            }
        })

    } 
    acc.addEventListener('click', (e)=> {
        const target = event.target.closest('li');
        if (target) {

            accLi.forEach((item, i) => {
                if (item === target) {
                    changeActive (i);
                }

            })
        }

    })

}
export default accordion