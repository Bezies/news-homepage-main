const hamburger = document.querySelector(".menu-hamburger");
const cross = document.querySelector(".menu-close");
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
    navbar.classList.replace("navbar", "navbar-on");
    hamburger.classList.replace("menu-hamburger", "menu-hamburger-off");
    main.style.opacity = "0.2";
})


cross.addEventListener("click", () => {
    navbar.classList.replace("navbar-on", "navbar");
    hamburger.classList.replace("menu-hamburger-off", "menu-hamburger");
    main.style.opacity = "1"

})
