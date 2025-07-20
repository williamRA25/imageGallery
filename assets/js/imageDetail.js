const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const allImages = getAllImages(imagesData)
const image = allImages.find((image)=>{
    return image.id === id
})

const imageDetailContainer = document.getElementById("image-detail")
imageDetailContainer.innerHTML += `
  <div class="mb-5">
    <div class="mb-3 text-center">
      <img class="image-fluid shadow-sm w-100 img-detail" src="${image.url}" alt="${image.description}">
      <p class="card-text text-muted"><b>Autor</b>: ${image.author}</p>
      <p class="mt-2 text-muted">${image.description}</p>
    </div>
  </div>
  `;
