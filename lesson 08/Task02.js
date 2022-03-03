'use strict';

function getRandomElement(n, min, max) {
    
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*(max - min) + +min))
    }
    return console.log(arr);
}

getRandomElement(9, 15, 29);
