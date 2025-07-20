function renderImageCard(image) {
  return `
    <a class="col-6 col-md-4 col-lg-3 mb-4 text-reset text-decoration-none" href="imageDetail.html?id=${image.id}">
      <div class="card" h-100>
        <img src="${image.url}" class="card-img-top image-card" alt="${image.description}">
        <div class="card-body">
         <p class="card-text text-muted"><b>Autor</b>: ${image.author}</p>
        </div>
      </div>
    </a>
  `;
}

function renderCardImages(images) {
  let previewHtmlImages = ""
  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    previewHtmlImages += renderImageCard(image)
  }
  return previewHtmlImages
}
