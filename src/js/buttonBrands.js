document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.btn-more');
  const brend_list = document.querySelector('.brands-list');
  const button_text = button.querySelector('span');
  const hidden = brend_list.querySelectorAll('#hidden');

  button.addEventListener('click', function () {
    hidden.forEach((element) => {
      element.classList.toggle('brands-list__item--hidden');
    });
    //const section = document.getElementsByClassName('brands swiper');
    //section.style.height = 100;
    //section.style.height = 'fit-content';
    button.classList.toggle('btn-more--rotate');
    button_text.innerHTML =
      button_text.innerHTML === 'Скрыть'
        ? 'Показать все'
        : 'Скрыть';
  });
});