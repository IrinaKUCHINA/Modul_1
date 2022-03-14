'use strict';

const rectangle = {
  width: 5,
  height: 5,
  get perimetr() {
    return (`${2 * (this.width + this.height)} см`);
  },
  get square() {
    return (`${this.width * this.height} см`);
  },
  set numWidth(x) {
    this.width = x;
  },
  set numHeight(y) {
    this.height = y;
},
}

rectangle.numWidth = 10;
rectangle.numHeight = 10;

console.log(rectangle.perimetr);
console.log(rectangle.square);
