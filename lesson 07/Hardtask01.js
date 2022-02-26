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


function getAveragePriceGoods(n) {
    
    let b = allСashbox[n][1] / allСashbox [n][0];
    console.log(b);
    
}

getAveragePriceGoods(1);