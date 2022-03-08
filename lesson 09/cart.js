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
      productName: ['apples', 200, 2],
      priceProduct: ['cakes', 500, 5],
      amountProduct: ['apples', 400, 3],
    };
  },

  increaseCount(n) {
    cart.count += n;
  },

// У меня вопросы, сама разобраться не могу, вроде данные передаются в cart.item, потому что через консоль они выходят
// но тогда поломались все остальные формулы, length не работает потому что это объект?

// add(productName, priceProduct, amountProduct) {
//   cart.items = {
//     productName,
//     priceProduct,
//     amountProduct],
//   };
// },  я делала так, тогда я могу передать данные в items, но только один раз
//  при введении новых данных они перезаписываются на старые
//  можно мне объяснить как это работает?, по clear нашла только удаление

  calculateItemPrice() {
    let sum = 0;

    for (let i = 0; i < cart.items.length; i++) {
      sum += cart.items.priceProduct[i] * cart.items.amountProduct[i];
      cart.totalPrice = sum;
    }
    return console.log(cart.totalPrice);
  },

  clear() {
    cart.items = '';
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(cart.totalPrice);
    console.log(cart.clear());
  },
};
cart.calculateItemPrice('toy');
cart.print();
cart.add('toy', 150, 2);


console.log(cart.increaseCount(3));
console.log(cart.items);

