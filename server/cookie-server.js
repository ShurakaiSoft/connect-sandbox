/**
 * Connect cookie demo server
 */

var connect = require('connect');

var app = connect();
var port = 1337;

// setup middleware
app.use(connect.cookieParser());

// actual response
app.use(function (req, res) {
	res.end(JSON.stringify(req.cookies));
});

// start server
app.listen(port, function () {
	console.log("Cookie server listening on port: %d", port);
});
