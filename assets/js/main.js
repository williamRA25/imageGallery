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
  const previewHtmlImages = renderCardImages(previewImages)
  categoriesContainer.innerHTML += `
  <div class="mb-5">
    <h3 class="mb-3 tex-capitalize">${imageCategory.category}</h3>
    <div class="mb-3">
      <img class="image-fluid shadow-sm w-100 img-category-card" src="${imageCategory.cover}" alt="${imageCategory.description}">
      <p class="mt-2 text-muted">${imageCategory.description}</p>
    </div>
     <div class="row">${previewHtmlImages}</div>
    <div class="text-end">
    <a class="btn btn-outlined-primary" href="gallery.html?category=${imageCategory.slug}">Ver más</a>
    </div>
  </div>
  `;
}
