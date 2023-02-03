function toggleDropdown(dropContainer) {
    let dropdown = dropContainer.querySelector(".wrapper-footer-dropdown-items");
    
    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("show");
        console.log("Opened dropdown");
    } else {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("show");
        console.log("Closed dropdown");
    }
}