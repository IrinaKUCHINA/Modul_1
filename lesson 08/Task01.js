'use strict';

let arr = [];

function getRandomElement(n) {

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*100 + 1))
    }
    return;
}

getRandomElement(25);
console.log(arr);