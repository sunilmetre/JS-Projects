const categories = ["All", "Men", "Women", "Kids"];

const content = [
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 2",
  },
  {
    id: "Men",
    label: "Men Shirt 3",
  },
  {
    id: "Men",
    label: "Men Shirt 4",
  },
  {
    id: "Men",
    label: "Men Shirt 5",
  },

  {
    id: "Women",
    label: "Women Shirt 1",
  },
  {
    id: "Women",
    label: "Women Shirt 2",
  },
  {
    id: "Women",
    label: "Women Shirt 3",
  },
  {
    id: "Women",
    label: "Women Shirt 4",
  },
  {
    id: "Women",
    label: "Women Shirt 5",
  },

  {
    id: "Kids",
    label: "Kids Shirt 1",
  },
  {
    id: "Kids",
    label: "Kids Shirt 2",
  },
  {
    id: "Kids",
    label: "Kids Shirt 3",
  },
  {
    id: "Kids",
    label: "Kids Shirt 4",
  },
  {
    id: "Kids",
    label: "Kids Shirt 5",
  },
  {
    id: "Kids",
    label: "Kids Shirt 10",
  },
  {
    id: "Kids",
    label: "Kids Shirt 20",
  },
];

const filterButton = document.querySelector(".filter-button-wrapper");
const contentWrapper = document.querySelector(".content-wrapper");

function createCategory() {
  categories.forEach((category) => {
    const buttonEle = document.createElement("button");
    buttonEle.innerText = category;
    buttonEle.classList.add("filter-button");
    buttonEle.setAttribute("data-filter", category);

    filterButton.appendChild(buttonEle);
  });
}

function createContent() {
  content.forEach((contentItem) => {
    const singleContentItem = document.createElement("div");
    singleContentItem.classList.add("card", contentItem.id);
    singleContentItem.innerText = contentItem.label;

    contentWrapper.appendChild(singleContentItem);
  });
}

createCategory();
createContent();

const allFilterButton = document.querySelectorAll(".filter-button");
const allCards = document.querySelectorAll(".card");

function filterCardsByCategory(extractCurrentCategory, allCards) {
  allCards.forEach((item) => {
    const isShowAllCards = extractCurrentCategory.toLowerCase() === "all";
    const isItemFiltered = !item.classList.contains(extractCurrentCategory);

    if (isItemFiltered && !isShowAllCards) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}

allFilterButton.forEach((singleFilterButton) => {
  singleFilterButton.addEventListener("click", () => {
    const extractCurrentCategory = singleFilterButton.dataset.filter;

    console.log(extractCurrentCategory);
    filterCardsByCategory(extractCurrentCategory, allCards);
  });
});
