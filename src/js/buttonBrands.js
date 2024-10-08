let button = document.querySelector(".btn-more");
let brend_list = document.querySelector(".brands-list");
let button_text = document.querySelector(".btn-more > span");

button.addEventListener("click", function () {
  brend_list.classList.toggle("open")
  button.classList.toggle("btn-more--rotate");
  button_text.innerHTML =
    button_text.innerHTML === "Скрыть"
      ? (button_text.innerHTML = "Показать все")
      : (button_text.innerHTML = "Скрыть");
});
