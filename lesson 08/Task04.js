'use strict';

function chooseYears(start, end) {
    let yearArray = [];
    for (let i = start; i <= end; i++) {        
        yearArray.push(i);
    }
    let result = [];

yearArray.forEach(function(year) {
    if (getLeapYear(year))
    result.push(year);
});

return result;
}

function getLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year;
} 
else {
    return false;
    }
}

console.log(chooseYears(2000, 2030));
