'use strict';


const generatorRandomNum = num => {
  const arrayRandomNum = []
  for (let i = 0; i < num; i++ ) {
    arrayRandomNum.push(Math.round(Math.random() * 100));
  }
  return arrayRandomNum
}
console.log(generatorRandomNum(5));


