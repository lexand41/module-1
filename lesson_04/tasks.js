'use strict';

// const rain = Math.round(Math.random());

// if (rain === 1){
//   console.log('Пошел дождь. Возьмите зонт');
// } else if (rain === 0){
//   console.log('Дождя нет');
// }


const mathematics = +prompt('Введите кол-во баллов по математике:');
const russianLanguage = +prompt('Введите кол-во баллов по русскому языку:');
const informatics = +prompt('Введите кол-во баллов по информатике:');
const examResults = mathematics + russianLanguage + informatics;

console.log(examResults >= 265 ? 'Поздравляю, вы поступили на бюджет!' : 'Увы, вы не поступили на бюджет!');