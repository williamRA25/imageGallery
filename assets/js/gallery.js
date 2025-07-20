const queryString = window.location.search;
console.log(queryString);
// ?category=forest
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");

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
const imageCategory = findCategory(imagesData, category)

// asignado valor que devuelve la funcion a la constante 
const cardImagesHtml = renderCardImages(imageCategory.images)

// obtener el elemento html para manipularlo atravez del DOM
const listImgContainer = document.getElementById("list-images")

// asignar el html al elemento obtenido con la funcion getElementById
listImgContainer.innerHTML = cardImagesHtml 