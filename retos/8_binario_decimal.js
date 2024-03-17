/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function convertirABinario(numeroDecimal) {
  let resultado = "";
  let cociente = numeroDecimal;

  while (cociente >= 1) {
    const residuo = cociente % 2;
    resultado = residuo + resultado;
    cociente = Math.floor(cociente / 2);
  }

  return resultado;
}

const numeroDecimal = 23;
const numeroBinario = convertirABinario(numeroDecimal);

console.log(`Número decimal: ${numeroDecimal}`);
console.log(`Número binario: ${numeroBinario}`);
