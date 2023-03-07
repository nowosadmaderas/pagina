/* menu haburguesa */
const navTogle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navx = 5;

navTogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

/* boton leer mas */
let hideText_btn = document.getElementById('hideText_btn')
let hideText = document.getElementById('hideText')

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show')
    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'leer menos'
    }
    else{
        hideText_btn.innerHTML = 'leer mas'
    }
}