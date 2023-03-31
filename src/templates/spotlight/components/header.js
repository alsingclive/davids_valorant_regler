// const toggleBtn = document.getElementById("toggle-btn");
// toggleBtn.addEventListener("click", toggleMode)

// function toggleMode() {


//       let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//       let isSystemDarkMode = darkModeMediaQuery.matches
//       let isDarkMode = document.documentElement.classList.toggle('dark')

//       if (isDarkMode === isSystemDarkMode) {
//         delete window.localStorage.isDarkMode
//       } else {
//         window.localStorage.isDarkMode = isDarkMode
//       }

//     }

const burgerBtn = document.getElementById("burger-menu-btn");
const closeBtn = document.getElementById("burger-close-btn");
const burgerMenu = document.getElementById("burger-menu");
const burgerOverlay = document.getElementById("burger-overlay");

burgerBtn.addEventListener("click", openBurgerMenu);
closeBtn.addEventListener("click", closeBurgerMenu);
burgerOverlay.addEventListener("click", closeBurgerMenu);

burgerMenu.classList.add("opacity-0", "pointer-events-none");

function openBurgerMenu() {

burgerMenu.classList.remove("opacity-0", "pointer-events-none");
}

function closeBurgerMenu() {

burgerMenu.classList.add("opacity-0", "pointer-events-none", "transition-opacity");
}