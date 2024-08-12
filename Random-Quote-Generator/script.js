const quotewrapper = document.querySelector(".quote-wrapper");
const RefreshBtn = document.querySelector(".refresh-btn");
const Loader = document.querySelector(".loader");

function showLoader() {
  Loader.classList.add("show");
  quotewrapper.classList.add("hide");
}

function removeLoader() {
  Loader.classList.remove("show");
  quotewrapper.classList.remove("hide");
}

function fetchRandonQuote() {
  showLoader()
  fetch("https://api.quotable.io/quotes/random")
    .then((response) =>
      response.json().then((results) => {
        if (results) {
          removeLoader();
          displayQuote(results[0]);
        }
      })
    )
    .catch((e) => console.log(e));
}

function displayQuote(getQuote) {
  console.log(getQuote);
  quotewrapper.innerHTML = `
        <div class="quote-item">
            <p>${getQuote.author}</p>
            <p>${getQuote.content}</p>
            <p>${getQuote.dateAdded}</p>
            <p>${getQuote.tags[0]}</p>
        </div>
    `;
}

fetchRandonQuote();

RefreshBtn.addEventListener("click", () => {
  fetchRandonQuote();
});
