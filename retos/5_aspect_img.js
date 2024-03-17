/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
// Importar librería para realizar peticiones HTTP

function calcularAspectRatio(urlImagen) {
  Request.get(urlImagen, (error, response, body) => {
    if (error) {
      console.error("Error al obtener la imagen:", error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error("Error al obtener la imagen:", response.statusCode);
      return;
    }

    // Convertir la respuesta en un buffer
    const buffer = Buffer.from(body);

    // Obtener la información de la imagen
    const { width, height } = Jimp.read(buffer).bitmap;

    // Calcular el aspect ratio
    const aspectRatio = width + ":" + height;
    console.log(`Aspect ratio de la imagen: ${aspectRatio}`);
  });
}

// Url de ejemplo
const urlImagen =
  "https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png";

calcularAspectRatio(urlImagen);
