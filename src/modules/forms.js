const forms = () => {

  const form = document.querySelectorAll('form');

  const input = document.querySelectorAll('input');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(body)
    });
  };

  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    })
  }


  document.querySelectorAll('input[name="name"]').forEach(item =>

    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^а-яёa-z]/gi, '');
    }))
  form.forEach(item => {

    item.addEventListener('submit', (e) => {

      if (item.querySelector('.customSpanPolicy')) item.querySelector('.customSpanPolicy').remove();

      e.preventDefault();
      if (item.querySelector('.checkbox__input').checked && item.querySelector('input[name="phone"]').value.length > 12) {

        let statusMessage = document.createElement('div');
        statusMessage.style.color = 'black';

        statusMessage.classList.add('status');
        item.appendChild(statusMessage);
        statusMessage.textContent = message.loading;

        const data = new FormData(item);
        let body = {};


        data.forEach((val, key) => body[key] = val);

        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error('status error not 200');
            }

            document.querySelectorAll('.popup').forEach(item => {
              item.style.visibility = 'hidden';
            })


            document.querySelector('.popup-thank').style.visibility = 'visible';
          })
          .catch((error) => {
            console.log('error: ', error);
            document.querySelector('.status').textContent = message.failure;
          })
          .finally(() => {
            clearInputs();
            setTimeout(() => {
              document.querySelector('.status').remove();
            }, 1000);
            item.querySelector('.checkbox__input').checked = false;

          })
      } else if (!item.querySelector('.checkbox__input').checked && item.querySelector('input[name="phone"]').value.length > 12) {
        const newSpan = document.createElement('span');
        newSpan.textContent = 'Необходимо cогласиться ';
        newSpan.style.color = 'red';
        newSpan.classList.add('customSpanPolicy');
        item.querySelector('.checkbox__descr').prepend(newSpan);
        setTimeout(() => {
          newSpan.remove()
        }, 2000);
      }


    })
  })

};

export default forms;