const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

window.onscroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("sticky-navbar").style.padding = "20px 10px";
        document.getElementById("logo").style.fontSize = "20px";
    } else {
        document.getElementById("sticky-navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    }
}