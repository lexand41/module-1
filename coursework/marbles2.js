'use strict';


(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const evenOrOdd = (e) => (e % 2 === 0 ? 'четное' : 'нечетное');

  const game = () => {
    const resault = {
      player: 5,
      bot: 5,
      const: 5,
    };

    const gameScore = () => {
      alert(`Количество шариков\nИгрок: ${resault.player}\nБот: ${resault.bot}`);
      if (resault.player === resault.bot) {
        alert('Ничья');
      }
    };

    const foo = (func) => {
      switch (0) {
        case resault.player:
        case resault.bot:
          alert(resault.player > resault.bot ? 'Вы победили' : 'Вы проиграли');
          break;
        default:
          func();
      }
    };

    alert(`Старт игры\n\nКоличество шариков\nИгрок: ${resault.player}\nБот: ${resault.bot}`);

    return function start() {
      let userNum = prompt('Загадайте число');
      if (userNum === null) {
        alert('Конец игры');
        return;
      }
      if (userNum === '' || isNaN(parseInt(userNum))) {
        alert('Введите число');
        return start();
      }
      userNum = parseInt(userNum);
      if (userNum > resault.player) {
        return start();
      }

      const botEvenOdd = evenOrOdd(getRandomIntInclusive(1, resault.bot));
      const userEvenOdd = evenOrOdd(userNum);
      alert(`Бот выбрал: ${botEvenOdd}`);
      if (userEvenOdd !== botEvenOdd) {
        if (resault.player <= resault.const || resault.bot > userNum) {
          resault.player += userNum;
          resault.bot -= userNum;
        } else {
          resault.player += resault.bot;
          resault.bot -= resault.bot;
        }
      } else {
        resault.player -= userNum;
        resault.bot += userNum;
      }
      gameScore();

      const stepBot = () => {
        const botNum = getRandomIntInclusive(1, resault.bot);
        console.log(botNum);
        const botEvenOdd = evenOrOdd(botNum);
        console.log(botEvenOdd);
        alert('Бот сделал выбор числа.\nВаш ход');
        const userEvenOdd = confirm('Число четное?') === true ? 'четное' : 'нечетное';
        console.log('Bot', userEvenOdd);
        if (botEvenOdd !== userEvenOdd) {
          if (resault.bot <= resault.const || resault.player > botNum) {
            resault.bot += botNum;
            resault.player -= botNum;
          } else {
            resault.bot += resault.player;
            resault.player -= resault.player;
          }
        } else {
          resault.bot -= botNum;
          resault.player += botNum;
        }
        gameScore();

        foo(start);
      };

      foo(stepBot);
    };
  };

  window.MARBLES = game;
})();
