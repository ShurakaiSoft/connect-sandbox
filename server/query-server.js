/**
 * Example using connect's query middleware
 */

var connect = require('connect');

var app = connect();
var port = 1337;

app.use(connect.query());
app.use(function (req, res) {
	res.end(JSON.stringify(req.query));
});
app.listen(port, function () {
	console.log("Query string server listening on port: %d", port);
});