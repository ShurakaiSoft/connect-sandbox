/**
 * A connect session server example
 */

var connect = require('connect');
var format = require('util').format;

var app = connect();
var port = 1337;

// setup middleware
app.use(connect.query());
app.use(connect.cookieParser('this is my secret string'));
app.use(connect.session({
	cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// response
app.use(function (req, res) {
	for (var name in req.query) {
		req.session[name] = req.query[name];
	}
	res.end(format(req.session) + '\n');
});

// start server
app.listen(port, function () {
	console.log('Demo sesssion server listening on port: %d', port);
});