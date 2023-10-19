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

    validateInput: function(regExp, input, errorOutput, objectVar, controlVar) {
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
}