let fullname = document.getElementById("name");
let submit = document.getElementById("submit");
let h1 = document.getElementById("dynamicThanksies");

submit.addEventListener("submit", function(){
    let thankU = fullname.value;
    h1.innerText = "Thank You, " +thankU+ "!";
});