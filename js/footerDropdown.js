function toggleDropdown(dropContainer) {
    let dropdown = dropContainer.querySelector(".wrapper-footer-dropdown-items");
    let dropdownSmall = dropContainer.querySelector(".wrapper-footer-dropdown-items-small");
    
    if(dropdown) {
        dropdown.classList.toggle("hidden-dropdown");
        console.log("Toggled dropdown normal");
    } else if (dropdownSmall) {
        dropdownSmall.classList.toggle("hidden-dropdown");
        console.log("Toggled dropdown small");
    }
    
}