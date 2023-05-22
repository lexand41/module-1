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
    };

    const constResaultPlayer = resault.player;
    const constResaultBot = resault.bot;
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
        if (resault.player <= constResaultPlayer || resault.bot > userNum) {
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

      alert(`Количество шариков\nИгрок: ${resault.player}\nБот: ${resault.bot}`);
      if (resault.player === resault.bot) {
        alert('Ничья');
      }

      switch (0) {
        case resault.player:
        case resault.bot:
          alert(resault.player > resault.bot ? 'Вы победили' : 'Вы проиграли');
          resault.player = constResaultPlayer;
          resault.bot = constResaultBot;
          break;
        default:
          start();
      }
    };
  };

  window.MARBLES = game;
})();
