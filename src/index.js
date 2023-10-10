"use strict"

import "./assets/css/style.css";
const cartItem = require("./components/cart-item.js");
const basket = document.querySelector(".basket");

async function getCartData() {
    let json = await fetch("https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/cart-api.json");
    let data = await json.json();
    console.log(data)
    data.forEach(item => {
        basket.append(cartItem.fullCartItem(item));
    })
}

getCartData()