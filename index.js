const hamburgerBtn = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");
const sections = document.querySelectorAll('.div-section');


const changeActiveNavItem = () => {

    let index = sections.length;

    while (--index && window.scrollY + 70 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));

    navLinks[index].classList.add('active');
}

const toggleMenu = () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", toggleMenu);

navLinks.forEach(n => {
    n.addEventListener("click", toggleMenu);
});

navLogo.addEventListener("click", () => {
    if (hamburgerBtn.classList.contains("active") && navMenu.classList.contains("active")) {
        toggleMenu();
    }
});

window.addEventListener('scroll', changeActiveNavItem);