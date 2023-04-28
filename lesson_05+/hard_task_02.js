'use strict';


const minNum = (a, b) => {
let min = 0;

  if (a > b){
    min = (a + b) / 2 - (a - b) / 2;
  }
  else {
    min = (a + b) / 2 - (b - a) / 2;
  }

  return min
}
console.log(minNum(75, 80));


const modMinNum = (a, b) => {
  return a > b ? (a + b) / 2 - (a - b) / 2 : (a + b) / 2 - (b - a) / 2;
}
console.log(modMinNum(40, 40));




