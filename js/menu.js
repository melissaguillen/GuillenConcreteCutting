var menuButton = document.getElementById("hamburger");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("active");
});
