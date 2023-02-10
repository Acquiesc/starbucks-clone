const disp = document.querySelector(".wrapper-reward-display");
const img = document.getElementById("rewardDispImg");
const header = document.getElementById("rewardDispHeader");
const text = document.getElementById("rewardDispText");

let btns = document.querySelectorAll(".display-selector");
var currentDisplayBtn = document.querySelector(".active-display-btn");

for(var i = 0; i < btns.length; i++)
{
    btns[i].addEventListener('click', toggleActiveDisplay);
}

function toggleActiveDisplay() {
    //remove current selected button
    currentDisplayBtn.classList.toggle("active-display-btn");

    //select clicked button
    this.classList.toggle("active-display-btn");

    //set new active button
    currentDisplayBtn = this;
    console.log("Toggled active button");

    //fade out current display
    changeDisp();

    //adjust current display
    //get number from buttonId for image URL && inner text
    var ID = this.id;
    var splitID = ID.split("dispBtn");
    var selectedDisp = splitID[1];

    img.src = "./images/rewards/disp" + selectedDisp + ".webp";

    if(selectedDisp == 1) {
        header.innerText = "Customize your drink"
        text.innerText = "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.";
    }
    else if(selectedDisp == 2) {
        header.innerText = "Brewed hot coffee, bakery item or hot tea"
        text.innerText = "Pair coffee cake or an almond croissant with your fresh cup of hot brew.";
    }
    else if(selectedDisp == 3) {
        header.innerText = "Handcrafted drink, hot breakfast or parfait"
        text.innerText = "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.";
    }
    else if(selectedDisp == 4) {
        header.innerText = "Salad, sandwich or protein box"
        text.innerText = "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.";
    }
    else if(selectedDisp == 5) {
        header.innerText = "Select merchandise or at-home coffee"
        text.innerText = "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.";
    }

    console.log("Toggled current display");
}

function changeDisp() {
    //fade back in
    console.log("Fading in");
    var op = 0;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            op = 1;
            clearInterval(timer);
        }
        disp.style.opacity = op;
        disp.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op +=  0.066;
    }, 15);
}