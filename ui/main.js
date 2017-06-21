console.log('Loaded!');
//alert("Welcome! Thank you for visiting my website..
var element = document.getElementById("sodi");
element.innerHTML = "just a check";
var button = document.getElementById('coun');
var counter =0;
button.onclick = function (){
    counter=counter+1;
    var value=document.getElementById('counterv');
    value.innerHTML=counter.toString();
    
};

