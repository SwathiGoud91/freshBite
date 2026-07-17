const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const food = foodItems.find(item => item.id === id);

if(food){

document.getElementById("productImage").src=food.image;

document.getElementById("productName").innerText=food.name;

document.getElementById("productDescription").innerText=food.description;

document.getElementById("productPrice").innerText="₹"+food.price;

document.getElementById("productRating").innerText=food.rating;

document.getElementById("productRestaurant").innerText=food.restaurant;

document.getElementById("addCartBtn").onclick=()=>{

addToCart(food.id);

};

document.getElementById("wishlistBtn").onclick=()=>{

addToWishlist(food.id);

};

}