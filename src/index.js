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
    recipient: {
        name: "",
        surname: "",
        eMail: "",
        phone: "",
        inn: "",
        payInfo: []
    },
    point: {
        adress: "",
        shedule: "",
        rating: 0
    },
    goods: [],
}

let totalPriceSum = 0;
let totalOriginalPrice = 0;
let totalQuantitySum = 0;
let totalDiscountSum = 0;

// перебираем массив товаров, добавленных в корзину
cart.then(data => {
    data.forEach(item => {

        if (item.remainder > 0) { // отрисовываем верстку товаров корзины доступных к заказу
            const cartItem = cartItemLayout.fullCartItem(item);
            cartAviable.append(cartItem);
            const cartItemCheckbox = cartItem.querySelector(".cartItemCheckbox");

            cartItemCheckbox.addEventListener("change", () => { // логика добавления товаров в заказ по нажатию на чекбоксы
                if (cartItemCheckbox.checked) order.goods.push(item);
                else order.goods.splice(order.goods.indexOf(item), 1);
            })
            order.goods.push(item); // поскольку чекбоксы заранее в положении checked, сразу добавляем эти товары в заказ
        } else if (item.remainder === 0) { // отрисовываем верстку товаров корзины НЕ доступных к заказу
            const cartItemNotAviable = cartItemLayout.cartItemNotAviable(item);
            cartNotAviable.append(cartItemNotAviable)
        }
    })

    order.goods.forEach(orderGood => {
        totalPriceSum += cartMath.getTotalPrice(orderGood.price, orderGood.discount, orderGood.quantity);
        totalQuantitySum += orderGood.quantity;
        totalOriginalPrice += orderGood.price * orderGood.quantity;
        totalDiscountSum += cartMath.getDiscount(orderGood.price, orderGood.discount, orderGood.quantity);
    })
    totalPrice.textContent = totalPriceSum.toLocaleString("ru");
    goodsQuantity.textContent = `${totalQuantitySum.toLocaleString("ru")} товара`;
    originalPrice.textContent = totalOriginalPrice.toLocaleString("ru");
    totalDiscount.textContent = totalDiscountSum.toLocaleString("ru");
});

user.then(data => {
    order.recipient.name = data.name;
    order.recipient.surname = data.surname;
    order.recipient.eMail = data.eMail;
    order.recipient.phone = data.phone;
    order.recipient.inn = data.inn;
    order.recipient.payInfo.push(...data.payInfo);
})

async function getCartData(url) {
    let json = await fetch(url);
    let data = await json.json();
    return data;
}