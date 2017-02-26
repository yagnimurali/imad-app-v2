console.log('Loaded!');
alert("Welcome! Thank you for visiting my website...!");
var likes=0;
var like = grtelementbyId("like");
like.onClick= function() {
    likes=likes+1;
    var span = getelementbyId("value");
    span.innerHTML=likes;
    };