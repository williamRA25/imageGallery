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
  return featuredImages
}

const featuredImages = getFeaturedimages(imagesData)
const featuredList = document.getElementById("featured-list")
for (let index = 0; index < featuredImages.length; index++) {
  const featured = featuredImages[index];
  featuredList.innerHTML += `
    <div class="col-6 col-md-4 col-lg-3 mb-3">
      <div class="card" h-100>
        <img src="${featured.url}" class="card-img-top image-card" alt="${featured.description}">
        <div class="card-body">
         <p class="card-text text-muted"> <b>Autor</b>: ${featured.author}</p>
        </div>
      </div>
    </div>
  `
  
}