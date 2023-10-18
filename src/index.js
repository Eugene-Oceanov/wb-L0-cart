"use strict"

import "./assets/css/style.css";
const cartItemLayout = require("./components/cart-item.js"); // модуль с верстками разных типов карточек
const cartFuncs = require("./components/cart-funcs.js"); // модуль с несколькими математическими операциями для расчета финальных показателей цены, скидки и тд

// ноды модалок
const overlay = document.querySelector(".overlay");

const paymentModal = document.querySelector(".payment-modal");
const closePaymentModal = document.querySelector(".close-payment-modal");
const paymentModalWrapper = document.querySelector(".payment-modal-radio-wrapper");
const paymentModalBtn = document.querySelector(".payment-modal__btn");

const deliveryModal = document.querySelector(".delivery-modal");
const closeDeliveryModal = document.querySelector(".close-delivery-modal");
const deliveryModalPointBtn = document.querySelector(".modal-delivery__point-way");
const deliveryCourierPointBtn = document.querySelector(".modal-delivery__courier-way");
const deliveryModalWrapper = document.querySelector(".modal-delivery-adresses-wrapper");
const deliveryModalBtn = document.querySelector(".delivery-modal__btn");

// ноды для вывода карточек товаров доступных и недоступных к заказу
const cartAviable = document.querySelector(".cart-aviable__container");
const cartNotAviable = document.querySelector(".cart-not-aviable__container");

// ноды в самой корзине для вывода нижеуказанных данных
const cartMainPointAdress = document.querySelector(".cartMainPointAdress");
const cartMainPointRating = document.querySelector(".cartMainPointRating");
const cartMainPointSchedule = document.querySelector(".cartMainPointSchedule");

// ноды в сайдбаре для вывода нижеуказанных данных
const totalPrice = document.querySelector(".totalPrice");
const goodsQuantity = document.querySelector(".goodsQuantity");
const originalPrice = document.querySelector(".originalPrice");
const totalDiscount = document.querySelector(".totalDiscount");
const sidebarPickupPoint = document.querySelector(".sidebarPickupPoint");
const sidebarDeliveryDate = document.querySelector(".sidebarDeliveryDate");

// ноды инпутов
const nameInput = document.querySelector(".cart-main-form__name");
const surnameInput = document.querySelector(".cart-main-form__surname");
const emailInput = document.querySelector(".cart-main-form__email");
const phoneInput = document.querySelector(".cart-main-form__phone");
const innInput = document.querySelector(".cart-main-form__inn");

// url api корзины и пользователя
const cartJSON = "https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/cart-api.json";
const userJSON = "https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/user.json";

// получаем корзину и пользователя из api
const cart = cartFuncs.getData(cartJSON);
const user = cartFuncs.getData(userJSON);

// объект заказа, который должен отправляться на сервер, когда пользователь нажимает кнопку "заказать"
const order = {
    recipient: {},
    point: "",
    goods: [],
    payInfo: {
        postpaid: false
    }
}

// 4 всадника апокалипсиса
let totalPriceSum = 0;
let totalOriginalPrice = 0;
let totalQuantitySum = 0;
let totalDiscountSum = 0;

// перебор массива товаров из api корзины, добавление, удаление, изменение количества товаров в заказе 
cart.then(data => {
    data.forEach(item => {
        if (item.remainder > 0) { // здесь вся логика, касающаяся товаров
            order.goods.push(item); // поскольку чекбоксы заранее в положении checked, сразу добавляем эти товары в заказ
            let orderGood = order.goods[order.goods.indexOf(item)]; //Переменная, которая обращается к элементу заказа, который является именно этим объектом
            const cartItem = cartItemLayout.fullCartItem(item); // отрисовываем верстку товаров корзины доступных к заказу
            cartAviable.append(cartItem);
            const cartItemCheckbox = cartItem.querySelector(".cartItemCheckbox");
            cartItemCheckbox.addEventListener("change", () => { // логика добавления товаров в заказ по нажатию на чекбоксы
                if (cartItemCheckbox.checked) {
                    order.goods.push(item);
                    getTotals(order.goods);
                } else {
                    order.goods.splice(order.goods.indexOf(item), 1);
                    getTotals(order.goods);
                }
            })
            // логика изменения количества товаров в заказе по кнопкам + и - в карточке товара
            const quantityIncrease = cartItem.querySelector(".quantityIncrease");
            const quantityLower = cartItem.querySelector(".quantityLower");
            const quantityValue = cartItem.querySelector(".quantityValue");
            const itemFinalPrice = cartItem.querySelector(".itemFinalPrice");
            const itemOriginalPrice = cartItem.querySelector(".itemOriginalPrice");
            const quantityRemainder = cartItem.querySelector(".quantityRemainder");

            quantityLower.addEventListener("click", () => { // нажатие на минус
                if (orderGood.quantity > 0) {
                    orderGood.quantity--;
                    orderGood.remainder++;
                    quantityValue.textContent = orderGood.quantity;
                    itemFinalPrice.textContent = ((Math.round(orderGood.price - (orderGood.price / 100 * orderGood.discount))) * orderGood.quantity)
                    itemOriginalPrice.textContent = (item.price * item.quantity).toLocaleString("ru");
                    if (quantityRemainder) quantityRemainder.textContent = orderGood.remainder;
                    getTotals(order.goods);
                } else return;
            })
            quantityIncrease.addEventListener("click", () => { //нажатие на плюс
                if (orderGood.quantity < (orderGood.quantity + orderGood.remainder)) {
                    orderGood.quantity++;
                    orderGood.remainder--;
                    quantityValue.textContent = orderGood.quantity;
                    itemFinalPrice.textContent = ((Math.round(orderGood.price - (orderGood.price / 100 * orderGood.discount))) * orderGood.quantity)
                    itemOriginalPrice.textContent = (item.price * item.quantity).toLocaleString("ru");
                    if (quantityRemainder) quantityRemainder.textContent = orderGood.remainder;
                    getTotals(order.goods);
                } else return;
            })
        } else if (item.remainder === 0) { // отрисовываем верстку товаров корзины НЕ доступных к заказу
            const cartItemNotAviable = cartItemLayout.cartItemNotAviable(item);
            cartNotAviable.append(cartItemNotAviable)
        }
    })
    getTotals(order.goods);
});

