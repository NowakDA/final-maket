let button = document.querySelector(".btn-more");
let brend_list = document.querySelector(".brands-list");
let button_text = button.querySelector("span");
let hidden = brend_list.querySelectorAll("#hidden");

button.addEventListener("click", function () {
  hidden.forEach((element) => {
    element.classList.toggle("brands-list__item--hidden");
  });
  button.classList.toggle("btn-more--rotate");
  button_text.innerHTML =
    button_text.innerHTML === "Скрыть"
      ? (button_text.innerHTML = "Показать все")
      : (button_text.innerHTML = "Скрыть");
});
