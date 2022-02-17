'use strict';

const rain = Math.round(Math.random());
console.log(rain);

if (rain == 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
}

if (rain == 0) {
    console.log('Дождя нет!');
}


let pointsMath = prompt('Введите баллы по математике');
let pointsRussianLanguage = prompt('Введите баллы по русскому языку');
let pointsInformatics = prompt('Введите баллы по информатике');

let points = +pointsMath + +pointsRussianLanguage + +pointsInformatics;

if (points >= 265) {
    alert('Поздравляю, вы поступили на бюджет!');
} else {
    alert('Готовиться надо было лучше!');
}


const money = prompt('Сколько денег вы хотите снять?');
const cash = Math.floor(money/100);
console.log(cash);

const getCash = cash*100;

if (getCash < 100) {
    console.log('Извините, денег нет.');
} else {
    console.log(`Вы можете получить ${getCash}`);
}

