'use strict';

const monthIncome = +prompt('Введите ваш доход за месяц, в рублях');
let res = 0;

if (monthIncome <= 15000){
  res = monthIncome * 0.13;
} else if (monthIncome > 15000 && monthIncome <= 50000){

  res = (monthIncome - 15000) * 0.2 + (15000 * 0.13);
} else {
  res = (monthIncome - 50000) * 0.3 + (35000 * 0.2) + (15000 * 0.13);
}
console.log(`Сумма налога на ваш доход за месяц, составляет: ${Math.round(res)} ₽`);