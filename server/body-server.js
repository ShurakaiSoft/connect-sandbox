/**
 * An exmaple of parsing the request body with connect.
 */

var connect = require('connect');

var app = connect();
var port = 1337;

// setup middleware
app.use(connect.logger(':method :req[content-type]'));
app.use(connect.bodyParser());
// standard response
app.use(function (req, res) {
	res.end(JSON.stringify(req.body));
});
app.listen(port, function () {
	console.log("Body parsing server listening on port: %d", port);
});