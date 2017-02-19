/*var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});*/

// counter code dark js file baby
var button = document.getElementById("counter");

button.onclick = function() {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          // take some action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }  
      // not done yet
    };
    
    // make the request
    request.open('GET', 'http://darkfist.imad.hasura-app.io/counter', true);
    request.send(null);
};


// submit name
var submit = document.getElementById('submit_btn');

submit.onclick = function() {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          // take some action
          if (request.status === 200) {
              // capture a list of names and render it
              var names = request.responseText;
              names = JSON.parse(names);
              var list = "";
              for (var i=0; i<names.length; i++) {
                  list += '<li>' + names[i] + '</li>';
              }
              var ul = document.getElementById('namelist');
              ul.innerHTML = list;
          }
      }  
      // not done yet
    };
    
    // make the request
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    request.open('GET', 'http://darkfist.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};
//inyha varaku vadide
