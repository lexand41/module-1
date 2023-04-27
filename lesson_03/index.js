'use strict';

{
  const item = prompt('Наименование товара');
  const quantity = +prompt('Количество товара');
  const products = prompt('Категория товара');
  const price = +prompt('Цена товара');
  const totalAmount = quantity * price;

  console.log(`На складе ${quantity} единицы товара "${products} - ${item}" на сумму ${totalAmount} деревянных`); 
}



