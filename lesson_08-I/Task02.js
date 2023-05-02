'use strict';


const generatoRandoNum = (num, n, m) => {
  const arrayRandoNum = []

  for (let i = 0; i < num; i++) {
    arrayRandoNum.push(Math.floor(Math.random() * (m - n + 1) + n));
  }
  return arrayRandoNum
}
console.log(generatoRandoNum(10, 90, -100));







