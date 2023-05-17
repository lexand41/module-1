'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_END = ['rock','scissors', 'paper'];

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

    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_END : FIGURES_RUS;
    
    return function start() {
      const rock = lang[0];
      const scissors = lang[1];
      const paper = lang[2];

      const compStep = lang[getRandomIntInclusive(0, 2)];
      let userStep = prompt(lang);

      if (userStep === null) {
        alert('Конец игры');
        return;
      } else {
        userStep = userStep.toLowerCase()[0]; 
      };

      if (rock[0].includes(userStep) && userStep !== '') {
        userStep = rock;
      } else if (scissors[0].includes(userStep) && userStep !== '') {
        userStep = scissors;
      } else if (paper[0].includes(userStep) && userStep !== '') {
        userStep = paper;
      } else {
        start();
      };

      const comb = userStep[0] + compStep[0];

      const yesOrNo = () => {
        if (confirm('Ещё?') === false) {
          confirm('Вы точно хотите выйти?') === true ? alert('Конец игры') : start();
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
          alert(`Компьютер: ${compStep}\nВы: ${userStep}\n  Ничья`);
          yesOrNo();
          break;

        case 'кн':
        case 'нб':
        case 'бк':
        case 'rs':
        case 'sp':
        case 'pr':
          alert(`Компьютер: ${compStep}\nВы: ${userStep}\n  Вы победили!`);
          resault.player++;
          yesOrNo();
          break;

        case 'нк':
        case 'бн':
        case 'кб':
        case 'sr':
        case 'ps':
        case 'rp':
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




