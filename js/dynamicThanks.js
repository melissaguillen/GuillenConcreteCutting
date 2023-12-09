let h1 = document.getElementById("dynamicThanksies");
var thanksName = localStorage.getItem("fullname");
var text = document.createTextNode("Thank You, "+thanksName+ "!")
 h1.appendChild(text);

 //zen qoutes:
 var p = document.getElementById("quote");
 const request = new XMLHttpRequest();
 request.open("GET", "https://zenquotes.io/api/random");
 request.responseType = "json";
 request.send();
 request.onload = function(){
    if (request.readyState == 4 && request.status == 200) {
        var apiResponse = request.response;
        var parsedResponse = JSON.parse(apiResponse);
        var quote = parsedResponse.q;
        var author = parsedResponse.a;
        var text2 = document.createTextNode(+quote+"-"+author);
        p.appendChild(text2);
    } else {
        alert ("Error:" +request.status);
    }
        
 };



