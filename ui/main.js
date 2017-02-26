console.log('Loaded!');
alert("Welcome! Thank you for visiting my website...!");
var likes=0;
var like = document.getElementById("like");
like.onClick= function() {
    likes=likes+1;
    var span = document.getElementById("value");
    span.innerHTML=likes;
    };