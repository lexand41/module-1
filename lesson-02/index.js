'use strict';

{
  const item = 'table';
  const quantity = 2;
  const products = 'furniture'
  const price = 1400;
  const totalAmount = quantity * price;

  console.log(item);
  console.log('Общая сумма товара:');
  console.log(totalAmount);

  console.log('Общая сумма товара: ${totalAmount}'); // почему в таком формате не видит переменную
}

{
  const item = 'TV';
  const quantity = 5;
  const products = 'audio-video'
  const price = 19000;
  const totalAmount = quantity * price;

  console.log(item);
  console.log('Общая сумма товара:');
  console.log(totalAmount);

  console.log("Общая сумма товара: ${totalAmount}"); // почему в таком формате не видит переменную
}

