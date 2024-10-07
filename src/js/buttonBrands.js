document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.btn-more');
  const brend_list = document.querySelector('.brands-list');
  const button_text = button.querySelector('span');
  //const hidden = brend_list.querySelectorAll('#hidden');

  button.addEventListener('click', function () {
    //hidden.forEach((element) => {
    //  element.classList.toggle('brands-list__item--hidden');
    //});
    const section = document.getElementById('hiding_list');
    button.classList.toggle('btn-more--rotate');
    let isOpened = button_text.innerHTML === 'Скрыть';
    section.style.height = isOpened
    ? '222px'
    : 'fit-content';

    button_text.innerHTML = isOpened
        ? 'Показать все'
        : 'Скрыть';    
  });
});