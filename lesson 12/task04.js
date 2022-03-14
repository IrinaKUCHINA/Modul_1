'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,

  add(productName, priceProduct, amountProduct) {
    const item = {
      name: productName,
      price: priceProduct,
      count: amountProduct,
    };
    cart.items.push(item);
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
    return sum = sum - (sum * this.discount);
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

  set setDiscount(val) {
	  if (val === 'METHED') {
			this.discount = 0.15;
		}
		if (val === 'NEWYEAR') {
			this.discount = 0.21;
		}
	},
};

cart.add('avocado', 150, 2),
cart.add('apples', 250, 4);
cart.add('oranges', 100, 5);

cart.setDiscount = 'NEWYEAR';
cart.print();
