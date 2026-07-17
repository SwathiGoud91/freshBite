// ==============================
// checkout.js
// ==============================

const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", placeOrder);

}

// ==============================
// Place Order
// ==============================

function placeOrder(e) {

    e.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    const payment = document.querySelector(
        'input[name="payment"]:checked'
    );

    if (!name || !phone || !address) {

        alert("Please fill all required fields.");

        return;

    }

    if (!payment) {

        alert("Please select a payment method.");

        return;

    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    let subtotal = 0;

    cart.forEach(item => {

        subtotal += item.price * item.quantity;

    });

    const delivery = 49;
    const tax = subtotal * 0.05;

    const order = {

        orderId: "FB" + Date.now(),

        customer: name,

        phone,

        address,

        payment: payment.value,

        items: cart,

        subtotal,

        delivery,

        tax,

        total: subtotal + delivery + tax,

        status: "Preparing",

        orderDate: new Date().toLocaleString()

    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");

    alert(
        "🎉 Order placed successfully!\n\nOrder ID: " + order.orderId
    );

    window.location.href = "account.html";

}
// ==============================
// Load Checkout Summary
// ==============================

function loadCheckoutSummary() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let subtotal = 0;

    cart.forEach(item => {

        subtotal += item.price * item.quantity;

    });

    const delivery = subtotal === 0 ? 0 : 49;

    const tax = subtotal * 0.05;

    const total = subtotal + delivery + tax;

    const subtotalElement = document.getElementById("subtotal");
    const deliveryElement = document.getElementById("delivery");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("grandTotal");

    if (subtotalElement) subtotalElement.innerText = "₹" + subtotal.toFixed(2);
    if (deliveryElement) deliveryElement.innerText = "₹" + delivery.toFixed(2);
    if (taxElement) taxElement.innerText = "₹" + tax.toFixed(2);
    if (totalElement) totalElement.innerText = "₹" + total.toFixed(2);

}

loadCheckoutSummary();