'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return cart.totalPrice;
  },

  add(productName, priceProduct, amountProduct) {
    const item = {
      name: productName,
      price: priceProduct,
      count: amountProduct,
    };
    cart.items.push(item);
    cart.calculateItemPrice();
    cart.increaseCount(amountProduct);
  },

  increaseCount(n) {
    cart.count += n;
  },

  calculateItemPrice() {
    let sum = 0;
    this.items.map((item) => {
      sum += item.price * item.count;
    });
    this.totalPrice = sum;
  },

  clear() {
    cart.items = [];
    cart.totalPrice = 0;
    cart.count = 0;
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(cart.totalPrice);
  },
};

cart.add('toy', 150, 2),
cart.add('apples', 250, 4);
cart.print();
cart.clear();
