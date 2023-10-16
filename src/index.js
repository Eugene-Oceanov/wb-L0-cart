"use strict"

import "./assets/css/style.css";
const cartItemLayout = require("./components/cart-item.js");
const cartAviable = document.querySelector(".cart-aviable__container");
const cartNotAviable = document.querySelector(".cart-not-aviable__container");
const inputsArr = document.querySelectorAll(".cart-main-form-placeholder-wrapper");
const cart = getCartData();

cart.then(data => {
    data.forEach(item => {
        if (item.remainder > 0) {
            const cartItem = cartItemLayout.fullCartItem(item);
            cartAviable.append(cartItem);
        } else if (item.remainder === 0) {
            const cartItemNotAviable = cartItemLayout.cartItemNotAviable(item);
            cartNotAviable.append(cartItemNotAviable)
        }
    })
});

async function getCartData() {
    let json = await fetch("https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/cart-api.json");
    let data = await json.json();
    return data;
}