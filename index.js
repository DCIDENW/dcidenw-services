const express = require('express')
const app = express()
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyDy_tuhMnoda5AhcrlP--5iOV86yrNLy0Q",
    authDomain: "dcidenw-firebase.firebaseapp.com",
    databaseURL: "https://dcidenw-firebase.firebaseio.com",
    projectId: "dcidenw-firebase",
    storageBucket: "dcidenw-firebase.appspot.com",
    messagingSenderId: "923363221041"
  };
app.get('/', function (req, res) {
  res.send('Node App is running!')
})
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.post('/dcidenw/users', function(req, res) {
    var emailId = req.body.email;
    var password  = req.body.password;
    console.log('Retrieved from request '+emailId);
    firebase.auth().createUserWithEmailAndPassword(emailId, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
});
console.log("Initialize DB Service in the form of Firebase");
firebase.initializeApp(config);
//initialize listener to check which users signed in or signed out
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        res.send("Current User is "+user.email);
    }
});
app.listen(port, function () {
  console.log('Example app listening on port '+port)
})