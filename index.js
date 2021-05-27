const hamburgerBtn = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");

const changeActiveNavItem = () => {
    navLogo.classList.toggle("nav-item-active");
    item.classList.toggle("nav-item-active");
}

const toggleMenu = (item) => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", toggleMenu);

navLink.forEach(n => {
    n.addEventListener("click", toggleMenu);
});

navLogo.addEventListener("click", () => {
    if (hamburgerBtn.classList.contains("active") && navMenu.classList.contains("active")) {
        toggleMenu();
    }
});

document.addEventListener("scroll", () => { changeActiveNavItem });