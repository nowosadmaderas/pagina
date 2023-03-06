const navTogle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navx = 5;

navTogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});