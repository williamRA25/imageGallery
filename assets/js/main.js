/**
 * @param {Array} images
 */
function filterFeatured(images) {
  return images.filter((image) => image.featured === true);
}

/**
 * @param {Array} imagesData
 */
function getFeaturedimages(imagesData) {
  const featuredImages = [];
  for (let index = 0; index < imagesData.length; index++) {
    const imageData = imagesData[index];
    const filtered = filterFeatured(imageData.images);
    featuredImages.push(...filtered);
  }
  return featuredImages;
}

function renderImageCard(image) {
  return `
    <div class="col-6 col-md-4 col-lg-3 mb-3">
      <div class="card" h-100>
        <img src="${image.url}" class="card-img-top image-card" alt="${image.description}">
        <div class="card-body">
         <p class="card-text text-muted"> <b>Autor</b>: ${image.author}</p>
        </div>
      </div>
    </div>
  `;
}

function renderPreviwImages(images) {
  let previewHtmlImages = ""
  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    previewHtmlImages += renderImageCard(image)
  }
  return previewHtmlImages
}

const featuredImages = getFeaturedimages(imagesData);
const featuredList = document.getElementById("featured-list");
for (let index = 0; index < featuredImages.length; index++) {
  const featured = featuredImages[index];
  featuredList.innerHTML += renderImageCard(featured)
}

const categoriesContainer = document.getElementById("categories");
for (let index = 0; index < imagesData.length; index++) {
  const imageCategory = imagesData[index];
  const previewImages = imageCategory.images.slice(0, 4)
  const previewHtmlImages = renderPreviwImages(previewImages)
  categoriesContainer.innerHTML += `
  <div class="mb-5">
    <h3 class="mb-3 tex-capitalize">${imageCategory.category}</h3>
    <div class="mb-3">
      <img class="image-fluid shadow-sm w-100 img-category-card" src="${imageCategory.cover}" alt="${imageCategory.description}">
      <p class="mt-2 text-muted">${imageCategory.description}</p>
    </div>
     <div class="row">${previewHtmlImages}</div>
    <div class="text-end">
    <a class="btn btn-outlined-primary" href="">Ver más</a>
    </div>
  </div>
  `;
}
