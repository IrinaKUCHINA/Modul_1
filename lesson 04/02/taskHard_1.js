'use strict';

let salary = prompt('Какой доход вы получили в этом месяце?');

if (salary < 15000) {
    console.log(`Ваши налоги составили ${Math.round(salary*0.13)} рублей`);
}
else if (salary >= 15000 && salary < 50000) {
    console.log(`Ваши налоги составили ${Math.round(salary*0.2)} рублей`);
}
else {
    console.log(`Ваши налоги составили ${Math.round(salary*0.3)} рублей`);
}