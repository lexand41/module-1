'use strict';


const item = prompt('Наименование товара');
const quantity = +prompt('Количество товара');

if (!Number.isNaN(quantity) && quantity >= 0){
  const products = prompt('Категория товара');
  const price = +prompt('Цена товара');

  if (!Number.isNaN(price) && price > 0){
    const totalAmount = quantity * price;
    console.log(`На складе ${quantity} единицы товара "${products} - ${item}" на сумму ${totalAmount} деревянных`);
  } else {
    console.log('"Вы ввели некорректные данные"');
  }
  
} else {
  console.log('"Вы ввели некорректные данные"');
}

  





