let buttonServices = document.querySelector(".services-btn");
let serviseItems = document.querySelector(".services__items");
let buttonText = document.querySelector(".services-btn > span");

buttonServices.addEventListener("click", function () {
  serviseItems.classList.toggle("open")
  buttonServices.classList.toggle("btn-more--rotate");
  buttonText.innerHTML =
    buttonText.innerHTML === "Скрыть"
      ? (buttonText.innerHTML = "Показать все")
      : (buttonText.innerHTML = "Скрыть");
});