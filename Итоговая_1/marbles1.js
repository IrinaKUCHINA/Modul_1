'use strict';

(() => {
  const game = () => {
    const result = {
      player: 5,
      bot: 5,
      gamePlayer(count) {
        this.player += count;
      },
      gameBot(count) {
        this.bot += count;
      },
    };

    const botRandom = (num) => {
      if (num % 2 === 0) {
        return 'even';
      } else {
        return 'odd';
      }
    };

    while ((result.player > 0) || (result.bot > 0)) {
      const randomBot = () => Math.floor(Math.random() * 10 + 1);

      const numberBot = randomBot();
      console.log('numberBot', numberBot, typeof numberBot);

      if (result.player <= 0) {
        alert(`Вы проиграли - Игра окончена! \n вы: ${result.player} \n bot: ${result.bot} `);
        return console.log('Игра окончена!');
      }

      if (result.bot <= 0) {
        alert(`Вы выиграли - Игра окончена! \n вы: ${result.player} \n bot: ${result.bot} `);
        return console.log('Игра окончена!');
      }

      const getNumber = (str) => {
        const n = +prompt(str);
        if (!Number.isNaN(parseFloat(n)) && isFinite(n)) {
          if (n === 0) {
            const exit = confirm('Вы точно хотите закончить игру?');
            if (exit === true) {
              return alert('Игра окончена!');
            }
            if (exit === false) {
              return getNumber(`Введите число от 1 до ${result.player}`);
            }
          }
          if ((n < 1) || (n > result.player)) {
            alert(`Число должно быть в интервале от 1 до ${result.player}`);
            return getNumber(str);
          }
          return n;
        }

        alert(`Неправильно! Введите число от 1 до ${result.player}`);
        return getNumber(`Введите число от 1 до ${result.player}`);
      };

      const number = getNumber(`Введите число от 1 до ${result.player}`);
      console.log('number', number, typeof number);

      if (botRandom(number) === botRandom(numberBot)) {
        result.gameBot(number);
        result.gamePlayer(-number);
        console.log(`вы: ${result.player} bot: ${result.bot}`);
      } else {
        result.gamePlayer(number);
        result.gameBot(-number);
        console.log(`вы: ${result.player} bot: ${result.bot}`);
      }
    }
  };

  window.marbls = game;
})();

const start = window.marbls;
start();
