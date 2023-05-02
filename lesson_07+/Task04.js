'use strict';


const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (arr) => {
  let sumKey = 0;
  let sumValue = 0;
  for (const elem of arr) {
    sumKey += elem[0]; 
    sumValue += elem[1]; 
  }
  return sumValue / sumKey;
}

console.log(getAveragePriceGoods(allСashbox));





