let btns = document.querySelectorAll(".display-selector");

var currentDisplayBtn = document.querySelector(".active-display-btn");
var currentDisplay = document.querySelector(".active-display")

for(var i = 0; i < btns.length; i++)
{
    btns[i].addEventListener('click', toggleActiveDisplay);
}

function toggleActiveDisplay() {
    //remove current selected button
    currentDisplayBtn.classList.toggle("active-display-btn");

    //select clicked button
    this.classList.toggle("active-display-btn");

    //remove current display
    currentDisplay.classList.toggle("active-display")

    //change display
    var ID = this.id;
    var splitID = ID.split("dispBtn");
    var selectedDisp = splitID[1];

    var newDisp = document.getElementById("display" + selectedDisp);
    newDisp.classList.toggle("active-display");
    console.log("Toggled display" + selectedDisp);

    //set new active display
    currentDisplay = newDisp;

    //set new active button
    currentDisplayBtn = this;
    console.log("Toggled current display");
}