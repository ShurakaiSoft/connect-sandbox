/**
 * Using connect's logger middleware
 */

var connect = require('connect');

var app = connect();
var port = 1337;

// connect logger custom format string
var format = ':method :url - :status - :response-time ms';


app.use(connect.logger(format));

// alternate middleware syntax
app.use(function (req, res) {
	res.end('Hello world');
});


app.listen(port, function () {
	console.log("Logging Server listening on port: %d", port);
});