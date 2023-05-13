'use strict';

const rectangle = {
  width: 5,
  height: 5,

  get perimeterRectangle() {
    return `${(this.width + this.height) * 2}см`;
  },
  get areaRectangle() {
    return `${this.width * this.height}см`;
  },

  set widthRectangle(val) {
    this.width = val;
  },
  set heightRectangle(val) {
    this.height = val;
  },
  
};

rectangle.widthRectangle = 10;
rectangle.heightRectangle = 10;

console.log(rectangle.perimeterRectangle);
console.log(rectangle.areaRectangle);

