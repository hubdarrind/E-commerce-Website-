const allProducts = [
  {
    id: 1,
    title: "Retro Clubmaster Sunglasses",
    price: 1799,
    img: "images/Product images/glasses-newproduct.jpg",
    category: "men glasses",
    isNew: true,
  },
  {
    id: 2,
    title: "Classic Aviator Sunglasses",
    price: 1699,
    img: "images/Product images/AviatorShades-newproduct.jpg",
    category: "men glasses",
    isNew: true,
  },
  {
    id: 20,
    title: "Black Hexagon Sunglasses",
    price: 1799,
    img: "images/Product images/1BOY-GLASS.jpg",
    category: "men glasses",
  },
  {
    id: 21,
    title: "Classic Square Black Glasses",
    price: 1699,
    img: "images/Product images/2BOY-GLASS.jpg",
    category: "men glasses",
  },
  {
    id: 22,
    title: "Metal Frame Aviator Glasses",
    price: 1899,
    img: "images/Product images/3BOY-GLASS.jpg",
    category: "men glasses",
  },
  {
    id: 23,
    title: "Ray-Ban Meta Wayfarer Glasses",
    price: 5000,
    img: "images/Product images/4BOY-GLASS.jpg",
    category: "men glasses",
  },
  {
    id: 24,
    title: "Gentle Monster Black Glasses",
    price: 2200,
    img: "images/Product images/1LADIES-GLASS.jpg",
    category: "women glasses",
  },
  {
    id: 25,
    title: "Celine Gold Oval Glasses",
    price: 2500,
    img: "images/Product images/2LADIES-GLASS.jpg",
    category: "women glasses",
  },
  {
    id: 26,
    title: "Gradient Pink Sunglasses",
    price: 1900,
    img: "images/Product images/3LADIES-GLASS.jpg",
    category: "women glasses",
  },
  {
    id: 3,
    title: "Sapphire Crystal Bracelet",
    price: 1199,
    img: "images/Product images/brclt-newproduct.jpg",
    category: "women jewelry",
    isNew: true,
  },
  {
    id: 27,
    title: "Royal Blue Crystal Bracelet",
    price: 1099,
    img: "images/Product images/1BRCLT.jpg",
    category: "women jewelry",
  },
  {
    id: 28,
    title: "Butterfly Jade Bracelet",
    price: 999,
    img: "images/Product images/2BRCLT.jpg",
    category: "women jewelry",
  },
  {
    id: 29,
    title: "Gold Rope Chain Bracelet",
    price: 1200,
    img: "images/Product images/3BRCLT.jpg",
    category: "women jewelry",
  },
  {
    id: 30,
    title: "Green Bead Charm Bracelet",
    price: 1100,
    img: "images/Product images/4BRCLT.jpg",
    category: "women jewelry",
  },
  {
    id: 4,
    title: "Strathberry Tote Bag",
    price: 3999,
    img: "images/Product images/Luxury designer handbags _ Strathberry United States.jpg",
    category: "women bag",
    isNew: true,
  },
  {
    id: 16,
    title: "Kangaroo Tan Handbag",
    price: 3499,
    img: "images/Product images/1LADIES-BAG (1).jpg",
    category: "women bag",
  },
  {
    id: 17,
    title: "Deido Navy Blue Bag",
    price: 3999,
    img: "images/Product images/2LADIES-BAG.jpg",
    category: "women bag",
  },
  {
    id: 18,
    title: "Emerald Green Tote Bag",
    price: 4199,
    img: "images/Product images/3LADIES-BAG.jpg",
    category: "women bag",
  },
  {
    id: 19,
    title: "Bagco Beige Bag Set",
    price: 4500,
    img: "images/Product images/4LADIES-BAG.jpg",
    category: "women bag",
  },
  {
    id: 5,
    title: "Brown Leather Fossil Watch",
    price: 3299,
    img: "images/Product images/1MAN-WATCH.jpg",
    category: "men watch",
  },
  {
    id: 6,
    title: "Geneva Black Minimalist Watch",
    price: 3899,
    img: "images/Product images/2MAN-WATCH.jpg",
    category: "men watch",
  },
  {
    id: 7,
    title: "CRRJU Blue Chrono Watch",
    price: 4200,
    img: "images/Product images/3MAN-WATCH.jpg",
    category: "men watch",
  },
  {
    id: 8,
    title: "Benyar Sport Blue Watch",
    price: 4500,
    img: "images/Product images/4MAN-WATCH.jpg",
    category: "men watch",
  },
  {
    id: 9,
    title: "LIGE Luxury Gold Watch",
    price: 5100,
    img: "images/Product images/5MAN-WATCH.jpg",
    category: "men watch",
  },
  {
    id: 10,
    title: "Poedagar Silver Watch",
    price: 4800,
    img: "images/Product images/6MAN-WATCH.jpg",
    category: "men watch",
  },
  {
    id: 11,
    title: "Diamond Gold Ladies Watch",
    price: 3899,
    img: "images/Product images/1LADIES-WATCH.jpg",
    category: "women watch",
  },
  {
    id: 12,
    title: "Emporio Armani Silver Watch",
    price: 3499,
    img: "images/Product images/2LADIES-WATCH.jpg",
    category: "women watch",
  },
  {
    id: 13,
    title: "Fossil Rose Gold Watch",
    price: 3999,
    img: "images/Product images/3LADIES-WATCH.jpg",
    category: "women watch",
  },
 
];

