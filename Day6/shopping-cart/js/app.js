const itemsForsale = [
  {
    id: 1,
    title: "Sunset Overdrive",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 50,
    imageURL: `https://steamcdn-a.akamaihd.net/steam/apps/847370/header.jpg?t=1543277053`
  },
  {
    id: 2,
    title: "Nba 2k19",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 40,
    imageURL: `https://steamcdn-a.akamaihd.net/steam/apps/841370/header.jpg?t=1544126080`
  },
  {
    id: 3,
    title: "GTA V",
    description: "Hello GTA",
    price: 60,
    imageURL: `https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg?t=1539304955`
  },
  {
    id: 4,
    title: "PUBG",
    description: "Hello PUBG",
    price: 60,
    imageURL: `https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg?t=1544485873`
  }
];

const shoppingList = [];
const productsContainer = document.querySelector("#products");

const createProductItemDOM = function(item) {
  const columnContainer = document.createElement("div");
  columnContainer.className = "col-4 d-flex align-items-stretch mt-5";

  const card = document.createElement("div");
  card.className = "card border-0";
  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = item.imageURL;
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardBodyTitle = document.createElement("h5");
  cardBodyTitle.className = "card-title";
  cardBodyTitle.textContent = item.title;

  const cardBodyText = document.createElement("p");
  cardBodyText.className = "card-text";
  cardBodyText.textContent = item.description;

  const link = document.createElement("a");
  link.setAttribute("href", "#");
  link.className = "btn btn-primary buy-product";
  link.textContent = "Go somewhere";
  link.setAttribute("data-product-id", item.id);

  cardBody.appendChild(cardBodyTitle);
  cardBody.appendChild(cardBodyText);
  cardBody.appendChild(link);

  card.appendChild(cardBody);
  columnContainer.appendChild(card);
  return columnContainer;
};

const renderProducts = function(products) {
  products.forEach(product => {
    const productDOM = createProductItemDOM(product);
    productsContainer.appendChild(productDOM);
  });
};

const getItem = function(products, productId) {
  const item = products.find(product => {
    return product.id === productId;
  });

  return item;
};

const addToShoppingList = function(shoppingList, item) {
  // console.log(item);
  // shoppingList.push({ item, quantity: 1 });
  shoppingList.push(item);
};

productsContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains("buy-product")) {
    const button = e.target;
    const productId = Number(button.dataset.productId);
    // console.log(productId);
    // Item to be added to cart
    // const item = getItem(itemsForsale, 1);
    const item = getItem(itemsForsale, productId);
    console.log(item);
    addToShoppingList(shoppingList, item);
    console.log(shoppingList);
    renderShoppingList(shoppingList);
  }
});

renderProducts(itemsForsale);

function renderShoppingList(shoppingList) {
  const productList = document.querySelector("#product-list");
  productList.innerHTML = "";

  var quantityPerItem = shoppingList.reduce((obj, item) => {
    if (!obj[item.title]) {
      obj[item.title] = 0;
    }
    obj[item.title] += 1;
    return obj;
  }, {});

  for (prop in quantityPerItem) {
    const product = document.createElement("li");
    product.className =
      "list-group-item d-flex justify-content-between align-items-center";

    product.textContent = prop;
    const quantity = document.createElement("span");
    quantity.textContent = quantityPerItem[prop];
    quantity.className = "badge badge-primary badge-pill";
    product.appendChild(quantity);
    productList.appendChild(product);
  }
}

const a = document.querySelectorAll("a");
a.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
  });
});
