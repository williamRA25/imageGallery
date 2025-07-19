/**
 * @param {[]} images
 */
function getFeaturedimages(images) {
  return images.filter(function (image) {
    return image.featured === true;
  });
}
const featuredRow = document.getElementById("featured-row");
const featuredArt = getFeaturedimages(imagesData.art);
const featuredForest = getFeaturedimages(imagesData.forest);
const featuredFire = getFeaturedimages(imagesData.fire);
const featuredVideoGames = getFeaturedimages(imagesData.videoGames);
const featuredImages = [
  ...featuredArt,
  ...featuredFire,
  ...featuredForest,
  ...featuredVideoGames,
];

featuredImages.forEach(function (featuredImage) {
  const itemImg = document.createElement("li");
  itemImg.classList.add("col-6", "col-md-3", "mb-4"); 
  // col-6: 2 columnas en móviles, col-md-3: 4 columnas en escritorio
  itemImg.innerHTML = `
    <img class="img-custom mx-auto d-block" src="${featuredImage.url}" alt=""> 
  `;
  document.getElementById("featured-list").appendChild(itemImg);
});


