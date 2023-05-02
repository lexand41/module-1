'use strict';


const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
  const newArr = [];
  for (const elem of arr) {
    newArr.push(`${prefix} ${elem}`)
  }
  return newArr
}
console.log(addPrefix(names,'Mr'));