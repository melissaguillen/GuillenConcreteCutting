let h1 = document.getElementById("dynamicThanksies");
//var thanksName = localStorage.getItem("fullname");
var text = document.createTextNode("Thank You!")
 h1.appendChild(text);
//  localStorage.clear();

 //zen qoutes:
 var p = document.getElementById("quote");
 const request = new XMLHttpRequest();
 request.open("GET", "https://zenquotes.io/api/random");
 request.responseType = "json";
 request.send();
 request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        var apiResponse = request.responseText;
        var parsedResponse = JSON.parse(apiResponse);
        var quote = parsedResponse.q;
        var author = parsedResponse.a;
        var text2 = document.createTextNode(+quote+"-"+author);
        p.appendChild(text2);
    } else {
        alert ("Error:" +request.status);
    }
        
 };



