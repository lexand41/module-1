'use strict';


const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  increaseCount(n) {
    this.count += n; 
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((sum, e) => sum + e.price * e.quant, 0);
  },

  add(id, price, quant=1) {
    this.items.push({id: id, price: price, quant: quant});
    this.increaseCount(quant);
    this.calculateItemPrice();
  },

  getTotalPrice() {
    return this.totalPrice;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Количество товаров в корзине: ${this.count}`);
    console.log(`Сумма к оплате: ${this.getTotalPrice()}`);
  },
};

cart.add('laptop', 400, 7);
cart.add('tablet', 300, 4);
cart.add('phone', 200);
cart.add('tv', 500, 3);

// cart.clear();
cart.print();

