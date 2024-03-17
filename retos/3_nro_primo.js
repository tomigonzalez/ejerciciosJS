/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 * 
 * ¿Qué es un número primo?
Un número primo es un número entero mayor que 1 
que solo es divisible por 1 y por sí mismo. 
Algunos ejemplos de números primos son 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 
y así sucesivamente. Si un número no es primo, se le llama un número compuesto.
 */

const primo = (nro) => {
  for (let i = 2; i < nro; i++) {
    if (nro % i === 0) {
      return;
    }
  }

  return nro != 1;
};

const primoEntre100 = () => {
  for (let i = 2; i <= 100; i++) {
    if (primo(i) == true) {
      console.log(i);
    }
  }
};
primoEntre100();
