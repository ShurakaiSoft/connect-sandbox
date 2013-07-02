/**
 * A connect server that uses middleware.
 */
var path = require('path');


// import mittlewares
var saveRequest = require('./saveRequest');
var writeHeader = require('./writeHeader');
var replyText = require('./replyText');


var port = 1337;
var version = 'v4';


require('connect').createServer(
	saveRequest(path.join(__dirname, '/../logs')),
	writeHeader('X-Powered-By', 'Node'),
	replyText("Hello World")
).listen(port, function () {
	console.log("Server %s Listening on port: %d", version, port);
});