function findCategory(imageData, slug) {
  let foundCategory = null;
  for (let index = 0; index < imageData.length; index++) {
    const imageCategory = imageData[index];
    if (slug === imageCategory.slug) {
      foundCategory = imageCategory;
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
    allImages.push(...imagesCategory.images);
  }
  return allImages;
}

function getCategories(imagesData) {
  const categories = [];
  for (let index = 0; index < imagesData.length; index++) {
    const category = imagesData[index];
    categories.push({
      label: category.category,
      value: category.slug,
    });
  }
  return categories;
}

function getAuthors(imageData) {
  const allImages = getAllImages(imageData);
  const uniqueAuthors = new Set();
  for (let index = 0; index < allImages.length; index++) {
    const image = allImages[index];
    uniqueAuthors.add(image.author);
  }
  const authorsArray = [...uniqueAuthors];
  return authorsArray.map((author) => {
    return {
      label: author,
      value: author,
    };
  });
}

function setFilterOption(listOption, select) {
  listOption.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    select.appendChild(optionElement);
  });
}

function filterImages(activeFilters, imageData) {
  const allImages = getAllImages(imageData);
  const author = activeFilters.author;
  const category = activeFilters.category;
  const search = activeFilters.search.toLowerCase();

  let filtered = allImages;

  if (search) {
    return allImages.filter((image)=>{
      const authorLower = image.author.toLowerCase()
      const descriptionLower = image.description.toLowerCase()
      const categoryNameLower = image.categoryName.toLowerCase()
      // return image.author.toLowerCase().startsWith(search)
      return authorLower.startsWith(search) || 
            descriptionLower.startsWith(search) ||
            categoryNameLower.startsWith(search)
    })
  }

  if (category) {
    const categoryData = findCategory(imageData, category);
    // se valida que categorydata sea un valor truthy, es decir que tenga un valor asignado
    if (categoryData) {
      filtered = categoryData.images;
    }
  }

  if (author) {
    filtered = filtered.filter((image) => {
      return image.author === author;
    });
  }

  return filtered;
}

function updateGallery(activeFilters, imagesData) {
  const filtered = filterImages(activeFilters, imagesData);
  // asignado valor que devuelve la funcion a la constante
  const cardImagesHtml = renderCardImages(filtered);

  // asignar el html al elemento obtenido con la funcion getElementById
  listImgContainer.innerHTML = cardImagesHtml;
}

const queryString = window.location.search;
// ?category=forest
const urlParams = new URLSearchParams(queryString);
let category = urlParams.get("category");

const activeFilters = {
  author: "",
  category: category,
  search: "",
};

const filtered = filterImages(activeFilters, imagesData);

// obtener el elemento html para manipularlo atravez del DOM
const listImgContainer = document.getElementById("list-images");

// asignado valor que devuelve la funcion a la constante
const cardImagesHtml = renderCardImages(filtered);

// asignar el html al elemento obtenido con la funcion getElementById
listImgContainer.innerHTML = cardImagesHtml;

const authors = getAuthors(imagesData);
const categories = getCategories(imagesData);

const selectAuthor = document.getElementById("author-filter");
const selectCategory = document.getElementById("category-filter");

const searchInput = document.getElementById("search-input");

setFilterOption(authors, selectAuthor);
setFilterOption(categories, selectCategory);

selectAuthor.addEventListener("change", (event) => {
  activeFilters.author = event.target.value;
  updateGallery(activeFilters, imagesData);
});

selectCategory.addEventListener("change", (event) => {
  activeFilters.category = event.target.value;
  updateGallery(activeFilters, imagesData);
});

searchInput.addEventListener("input", (event) => {
  activeFilters.search = event.target.value;
  activeFilters.author = ""
  activeFilters.category = ""
  updateGallery(activeFilters, imagesData);
});
