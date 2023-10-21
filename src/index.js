"use strict"

import "./assets/css/style.css";
const layouts = require("./modules/layouts.js"); // модуль с верстками разных типов карточек
const cartFuncs = require("./modules/cart-funcs.js"); // модуль с несколькими математическими операциями для расчета финальных показателей цены, скидки и тд

// ноды модалок
const overlay = document.querySelector(".overlay");
const paymentModal = document.querySelector(".payment-modal");
const paymentModalWrapper = document.querySelector(".payment-modal-radio-wrapper");
const paymentModalBtn = document.querySelector(".payment-modal__btn");
const deliveryModal = document.querySelector(".delivery-modal");
const deliveryModalPointBtn = document.querySelector(".modal-delivery__point-way");
const deliveryCourierPointBtn = document.querySelector(".modal-delivery__courier-way");
const deliveryModalWrapper = document.querySelector(".modal-delivery-adresses-wrapper");
const deliveryModalBtn = document.querySelector(".delivery-modal__btn");

// кнопка отправки заказа 
const sendOrderBtn = document.querySelector(".cart-sidebar__order-btn");

// мелкие ноды
const headerCounter = document.querySelector(".header-nav__cart-counter");

// объект заказа, который должен отправляться на сервер, когда пользователь нажимает кнопку "заказать"
const order = {
    recipient: {},
    point: "",
    goods: [],
    payInfo: {
        postpaid: false
    },
}

// окончательные показатели
let totalPriceSum,
    totalOriginalPrice,
    totalQuantitySum,
    totalDiscountSum = 0;

// перебор массива товаров из api корзины, добавление, удаление, изменение количества товаров в заказе 
cartFuncs.getData("https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/cart-api.json").then(data => {
    data.forEach(item => {
        if (item.remainder > 0) { // здесь вся логика, касающаяся товаров, доступных к заказу
            order.goods.push(item); // поскольку чекбоксы заранее в положении checked, сразу добавляем эти товары в заказ
            headerCounter.textContent = order.goods.length;
            getTotals(order.goods);
            let orderGood = order.goods[order.goods.indexOf(item)]; //Переменная, которая обращается к элементу заказа, который является именно этим объектом

            let cartItem = null;
            window.innerWidth > 400 ? cartItem = layouts.fullCartItem(item) : cartItem = layouts.fullCartItemMob(item)

            document.querySelector(".cart-aviable__container").append(cartItem);
            cartItem.querySelector(".cartItemCheckbox").addEventListener("change", (e) => { // логика добавления/удаления товаров в заказе по нажатию на чекбоксы
                if (e.target.checked) {
                    order.goods.push(item);
                    headerCounter.textContent = order.goods.length;
                    getTotals(order.goods);
                } else {
                    order.goods.splice(order.goods.indexOf(item), 1);
                    headerCounter.textContent = order.goods.length;
                    getTotals(order.goods);
                }
            })
            // логика изменения количества товаров в заказе по кнопкам + и - в карточке товара
            const quantityValue = cartItem.querySelector(".quantityValue");
            const itemFinalPrice = cartItem.querySelector(".itemFinalPrice");
            const itemOriginalPrice = cartItem.querySelector(".itemOriginalPrice");
            const quantityRemainder = cartItem.querySelector(".quantityRemainder");

            cartItem.querySelector(".quantityLower").addEventListener("click", () => { // нажатие на минус
                if (orderGood.quantity > 0) {
                    orderGood.quantity--;
                    orderGood.remainder++;
                    quantityValue.textContent = orderGood.quantity;
                    itemFinalPrice.textContent = ((Math.round(orderGood.price - (orderGood.price / 100 * orderGood.discount))) * orderGood.quantity).toLocaleString("ru");
                    itemOriginalPrice.textContent = (item.price * item.quantity).toLocaleString("ru");
                    if (quantityRemainder) quantityRemainder.textContent = orderGood.remainder;
                    getTotals(order.goods);
                } else return;
            })
            cartItem.querySelector(".quantityIncrease").addEventListener("click", () => { //нажатие на плюс
                if (orderGood.quantity < (orderGood.quantity + orderGood.remainder)) {
                    orderGood.quantity++;
                    orderGood.remainder--;
                    quantityValue.textContent = orderGood.quantity;
                    itemFinalPrice.textContent = ((Math.round(orderGood.price - (orderGood.price / 100 * orderGood.discount))) * orderGood.quantity);
                    itemOriginalPrice.textContent = (item.price * item.quantity).toLocaleString("ru");
                    if (quantityRemainder) quantityRemainder.textContent = orderGood.remainder;
                    getTotals(order.goods);
                } else return;
            })
        } else if (item.remainder === 0) { // отрисовываем верстку товаров корзины НЕ доступных к заказу
            let cartItemNotAviable = null;
            window.innerWidth > 400 ? cartItemNotAviable = layouts.fullCartItem(item) : cartItemNotAviable = layouts.cartItemNotAviableMob(item);
            document.querySelector(".cart-not-aviable__container").append(cartItemNotAviable);
        }
    })
});

