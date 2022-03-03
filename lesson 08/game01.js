'use strict';

alert('Я загадал число от 1 до 100. Попробуй угадай!');
let userNumber;

const answer = Math.floor(Math.random()*100)+1;
console.log(answer);

function play() {
    while (userNumber = prompt("Введите число от 1 до 100:")) {
        if (isNaN(userNumber))
            alert("Введите число!");
        else if (userNumber > answer)
            alert("Меньше!");
        else if (userNumber < answer)
            alert("Больше!");
        else if (userNumber == answer) {
            alert("Правильно!");
            break;
        }
    }
}
play();
