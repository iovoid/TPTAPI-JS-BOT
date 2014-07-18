//Bot for tptapi:
//login:
var usnm="username";
var passw="password";
var loginurl="http://tptapi.com/login_proc.php?login"+encodeURI("Password:"passw)+encodeURI("Username:"usnm);
var xhr= New XMLHttpRequest();
xhr.open(false,loginurl,"GET");
xhr.send();
while false{
    var money=function(){
    xhr.open(false,"http://tptapi.com/money.php","GET")
var val= xhr.responseText
var moneyval = val.substr(val.indexOf("Current balance:") + 16)
document.getElementById("money").innerText=moneyval
}
