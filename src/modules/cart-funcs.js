module.exports = {
    getData: async function (url) {
        let json = await fetch(url);
        let data = await json.json();
        return data;
    },

    getTotalPrice: function (price, discount, quantity) {
        let totalPrice = (price - price / 100 * discount) * quantity;
        return Math.round(totalPrice);
    },

    getDiscount: function (price, discount, quantity) {
        let totalDiscount = (price / 100 * discount) * quantity;
        return Math.round(totalDiscount);
    },

    hiddenCardNumber: function (num) {
        num = String(num)
        let newString = [];
        for (let i = 0; i <= num.length; i++) {
            if (i === 4 || i === 8 || i === 12) newString.push(" ");
            if (i >= 6 && i < 12) newString.push("•");
            else newString.push(num[i]);
        }
        return newString.join("");
    },

    validateInput: function (regExp, input, errorOutput, objectVar, controlVar) {
        if (input.value != "" && regExp.test(input.value)) {
            errorOutput.style.display = "none";
            input.style.borderBottom = "1px solid var(--system-grey);";
            objectVar = input.value;
        } else {
            errorOutput.style.display = "block";
            input.style.borderBottom = "1px solid red";
            controlVar = "invalid";
        }
    },

    openModal: function (modal, overlay) {
        overlay.style.display = "flex";
        modal.style.display = "block";
    },

    nounGoods: function (count) {
        let str = count.toString();
        let lastCount = str[str.length - 1]
        if (lastCount === "1") {
            if (str[str.length - 2] === "1") return "товаров";
            else return "товар"
        }
        if (lastCount === "2" || lastCount === "3" || lastCount === "4") {
            if (str[str.length - 2] === "1") return "товаров";
            else return "товара"
        }
        if (lastCount === "0" || lastCount === "5" || lastCount === "6" || lastCount === "7" || lastCount === "8" || lastCount === "9") return "товаров"
    },

    closeModal: function (payment, delivery, overlay) {
        payment.style.display = "none";
        delivery.style.display = "none";
        overlay.style.display = "none";
    },

    concatString: function (str) {
        if (str.length > 50) return str.slice(0, 55) + "...";
        else return str;
    }
}