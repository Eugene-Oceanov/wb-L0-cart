"use strict"

import "./assets/css/style.css";
const cartItem = require("./components/cart-item.js");
const cartAviable = document.querySelector(".cart-aviable__container");


async function getCartData() {
    let json = await fetch("https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/cart-api.json");
    let data = await json.json();
    data.forEach(item => {
        if (item.remainder > 0) cartAviable.append(cartItem.CartItemAviable(item));
    })
}

getCartData()