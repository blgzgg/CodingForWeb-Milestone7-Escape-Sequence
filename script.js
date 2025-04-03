const imageSources = [
  "assets/trail.jpeg",
  "assets/lakesunset.jpeg",
  "assets/cabin.jpeg",
  "assets/doe.jpeg",
  "assets/starrynight.jpeg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  const img = document.createElement("img");

  // 1.2 Customize the element
  img.src = imageSource;
  img.classList.add("thumbnail");

  // 1.3 Append the element
  const container = document.getElementById("thumbnail-container");
  container.appendChild(img);

  // 1.4 Add the onclick
  img.onclick = function () {
    const fullsizeImage = document.getElementById("fullsize-image");
    fullsizeImage.src = imageSource;
    // Unhide the image container if it's hidden
    const imageContainer = document.getElementById("image-container");
    imageContainer.classList.remove("hidden");
  };
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (let i = 0; i < imageSources.length; i++) {
    // 2.2 Call addThumbnail each iteration
    addThumbnail(imageSources[i]);
  }
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load
const firstImage = imageSources[0];
document.getElementById("fullsize-image").src = firstImage;
document.getElementById("image-container").classList.remove("hidden");
