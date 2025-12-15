let cart = JSON.parse(localStorage.getItem('fashoraCart')) || [];

function openCart() {
    const offcanvasElement = document.getElementById('cartOffcanvas');
    if(offcanvasElement) {
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
        bsOffcanvas.show();
    }
}

// "Add to Cart" Click Listener
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-add');
    if (btn) {
        addToCart(btn);
        openCart();
    }
});

function addToCart(button) {
    const card = button.closest('.card') || button.closest('.card-modern');
    if (!card) return;

    const title = card.querySelector('.card-title').innerText;
    const img = card.querySelector('img').src;
    const priceEl = card.querySelector('.card-text') || card.querySelector('.price-tag');
    const priceText = priceEl ? priceEl.innerText : "0";
    const price = parseInt(priceText.replace(/[^\d]/g, ''));

    const existingItem = cart.find(item => item.id === title);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: title, img: img, price: price, quantity: 1 });
    }

    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('fashoraCart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cart-count');

    // Update Badge
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    if(cartCount) {
        cartCount.innerText = totalQty;
        cartCount.style.display = totalQty > 0 ? 'block' : 'none';
    }

    // Empty State
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-5 text-muted">
                <i class="bi bi-cart-x fs-1 mb-3 d-block"></i>
                <p>Your bag is empty.</p>
            </div>`;
        cartTotal.innerText = 'Rs. 0';
        return;
    }

    // Render Items
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'd-flex align-items-center gap-3 bg-white p-2 rounded shadow-sm border';
        cartItem.innerHTML = `
            <img src="${item.img}" alt="Product" class="rounded" style="width: 60px; height: 60px; object-fit: cover;">
            <div class="flex-grow-1">
                <p class="mb-0 fw-bold small text-truncate" style="max-width: 150px;">${item.id}</p>
                <p class="mb-0 text-gold small">Rs. ${item.price}</p>
            </div>
            <div class="d-flex align-items-center gap-2">
                <button class="btn btn-sm btn-light border" onclick="updateQuantity(${index}, -1)">-</button>
                <span class="small fw-bold">${item.quantity}</span>
                <button class="btn btn-sm btn-light border" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <button onclick="removeFromCart(${index})" class="btn btn-sm text-danger"><i class="bi bi-trash"></i></button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.innerText = 'Rs. ' + total;
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        saveAndRender();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveAndRender();
}

/* --- 2. CHECKOUT LOGIC --- */
const checkoutBtn = document.querySelector('.checkout-btn');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert("Your bag is empty!");
        } else {
            cart = [];
            saveAndRender();
            const offcanvasElement = document.getElementById('cartOffcanvas');
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if(bsOffcanvas) bsOffcanvas.hide();
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        }
    });
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();
});
