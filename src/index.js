"use strict"

import "./assets/css/style.css";
const cartItemLayout = require("./components/cart-item.js");
const cartMath = require("./components/cart-math.js")

const cartAviable = document.querySelector(".cart-aviable__container");
const cartNotAviable = document.querySelector(".cart-not-aviable__container");
const totalPrice = document.querySelector(".totalPrice");
const goodsQuantity = document.querySelector(".goodsQuantity");
const originalPrice = document.querySelector(".originalPrice");
const totalDiscount = document.querySelector(".totalDiscount");
const sidebarPickupPoint = document.querySelector(".sidebarPickupPoint");
const sidebarDeliveryDate = document.querySelector(".sidebarDeliveryDate");

const cartJSON = "https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/cart-api.json";
const userJSON = "https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/user.json";

const cart = getCartData(cartJSON);
const user = getCartData(userJSON);

const order = {
    sender: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        inn: ""
    },
    point: "",
    goods: [],
}

// перебираем массив товаров, добавленных в корзину
cart.then(data => {
    data.forEach(item => {
        // отрисовываем верстку товаров корзины доступных к заказу
        if (item.remainder > 0) {
            const cartItem = cartItemLayout.fullCartItem(item);
            cartAviable.append(cartItem);
            const cartItemCheckbox = cartItem.querySelector(".cartItemCheckbox");

            // логика добавления товаров в заказ по нажатию на чекбоксы
            cartItemCheckbox.addEventListener("change", () => {
                if (cartItemCheckbox.checked) order.goods.push(item);
                else order.goods.splice(order.goods.indexOf(item), 1);
            })
            // поскольку чекбоксы заранее в положении checked, сразу добавляем эти товары в заказ
            order.goods.push(item);
            // отрисовываем верстку товаров корзины доступных к заказу
        } else if (item.remainder === 0) {
            const cartItemNotAviable = cartItemLayout.cartItemNotAviable(item);
            cartNotAviable.append(cartItemNotAviable)
        }
    })
});

async function getCartData(url) {
    let json = await fetch(url);
    let data = await json.json();
    return data;
}