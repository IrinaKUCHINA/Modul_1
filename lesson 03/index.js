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
    let getProdactName = prompt('Введите наименование товара');
    let getCount = prompt('Введите количество товара');
    let getCategory = prompt('Введите категорию товара');
    let getPrice = prompt('Введите цену товара');

    console.log(typeof getCount);
    console.log(typeof getPrice);

    const prodactName = getProdactName;
    const count = +getCount;
    const category = getCategory;
    const price = +getPrice;

    console.log(typeof count);
    console.log(typeof price);

    let result = price*count;

    console.log(`На складе ${count} единицы товаров ${prodactName} на сумму ${result} рублей.`)
}
