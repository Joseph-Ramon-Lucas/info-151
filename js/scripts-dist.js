
// Showing navigation
let mainNav = document.querySelector("#mainNav")
let miniNav = document.querySelector("#miniNav")

let burgerButton = document.getElementById("burger-container");

let isNavVisible = false;


burgerButton.addEventListener("click", () => {
    if (!isNavVisible) {
        miniNav.classList.add("showMiniNav");
        isNavVisible = true;
    } else {
        miniNav.classList.remove("showMiniNav");
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

// console.log(closeButton);

closeButton.addEventListener("click", () => {
    signUpContainer.classList.remove("showSignUpContainer");
})

cancelButton.addEventListener("click", () => {
    signUpContainer.classList.remove("showSignUpContainer");
})

