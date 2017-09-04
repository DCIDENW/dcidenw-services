const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Sample Node App is running!')
})
var port = 8080;

console.log("Initialize DB Service in the form of Firebase");

var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyDy_tuhMnoda5AhcrlP--5iOV86yrNLy0Q",
    authDomain: "dcidenw-firebase.firebaseapp.com",
    databaseURL: "https://dcidenw-firebase.firebaseio.com",
    projectId: "dcidenw-firebase",
    storageBucket: "dcidenw-firebase.appspot.com",
    messagingSenderId: "923363221041"
  };
firebase.initializeApp(config);

app.listen(port, function () {
  console.log('Example app listening on port '+port)
})