// логика обработки данных пользователя
cartFuncs.getData("https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/user.json").then(data => {
    order.point = data.pickUpPoint;
    order.payInfo.card = data.payInfo[0];
    document.querySelector(".cartMainPointAdress").textContent = order.point.adress;
    document.querySelector(".cartMainPointRating").textContent = order.point.rating;
    document.querySelector(".cartMainPointSchedule").textContent = order.point.schedule;
    document.querySelector(".sidebarPickupPoint").textContent = order.point.adress;

    let paymentCounter = 0;
    let currentCard = "";
    data.payInfo.forEach(item => {
        let paymentItem = layouts.paySystemItem(item, paymentCounter);
        paymentModalWrapper.append(paymentItem);
        paymentItem.querySelector(".payment-radio-label").addEventListener("click", () => {
            currentCard = item;
        })
        paymentCounter += 1;
    });
    paymentModalBtn.addEventListener("click", () => {
        if (currentCard) {
            order.payInfo.card = currentCard;
            document.querySelector(".cart-main-payment-card-system-icon").innerHTML = layouts.paySystemIcon(order.payInfo.card.system);
            document.querySelector(".cart-main-payment__card-number").textContent = cartFuncs.hiddenCardNumber(order.payInfo.card.cardNumber);
            document.querySelector(".cart-main-payment__card-validity").textContent = order.payInfo.card.validity;
            document.querySelector(".main-sidebar-payment-card__number").textContent = cartFuncs.hiddenCardNumber(order.payInfo.card.cardNumber);
        }
        paymentModal.style.display = "none";
        overlay.style.display = "none";
        console.log(order);
    })

    let adressesCounter = 0;
    data.adresses.forEach(item => {
        let adressItem = layouts.adressItem(item, adressesCounter);
        deliveryModalWrapper.append(adressItem);
        adressesCounter++;
    })
})

// изменеие текста кнопки заказа по нажатию чекбокса постоплаты
document.querySelector("#main-sidebar-payment-postpaid__checkbox").addEventListener("change", (e) => {
    if (e.target.checked) {
        let totalPrice = 0;
        order.goods.forEach(orderGood => {
            totalPrice += cartFuncs.getTotalPrice(orderGood.price, orderGood.discount, orderGood.quantity);
        })
        sendOrderBtn.textContent = `Оплатить ${totalPrice.toLocaleString("ru")} сом`;
        order.payInfo.postpaid = true;
    } else {
        sendOrderBtn.textContent = "Заказать";
        order.payInfo.postpaid = false;
    }
})

// валидация формы и "отправка" заказа на сервер по нажатию кнопки "заказать"
// ноды инпутов
const nameInput = document.querySelector(".cart-main-form__name");
const surnameInput = document.querySelector(".cart-main-form__surname");
const emailInput = document.querySelector(".cart-main-form__email");
const phoneInput = document.querySelector(".cart-main-form__phone");
// регулярные выражения для валидации
let nameRegExp = /^[a-zA-Zа-яА-Я]+$/;
let emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let phoneRegExp = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

