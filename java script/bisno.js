

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("icone-fechar");

toggle.addEventListener("click", () => {
    menu.classList.toggle("open");

    const isOpen = menu.classList.contains("open");
    hamburgerIcon.style.display = isOpen ? "none" : "block";
    closeIcon.style.display = isOpen ? "block" : "none";
});