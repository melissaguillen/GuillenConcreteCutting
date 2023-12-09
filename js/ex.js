var fullname = document.getElementById("name");
var submit = document.getElementById("submit");

submit.addEventListener("click", function(){
   var thankU = localStorage.setItem("fullname", fullname.value);
});
   