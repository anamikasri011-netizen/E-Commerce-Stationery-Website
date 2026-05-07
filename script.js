// script.js

let cart = 0;

// Add to Cart
function addCart(){
cart++;
document.getElementById("cartCount").innerText = cart;
alert("Product Added To Cart");
}

// Search Product
document.getElementById("searchBtn").onclick = function(){

let value = document.getElementById("searchInput").value.toLowerCase();
let products = document.querySelectorAll(".product-card");

products.forEach(function(item){

let name = item.innerText.toLowerCase();

if(name.includes(value)){
item.style.display = "block";
}
else{
item.style.display = "none";
}

});

}

// Category Filter
function filterProducts(category){

let products = document.querySelectorAll(".product-card");

products.forEach(function(item){

if(category=="all"){
item.style.display="block";
}
else if(item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

}

// Product Image Popup
function openImage(src){
document.getElementById("imageModal").style.display="flex";
document.getElementById("bigImage").src=src;
}

function closeImage(){
document.getElementById("imageModal").style.display="none";
}

// Account Form Popup
function openAccount(){
document.getElementById("accountModal").style.display="flex";
}

function closeAccount(){
document.getElementById("accountModal").style.display="none";
}

function submitForm(){
alert("Account Created Successfully");
closeAccount();
}

// Welcome
window.onload=function(){
console.log("Welcome to Siddharth Stationery");
}