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

    function guessNumber(max) {
      return Math.floor(Math.random() * max) + 1;
    }


    let selection = confirm('нажмите OK если Ваш ход \n нажмите Отмена если ходит Бот');
    console.log(selection);

    const goPlayer = () => {
      alert('Ваш ход');
      const randomBot = () => Math.floor(Math.random() * 10 + 1);

      const numberBot = randomBot();
      console.log('numberBot', numberBot, typeof numberBot);


      const getNumber = (str) => {
        const n = +prompt(str);
        if (!Number.isNaN(parseFloat(n)) && isFinite(n)) {
          if (n === 0) {
            console.log('n', n);
            const exit = confirm('Вы точно хотите закончить игру?');
            console.log('exit', exit);
            if (exit === true) {
              // throw '';
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

        alert(`Введите число в интервале от 1 до ${result.player}`);
        return getNumber(`Введите число от 1 до ${result.player}`);
      };

      const number = getNumber(`Введите число от 1 до ${result.player}`);
      console.log('number', number, typeof number);

      if (botRandom(number) === botRandom(numberBot)) {
        result.gameBot(number);
        result.gamePlayer(-number);
        console.log(`Вы: ${result.player} Бот: ${result.bot}`);
      } else {
        result.gamePlayer(number);
        result.gameBot(-number);
        console.log(`Вы: ${result.player} Бот: ${result.bot}`);
      }
    };

    const goBot = () => {
      alert('ходит Бот!');
      const botGuessNumber = guessNumber(result.bot);
      console.log('botGuessNumber', botGuessNumber, typeof botGuessNumber);

      console.log(`Бот загадал число в интервале от 1 до ${result.bot}: - это число ${botGuessNumber}`);

      const playerGuess = confirm('нажмите OK если думаете, что Бот загадал четное число \n нажмите Отмена если думаете, что Бот загадал нечетное число');
      console.log(playerGuess);

      const guessPlayer = () => {
        if (playerGuess === true) {
          return 'even';
        } else {
          return 'odd';
        }
      };

      console.log(`Вы думаете, что Бот загадал ${guessPlayer(playerGuess)} число`);


      if (guessPlayer(playerGuess) === botRandom(botGuessNumber)) {
        result.gamePlayer(botGuessNumber);
        result.gameBot(-botGuessNumber);
        console.log(`вы: ${result.player} bot: ${result.bot}`);
      } else {
        result.gameBot(botGuessNumber);
        result.gamePlayer(-botGuessNumber);
        console.log(`вы: ${result.player} bot: ${result.bot}`);
      }
    };


    while ((result.player > 0) || (result.bot > 0)) {
      if (result.player <= 0) {
        alert(`Вы проиграли - Игра окончена! \n Вы: ${result.player} \n Бот: ${result.bot} `);
        return console.log('Игра окончена!');
      }

      if (result.bot <= 0) {
        alert(`Вы выиграли - Игра окончена! \n Вы: ${result.player} \n Бот: ${result.bot} `);
        return console.log('Игра окончена!');
      }

      if (selection === true) {
        goPlayer();
      }

      if (selection === false) {
        goBot();
      }

      selection = !selection;
    }
  };
  window.marbls = game;
})();

const start = window.marbls;
start();
