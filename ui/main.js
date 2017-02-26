console.log('Loaded!');
alert("Welcome! Thank you for visiting my website...!");

var button = document.getElementById('like');
var counter=0;
button.onClick = function() {
    counter=counter+1;
    var span = document.getElementById('value');
    span.innerHTML = 'fun';
    };