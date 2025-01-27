let cart = [];
let liked = [];
let recent = [];
let orders = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = cart.map(item => `<li>${item}</li>`).join("");
}

function searchItems() {
  const query = document.getElementById("search").value.toLowerCase();
  alert(`Searching for: ${query}`);
}
