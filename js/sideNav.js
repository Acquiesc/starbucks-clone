const btn = document.getElementById('sideNav');
btn.addEventListener('click', toggleMenu);

const bkgrd = document.querySelector(".container-right-nav");
const menu = document.querySelector(".container-right-nav-menu");

function toggleMenu() {
    bkgrd.classList.toggle("active-background");
    menu.classList.toggle("active-menu");

    if(bkgrd.classList.contains("active-background")) {
        //update to close icon
        btn.querySelector("i").remove();

        var icon = document.createElement("i");
        icon.classList.add("fa-solid");
        icon.classList.add("fa-xmark");
        btn.appendChild(icon);

        //prevent page scrolling
        document.body.setAttribute("class", "prevent-scroll");
        console.log("Menu active");
    } else {
        //update to open icon
        btn.querySelector("i").remove();

        let icon = document.createElement("i");
        icon.classList.add("fa-solid");
        icon.classList.add("fa-bars");
        btn.appendChild(icon);

        //allow scrolling
        document.body.removeAttribute("class", "prevent-scroll");
        console.log("Menu not active");
    }

}



//create side menu via js

////prevent scrolling while menu is open
// document.body.setAttribute("class", "prevent-scroll");

// //black background
// let menuBkgrd = document.createElement("div");
// menuBkgrd.setAttribute("id", "menuBkgrd");
// menuBkgrd.setAttribute("class", "nav-side-open");
// document.querySelector(".container-index").appendChild(menuBkgrd);

// //white menu container
// let menuContainer = document.createElement("div");
// menuContainer.setAttribute("id", "menuContainer");
// menuContainer.setAttribute("class", "nav-side-open");
// document.querySelector("#menuBkgrd").appendChild(menuContainer);

// //navigation list
// let navContainer = document.createElement("div");
// navContainer.setAttribute("id", "navContainer");
// navContainer.setAttribute("class", "nav-side-open");
// document.querySelector("#menuContainer").appendChild(navContainer);

// let unList = document.createElement("ul");
// unList.setAttribute("id", "unList");
// unList.setAttribute("class", "nav-side-open");
// document.querySelector("#navContainer").appendChild(unList);

// let menuLink = document.createElement("a");
// menuLink.setAttribute("id", "menuLink");
// menuLink.href = "#";
// document.querySelector("#unList").appendChild(menuLink);

// let menu = document.createElement("li");
// menu.setAttribute("id", "menu");
// menu.setAttribute("class", "nav-side-open");
// menu.setAttribute("class", "nav-side-item");
// menu.textContent = "Menu";
// document.querySelector("#menuLink").appendChild(menu);

// let rewardLink = document.createElement("a");
// rewardLink.setAttribute("id", "rewardLink");
// rewardLink.href = "#";
// document.querySelector("#unList").appendChild(rewardLink);

// let rewards = document.createElement("li");
// rewards.setAttribute("id", "rewards");
// rewards.setAttribute("class", "nav-side-open");
// rewards.setAttribute("class", "nav-side-item");
// rewards.textContent = "Rewards";
// document.querySelector("#rewardLink").appendChild(rewards);

// let giftCardsLink = document.createElement("a");
// giftCardsLink.setAttribute("id", "giftCardsLink");
// giftCardsLink.href = "#";
// document.querySelector("#unList").appendChild(giftCardsLink);

// let giftCards = document.createElement("li");
// giftCards.setAttribute("id", "giftCards");
// giftCards.setAttribute("class", "nav-side-open");
// giftCards.setAttribute("class", "nav-side-item");
// giftCards.textContent = "Gift Cards";
// document.querySelector("#giftCardsLink").appendChild(giftCards);

// let actionContainer = document.createElement("div");
// actionContainer.setAttribute("id", "actionContainer");
// actionContainer.setAttribute("class", "nav-side-open");
// document.querySelector("#menuContainer").appendChild(actionContainer);

// //sign in/join now
// let loginContainer = document.createElement("div");
// loginContainer.setAttribute("id", "loginContainer");
// loginContainer.setAttribute("class", "nav-side-open");
// document.querySelector("#actionContainer").appendChild(loginContainer);

// let login = document.createElement("a");
// login.setAttribute("id", "loginBtn");
// login.setAttribute("class", "stndrdBtn");
// login.textContent = "Sign in";
// document.querySelector("#loginContainer").appendChild(login);

// let signUp = document.createElement("a");
// signUp.setAttribute("id", "signupBtn");
// signUp.setAttribute("class", "stndrdBtn");
// signUp.textContent = "Join now"
// document.querySelector("#loginContainer").appendChild(signUp);

// //find a store
// let locatorContainer = document.createElement("div");
// locatorContainer.setAttribute("id", "locatorContainer");
// locatorContainer.setAttribute("class", "container-find-store");
// document.querySelector("#actionContainer").appendChild(locatorContainer);

// let locatorLink = document.createElement("a");
// locatorLink.setAttribute("id", "locatorLink");
// document.querySelector("#locatorContainer").appendChild(locatorLink);

// let locatorRef = document.createElement("i");
// locatorRef.setAttribute("id", "locatorRef");
// locatorRef.setAttribute("class", "fa-solid fa-location-dot");
// document.querySelector("#locatorLink").appendChild(locatorRef);

// let locatorText = document.createElement("p");
// locatorText.setAttribute("id", "locatorText");
// locatorText.textContent = "Find a store";
// document.querySelector("#locatorLink").appendChild(locatorText);

//style side menu created via JS

// #menuBkgrd {
//     width: 100%;
//     background-color: rgba(17, 17, 17, .38);
//     z-index: 900;
//     top: 83px !important;
//     height: calc(100% - 83px) !important;
//     position: absolute;
// }

// #unList {
//     margin-top: 3rem !important;
//     width: 100%;
// }

// #menuContainer {
//     left: 20vw;
//     right: 0;
//     width: 80vw;
//     background-color: white;
//     z-index: 1000;
//     opacity: 1;
//     height: 100%;
//     position: absolute;
// }

// .nav-side-item {
//     width: 100%;
//     padding: 1.6rem 3.2rem !important;
//     font-size: 1.6rem;
// }

// #actionContainer {
//     margin-top: 1.6rem;
//     margin-left: 3.2rem;
// }

// #loginContainer {
//     display: flex;
//     gap: 10px;
// }

// #navContainer {
//     border-bottom: 1px solid rgb(197, 195, 195);
// }

// #locatorContainer {
//     margin-top: 1.6rem;
//     align-items: center;
//     margin-right: 0 !important;
// }

// #locatorRef {
//     align-self: center;
// }

// #locatorLink {
//     display: flex;
//     gap: 10px;
// }