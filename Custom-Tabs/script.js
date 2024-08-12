const container = document.querySelector(".container");
const TabButton = document.querySelectorAll(".tab-button");
const Content = document.querySelectorAll(".content");

container.addEventListener("click", (event) => {
  console.log(event.target.dataset.id);

  const currentId = event.target.dataset.id;

  if (currentId) {
    TabButton.forEach((btn) => {
      btn.classList.remove("active");
    });

    event.target.classList.add("active");

    Content.forEach((ctn) => {
      ctn.classList.remove("active");
    });

    const currentElement = document.getElementById(currentId);
    currentElement.classList.add("active");
  }
});