sendOrderBtn.addEventListener("click", () => {
    let controlValidation = "";
    cartFuncs.validateInput(nameRegExp, nameInput, document.querySelector(".cart-main-form__invalid-name"), order.recipient.name, controlValidation);
    cartFuncs.validateInput(nameRegExp, surnameInput, document.querySelector(".cart-main-form__invalid-surname"), order.recipient.surname, controlValidation);
    cartFuncs.validateInput(emailRegExp, emailInput, document.querySelector(".cart-main-form__invalid-email"), order.recipient.eMail, controlValidation);
    cartFuncs.validateInput(phoneRegExp, phoneInput, document.querySelector(".cart-main-form__invalid-phone"), order.recipient.phone, controlValidation);
    if (order.goods.length === 0) {
        alert("Выберите товары");
        return;
    }
    if (controlValidation != "invalid") {
        console.log("Заказ отправлены");
        console.log(order);
    } else return;
})

// обработчики открытия модалок
document.querySelector(".cart-main-delivery__options-btn").addEventListener("click", () => cartFuncs.openModal(deliveryModal, overlay));
document.querySelector(".cart-main-payment__options-btn").addEventListener("click", () => cartFuncs.openModal(paymentModal, overlay));
document.querySelector(".main-sidebar__open-delivery-modal").addEventListener("click", () => cartFuncs.openModal(deliveryModal, overlay));
document.querySelector(".main-sidebar__open-payment-modal").addEventListener("click", () => cartFuncs.openModal(paymentModal, overlay));

// обработчики закрытия модалок
overlay.addEventListener("click", (e) => { if (e.target === overlay) cartFuncs.closeModal(paymentModal, deliveryModal, overlay) });
document.querySelector(".close-payment-modal").addEventListener("click", () => cartFuncs.closeModal(paymentModal, deliveryModal, overlay));
document.querySelector(".close-delivery-modal").addEventListener("click", () => cartFuncs.closeModal(paymentModal, deliveryModal, overlay));

// обработчики скрытия блоков корзины
document.querySelector(".cart-aviable__hide-block-svg").addEventListener("click", (e) => {
    document.querySelector(".cart-aviable__container").classList.toggle("d-none");
    // e.target.style.transform = "rotate(180deg)";
})
document.querySelector(".cart-not-aviable__hide-block-svg").addEventListener("click", (e) => {
    document.querySelector(".cart-not-aviable__container").classList.toggle = "d-none";
    e.target.style.transform = "rotate(180deg)";
})


// функция, которая пересчитывает финальные показатели (общая цена, скидка, количество и тд) и записывает их в сайдбар 
function getTotals(arr) {
    // обнуляем показатели
    totalPriceSum = 0;
    totalQuantitySum = 0;
    totalOriginalPrice = 0;
    totalDiscountSum = 0;
    // проходим по массиву с товарами в заказе и переопределяем показатели
    arr.forEach(orderGood => {
        totalPriceSum += cartFuncs.getTotalPrice(orderGood.price, orderGood.discount, orderGood.quantity);
        totalQuantitySum += orderGood.quantity;
        totalOriginalPrice += orderGood.price * orderGood.quantity;
        totalDiscountSum += cartFuncs.getDiscount(orderGood.price, orderGood.discount, orderGood.quantity);
    })
    // передаем переопределенные показатели в ноды
    document.querySelector(".totalPrice").textContent = totalPriceSum.toLocaleString("ru");
    document.querySelector(".goodsQuantity").textContent = `${totalQuantitySum.toLocaleString("ru")} ${cartFuncs.nounGoods(totalQuantitySum)}`;
    document.querySelector(".originalPrice").textContent = totalOriginalPrice.toLocaleString("ru");
    document.querySelector(".totalDiscount").textContent = totalDiscountSum.toLocaleString("ru");
}