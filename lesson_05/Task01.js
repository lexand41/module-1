'use strict';


const converter = countEur => {
  let rub = 1;
  const usd = rub * 64;
  const eur = usd * 1.2;
  rub = eur * countEur;

  return `${countEur} EUR = ${rub} RUB`;
}

console.log(converter(10));
