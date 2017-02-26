console.log('Loaded!');
alert("Welcome! Thank you for visiting my website...!");
var counter=0;
var button = document.getElementById('like');
button.onClick = function() {
    counter=counter+1;
    var span = document.getElementById('value');
    span.innerHTML=counter.toString();
    };