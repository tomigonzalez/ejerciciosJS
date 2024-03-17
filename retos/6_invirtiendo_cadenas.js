/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const invertir = (texto) => {
  let textoInvertido = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }

  return textoInvertido;
};

const palabra = "Hola mundo";

console.log(invertir(palabra));
