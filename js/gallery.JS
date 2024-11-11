document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll("#gallery ul li img");
    const fullImage = document.getElementById("full-image");
    const caption = document.getElementById("image-caption");
  
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        // Start a subtle fade-out animation before switching the image
        fullImage.style.opacity = "0.5";
  
        // Use requestAnimationFrame for a smooth transition
        requestAnimationFrame(() => {
          setTimeout(() => {
            // Update the full-sized image and caption
            fullImage.src = thumbnail.dataset.large;
            caption.textContent = thumbnail.dataset.caption;
  
            // Wait for the image to load before fading it back in
            fullImage.onload = () => {
              fullImage.style.transition = "opacity 0.4s ease-in-out";
              fullImage.style.opacity = "1";
            };
          }, 150); // Shorter delay to enhance responsiveness
        });
      });
    });
  });
  
