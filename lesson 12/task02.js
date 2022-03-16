'use strict';

const getArr = (arr) => {
  const number = Math.floor((Math.random() * 10) + 1);
  arr.push(number);

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (sum < 50) {
    getArr(arr);
  }
  if (sum >= 50) {
    return;
  }
};

getArr([1, 8]);
