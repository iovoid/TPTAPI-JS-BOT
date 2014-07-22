//Framework for tptapi:
//Variables declaration:
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
var elemprice=function(element){
xhr.open("GET","http://tptapi.com/getjson.php?type=stock");
xhr.send();
var jsonpricelist=xhr.responseText;
var price=jsonpricelist.substring(jsonpricelist.indexOf(element+":PRICE:"),jsonpricelist.indexOf("}"))
}
//Print how many money have the user:
    var money=function(){
    xhr.open(false,"http://tptapi.com/money.php","GET");
var val= xhr.responseText;
var moneyval = val.substring(val.indexOf("Current Balance:"),val.indexOf("."));
return moneyval;
}
//Buy stocks:
//Classes a and b still not suported
//Note: pcb means waste all the money in the stock.
var buy=function(element,sclass,cant){
    if(sclass=="pcb"){
xhr.open("GET","http://tptapi.com/stockProc.php?opt=2&stock="+sclass);
xhr.send();
}
if(sclass="b"){
    xhr.open("GET","http://tptapi.com/stockProc.php?opt=1&stock="+sclass);
xhr.send("shares="+cant);
}
if(sclass="a"){
    xhr.open("GET","http://tptapi.com/stockProc.php?opt=1&stock="+sclass);
xhr.send("shares="+cant);
}
}
var sell=function(element,sclass,cant){
    xhr.open("POST","http://tptapi.com/stockForm.php?sell="+element+"&type="+sclass);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send("shares="+cant);
}
