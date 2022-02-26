'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

let getAverageValue = arr => {
    let reducer = (x, y) => x + y;
    let sum = arr.reduce(reducer)
    return Math.floor(sum / arr.length);
}

console.log(getAverageValue(allСashbox));