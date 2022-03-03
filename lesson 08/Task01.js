'use strict';

function getRandomElement(n) {
    
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*100 + 1))
    }
    return console.log(arr);
}

getRandomElement(9);
