const currentBanner = document.querySelector(".container-banner");

function holdBanner(lastKnownScrollPosition) {
    if(lastKnownScrollPosition > 83) {
        currentBanner.style.top = '0';
        currentBanner.style.position = 'fixed';
    } else {
        currentBanner.style.position = 'absolute';
        currentBanner.style.top = '83px';
    }
}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    console.log("Last known scroll pos: " + lastKnownScrollPosition);
  
    holdBanner(lastKnownScrollPosition);
  });