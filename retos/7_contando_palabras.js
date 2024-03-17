/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function contarPalabras(texto) {
  // Eliminar signos de puntuación
  const textoLimpio = texto.replace(/[.,?!:;-]/g, " ");

  // Convertir a minúsculas
  const textoMin = textoLimpio.toLowerCase();

  // Separar las palabras en un array
  const palabras = textoMin.split(" ");

  // Crear un objeto para almacenar el recuento
  const recuentoPalabras = {};

  for (const palabra of palabras) {
    if (recuentoPalabras[palabra]) {
      recuentoPalabras[palabra]++;
    } else {
      recuentoPalabras[palabra] = 1;
    }
  }

  // Mostrar el recuento de palabras
  console.log("Recuento de palabras:");
  for (const palabra in recuentoPalabras) {
    console.log(`- ${palabra}: ${recuentoPalabras[palabra]}`);
  }
}

// Ejemplo de uso
const texto = "Hola que tal Hola, ¿cómo estás? Hoy es un día soleado.";
contarPalabras(texto);
