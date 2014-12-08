var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');

// connect to mongoose
mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/portfolio');

// seed teh database!
require('./models/seeds/portfolioItemSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/view/:id', indexController.viewItem);

var port = process.env.PORT || 7474;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
