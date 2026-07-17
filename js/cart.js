// ==============================
// cart.js
// ==============================

// Cart Elements
const cartContainer = document.getElementById("cartItems");
const subtotalElement = document.getElementById("subtotal");
const deliveryElement = document.getElementById("delivery");
const taxElement = document.getElementById("tax");
const totalElement = document.getElementById("grandTotal");


// ==============================
// Local Storage Cart
// ==============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ==============================
// Save Cart
// ==============================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}


// ==============================
// Render Cart
// ==============================

function renderCart() {

    if (!cartContainer) return;


    cartContainer.innerHTML = "";


    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <div class="empty-cart">

                <h2>Your Cart is Empty</h2>

                <p>Add delicious food to continue.</p>

                <a href="menu.html" class="btn primary-btn">
                    Browse Menu
                </a>

            </div>

        `;

        updateSummary();

        return;

    }


    cart.forEach(item => {

        cartContainer.innerHTML += `

        <div class="cart-card">

            <img src="${item.image}" alt="${item.name}">


            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>${item.restaurant}</p>

                <h4>₹${item.price}</h4>

            </div>


            <div class="quantity-box">

                <button onclick="decreaseQuantity(${item.id})">
                    -
                </button>


                <span>${item.quantity}</span>


                <button onclick="increaseQuantity(${item.id})">
                    +
                </button>

            </div>


            <button
                class="remove-btn"
                onclick="removeItem(${item.id})">

                Remove

            </button>


        </div>

        `;

    });


    updateSummary();

}


// ==============================
// Increase Quantity
// ==============================

function increaseQuantity(id) {

    const item = cart.find(food => food.id === id);


    if (item) {

        item.quantity++;

    }


    saveCart();

}


// ==============================
// Decrease Quantity
// ==============================

function decreaseQuantity(id) {

    const item = cart.find(food => food.id === id);


    if (!item) return;


    item.quantity--;


    if (item.quantity <= 0) {

        cart = cart.filter(food => food.id !== id);

    }


    saveCart();

}


// ==============================
// Remove Item
// ==============================

function removeItem(id) {

    cart = cart.filter(food => food.id !== id);

    saveCart();

}


// ==============================
// Order Summary
// ==============================

function updateSummary() {

    let subtotal = 0;


    cart.forEach(item => {

        subtotal += item.price * item.quantity;

    });


    const delivery = subtotal === 0 ? 0 : 49;

    const tax = subtotal * 0.05;

    const grandTotal = subtotal + delivery + tax;


    if (subtotalElement)
        subtotalElement.innerText = "₹" + subtotal.toFixed(2);


    if (deliveryElement)
        deliveryElement.innerText = "₹" + delivery.toFixed(2);


    if (taxElement)
        taxElement.innerText = "₹" + tax.toFixed(2);


    if (totalElement)
        totalElement.innerText = "₹" + grandTotal.toFixed(2);

}


// ==============================
// Initial Load
// ==============================

renderCart();