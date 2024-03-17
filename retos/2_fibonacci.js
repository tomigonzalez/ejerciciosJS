/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
const fibonacci = () => {
  let numOne = 0;
  let numTwo = 1;

  for (let i = 0; i <= 50; i++) {
    let suma = numOne + numTwo;
    numOne = numTwo;
    numTwo = suma;
    console.log(numOne, " contador: ", i);
  }
};

fibonacci();