let cart = JSON.parse(localStorage.getItem("fashoraCart")) || [];

function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.classList.toggle("open");
  if (chatWindow.classList.contains("open")) {
    setTimeout(() => document.getElementById("chatInput").focus(), 300);
  }
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  input.value = "";

  setTimeout(() => {
    let reply = "I can help with Orders, Shipping, or Product details.";
    const m = msg.toLowerCase();
    if (m.includes("hi") || m.includes("hello"))
      reply = "Hello! Welcome to Fashora Fashion. How can I assist you today?";
    else if (m.includes("price"))
      reply = "All prices are in PKR. We offer the best market rates!";
    else if (m.includes("delivery"))
      reply = "We deliver nationwide within 3-5 working days.";
    else if (m.includes("return"))
      reply = "You can return items within 30 days if unused.";
    addMessage(reply, "bot");
  }, 600);
}

function addMessage(text, sender) {
  const chatBody = document.getElementById("chatBody");
  const div = document.createElement("div");
  div.className = `chat-msg ${sender}`;
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function renderProducts(products) {
  const newArrivalsContainer = document.getElementById("new-arrivals-container");
  const allProductsContainer = document.getElementById("all-products-container");

  if (!allProductsContainer) return;

  if (newArrivalsContainer) newArrivalsContainer.innerHTML = "";
  allProductsContainer.innerHTML = "";

  if (products.length === 0) {
      allProductsContainer.innerHTML = `
          <div class="col-12 text-center py-5 reveal active w-100">
              <i class="bi bi-search display-1 text-muted mb-3 opacity-25"></i>
              <h3 class="font-bebas text-muted">Product Not Found</h3>
              <p class="text-muted">We couldn't find what you're looking for. Try another keyword.</p>
          </div>
      `;
      return;
  }

  products.forEach((product) => {
    const cardHTML = `
            <div class="col product-card-container reveal">
                <div class="card-modern h-100" onclick="addToCartDirectly('${product.title.replace(/'/g,"")}', ${product.price}, '${product.img}')">
                    <div class="img-wrapper">
                        <img src="${product.img}" alt="${product.title}" loading="lazy">
                        ${product.isNew ? '<span class="position-absolute top-0 start-0 m-2 badge bg-dark text-white rounded-pill px-3">NEW</span>' : ""}
                        <button class="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow-sm btn-add">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${product.title}</h5>
                        <p class="price-tag mb-0">Rs. ${product.price}</p>
                    </div>
                </div>
            </div>
        `;
    if (product.isNew && newArrivalsContainer)
      newArrivalsContainer.innerHTML += cardHTML;
    else allProductsContainer.innerHTML += cardHTML;
  });

  setupScrollObserver();
}

function setupScrollObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function addToCartDirectly(title, price, img) {
  const existingItem = cart.find((item) => item.id === title);
  if (existingItem) existingItem.quantity++;
  else cart.push({ id: title, img: img, price: price, quantity: 1 });
  saveAndRender();
  const offcanvasElement = document.getElementById("cartOffcanvas");
  if (offcanvasElement) new bootstrap.Offcanvas(offcanvasElement).show();
}

function saveAndRender() {
  localStorage.setItem("fashoraCart", JSON.stringify(cart));
  updateCartDisplay();
}

function updateCartDisplay() {
  const container = document.getElementById("cartItemsContainer");
  const badge = document.getElementById("cart-count");
  const totalEl = document.getElementById("cartTotal");
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (badge) {
    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? "block" : "none";
  }
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<div class="text-center py-5 text-muted"><p>Your bag is empty.</p></div>`;
    totalEl.innerText = "Rs. 0";
    return;
  }
  container.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    container.innerHTML += `
            <div class="d-flex align-items-center gap-3 bg-white p-2 rounded shadow-sm border mb-2">
                <img src="${item.img}" class="rounded" style="width: 50px; height: 50px; object-fit: contain;">
                <div class="flex-grow-1"><p class="mb-0 fw-bold small text-truncate text-dark" style="max-width: 140px;">${item.id}</p><p class="mb-0 text-gold small">Rs. ${item.price}</p></div>
                <div class="d-flex align-items-center gap-2"><button class="btn btn-sm btn-light border text-dark" onclick="updateQty(${index}, -1)">-</button><span class="small fw-bold text-dark">${item.quantity}</span><button class="btn btn-sm btn-light border text-dark" onclick="updateQty(${index}, 1)">+</button></div>
                <button onclick="removeFromCart(${index})" class="btn btn-sm text-danger"><i class="bi bi-trash"></i></button>
            </div>
        `;
  });
  totalEl.innerText = "Rs. " + total;
}

function updateQty(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveAndRender();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveAndRender();
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Empty!");
    return;
  }
  const c = bootstrap.Offcanvas.getInstance(
    document.getElementById("cartOffcanvas")
  );
  if (c) c.hide();
  new bootstrap.Modal(document.getElementById("checkoutModal")).show();
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const b = e.target.querySelector('button[type="submit"]');
  b.innerText = "Processing...";
  setTimeout(() => {
    bootstrap.Modal.getInstance(
      document.getElementById("checkoutModal")
    ).hide();
    cart = [];
    saveAndRender();
    new bootstrap.Modal(document.getElementById("successModal")).show();
    b.innerText = "CONFIRM ORDER";
    e.target.reset();
  }, 1500);
}

function filterProducts() {
  const searchInput = document.getElementById("navSearchInput").value.toLowerCase();
  const categorySelect = document.getElementById("categorySelect");
  const sortSelect = document.getElementById("sortSelect");

  let filtered = allProducts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchInput);
    let matchesCategory = true;
    if (categorySelect && categorySelect.value !== 'all') {
        matchesCategory = p.category.includes(categorySelect.value);
    }
    return matchesSearch && matchesCategory;
  });

  if (sortSelect) {
    if (sortSelect.value === 'low-high') filtered.sort((a, b) => a.price - b.price);
    if (sortSelect.value === 'high-low') filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);

  if (searchInput.length > 2 && document.getElementById("all-products-container"))
    document.getElementById("all-products-container").scrollIntoView({ behavior: "smooth" });
}

function toggleTheme() {
  const b = document.body;
  const i = document.querySelector("#theme-toggle-btn i");
  if (b.getAttribute("data-theme") === "dark") {
    b.removeAttribute("data-theme");
    i.className = "bi bi-moon-fill fs-5";
    localStorage.setItem("fashoraTheme", "light");
  } else {
    b.setAttribute("data-theme", "dark");
    i.className = "bi bi-sun-fill fs-5";
    localStorage.setItem("fashoraTheme", "dark");
  }
}
const savedTheme = localStorage.getItem("fashoraTheme");
if (savedTheme === "dark") toggleTheme();
document.addEventListener("DOMContentLoaded", updateCartDisplay);
document.addEventListener("DOMNodeInserted", function (e) {
  if (
    e.target.id === "product_place_holder" ||
    (e.target.closest && e.target.closest("#product_place_holder"))
  ) {
    renderProducts(allProducts);
  }
});
