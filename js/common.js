// ======================================
// common.js
// Shared functions for all pages
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    updateLoginButton();
});

// ==============================
// Update Cart Count
// ==============================

function updateCartBadge() {

    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const total = cart.reduce((sum, item) => {
        return sum + (item.quantity || 1);
    }, 0);

    cartCount.textContent = total;
}

// ==============================
// Update Login Button
// ==============================

function updateLoginButton() {

    const loginButton = document.getElementById("loginButton");

    if (!loginButton) return;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {

        loginButton.textContent = currentUser.name;

        loginButton.href = "account.html";

    } else {

        loginButton.textContent = "Login";

        loginButton.href = "login.html";

    }
}