module.exports = {
    getTotalPrice: function (price, discount) {
        let totalPrice = price / 100 * discount;
        return totalPrice
    },

    getDiscount: function (price, discount) {
        let totalDiscount = price - (price / 100 * discount);
        return totalDiscount;
    }
}