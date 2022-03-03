var v = document.getElementById("v");
var p = document.getElementById("p");
var e = document.getElementById("e");
var m = document.getElementById("m");
var s = document.getElementById("s");
var h = document.getElementById("h");

var el = ["v","p","e","m","s","h"];
var el2 = [v,p,e,m,s,h]

function valt(n){
    for (let i = 0; i < el.length; i++) {
        if(el[i] == n){
            el2[i].hidden = false;
        }
        else{
            el2[i].hidden = true;
        }
    }
    console.log("Elfogadva!");
}

valt("h");