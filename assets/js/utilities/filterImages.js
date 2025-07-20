function getAllImages(imagesData) {
  const allImages = [];
  for (let index = 0; index < imagesData.length; index++) {
    const imagesCategory = imagesData[index];

    // en este punto estoy empujando todas las imagenes del objeto imagesCategory, la llave se llama images
    // para acceder al valor de una llave se hace con el nombre del objeto seguido de un punto y el numbre de la llave asi
    // por ejemplo si el objeto se llama miObjeto y ese objeto tiene una llave que se llame llave1 que tiene como valr un numero 1
    // para acceder solo hago miObjeto.llave1 lo cual me devolvera 1.
    allImages.push(...imagesCategory.images);
  }
  return allImages;
}