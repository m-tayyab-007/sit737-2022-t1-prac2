var express = require("express")
var bodyParser = require('body-parser')
app = express();
// we set the port programmatically, in case we need to change it later
var port = 3000;
//this is where we are going to getch our html from
var root = '/public'
//tell express to use the static middleware,
app.use(express.static(__dirname + root));
//start the app and listen to the port


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get("/test", function (request, response) {
    var param = request.query.username
    console.log('Get requested by ' + param)
    response.send('Thank you for requesting our Get Service')
})
app.post('/test', function (request, response) {
    console.log(request.body)
    var data = request.body;
    console.log('Post requested, here is the data :' + data)
    response.send('Thank you for requesting our Post Service')
})


app.listen(port);
console.log("Listening on port ", port);



const logger = require("./logger")


logger.info("Server Started");

// logger.warn("warning information");
// logger.info("info information");
// logger.debug("debug information");