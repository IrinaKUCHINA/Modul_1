'use strict';

let min = prompt('Введите первое число');
let max = prompt('Введите второе число');
alert(`Я загадал число от ${min} до ${max}. Попробуй угадай!`);

let userNumber;
let remainingGuesses = Math.floor((max - min)*0.3);
console.log(remainingGuesses);

let previousGuesses = [];
const answer = Math.floor(Math.random()*(max - min) + +min); console.log(answer);

function play() {

    while (userNumber = prompt(`Введите число от ${min} до ${max}:`)) {
        if (isNaN(userNumber))
            alert("Введите число!");
        else if (userNumber > answer)
            alert("Меньше!");
        else if (userNumber < answer)
            alert("Больше!");
        else if (Number(userNumber) === answer) {
            alert("Правильно!");
            break;
        }
    }
}
play();
