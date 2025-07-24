function renderImageCard(image) {
  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <a href="imageDetail.html?id=${image.id}" class="text-reset text-decoration-none h-100 d-block">
        <div class="card h-100 shadow-sm">
          <img src="${image.url}" class="card-img-top image-card img-fluid" alt="${image.description}">
          <div class="card-body">
            <p class="card-text text-muted mb-0"><strong>Autor:</strong> ${image.author}</p>
          </div>
        </div>
      </a>
    </div>
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
