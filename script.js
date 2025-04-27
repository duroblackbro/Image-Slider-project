// Array of image URLs
const images = [
    'https://via.placeholder.com/700x400/ff7f7f/333333?text=Image+1',
    'https://via.placeholder.com/700x400/7fbfff/333333?text=Image+2',
    'https://via.placeholder.com/700x400/7fff7f/333333?text=Image+3',
    'https://via.placeholder.com/700x400/ffff7f/333333?text=Image+4',
    'https://via.placeholder.com/700x400/bf7fff/333333?text=Image+5'
  ];
  
  let currentIndex = 0; // Tracks current image index
  
  // Get image element
  const sliderImage = document.getElementById('slider-image');
  
  // Function to display image
  function showImage(index) {
    sliderImage.style.opacity = 0; // Fade out
    setTimeout(() => {
      sliderImage.src = images[index];
      sliderImage.style.opacity = 1; // Fade in
    }, 300);
  }
  
  // Function for next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  // Function for previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  // Event listeners for buttons
  document.getElementById('nextBtn').addEventListener('click', nextImage);
  document.getElementById('prevBtn').addEventListener('click', prevImage);
  
  // Initial image load
  window.onload = () => {
    showImage(currentIndex);
  
    // Start automatic slideshow
    setInterval(nextImage, 3000); // Change every 3 seconds
  };
  