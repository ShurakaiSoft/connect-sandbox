/**
 * Using connect to serve static files.
 */

var connect = require('connect');
var path	= require('path');

var app = connect();
var port = 1337;

// setup a static web file server
app.use(connect.static(path.join(__dirname, '/../public')));


// default response if no static file exists.
app.use(function (req, res) {
	res.end('hello world');
});

app.listen(port, function () {
	console.log("Static file server listening on port: %d", port);
});