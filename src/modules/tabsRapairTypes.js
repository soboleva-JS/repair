const tabsRapairTypes = () => {
  let tabData;

  const getReadyJson = (url, cb) => {
    fetch(url)
      .then((response) => {

        if (response.status !== 200) throw new Error('network status not 200');

        return response.json();

      })
      .then((response) => cb(response))
      .catch((error) => console.log(error))
  }


  const showDataInit = (data) => {
    tabData = data;

    data.forEach((item, index) => {

      if (index === 0) document.querySelector('.popup-repair-types-content__head-date').textContent = data[0]['date']
      else {

        const newButton = document.createElement('button');
        newButton.classList.add('button_o');
        newButton.classList.add('popup-repair-types-nav__item');
        newButton.textContent = item['title'];
        document.querySelector('.nav-list-popup-repair').append(newButton);

        showData(tabData, 0);

      }

    })
    document.querySelectorAll('.popup-repair-types-nav__item')[0].classList.add('active');
    document.querySelector('.popup-repair-types-content__head-title').textContent = document.querySelectorAll('.popup-repair-types-nav__item')[0].textContent;
  }

  const showData = (data, i) => {
    document.querySelector('.popup-repair-types-content-table').innerHTML = '';
    data.forEach((item, index) => {
      if (index !== 0) {

        if (i === index - 1) {
          const newTable = document.createElement('table');
          newTable.classList.add('popup-repair-types-content-table__list');
          document.querySelector('.popup-repair-types-content-table').append(newTable);

          const newTbody = document.createElement('tbody');
          newTable.append(newTbody);


          item['priceList'].forEach((it, ind) => {
            const newTr = document.createElement('tr');
            newTr.classList.add('mobile-row');



            newTr.innerHTML = `
    <td class="repair-types-name">${it['typeService']}</td>    
    <td class="repair-types-value">${it['units']}</td>
    <td class="repair-types-value">${it['cost']}</td> 
  `;

            newTbody.append(newTr);
            if (ind === 0) newTable.classList.add(`tab${index}`);


          })
        }

      }

    })

  }


  getReadyJson('./db/db.json', data => showDataInit(data));
  const tabHeader = document.querySelector('.nav-list-popup-repair'); 

  const toggleTabContent = (index) => {
    const tabs = tabHeader.querySelectorAll('.popup-repair-types-nav__item');

    for (let i = 0; i < tabs.length; i++) {
      if (index === i) {
        tabs[i].classList.add('active');
        showData(tabData, i);

      } else {
        tabs[i].classList.remove('active');

      }
    }
  };

  tabHeader.addEventListener('click', (event) => {
    let target = event.target.closest('.popup-repair-types-nav__item');
    document.querySelector('.popup-repair-types-content__head-title').textContent = target.textContent;
    tabHeader.querySelectorAll('.popup-repair-types-nav__item').forEach((item, i) => {
      if (item === target) {
        toggleTabContent(i);
      }
    });
  });




};
export default tabsRapairTypes;