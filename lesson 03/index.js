'use strict';
{
    let productNameOne = 'oranges';
    let oranges = 23;
    let number = 18;
    const categoryOranges = 'фрукты';
    let countPriceOranges = oranges*number;
    
    console.log(categoryOranges);
    console.log(countPriceOranges);
}

{
    let productNameTwo = 'toy';
    let toy = 18;
    let count = 22;
    const categoryToy = 'игрушки';
    let countPriceToy = toy*count;
    
    console.log(categoryToy);
    console.log(countPriceToy);
}

{
    const prodactName = prompt('Введите наименование товара');
    const count = prompt('Введите количество товара');
    const category = prompt('Введите категорию товара');
    const price = prompt('Введите цену товара');

    let result = price*count;

    console.log(typeof +count);
    console.log(typeof +price);

    console.log(`На складе ${count} единицы товаров ${prodactName} на сумму ${result} рублей.`)
}