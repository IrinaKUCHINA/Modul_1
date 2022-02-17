'use strict';

let salary = prompt('Какой доход вы получили в этом месяце?');

if (salary < 15000) {
        console.log(`Ваши налоги составили ${Math.round(salary*0.13)} рублей`);
    } 
    else if (salary >= 15000 && salary < 50000) {
        const taxOne = 15000*0.13 + (salary - 15000)*0.2;
        console.log(`Ваши налоги составили ${Math.round(taxOne)} рублей`);
    }
    else {
        const taxTwo = 15000*0.13 + 35000*0.2 +(salary - 50000)*0.3;
        console.log(`Ваши налоги составили ${Math.round(taxTwo)} рублей`);
    }