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
    let prodactName = prompt('Введите наименование товара');
    let count = prompt('Введите количество товара');
    let category = prompt('Введите категорию товара');
    let price = prompt('Введите цену товара');

    console.log(typeof +count);
    console.log(typeof +price);

    let result = price*count;

    console.log(`На складе ${count} единицы товаров ${prodactName} на сумму ${result} рублей.`)
}
