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
