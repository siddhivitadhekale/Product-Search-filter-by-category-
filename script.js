let products = {
  data: [
    {
      productName: "Regular White T-shirt",
      category: "Topwear",
      price: "30",
      image: "white_shirt.jpg",
    },
    {
      productName: "Beige Printed A-Line Skirt",
      category: "Bottomwear",
      price: "30",
      image: "beige skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "watch",
      price: "49",
      image: "smart_watch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted_top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "jacket",
      price: "129",
      image: "black_leather_jacket.jpg",
    },
    {
      productName: "stylist Pink Trouser",
      category: "Bottomwear",
      price: "89",
      image: "pink_trouser.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "jacket",
      price: "189",
      image: "Brown_jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "grey_pants.jpg",
    },
    {
      productName: "Women  Denim Jacket",
      category: "jacket",
      price: "899",
      image: "Women Blue Washed Denim Jacket.jpg",
    },
    {
      productName: "Women Pink  Watch",
      category: "watch",
      price: "1178",
      image: "Women Pink  Watch.jpg",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("div");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // select all Card

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;

  let elements = document.querySelectorAll(".product-name");

  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });

  console.log(searchInput);
});

window.onload = () => {
  filterProduct("all");
};
