const sumaDigitos = (num) => {
  let numStr = num.toString();
  let suma = 0;
  for (let i = 0; i < numStr.length; i++) {
    suma += parseInt(numStr[i], 10);
  }
  return suma;
};
let num = 23
console.log(sumaDigitos(num));