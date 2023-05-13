'use strict';


const cart = {
  items: [],
  count: 0,
  discount: 0,

  increaseCount(n) {
    this.count += n;
  },

  calculateItemPrice() {
    let fullPrice = this.items.reduce((sum, e) =>
      sum + e.price * e.quant, 0);
    let discount = this.items.reduce((sum, e) =>
      sum + e.price * e.quant, 0) * this.discount / 100;
    return fullPrice - discount;
  },

  add(id, price, quant = 1) {
    this.items.push({id, price, quant});
    this.increaseCount(quant);
    this.calculateItemPrice();
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Количество товаров в корзине: ${this.count}`);
    console.log(`Сумма к оплате: ${this.totalPrice}`);
  },
};

cart.add('laptop', 400, 7);
cart.add('tablet', 300, 4);
cart.add('phone1', 100);
cart.add('phone2', 150);
cart.add('phone3', 200);
cart.add('tv', 500, 3);

cart.setDiscount = 'METHED';
cart.setDiscount = 'NEWYEAR';
cart.setDiscount = 'NEWYEAR';

// cart.clear();
cart.print();

