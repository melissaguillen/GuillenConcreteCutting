let baseCSS = document.getElementById("baseCSS");
let inputCSS = document.getElementById("cssOption");

inputCSS.addEventListener("click", function() {
    if (inputCSS.value == "light") {
        baseCSS.setAttribute("href", "css/light.css");
    }
    if (inputCSS.value == "regular") {
        baseCSS.setAttribute("href", "css/foundation.css");
    }
    if (inputCSS.value == "magnified") {
        baseCSS.setAttribute("href", "css/magnified.css");
    }
});

// if (inputCSS.value == "light") {
//     baseCSS.setAttribute("href", "css/lightMode.css");
// }
// if (inputCSS.value == "regular") {
//     baseCSS.setAttribute("href", "css/foundation.css");
// }