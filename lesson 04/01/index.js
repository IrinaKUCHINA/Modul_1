'use strict';

let prodactName = prompt('Введите наименование товара');
let count = prompt('Введите количество товара');
let category = prompt('Введите категорию товара');
let price = prompt('Введите цену товара');

if (isNaN(count)) {
    console.log('Вы ввели некорректные данные');}
    
else if (isNaN(price)) {
    console.log('Вы ввели некорректные данные');}

else{
    let result = price*count;
    console.log(`На складе ${count} единицы товаров ${prodactName} на сумму ${result} рублей.`);
}  
