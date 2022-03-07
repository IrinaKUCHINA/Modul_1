'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return cart.totalPrice;
  },

  add(productName, priceProduct, amountProduct) {
    cart.items = {
      productName: ['apples', 'cakes', 'books'],
      priceProduct: [200, 500, 400],
      amountProduct: [2, 5, 3],
    };
  },

  increaseCount(n) {
    cart.count += n;
  },

  calculateItemPrice() {
    let sum = 0;

    for (let i = 0; i < cart.items.length; i++) {
      sum += cart.add().priceProduct[i] * cart.add().amountProduct[i];
      cart.totalPrice = sum;
    }
    return sum;
  },

  clear() {
    cart = [];
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(cart.totalPrice);
  },
};
cart.calculateItemPrice();
cart.print();
cart.add();

console.log(cart.increaseCount(3));
console.log(cart.items);
