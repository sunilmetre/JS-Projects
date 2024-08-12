const OpenModel = document.querySelector(".openModel");
const ModelBackground = document.querySelector(".modal-background");
const CloseIcon = document.querySelector(".close-icon");
const Closebtn = document.querySelector(".close");

OpenModel.addEventListener("click", () => {
  ModelBackground.style.display = "block";
});

CloseIcon.addEventListener("click", () => {
  ModelBackground.style.display = "none";
});

Closebtn.addEventListener("click", () => {
  ModelBackground.style.display = "none";
});

window.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target === ModelBackground) {
    ModelBackground.style.display = "none";
  }
});
