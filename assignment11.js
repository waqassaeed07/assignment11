// function firstcart(){
//     a=document.getElementById("bf").onclick+="2520M $199"
// }
// function secondcart(){
//     b=document.getElementById("bs").onclick+="Intel Celeron $119"
// }
// function secondcart(){
//     c=document.getElementById("bt").onclick+="32 GB  $202"
// }

// function showcart(){
    
//  document.getElementById("result").innerHTML =a+b+c
// }

var x=[];
var y=[];
var z=[];
var item=["2520m","Intel Celeron","32 GB"];
var name=["HP Elitebook 8460 14 LED iS--","Lenovo 11.6 Cherome OS Laptop","Samsung Galaxy Tab A SM-T550"];
var price=[199,119,202];

function firstcart(){
        x=item[0]+"$"+price[0];
        document.getElementById("resultf").innerHTML+=x
}
function secondcart(){
    y+=item[1]+"$"+price[1];
    document.getElementById("results").innerHTML+=y
}
function thirdcart(){
    z=item[2]+"$"+price[2];
    document.getElementById("resulto").innerHTML+=z
}
