'use strict';


(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_END = ['rock', 'scissors', 'paper'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const resault = {
      you: 0,
      computer: 0,
      player: 5,
      bot: 5,
      constNum: 5,
    };

    const evenOrOdd = (e) => (e % 2 === 0 ? 'четное' : 'нечетное');

    const gameScore = () => {
      alert(`Количество шариков\nИгрок: ${resault.player}\nБот: ${resault.bot}`);
    };

    const foo = (func) => {
      switch (0) {
        case resault.player:
        case resault.bot:
          alert(resault.player > resault.bot ? 'Вы победили' : 'Вы проиграли');
          confirm('Хотите сыграть ещё?');
          if (confirm('Хотите сыграть ещё?') === true) {
            resault.player = resault.constNum;
            resault.bot = resault.constNum;
            start();
          } else {
            alert('Конец игры');
          }
          break;
        default:
          func();
      }
    };

    const stepBot = () => {
      const botNum = getRandomIntInclusive(1, resault.bot);
      console.log('Bot', botNum);
      const botEvenOdd = evenOrOdd(botNum);
      alert('Бот загадал число.\nВаш ход');
      const userEvenOdd = confirm('Число четное?') === true ? 'четное' : 'нечетное';
      if (botEvenOdd !== userEvenOdd) {
        if (resault.bot <= resault.constNum || resault.player > botNum) {
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

      foo(stepUser);
    };

    const stepUser = () => {
      let userNum = prompt('Загадайте число');
      if (userNum === null) {
        alert('Конец игры');
        return;
      }
      if (userNum === '' || isNaN(parseInt(userNum))) {
        alert('Введите число');
        return stepUser();
      }
      userNum = parseInt(userNum);
      if (userNum > resault.player) {
        return stepUser();
      }

      const botEvenOdd = evenOrOdd(getRandomIntInclusive(1, resault.bot));
      const userEvenOdd = evenOrOdd(userNum);
      alert(`Бот выбрал: ${botEvenOdd}`);
      if (userEvenOdd !== botEvenOdd) {
        if (resault.player <= resault.constNum || resault.bot > userNum) {
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

      foo(stepBot);
    };



    const e = language === 'EN' || language === 'ENG';
    const lang = e ? FIGURES_END : FIGURES_RUS;

    start();

    function start() {
      const rock = lang[0];
      const scissors = lang[1];
      const paper = lang[2];

      const compStep = lang[getRandomIntInclusive(0, 2)];
      console.log('Bot:', compStep);
      let userStep = prompt(lang);

      if (userStep === null) {
        alert(e ? 'Game over' : 'Конец игры');
        return;
      } else {
        userStep = userStep.toLowerCase()[0];
      }

      if (rock[0].includes(userStep) && userStep !== '') {
        userStep = rock;
      } else if (scissors[0].includes(userStep) && userStep !== '') {
        userStep = scissors;
      } else if (paper[0].includes(userStep) && userStep !== '') {
        userStep = paper;
      } else {
        start();
      }

      const comb = userStep['0'] + compStep['0'];

      const yesOrNo = () => {
        if (confirm(e ? 'More' : 'Ещё?') === false) {
          confirm(e ? 'Are you sure you want to go out?' : 'Вы точно хотите выйти?') === true ?
            alert(e ? 'Game over' : 'Конец игры') : start();
        } else {
          start();
        }
      };

      switch (comb) {
        case 'кк':
        case 'нн':
        case 'бб':
        case 'rr':
        case 'ss':
        case 'pp':
          alert(`${e ? 'Computer' : 'Компьютер'}: ${compStep}\n${e ? 'You' : 'Вы'}: ${userStep}\n ${e ? 'Draw' : 'Ничья'}`);
          yesOrNo();
          break;

        case 'кн':
        case 'нб':
        case 'бк':
        case 'rs':
        case 'sp':
        case 'pr':
          alert(`${e ? 'Computer' : 'Компьютер'}: ${compStep}\n${e ? 'You' : 'Вы'}: ${userStep}\n ${e ? 'You won' : 'Вы победили'}!`);
          resault.you++;
          stepUser();
          break;

        case 'нк':
        case 'бн':
        case 'кб':
        case 'sr':
        case 'ps':
        case 'rp':
          alert(`${e ? 'Computer' : 'Компьютер'}: ${compStep}\n${e ? 'You' : 'Вы'}: ${userStep}\n ${e ? 'You lose' : 'Вы проиграли'}`);
          resault.computer++;
          stepBot();
          break;
      };
    };
  };

  window.MARBLES = game;
})();
