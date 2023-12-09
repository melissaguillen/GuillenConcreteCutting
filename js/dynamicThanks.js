let fullname = document.getElementById("name");
let submit = document.getElementById("submit");
let h1 = document.getElementById("dynamicThanksies");

submit.addEventListener("submit", function(){
    let thankU = localStorage.setItem(fullname.value);
    h1.innerHTML = "Thank You, " +thankU+ "!";
});