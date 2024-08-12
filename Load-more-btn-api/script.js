const productContainer = document.querySelector(".product-container");
const LoadMoreBtn = document.querySelector('.load-more-btn');

let currnetStep = 0;

async function fetchListOfProduct(getCurrentStep) {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${getCurrentStep === 0 ? 0: getCurrentStep * 10}`);
    const result = await response.json();

  if (result && result.products) {
      displayProduct(result.products);
    }
  } catch (e) {
    console.log(e);
  }
}

function displayProduct(productList) {
  console.log(productList);
  productList.forEach((productItem) => {
    const productItemWrapper = document.createElement("div");
    const productTitle = document.createElement("p");
    const productThumbnail = document.createElement("img");
    const productDiscription = document.createElement("p");
    const productPrice = document.createElement("p");

    productTitle.textContent = productItem.title;
    productDiscription.textContent = productItem.description;
    productThumbnail.src = productItem.thumbnail;
    productPrice.textContent = productItem.price;

    productItemWrapper.classList.add('product-item-wrapper')
    productTitle.classList.add('product-title');
    productThumbnail.classList.add('product-img');
    productPrice.classList.add('product-price');
    productDiscription.classList.add('product-desc');

    productItemWrapper.appendChild(productThumbnail);
    productItemWrapper.appendChild(productTitle);
    productItemWrapper.appendChild(productPrice);
    productItemWrapper.appendChild(productDiscription);

    productContainer.appendChild(productItemWrapper)
  });

  if(productContainer.children.length === 100){
    LoadMoreBtn.setAttribute("disabled", "true");
  }
  console.log(productContainer.children.length);
}

LoadMoreBtn.addEventListener('click', () =>{
  fetchListOfProduct((currnetStep += 1))
})

fetchListOfProduct(currnetStep);
