'use strict';

(() => {
  const FIGURES_ENG = ['rock', ' scissors', ' paper'];
  const FIGURES_RUS = ['камень', ' ножницы', ' бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
      playerCount(count) {
        this.player += count;
      },
      computerCount(count) {
        this.computer += count;
      },
    };

    const lang = FIGURES_RUS;
    return function start() {
      alert('Разыграем первый ход - победитель будет ходить первым в Marble');
      let userWord = prompt(`${lang}`);

      if (userWord === null) {
        const exit = confirm('Вы точно хотите выйти?');
        if (exit === true) {
          alert(`Вы: ${result.player} \n Компьютер: ${result.computer} `);
          return alert('Игра окончена!');
        }
        if (exit === false) {
          return start();
        }
      }

      if (lang[0].includes(userWord)) {
        userWord = lang[0];
      } else if (lang[1].includes(userWord)) {
        userWord = lang[1];
      } else if (lang[2].includes(userWord)) {
        userWord = lang[2];
      } else {
        alert(`Вы ввели неверное значение ! Нужно одно из ${lang}`);
        return start();
      }

      const num = getRandomIntInclusive(0, 2);
      const comWord = lang[num];
      const compare = () => {
        if (userWord === comWord) {
          return 'ничья';
        } else if ((userWord === lang[2]) && (comWord === lang[0])) {
          result.playerCount(1);
          return 'Вы выиграли';
        } else if ((userWord === lang[0]) && (comWord === lang[1])) {
          result.playerCount(1);
          return 'Вы выиграли';
        } else if ((userWord === lang[1]) && (comWord === lang[2])) {
          result.playerCount(1);
          return 'Вы выиграли';
        } else {
          result.computerCount(1);
          return 'Вы проиграли';
        }
      };

      const winner = compare();
      alert(`Вы: ${userWord} \n Компьютер: ${comWord}  \n ${winner}`);


      if (compare() === 'ничья') {
        return start();
      }

      const win = ((result.player > result.computer) && !(compare() === 'ничья')) ? 'Вы' : 'Компьютер';
      console.log(win);
      // -----------------------------
      const begin = {
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

      let selection = '';

      if (win === 'Вы') {
        selection = true;
      }

      if (win === 'Компьютер') {
        selection = false;
      }

      console.log('selection', selection);

      const goPlayer = () => {
        alert('Ваш первый ход');
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
                return alert('Игра окончена!');
              }
              if (exit === false) {
                return getNumber(`Введите число от 1 до ${begin.player}`);
              }
            }
            if ((n < 1) || (n > begin.player)) {
              alert(`Число должно быть в интервале от 1 до ${begin.player}`);
              return getNumber(str);
            }
            return n;
          }

          alert(`Строка! Введите число от 1 до ${begin.player}`);
          return getNumber(`Введите число от 1 до ${begin.player}`);
        };

        const number = getNumber(`Введите число от 1 до ${begin.player}`);
        console.log('number', number, typeof number);

        if (botRandom(number) === botRandom(numberBot)) {
          begin.gameBot(number);
          begin.gamePlayer(-number);
          console.log(`Вы: ${begin.player} Компьютер: ${begin.bot}`);
        } else {
          begin.gamePlayer(number);
          begin.gameBot(-number);
          console.log(`Вы: ${begin.player} Компьютер: ${begin.bot}`);
        }
      };

      const goBot = () => {
        alert('Ходит компьютер!');
        const botGuessNumber = guessNumber(begin.bot);
        console.log('botGuessNumber', botGuessNumber, typeof botGuessNumber);

        console.log(`Компьютер загадал число от 1 до ${begin.bot}: - это число ${botGuessNumber}`);

        const playerGuess = confirm('нажмите OK если думаете что Компьютер загадал четное число \n нажмите Отмена если думаете что Компьютер загадал нечетное число');
        console.log(playerGuess);

        const guessPlayer = () => {
          if (playerGuess === true) {
            return 'even';
          } else {
            return 'odd';
          }
        };

        console.log(`Вы предположили что компьютер загадал ${guessPlayer(playerGuess)} число`);

        if (guessPlayer(playerGuess) === botRandom(botGuessNumber)) {
          begin.gamePlayer(botGuessNumber);
          begin.gameBot(-botGuessNumber);
          console.log(`вы: ${begin.player} bot: ${begin.bot}`);
        } else {
          begin.gameBot(botGuessNumber);
          begin.gamePlayer(-botGuessNumber);
          console.log(`вы: ${begin.player} bot: ${begin.bot}`);
        }
      };

      while ((begin.player > 0) || (begin.bot > 0)) {
        if (begin.player <= 0) {
          alert(`Вы проиграли - Игра окончена! \n Вы: ${begin.player} \n Компьютер: ${begin.bot} `);

          const again = confirm('нажмите OK если хотите играть снова\n нажмите Отмена если хотите завершить игру');
          console.log('again', again);
          if (again === true) {
            return start();
          }

          if (again === false) {
            return alert('Игра окончена!');
          }
        }

        if (begin.bot <= 0) {
          alert(`Вы выиграли - Игра окончена! \n Вы: ${begin.player} \n Компьютер: ${begin.bot} `);

          const again = confirm('нажмите OK если хотите играть снова\n нажмите Отмена если хотите завершить игру');
          console.log('again', again);
          if (again === true) {
            return start();
          }

          if (again === false) {
            return alert('Игра окончена!');
          }
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
  };


  window.marbles = game;
})();