user.then(data => {
    order.recipient.name = data.name;
    order.recipient.surname = data.surname;
    order.recipient.eMail = data.eMail;
    order.recipient.phone = data.phone;
    order.recipient.inn = data.inn;
    order.point = data.pickUpPoint;
    order.payInfo.card = data.payInfo[0];
    cartMainPointAdress.textContent = order.point.adress;
    cartMainPointRating.textContent = order.point.rating;
    cartMainPointSchedule.textContent = order.point.schedule;
    sidebarPickupPoint.textContent = order.point.adress;

    let paymentCounter = 0;
    let currentCard = "";
    data.payInfo.forEach(item => {
        let paymentItem = cartItemLayout.paySystemItem(item, paymentCounter);
        paymentModalWrapper.append(paymentItem);
        paymentItem.querySelector(".payment-radio-label").addEventListener("click", () => {
            currentCard = item;
        })
        paymentCounter += 1;
    });
    paymentModalBtn.addEventListener("click", () => {
        if (currentCard) {
            order.payInfo.card = currentCard;
            document.querySelector(".cart-main-payment-card-system-icon").innerHTML = cartItemLayout.paySystemIcon(order.payInfo.card.system);
            document.querySelector(".cart-main-payment__card-number").textContent = cartFuncs.hiddenCardNumber(order.payInfo.card.cardNumber);
            document.querySelector(".cart-main-payment__card-validity").textContent = order.payInfo.card.validity;
            document.querySelector(".main-sidebar-payment-card__number").textContent = cartFuncs.hiddenCardNumber(order.payInfo.card.cardNumber);
        }
        paymentModal.style.display = "none";
        overlay.style.display = "none";
        console.log(order);
    })

    let deliveryCounter = 0;
    data.adresses.forEach(item => {
        let adressItem = cartItemLayout.adressItem(item, deliveryCounter);
        deliveryModalWrapper.append(adressItem);
        
    })
})

document.querySelector("#main-sidebar-payment-postpaid__checkbox").addEventListener("change", (e) => {
    if (e.target.checked) {
        let totalPrice = 0;
        order.goods.forEach(orderGood => {
            totalPrice += cartFuncs.getTotalPrice(orderGood.price, orderGood.discount, orderGood.quantity);
        })
        document.querySelector(".cart-sidebar__order-btn").textContent = `Оплатить ${totalPrice.toLocaleString("ru")} сом`;
        order.payInfo.postpaid = true;
    } else {
        document.querySelector(".cart-sidebar__order-btn").textContent = "Заказать";
        order.payInfo.postpaid = false;
    }
})

// логика открытия модалочек с информацией об обратной оплате
document.querySelector(".showMainCartReturnDeliveryModal").addEventListener("click", () => {
    document.querySelector(".cart-main-delivery-return-modal").classList.toggle("d-none");
})
document.querySelector(".showSidebarReturnDeliveryModal").addEventListener("click", () => {
    document.querySelector(".main-sidebar-return-delivery-modal").classList.toggle("d-none");
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
    totalPrice.textContent = totalPriceSum.toLocaleString("ru");
    goodsQuantity.textContent = `${totalQuantitySum.toLocaleString("ru")} товара`;
    originalPrice.textContent = totalOriginalPrice.toLocaleString("ru");
    totalDiscount.textContent = totalDiscountSum.toLocaleString("ru");
}

// обработчики закрытия модалок
overlay.addEventListener("click", () => closeModal());
closePaymentModal.addEventListener("click", () => closeModal());
closeDeliveryModal.addEventListener("click", () => closeModal());

function closeModal() {
    paymentModal.style.display="none";
    deliveryModal.style.display="none";
    overlay.style.display="none";
}