'use strict';


const guessNumber = () => {
  let num = Math.round(Math.random() * 100);
  console.log(num);

  while (true) {
    let userNum = prompt('Введи число');

    if (isNaN(userNum)) {
      alert('Введи число');
      continue;
    }
    if (userNum === null) {
      alert('Конец игры');
      break;
    }
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