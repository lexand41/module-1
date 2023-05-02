'use strict';


const generatoRandoNum = (num, n, m, evenOdd) => {
  const arrayRandoNum = []

  while (arrayRandoNum.length < num) {
    let numRand = (Math.floor(Math.random() * (m - n + 1) + n));
    if (numRand % 2 === 0 && evenOdd === 'even') {
      arrayRandoNum.push(numRand);
    } else if (numRand % 2 !== 0 && evenOdd === 'odd') {
      arrayRandoNum.push(numRand);
    }
  }
  return arrayRandoNum
}
console.log(generatoRandoNum(10, 90, -100, 'even'));
console.log(generatoRandoNum(10, 90, -100, 'odd'));

