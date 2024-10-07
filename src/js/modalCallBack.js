document.addEventListener('DOMContentLoaded', function () {
  const callButtons = document.querySelectorAll('.call');
  const dialog = document.querySelector('.callback');
  const closeButton = document.querySelector('.callback__close-btn');
  const burgerOverlay = document.querySelector('.overlay')

  //открыть 
  callButtons.forEach(button => {
    button.addEventListener('click', function () {
      dialog.showModal();
      dialog.style.transform = 'translateX(0%)';
      burgerOverlay.classList.remove('active')
    });
    
  });

  //закрыть
  closeButton.addEventListener('click', function () {
    dialog.close();
    dialog.style.transform = 'translateX(100%)';

  });

   // закрыть при нажатии вне элемента
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) {
      dialog.close();
      dialog.style.transform = 'translateX(100%)';

    }
  });
});