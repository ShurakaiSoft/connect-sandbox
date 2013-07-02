/**
 * A connect server that uses middleware.
 */
var path = require('path');


// import mittlewares
var errorCreator = require('./faulty');
var saveRequest = require('./saveRequest');
var writeHeader = require('./writeHeader');
var replyText = require('./replyText');
var errorHandler = require('./errorHandler');


var port = 1337;
var version = 'v6';


require('connect').createServer(
	errorCreator(),
	saveRequest(path.join(__dirname, '/../logs')),
	writeHeader('X-Powered-By', 'Node'),
	replyText("Hello World"),
	errorHandler()
).listen(port, function () {
	console.log("Server %s Listening on port: %d", version, port);
});