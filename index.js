const hamburgerBtn = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active");
    navMenuBtn.classList.remove("active");
}));