const burger = document.querySelector('.burger')
const burgerOpenButton = document.querySelector('.burger-btn')
const burgerCloseButton = document.querySelector('.burger-close')
const burgerOverlay = document.querySelector('.overlay')

//открыть
function openBurger() {
  burger.classList.add('active')
  burgerOverlay.classList.add('active')
  document.body.classList.add("scroll-lock");
}

//закрыть
function closeBurger() {
  burger.classList.remove('active')
  burgerOverlay.classList.remove('active')
  document.body.classList.remove("scroll-lock");
}


burgerOpenButton.addEventListener('click', openBurger)
burgerCloseButton.addEventListener('click', closeBurger)

// закрыть при нажатии вне элемента
document.addEventListener('click', function(event) {
  if (!burger.contains(event.target) && !burgerOpenButton.contains(event.target)) {
      closeBurger();
  }
});

// закрыть при нажатии клавиши Esc
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeBurger();
  }
});
