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

//submit

var nameInput = document.getElementById('textbox');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
    
     var names = ['name1','name2','name3','name4'];
            var list = '';
            for (var i =0; i<names.length; i++){
                list += '<li>' + names[i] + '</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML = list;
                
};
