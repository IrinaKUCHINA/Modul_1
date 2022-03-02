'use strict';

let arr = [];

function getRandomElement(n, min, max) {

    for (let i = 0; i < n; i++) {

        arr.push(Math.floor(Math.random()*max + 1));
    }

    return;
}

getRandomElement(15, 5, - 25);

console.log(arr);

// я не знаю куда ставить условие, ставила внутрь цикла, массив выходит пустым, выше максимума числа не генерируются, а ниже не знаю, как сделать.
// и по отрицательным числам тоже не знаю как делать
