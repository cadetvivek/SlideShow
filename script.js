// Array of unique movie images (URLs of random movie images)
const movieImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1PYHtruXBttJ_yVacry5VR1ZvE4NumQ1Qw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3vJHgfbDfYrGgfr4y1oWxOH4KXGldHQJkg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYk5pYr5aZY8HzfXZqVKhfFZFt8uTgj06jg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3BPm6LdmFqGdfgd3yxW2nGfE4oF6zxtuTw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vJ6sfsrR9g0j2KkZ2WxWrzSCpqDkPzIWUQ&s"
  ];
  
  // Select the image element where the slideshow will be displayed
  const slideshowImage = document.getElementById("slideshow-image");
  
  // Set the first image as the default image
  let currentImageIndex = 0;
  slideshowImage.src = movieImages[currentImageIndex];
  
  // Function to update the image in the slideshow
  function updateSlideshow() {
    // Move to the next image; if at the end, go back to the first
    currentImageIndex = (currentImageIndex + 1) % movieImages.length;
    slideshowImage.src = movieImages[currentImageIndex];
  }
  
  // Start the slideshow by updating the image every 2000ms (2 seconds)
  setInterval(updateSlideshow, 2000);
  