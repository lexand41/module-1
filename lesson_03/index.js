'use strict';

{
  const item = 'table';
  const quantity = 2;
  const products = 'furniture'
  const price = 1200;
  const totalAmount = quantity * price;

  console.log(`Общая сумма: ${item} - ${totalAmount}`); 
}

{
  const item = 'TV';
  const quantity = 5;
  const products = 'audio-video'
  const price = 19000;
  const totalAmount = quantity * price;

  console.log(`Общая сумма: ${item} - ${totalAmount}`);
}

{
  const item = prompt('Наименование товара');
  const quantity = +prompt('Количество товара');
  const products = prompt('Категория товара');
  const price = +prompt('Цена товара');
  const totalAmount = quantity * price;

  console.log(`На складе ${quantity} единицы товара "${products} - ${item}" на сумму ${totalAmount} деревянных`); 
}



