'use strict';


const capitalize = str => {
  let newStr = str.toLowerCase();
  return `${newStr[0].toUpperCase()}${newStr.slice(1)}`
}
console.log(capitalize('привет Мир'));


