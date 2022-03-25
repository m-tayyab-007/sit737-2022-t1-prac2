var express = require("express")
var bodyParser=require('body-parser')
app = express();
// we set the port programmatically, in case we need to change it later
var port = 3000;
//this is where we are going to getch our html from
var root = '/public'
//tell express to use the static middleware,
app.use(express.static(__dirname + root));
//start the app and listen to the port
app.listen(port);
console.log("Listening on port ", port);