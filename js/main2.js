const loadingScreen = document.getElementById('loader');

function hideLoadingScreen() {
    loadingScreen.style.display = 'none';
}

// Set a timeout to display the loading screen for 2 seconds, then hide it and redirect to index.html
setTimeout(hideLoadingScreen, 1500); // 2 seconds in milliseconds





// const loaderWrapper = document.querySelector('.loader-wrap');

// // Function to hide the loading screen and redirect to index.html
// function removeLoaderAndRedirect() {
//   loaderWrapper.style.display = 'none'; // Hide the loading screen
//   window.location.href = "index.php"; // Redirect to index.html
// }

// // Set a timeout to remove the loading screen and redirect after 2 seconds
// setTimeout(removeLoaderAndRedirect, 2000);


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

if (cursorDot && cursorOutline) { // Check if elements exist
  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.animate({transform : `translate(${posX}px, ${posY}px)`,},{duration: 100,fill:"forwards"})
    cursorOutline.animate({
      transform: `translate(${posX}px, ${posY}px)`, // Corrected syntax
    }, { duration: 500,fill:"forwards" }); // Corrected syntax
  });
} else {
  console.warn("Cursor elements not found! Ensure correct data attributes.");
}
