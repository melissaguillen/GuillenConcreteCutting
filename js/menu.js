var menuButton = document.getElementById("hamburger");
var menu = document.getElementById("menu");
// var links =document.getElementsByClassName("menuLinks");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("active");
});

function addingEventToAll() {
    let links =document.getElementsByClassName("menuLinks");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
                for (let j = 0; j < links.length; j++){
                    links[j].classList.remove("selected");
                }
                this.classList.add("selected"); 
        });
    }
};
// let links =document.getElementsByClassName("menuLinks");
// for (let i = 0; i < links.length; i++) {
//     links[i].classList.remove("selected");
// };
