module.exports = {
    fullCartItem: function (item) {
        let finalPrice = (Math.round(item.price - (item.price / 100 * item.discount))) * item.quantity;
        const cartItem = document.createElement("DIV");
        cartItem.classList.add("cart-item", "d-flex");
        cartItem.innerHTML = `
            <input type="checkbox" class="cartItemCheckbox" id="cart-item-${item.id}__cb" checked>
            <label for="cart-item-${item.id}__cb" class="cart-item__checkbox d-flex jc-space-between"></label>
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
                                <p class="cart-item-options-panel__quantity-lower">−</p>
                                <input type="text" class="cart-item-options-panel__quantity-input" value="${item.quantity}">
                                <p class="cart-item-options-panel__quantity-increase">+</p>
                            </div>
                            ${item.remainder <= 3 ? `<p class="cart-item-options-panel__remainder">Осталось ${item.remainder} шт.</p>` : ""}
                            <div class="cart-item-options-panel__buttons d-flex jc-end">
                                <svg class="cart-item-options-panel__like-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/></svg>

                                <svg class="cart-item-options-panel__remove-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/></svg>
                            </div>
                        </div>
                        <div class="cart-item-options-price d-flex fd-column ai-end">
                            <p class="cart-item-options-price__final">${finalPrice.toLocaleString("ru")} <span>сом</span></p>
                            <p class="cart-item-options-price__original">${(item.price * item.quantity).toLocaleString("ru")} сом</p>
                        </div>
                    </div>
                </div>
            </div>`
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
                <svg class="cart-item-options-panel__like-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/></svg>

                <svg class="cart-item-options-panel__remove-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/></svg>
            </div>`;
        return cartItemNotAviable1;
    },
}