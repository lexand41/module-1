'use strict';


const nod = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return nod(b, c);
  }
  return a;
}

console.log(nod(10, 25));

