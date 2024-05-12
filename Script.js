// const coursesMenuButton = document.getElementById("coursesMenu");
// const coursesPopupMenu = document.getElementById("coursesPopupMenu");

// coursesMenuButton.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent default hyperlink behavior (following the link)
//   console.log();
//   if (coursesPopupMenu.classList.contains("hidden")) {
//     coursesPopupMenu.classList.remove("hidden"); // Show the popup menu
//   } else {
//     coursesPopupMenu.classList.add("hidden"); // Hide the popup menu
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve elements inside the event listener
  imageContainer = document.querySelector(".image-container");
  images = imageContainer.querySelectorAll("img");

  if (!imageContainer || !images.length) {
    // Handle potential errors (optional)
    console.error("Image container or images not found!");
    return; // Exit the function if no elements found
  }

  let activeImageIndex = 0; // Index of the currently active image

  function changeImage() {
    images[activeImageIndex].classList.remove("active");
    images[activeImageIndex].classList.add("hidden");

    activeImageIndex = (activeImageIndex + 1) % images.length; // Loop through images

    images[activeImageIndex].classList.remove("hidden");
    images[activeImageIndex].classList.add("active");
  }

  setInterval(changeImage, 5000); // Change image every 5 seconds (adjust as needed)
});
