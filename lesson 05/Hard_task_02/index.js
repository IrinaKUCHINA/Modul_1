'use strict';

function minimum(a, b) {
    let c = (a + b)/2;
    return c - Math.abs((a - b)/2);
}

let res = minimum(98, 14);
console.log('Минимальное число:', res);
