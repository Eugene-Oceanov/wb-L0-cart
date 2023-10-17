module.exports = {
    getTotalPrice: function (price, discount, quantity) {
        let totalPrice = (price / 100 * discount) * quantity;
        return Math.round(totalPrice);
    },

    getDiscount: function (price, discount, quantity) {
        let totalDiscount = (price - (price / 100 * discount)) * quantity;
        return Math.round(totalDiscount);
    }
}