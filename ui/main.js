console.log('Loaded!');
//alert("Welcome! Thank you for visiting my website..
var element = document.getElementById("sodi");
element.innerHTML = "just a check";


var button = document.getElementById('coun');
 button.onclick = function()
     {
        var request = new XMLHttpRequest();
        request.onreadystatechange=function()
        {
         if(request.readyState === XMLHttpRequest.DONE)
         {
             if(request.status === 200)
                {
                    var counter=request.responseText;
                     var value=document.getElementById('counterv');
                     value.innerHTML=counter.toString();
                }
         }
        };
    
request.open('GET','http://yagnimurali.imad.hasura-app.io/counter',true);
request.send(null);
};

var nameinput=document.getElementById('name');
var names=nameinput.value;
var submit = document.getElementById('submit');
var namesd=['name1','name2','name3','name4'];
var list='';
submit.onclick=function(){
    for(var i=0;i<=namesd.length;i++)
    {
        list += '<li>'+ names[i] +'</li>';
    }
 var nam=document.getElementById('namelist');
 nam.innerHTML=list;
};