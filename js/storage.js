// ==========================================
// storage.js
// LocalStorage Utility Functions
// ==========================================

// ---------- CART ----------

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
    localStorage.removeItem("cart");
}

// ---------- WISHLIST ----------

function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function clearWishlist() {
    localStorage.removeItem("wishlist");
}

// ---------- USER ----------

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

function logoutUser() {
    localStorage.removeItem("currentUser");
}

// ---------- REGISTERED USERS ----------

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// ---------- ORDERS ----------

function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

function saveOrders(orders) {
    localStorage.setItem("orders", JSON.stringify(orders));
}

// ---------- GENERIC HELPERS ----------

function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function deleteData(key) {
    localStorage.removeItem(key);
}

// ---------- INITIALIZE ----------

if (!localStorage.getItem("cart")) {
    saveCart([]);
}

if (!localStorage.getItem("wishlist")) {
    saveWishlist([]);
}

if (!localStorage.getItem("orders")) {
    saveOrders([]);
}

if (!localStorage.getItem("users")) {
    saveUsers([]);
}