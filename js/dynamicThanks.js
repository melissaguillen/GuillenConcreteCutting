let h1 = document.getElementById("dynamicThanksies");
var thanksName = localStorage.getItem("fullname");
var text = document.createTextNode("Thank You, "+thanksName+ "!")
 h1.appendChild(text);


