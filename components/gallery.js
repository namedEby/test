const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const images = document.querySelectorAll("#slider img");

let currentIndex = 0;

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  images.forEach((image, index) => {
    image.style.display = index === currentIndex ? "block" : "none";
  });
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images.forEach((image, index) => {
    image.style.display = index === currentIndex ? "block" : "none";
  });
});
