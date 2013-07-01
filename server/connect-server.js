/**
 * A connect server that uses helloWorld middleware.
 */

var connect = require('connect');
// import middleware
var helloWorld = require('./helloWorld');


var app = connect.createServer(helloWorld);

app.listen(1337);