let images = ["IMAGES/babycare.webp", "IMAGES/cookware.webp"]; // Array of image paths
let currentImageIndex = 0; // Keeps track of the current image displayed

const imageElement = document.getElementById("image7");

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.setAttribute('src', images[currentImageIndex]);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  imageElement.setAttribute('src', images[currentImageIndex]);
}
let timer = setInterval(nextImage, 3000); // Auto-play with 3 seconds interval

imageElement.addEventListener('mouseenter', function() {
  clearInterval(timer); // Stop auto-play on mouse enter
});

imageElement.addEventListener('mouseleave', function() {
  timer = setInterval(nextImage, 3000); // Resume auto-play on mouse leave
});