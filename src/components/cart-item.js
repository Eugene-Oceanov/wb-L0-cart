const cartFuncs = require("./cart-funcs.js");

module.exports = {
    fullCartItem: function (item) {
        let finalPrice = (Math.round(item.price - (item.price / 100 * item.discount))) * item.quantity;
        const cartItem = document.createElement("DIV");
        cartItem.classList.add("cart-item", "d-flex");
        cartItem.innerHTML = `
            <input type="checkbox" class="cartItemCheckbox" id="cart-item-${item.id}__cb" checked>
            <label for="cart-item-${item.id}__cb" class="cart-item__checkbox d-flex jc-space-between cb-label"></label>
            <div class="cart-item-wrapper d-flex">
                <a href="#"><img src="${item.img}" alt="${item.title}" class="cart-item-info__img"></a>
                <div class="cart-item-info d-flex jc-space-between">
                    <div class="cart-item-info-description">
                        <h2 class="cart-item__title">${item.title}</h2>
                        <div class="cart-item-properties d-flex">
                            ${item.color ? `<p class="cart-item-properties__item">Цвет: ${item.color}</p>` : ""}
                            ${item.size ? `<p class="cart-item-properties__item">Размер: ${item.size}</p>` : ""}
                        </div>
                        <p class="cart-item__stock">${item.stock}</p>
                        <p class="cart-item__manufacturer">${item.manufacturer}</p>
                    </div>
                    <div class="cart-item-options d-flex jc-space-between">
                        <div class="cart-item-options-panel">
                            <div class="cart-item-options-panel-quantity d-flex jc-space-between ai-center">
                                <p class="cart-item-options-panel__quantity-lower quantityLower cursor-pointer">−</p>
                                <p class="cart-item-options-panel__quantity-value quantityValue">${item.quantity}</p>
                                <p class="cart-item-options-panel__quantity-increase quantityIncrease cursor-pointer">+</p>
                            </div>
                            ${item.remainder <= 3 ? `<p class="cart-item-options-panel__remainder">Осталось <span class="quantityRemainder">${item.remainder}</span> шт.</p>` : ""}
                            <div class="cart-item-options-panel__buttons d-flex jc-end">
                                <svg class="cart-item-options-panel__like-btn cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/></svg>

                                <svg class="cart-item-options-panel__remove-btn cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/></svg>
                            </div>
                        </div>
                        <div class="cart-item-options-price d-flex fd-column ai-end">
                            <p class="cart-item-options-price__final"><span class="itemFinalPrice">${finalPrice.toLocaleString("ru")}</span> сом</p>
                            <p class="cart-item-options-price__original"><span class="itemOriginalPrice">${(item.price * item.quantity).toLocaleString("ru")}</span> сом</p>
                        </div>
                    </div>
                </div>
            </div>`;
        return cartItem;
    },

    cartItemNotAviable: function (item) {
        const cartItemNotAviable1 = document.createElement("DIV");
        cartItemNotAviable1.classList.add("cart-item-not-aviable", "d-flex", "jc-space-between");
        cartItemNotAviable1.innerHTML = `
            <div class="cart-item-not-aviable-info d-flex">
                <a href="#"><img src="${item.img}" alt="${item.title}" class="cart-item-not-aviable-info__img"></a>
                <div class="cart-item-not-aviable-info-description">
                    <h2 class="cart-item-not-aviable__title">${item.title}</h2>
                    <div class="cart-item-not-aviable-properties d-flex">
                        ${item.color ? `<p class="cart-item-not-aviable-properties__item">Цвет: ${item.color}</p>` : ""}
                        ${item.size ? `<p class="cart-item-not-aviable-properties__item">Размер: ${item.size}</p>` : ""}
                    </div>
                </div>
            </div>
            <div class="cart-item-not-aviable-options d-flex">
                <svg class="cart-item-options-panel__like-btn cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/></svg>

                <svg class="cart-item-options-panel__remove-btn cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/></svg>
            </div>`;
        return cartItemNotAviable1;
    },

    paySystemItem: function (item, counter) {
        const paySystemItem = document.createElement("DIV");
        paySystemItem.classList.add("payment-modal-item", "modal-item");
        paySystemItem.innerHTML = `<input type="radio" name="modal-radio payment-modal-radio" id="radio${counter}">
                                    <label for="radio${counter}" class="radio-label payment-radio-label d-flex ai-center cursor-pointer">
                                        <div class="pseudo-radio"></div>${this.paySystemIcon(item.system)}${cartFuncs.hiddenCardNumber(item.cardNumber)}
                                    </label>`;
        return paySystemItem;
    },

    paySystemIcon: function (title) {
        if (title == "mir") {
            return `<svg class="pay-system-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="11" viewBox="0 0 30 11" fill="none">
                <path d="M16.682 2.34377L14.8652 6.2583H14.6814V1.50031H12.0859V9.50239H14.238C14.8219 9.50239 15.341 9.16717 15.5898 8.64811L17.4174 4.74439H17.6012V9.50239H20.1966V1.50031H18.0121C17.4498 1.50031 16.9199 1.83553 16.682 2.34377Z" fill="#319B42"/>
                <path d="M6.97268 2.54923L5.90207 6.2583H5.71823L4.6368 2.54923C4.45296 1.92204 3.8798 1.50031 3.23095 1.50031H0.667969V9.50239H3.26339V4.74439H3.44723L4.9396 9.50239H6.66988L8.16225 4.74439H8.34609V9.50239H10.9415V1.50031H8.37853C7.72968 1.50031 7.14571 1.92204 6.97268 2.54923Z" fill="#319B42"/>
                <path d="M21.3247 5.06739V9.50239H23.9209V6.90629H26.7119C27.9235 6.90629 28.9512 6.13828 29.3298 5.06739H21.3247Z" fill="#319B42"/>
                <path d="M26.636 1.50031H20.8594C21.2164 3.40411 22.8823 4.74543 24.8836 4.74543H29.3729C29.4054 4.57235 29.427 4.37765 29.427 4.18294C29.427 2.6361 28.183 1.50031 26.636 1.50031Z" fill="url(#paint0_linear_17_1071)"/>
                <defs>
                <linearGradient id="paint0_linear_17_1071" x1="20.8594" y1="3.12287" x2="29.427" y2="3.12287" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00A3E1"/>
                    <stop offset="0.3042" stop-color="#009ADD"/>
                    <stop offset="0.7987" stop-color="#0082D4"/>
                    <stop offset="1" stop-color="#0076CF"/>
                </linearGradient>
                </defs>
            </svg>`;
        } else if (title == "visa") {
            return `<svg class="pay-system-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="13" viewBox="0 0 32 13" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4709 4.67817C16.453 6.08581 17.7254 6.87134 18.6838 7.33838C19.6686 7.81763 19.9994 8.12493 19.9956 8.55341C19.9881 9.20931 19.21 9.49869 18.4818 9.50995C17.2113 9.52967 16.4727 9.16698 15.8855 8.89262L15.4279 11.0341C16.017 11.3057 17.108 11.5425 18.2394 11.5528C20.8949 11.5528 22.6323 10.242 22.6418 8.2095C22.6521 5.6301 19.0738 5.48725 19.0982 4.33426C19.1067 3.98472 19.4403 3.61163 20.1713 3.51674C20.5331 3.46886 21.532 3.43217 22.6643 3.95366L23.1087 1.88176C22.4998 1.65997 21.7171 1.44757 20.7427 1.44757C18.2431 1.44757 16.485 2.77627 16.4709 4.67817ZM27.3796 1.6261C26.8947 1.6261 26.4859 1.90899 26.3037 2.3431L22.5102 11.4006H25.1638L25.6919 9.94125H28.9347L29.241 11.4006H31.5799L29.5389 1.6261H27.3796ZM27.7507 4.26659L28.5165 7.93694H26.4192L27.7507 4.26659ZM13.2535 1.6261L11.1618 11.4006H13.6904L15.7812 1.6261H13.2535ZM9.51266 1.6261L6.88061 8.27897L5.81595 2.62215C5.69101 1.99074 5.19768 1.6261 4.64982 1.6261H0.347122L0.286962 1.90992C1.17028 2.10159 2.17385 2.41077 2.78179 2.74153C3.15386 2.94353 3.2601 3.12018 3.38222 3.60037L5.39874 11.4006H8.07123L12.1682 1.6261H9.51266Z" fill="#1434CB"/>
            </svg>`;
        }
        else if (title == "masterCard") {
            return `<svg class="pay-system-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9337 11.8367V11.5649H22.8629L22.781 11.7514L22.6996 11.5649H22.6286V11.8367H22.6788V11.632L22.7554 11.8086H22.8075L22.884 11.6315V11.8367H22.9339H22.9337ZM22.4846 11.8367V11.6115H22.5752V11.5656H22.3438V11.6115H22.4343V11.8367H22.4846Z" fill="#F79410"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 13.0014H8.76367V1.99463H14.8884L14.8883 13.0014Z" fill="#FF5F00"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.49987C9.15147 5.26713 10.1969 3.27821 11.8248 1.99643C10.5928 1.02498 9.06814 0.497414 7.49923 0.499764C3.63356 0.499764 0.5 3.63376 0.5 7.49987C0.5 11.3659 3.63356 14.4999 7.49923 14.4999C9.06814 14.5023 10.5929 13.9747 11.8249 13.0032C10.1971 11.7217 9.15147 9.73269 9.15147 7.49987Z" fill="#EB001B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.49987C23.1497 11.3659 20.0161 14.4999 16.1505 14.4999C14.5814 14.5022 13.0565 13.9747 11.8242 13.0032C13.4526 11.7215 14.498 9.73269 14.498 7.49987C14.498 5.26699 13.4526 3.27821 11.8242 1.99643C13.0564 1.02498 14.5813 0.497487 16.1504 0.499763C20.016 0.499763 23.1496 3.63376 23.1496 7.49987" fill="#F79410"/>
            </svg>`
        } else {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8883 13.0017H8.76367V1.99487H14.8884L14.8883 13.0017Z" fill="#6C6BBD"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15147 7.50012C9.15147 5.26738 10.1969 3.27845 11.8248 1.99668C10.5928 1.02523 9.06814 0.497658 7.49923 0.500008C3.63356 0.500008 0.5 3.63401 0.5 7.50012C0.5 11.3662 3.63356 14.5002 7.49923 14.5002C9.06814 14.5025 10.5929 13.9749 11.8249 13.0035C10.1971 11.7219 9.15147 9.73293 9.15147 7.50012Z" fill="#EB001B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1497 7.50012C23.1497 11.3662 20.0161 14.5002 16.1505 14.5002C14.5814 14.5024 13.0565 13.9749 11.8242 13.0035C13.4526 11.7217 14.498 9.73293 14.498 7.50012C14.498 5.26723 13.4526 3.27845 11.8242 1.99668C13.0564 1.02523 14.5813 0.497731 16.1504 0.500007C20.016 0.500007 23.1496 3.63401 23.1496 7.50012" fill="#0099DF"/>
            </svg>`;
        }
    }
}