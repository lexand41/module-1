'use strict';


function leapYears(n, m) {
  const yearArray = [];
  for (let i = n; i <= m; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) {
      yearArray.push(i);
    }  
  }      
  return yearArray;
}

console.log(leapYears(1965, 2023));

