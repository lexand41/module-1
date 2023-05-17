'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага']

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const resault = {
      player: 0,
      computer: 0,
    };
    
    return function start() {
      let rock = 'камень';
      let scissors = 'ножницы';
      let paper = 'бумага';
      const compStep = FIGURES_RUS[getRandomIntInclusive(0, 2)];
      let userStep = prompt(FIGURES_RUS);

      if (userStep === null) {
        alert('Конец игры');
        return;
      } else {
        userStep = userStep.toLowerCase(); 
      };

      if (rock.includes(userStep) && userStep !== '') {
        userStep = rock;
      } else if (scissors.includes(userStep) && userStep !== '') {
        userStep = scissors;
      } else if (paper.includes(userStep) && userStep !== '') {
        userStep = paper;
      } else {
        start();
      };

      const comb = userStep[0] + compStep[0];

      const yesOrNo = () => {
        if (confirm('Ещё?') === false) {
          confirm('Вы точно хотите выйти?"') === true ? alert('Конец игры') : start();
        } else {
          start();
        }
      };

      switch (comb) {
        case 'кк':
        case 'нн':
        case 'бб':
          alert(`Компьютер: ${compStep}\nВы: ${userStep}\n  Ничья`);
          yesOrNo();
          break;

        case 'кн':
        case 'нб':
        case 'бк':
          alert(`Компьютер: ${compStep}\nВы: ${userStep}\n  Вы победили!`);
          resault.player++;
          yesOrNo();
          break;

        case 'нк':
        case 'бн':
        case 'кб':
          alert(`Компьютер: ${compStep}\nВы: ${userStep}\n  Вы проиграли`);
          resault.computer++;
          yesOrNo();
          break;
      };
      alert(`Результат:\n  Компьютер ${resault.computer},\n  Вы ${resault.player}`);
    };
  };

  window.RPS = game;
})();




