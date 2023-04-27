'use strict';

// const rain = Math.round(Math.random());

// if (rain === 1){
//   console.log('Пошел дождь. Возьмите зонт');
// } else if (rain === 0){
//   console.log('Дождя нет');
// }


// const mathematics = +prompt('Введите кол-во баллов по математике:');
// const russianLanguage = +prompt('Введите кол-во баллов по русскому языку:');
// const informatics = +prompt('Введите кол-во баллов по информатике:');
// const examResults = mathematics + russianLanguage + informatics;

// console.log(examResults >= 265 ? 'Поздравляю, вы поступили на бюджет!' : 'Увы, вы не поступили на бюджет!');


const howMuchMoney = +prompt('Сколько денег вы хотите снять');

console.log(howMuchMoney % 100 === 0 ? 'Вы можете снять данную сумму' : 'Вы не можете снять данную сумму, так как минимальный номинал купюр в банкомате - 100р');