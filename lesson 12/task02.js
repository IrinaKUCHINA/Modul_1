'use strict';

let getArr = (arr) => {
  let newArray = [];
  let number = Math.floor((Math.random() * 10) + 1);
  newArray = arr.push(number);
  console.log(newArray);

 let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  if (sum < 50) {
    return getArr([1, 8]);
  }
  if (sum >= 50) {
    console.log('sum :', sum);
  }
  return console.log(newArray);
};

getArr([1, 8]);
