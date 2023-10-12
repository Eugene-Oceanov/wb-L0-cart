module.exports = {
    CartItemAviable: function (item) {
        let cartItem = document.createElement("DIV");
        cartItem.classList.add("cart-item", "d-flex");
        cartItem.innerHTML = `
            <input type="checkbox" id="cart-item-${item.id}__cb">
            <label for="cart-item-${item.id}__cb" class="cart-item__checkbox d-flex jc-space-between"></label>
            <div class="cart-item-wrapper d-flex">
                <a href="#"><img src="${item.img}" alt="${item.title}" class="cart-item-info__img"></a>
                <div class="cart-item-info d-flex jc-space-between">
                    <div class="cart-item-info__description">
                        <h2 class="cart-item__title">${item.title}</h2>
                        <div class="cart-item-properties d-flex">
                            ${item.color ? `<p class="cart-item-properties__item">Цвет: ${item.color}</p>` : ""}
                            ${item.size ? `<p class="cart-item-properties__item">Размер: ${item.size}</p>` : ""}
                        </div>
                        <p class="cart-item__stock">${item.stock}</p>
                        <p class="cart-item__manufacturer">${item.manufacturer}</p>
                    </div>
                    <div class="cart-item-options">
                        <div class="cart-item-options-panel">
                            <div class="cart-item-options-panel-quantity d-flex jc-space-between ai-center">
                                <p class="cart-item-options-panel__quantity-lower">-</p>
                                <input type="text" class="cart-item-options-panel__quantity-input">
                                <p class="cart-item-options-panel__quantity-increase">+</p>
                            </div>
                            ${item.remainder <= 3 ? `<p class="">Осталось ${item.remainder} шт.</p>` : ""}
                        </div>
                    </div>
                </div>
            </div>
            
        `
        return cartItem;
    }
}