'use strict';

const arr = [];
let sumNum = 0;

const foo = (arr) => {
  let num = Math.round(Math.random() * 10);
  arr.push(num);
  sumNum += num;
  if (sumNum < 50) {
    return foo(arr);
  }
  return arr
}

const arr2 = [];
let sumNum2 = 0;

const foo2 = (arr2) => {
  let num = Math.round(Math.random() * 10);
  arr2.push(num);
  sumNum2 += num;
  if (sumNum2 > 50) {
    return arr2;
  }
  return foo2(arr2);
}

console.log(foo(arr));
console.log(foo2(arr2));

