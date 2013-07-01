/**
 * A connect server that uses helloWorld middleware.
 */

var connect = require('connect');

var replyText = require('./replyText');

var port = 1337;
var app = connect.createServer(replyText("Hello World"));


app.listen(port, function () {
	console.log("Server Listening on port: %d", port);
});