function findCategory(imageData, slug) {
    let foundCategory = null
  for (let index = 0; index < imageData.length; index++) {
    const imageCategory = imageData[index];
    if (slug === imageCategory.slug) {
        foundCategory = imageCategory
        break;  
    }
  }
  return foundCategory;
}

function getAllImages(imagesData) {
  const allImages = [];
  for (let index = 0; index < imagesData.length; index++) {
    const imagesCategory = imagesData[index];

    // en este punto estoy empujando todas las imagenes del objeto imagesCategory, la llave se llama images
    // para acceder al valor de una llave se hace con el nombre del objeto seguido de un punto y el numbre de la llave asi
    // por ejemplo si el objeto se llama miObjeto y ese objeto tiene una llave que se llame llave1 que tiene como valr un numero 1 
    // para acceder solo hago miObjeto.llave1 lo cual me devolvera 1.      
    allImages.push(...imagesCategory.images)
  }
  return allImages;
}

const queryString = window.location.search;
// ?category=forest
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");

// obtener el elemento html para manipularlo atravez del DOM
  const listImgContainer = document.getElementById("list-images")

// se valida que el parametro category que se recive a traves de la url tenga un valor 
if (category !== null) {
  const imageCategory = findCategory(imagesData, category)
  
  // asignado valor que devuelve la funcion a la constante 
  const cardImagesHtml = renderCardImages(imageCategory.images)
  
  // asignar el html al elemento obtenido con la funcion getElementById
  listImgContainer.innerHTML = cardImagesHtml 
 
} else {
  // else seginifica caso contrario es decir si la condision del if no se cumple se usa el codigo de dentro de este bloque 
    const allImages = getAllImages(imagesData)
    const cardImagesHtml = renderCardImages(allImages)
    listImgContainer.innerHTML = cardImagesHtml 
}   

