'use strict';

const allСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];


let sum = 0;
let res = 0;

function getAveragePriceGoods() {

    for (let i = 0; i < allСashbox.length; i++) {
        sum += (allСashbox[i][0]) * (allСashbox [i][1]);
    }

    for (let i = 0; i < allСashbox.length; i++) {
        res += (allСashbox[i][0]);
    }

    return console.log(Math.floor(sum/res));
}

getAveragePriceGoods();
