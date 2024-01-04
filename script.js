const menu = document.getElementById("menu");
const navContainer = document.getElementById("navContainer");

menu.onclick = () => {
    navContainer.classList.toggle("showNavContainer")
}