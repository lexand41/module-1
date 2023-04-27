'use strict';

const monthIncome = +prompt('Введите ваш доход за месяц, в рублях');
let res = 0;

if (monthIncome < 15000){
  res = monthIncome * 0.13;
} else if (monthIncome >= 15000 && monthIncome <= 50000){
  res = monthIncome * 0.2;
} else {
  res = monthIncome * 0.3;
}
console.log(`Сумма налога на ваш доход составляет: ${Math.round(res)} ₽`);