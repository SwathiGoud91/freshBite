// ======================================
// wishlist.js
// ======================================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// ===============================
// Add to Wishlist
// ===============================

function addToWishlist(id){

    const food = foodItems.find(item => item.id === id);

    if(!food) return;

    const exists = wishlist.find(item => item.id === id);

    if(exists){

        alert("Item already exists in wishlist.");

        return;

    }

    wishlist.push(food);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    showWishlistToast(food.name + " added to Wishlist");

}

// ===============================
// Remove Wishlist Item
// ===============================

function removeWishlist(id){

    wishlist = wishlist.filter(item => item.id !== id);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    renderWishlist();

}

// ===============================
// Display Wishlist
// ===============================

function renderWishlist(){

    const container = document.getElementById("wishlistContainer");

    if(!container) return;

    container.innerHTML = "";

    if(wishlist.length===0){

        container.innerHTML=`

        <div class="empty-cart">

            <h2>No Wishlist Items</h2>

            <p>Add your favourite foods.</p>

            <a href="menu.html"
            class="btn primary-btn">

            Browse Menu

            </a>

        </div>

        `;

        return;

    }

    wishlist.forEach(item=>{

        container.innerHTML +=`

        <div class="food-card">

            <img src="${item.image}">

            <div class="food-content">

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <span class="food-price">

                ₹${item.price}

                </span>

                <button
                class="food-btn"
                onclick="addToCart(${item.id})">

                Add To Cart

                </button>

                <button
                class="remove-btn"
                onclick="removeWishlist(${item.id})">

                Remove

                </button>

            </div>

        </div>

        `;

    });

}

// ===============================
// Toast
// ===============================

function showWishlistToast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerText=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.remove();

    },2500);

}

renderWishlist();