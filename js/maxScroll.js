const banner = document.querySelector(".container-banner");

function holdBanner(lastKnownScrollPosition) {
    if(lastKnownScrollPosition > 83) {
        banner.style.top = '0';
        banner.style.position = 'fixed';
    } else {
        banner.style.position = 'absolute';
        banner.style.top = '83px';
    }
}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    console.log("Last known scroll pos: " + lastKnownScrollPosition);
  
    holdBanner(lastKnownScrollPosition);
  });