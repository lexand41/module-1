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
  alert(`У вас ${range} попыток`);

  const foo = () => { 
  if (arrUserNum.length >= range) {
      alert('Закончились попытки, Конец игры.');
      return;
    }
    
    userNum = prompt('Введи число');

    if (isNaN(userNum)) {
      alert('Введи число');
      foo();
    }
    
    if (userNum === null) {
      alert('Конец игры');
      return;
    }
    
    if (arrUserNum.includes(parseInt(userNum))) {
      alert('Это число вы уже вводили');
      foo();
    }

    arrUserNum.push(parseInt(userNum));

    if (parseInt(userNum) === num) {
      alert('Правильно!');
      return;
    } 
    if (parseInt(userNum) > num) {
      alert('Больше!');
      foo();
    } 
    if (parseInt(userNum) < num) {
      alert('Меньше!');
      foo();
    }
  }
  foo();
}

guessNumber();

