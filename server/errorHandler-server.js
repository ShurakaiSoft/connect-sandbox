/**
 * Example using connect's errorHandler stuff
 */

var connect = require('connect');

var app = connect();
var port = 1337;

app.use(function (req, res, next) {
	next(new Error('Hey!'));
});
app.use(function (req, res) {
	res.end("hello world");
});

connect.errorHandler.title = 'Custom Error Handler Title';
app.use(connect.errorHandler());

app.listen(port, function () {
	console.log("Error handling server listening on por: %d", port);
});

