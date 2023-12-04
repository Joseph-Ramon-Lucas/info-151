
// Showing navigation
let mainNav = document.querySelector("#mainNav")
let miniNav = document.querySelector("#miniNav")

let burgerButton = document.getElementById("burger-container");

let burgerIcon = document.getElementById("burger-icon");
let xbutton = document.getElementById("xbutton");

let isNavVisible = false;


burgerButton.addEventListener("click", () => {
    if (!isNavVisible) {
        miniNav.classList.add("showMiniNav");
        xbutton.classList.add("showXbutton");
        burgerIcon.classList.add("hideBurger");
        isNavVisible = true;
    } else {
        miniNav.classList.remove("showMiniNav");
        xbutton.classList.remove("showXbutton");
        burgerIcon.classList.remove("hideBurger")
        isNavVisible = false;
    }
    
    
    console.log("button clickkkk");
})




//showing popup signup form

let signUpButtons = document.getElementsByClassName("signup");
let signUpContainer = document.getElementById("signUp");

let closeButton = document.getElementById("closeButton");
let cancelButton = document.getElementById("cancel");


for(let button=0; button < signUpButtons.length; button++) {
    signUpButtons[button].addEventListener("click", () => {
        signUpContainer.classList.add("showSignUpContainer");
        
    });
}

closeButton.addEventListener("click", () => {
    signUpContainer.classList.remove("showSignUpContainer");
})

cancelButton.addEventListener("click", () => {
    signUpContainer.classList.remove("showSignUpContainer");
})


// fancybox

Fancybox.bind()

