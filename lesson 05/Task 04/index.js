'use strict';



function calculate(sum, number, discount = null) {
    let totalSum = sum;

    if (number >= 10) {
        const totalAmount = sum*0.97;
        console.log('Больше 10 товаров ' +totalAmount);
        
    }

    if (sum > 30000) {
        const percent = (sum - 30000) * 0.15;
        const totalAmount = sum - percent;
        console.log('Больше 30 000 рублей ' +totalAmount);
        
    }

    if (discount = 'METHED') {
        const totalAmount = sum * 0.9;
        console.log('Скидка METHED ' +totalAmount);
        
    }

    if (discount = "G3H2Z1" && sum > 2000) {
        const totalAmount = sum - 500;
        console.log('Скидка G3H2Z1 ' +totalAmount);
        
    }
    
};

const calc = calculate(100000, 12, 'G3H2Z1');
