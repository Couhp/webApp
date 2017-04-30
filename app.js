var server = require('express')
var app = server()
var fs = require('fs')
var path = require('path')

var port = process.env.PORT || 8080

app.set('views', './views');
app.set('view engine', 'jade');

app.listen(port, function() {
    console.log("App is listening at " + port)
})


app.use('/public', server.static(process.cwd() + '/public'));

const apiRouter = require(process.cwd() + '/app/routes/index.js');
app.use('/MyPage', apiRouter);