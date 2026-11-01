
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const products = [
  {
    name: "Java Moss",
    category: "Moss",
    price: 100,
    image: "images/java-moss.jpg",
    available: true
  },
  {
    name: "Pelia Moss",
    category: "Moss",
    price: 150,
    image: "images/pelia-moss.jpg",
    available: true
  },
  {
    name: "Singapore Moss",
    category: "Moss",
    price: 150,
    image: "images/singapore-moss.jpg",
    available: true
  },
  {
    name: "Peacock Moss",
    category: "Moss",
    price: 200,
    image: "images/peacock-moss.jpg",
    available: true
  },
  {
    name: "Fissidens Nobilis",
    category: "Moss",
    price: 300,
    image: "images/fissidens.jpg",
    available: true
  }
];

function renderProducts(category = "All") {
  const grid = document.getElementById("productGrid");

  const filtered = category === "All"
    ? products
    : products.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => {
    const message = encodeURIComponent(
      `Hi Sevens Aquatics! I am interested in ${product.name}. Is it available?`
    );

    return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">₹${product.price}</p>
          <p class="status ${product.available ? "" : "sold"}">
            ${product.available ? "● Available" : "● Sold Out"}
          </p>
          ${
            product.available
              ? `<a class="order-btn" target="_blank"
                   href="https://wa.me/${WHATSAPP_NUMBER}?text=${message}">
                   Enquire on WhatsApp
                 </a>`
              : ""
          }
        </div>
      </div>
    `;
  }).join("");
}

function filterProducts(category, button) {
  document.querySelectorAll(".filter").forEach(btn =>
    btn.classList.remove("active")
  );

  button.classList.add("active");
  renderProducts(category);
}

function selectCategory(category) {
  renderProducts(category);

  document.querySelectorAll(".filter").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.textContent.trim() === category
    );
  });
}

document.getElementById("contactButton").href =
  `https://wa.me/${9487726122}`;

renderProducts();
