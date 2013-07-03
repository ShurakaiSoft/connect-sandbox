/**
 * A connect server that uses middleware.
 */
var path = require('path');


// import mittlewares
var errorCreator = require('../lib/faulty');
var saveRequest = require('../lib/saveRequest');
var writeHeader = require('../lib/writeHeader');
var replyText = require('../lib/replyText');
var errorHandler = require('../lib/errorHandler');


var port = 1337;
var version = 'v7';


require('connect').createServer(
	errorCreator(),
	saveRequest(path.join(__dirname, '/../logs')),
	writeHeader('X-Powered-By', 'Node'),
	replyText("Hello World"),
	errorHandler()
).listen(port, function () {
	console.log("Server %s Listening on port: %d", version, port);
});