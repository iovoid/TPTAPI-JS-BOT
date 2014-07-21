//Framework for tptapi:
//Variables declaration:
var buyval1;
var buyval2;
var sclass;
var element;
var cant;
//Login:
var usnm="username";
var passw="password";
var loginurl="http://tptapi.com/login_proc.php?login";
var xhr= New XMLHttpRequest();
xhr.open("POST",loginurl,true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send("Username="+usnm+"&Password="+passw);
//Print how many money have the user:
//False will be remplaced by true or a variable or the while may be removed.
    var money=function(){
    xhr.open(false,"http://tptapi.com/money.php","GET");
var val= xhr.responseText;
var moneyval = val.substr(val.indexOf("Current balance:") + 16);
document.getElementById("money").innerText=moneyval;
}
//Buy stocks:
var buy=function(element,sclass,cant){
xhr.open("http://tptapi.com/stockProc.php?opt="+buyval1+"&stock="+buyval2);
xhr.send();
}
