'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

function addPrefix() {
    
    const newArray = [...names];
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = 'Mr ' + newArray[i];
    }
    return console.log(newArray);
}

addPrefix(names, 'Mr');