// ==============================
// app.js
// ==============================

const featuredFoods = document.getElementById("featuredFoods");
const searchInput = document.querySelector(".search-box input");
const cartCount = document.getElementById("cartCount");


// ------------------------------
// Local Storage - Cart
// ------------------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ------------------------------
// Display Food Cards
// ------------------------------

function displayFoods(items = foodItems) {

    if (!featuredFoods) return;

    featuredFoods.innerHTML = "";

    items.forEach(food => {

        featuredFoods.innerHTML += `

        <div class="food-card">

            <img src="${food.image}" alt="${food.name}">

            <div class="food-content">

                <h3>${food.name}</h3>

                <p>${food.description}</p>

                <div class="food-bottom">

                    <span class="food-price">₹${food.price}</span>

                    <span class="rating">
                        ⭐ ${food.rating}
                    </span>

                </div>

                <button
                    class="food-btn"
                    onclick="addToCart(${food.id})">

                    Add To Cart

                </button>

            </div>

        </div>

        `;

    });

}


// ------------------------------
// Search Food
// ------------------------------

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const filtered = foodItems.filter(food =>

            food.name.toLowerCase().includes(value) ||

            food.category.toLowerCase().includes(value) ||

            food.restaurant.toLowerCase().includes(value)

        );

        displayFoods(filtered);

    });

}


// ------------------------------
// Add To Cart
// ------------------------------

function addToCart(id) {

    const food = foodItems.find(item => item.id === id);

    const existing = cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } 
    else {

        cart.push({

            ...food,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();

    showToast(food.name + " added to cart");

}


// ------------------------------
// Update Cart Count
// ------------------------------

function updateCartCount(){

    if(!cartCount) return;


    let total = 0;


    cart.forEach(item => {

        total += item.quantity;

    });


    cartCount.textContent = total;

}


// ------------------------------
// Toast Message
// ------------------------------

function showToast(message){

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;


    document.body.appendChild(toast);


    setTimeout(()=>{

        toast.classList.add("show");

    },100);


    setTimeout(()=>{

        toast.remove();

    },3000);

}


// ------------------------------
// Load Page
// ------------------------------

displayFoods();

updateCartCount();