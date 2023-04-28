'use strict';


const capitalizeString = str => {
  let newStr = str.toLowerCase();
  return `${newStr.charAt(0).toUpperCase()}${newStr.slice(1)}`
}

const reverseString_1 = str => capitalizeString(str).split("").reverse().join("");

console.log(reverseString_1('привет Мир'));