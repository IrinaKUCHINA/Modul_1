'use strict';

function getRandomElement(n, min, max, word) {
    let arr = [];
    let even = [];
    let odd = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*(max - min) + +min))

        if (arr[i] % 2 === 0) {
        
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    if (word === 'even') {
        return even;
    }
    else {
        return odd;
    }
};

console.log(getRandomElement(9, 15, 29, 'odd'));
