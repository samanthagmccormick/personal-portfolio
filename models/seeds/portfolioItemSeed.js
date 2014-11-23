var mongoose = require('mongoose');
var PortfolioItem = require('../portfolio-items.js');

// look through the database
PortfolioItem.find({}, function(err, results){
	// if the results are 0, prefill the database (otherwise do nothing)
	if(results.length === 0) {
		var 




	}



});