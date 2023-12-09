let fullname = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

submit.addEventListener("click", function (event) {
    if (fullname.value == "" || email.value == "") {
        event.preventDefault();
    } else if(!(emailReg.test(email.value) ) ) { 
        event.preventDefault();
        alert("Enter valid email!")
     }
});