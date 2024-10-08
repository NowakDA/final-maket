let buttonReadMore = document.querySelector(".btn-read-more");
let hideText  = document.querySelectorAll(".hide")
let btnText = document.querySelector(".btn-read-more > span");
buttonReadMore.addEventListener("click", function () {
  hideText.forEach(element => {
    element.classList.toggle("visible")
  })
  
  buttonReadMore.classList.toggle("btn-read-more--rotate");
  btnText.innerHTML =
  btnText.innerHTML === "Скрыть"
      ? (btnText.innerHTML = "Читать далее")
      : (btnText.innerHTML = "Скрыть");
});