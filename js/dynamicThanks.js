let fullname = document.getElementById("name");
let submit = document.getElementById("submit");
let h1 = document.getElementById("dynamicThanksies");

submit.addEventListener("click", function(){
    let thankU = fullname.value;
    h1.innerHTML = "Thank You, " +thankU+ "!";
});