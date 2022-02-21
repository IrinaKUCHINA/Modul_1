'use strict';

function ucFirst(str) {

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log( ucFirst('привет Мир') );