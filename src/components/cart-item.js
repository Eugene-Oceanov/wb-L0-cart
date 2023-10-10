module.exports = {
    fullCartItem: function (item) {
        let cartItem = document.createElement("DIV");
        cartItem.classList.add("cart-item????");
        cartItem.innerHTML = `
            <input type="checkbox" id="cart-item-${item.id}">

            <label for="cart-item-${item.id}" class="d-flex jc-space-between">
                <div class="cart-item-info">
                    <img src="${item.img}" alt="${item.title}" class="cart-item-info__img">
                    <div class="cart-item-info__text">
                        <h3>${item.title}</h3>

                    </div>
                </div>
            </label>
        `
        return cartItem;
    }
}