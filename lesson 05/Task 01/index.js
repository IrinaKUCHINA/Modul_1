'use strict';

const getPrice = money => {
    let resultMoney = money;
    resultMoney *= 1.2;
    resultMoney *= 73;
    return resultMoney;
}

let result = getPrice(47);
console.log(result);