'use strict';


const guessNumber = () => {
  let n = prompt('Введи 1-е число диапазона');
  console.log(n);
  if (n === null) {
    alert('Конец игры');
    return;
  }

  let m = prompt('Введи 2-е число диапазона');
  console.log(m);
  if (m === null) {
    alert('Конец игры');
    return;
  }

  let num = (Math.floor(Math.random() * (+m - +n + 1) + +n));
  console.log(num);

  const arrUserNum =[];
  let userNum;
  let range = Math.round((Math.abs(+m - +n) + 1) * 0.3);
  console.log(`У вас ${range} попыток`);

  while (true) { 
  if (arrUserNum.length >= range) {
      alert('Закончились попытки, Конец игры.');
      break;
    }
    
    userNum = prompt('Введи число');

    if (isNaN(userNum)) {
      alert('Введи число');
      continue;
    }
    
    if (userNum === null) {
      alert('Конец игры');
      break;
    }
    
    if (arrUserNum.includes(parseInt(userNum))) {
      alert('Это число вы уже вводили');
      continue;
    }

    arrUserNum.push(parseInt(userNum));

    if (parseInt(userNum) === num) {
      alert('Правильно!');
      break;
    } 
    if (parseInt(userNum) > num) {
      alert('Больше!');
    } 
    if (parseInt(userNum) < num) {
      alert('Меньше!');
    }
  }
}

guessNumber();