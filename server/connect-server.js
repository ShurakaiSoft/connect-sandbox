/**
 * A connect server that uses helloWorld middleware.
 */

var connect = require('connect');

// import mittlewares
var writeHeader = require('./writeHeader');
var replyText = require('./replyText');


var port = 1337;
var version = 'v3';
var app = connect.createServer(
	writeHeader('X-Powered-By', 'Node'),
	replyText("Hello World")
);


app.listen(port, function () {
	console.log("Server %s Listening on port: %d", version, port);
});