/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const areaPoligono = (poligono) => {
  const tipoPoligono = poligono.tipo;
  let area = 0;
  switch (tipoPoligono) {
    case "Triangulo":
      area = (poligono.base * poligono.altura) / 2;
      console.log(`Área del triángulo: ${area}`);
      break;
    case "Cuadrado":
      area = poligono.lado * poligono.lado;
      console.log(`Área del cuadrado: ${area}`);
      break;
    case "Rectangulo":
      area = poligono.base * poligono.altura;
      console.log(`Área del rectángulo: ${area}`);
      break;
    default:
      throw new Error(`El tipo de polígono "${tipoPoligono}" no es válido.`);
  }
};

const triangulo = {
  tipo: "Triangulo",
  base: 5,
  altura: 4,
};

const cuadrado = {
  tipo: "Cuadrado",
  lado: 10,
};

const rectangulo = {
  tipo: "Rectangulo",
  base: 7,
  altura: 8,
};
areaPoligono(cuadrado);
