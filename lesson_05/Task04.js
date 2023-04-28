'use strict';


const calculate = (SumCart, countItem, promoСode) => {
  let totalSumCart = SumCart;

  if (countItem > 10) {
    totalSumCart -= totalSumCart * 0.03; //Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
  }
  
  if (totalSumCart > 30000) {
    totalSumCart -= (totalSumCart - 30000) * 0.15; //При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
  }

  if (promoСode === 'METHED') {
    totalSumCart -= totalSumCart * 0.1; //Если промокод равен "METHED", то скидка 10%
  }

  if (promoСode === 'G3H2Z1' && totalSumCart > 2000) {
    totalSumCart -= 500; //Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
  }

  return `Итого сумма к оплате: ${totalSumCart}`
}
console.log(calculate(40000, 11, 'G3H2Z1'));