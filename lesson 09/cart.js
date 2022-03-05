'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
        return totalPrice;
    },

    add(productName, priceProduct, amountProduct) {
        const user = {
            productName: 'productName',
            priceProduct: 'priceProduct', 
            amountProduct: 1,
        }
        return user;
    },

    increaseCount(n) {
        return cart.count += n;
    },

    calculateItemPrice() {
        let sum = 0;
        const priceProduct = [200, 500, 400];
        const amountProduct = [2, 5, 3];
        let items = ['apples', 'cakes', 'books'];

    for (let i = 0; i < items.length; i++) {
        sum += priceProduct[i] * amountProduct[i];
        cart.totalPrice = sum;
    }
    return sum;
    },

    clear() {
// не смогла найти, как очистить корзину
    },

    print() {
        console.log(JSON.stringify(cart.items));
        console.log(cart.totalPrice);
    },
}
cart.calculateItemPrice();
cart.totalPrice;
console.log(cart.increaseCount(3));
cart.print();
