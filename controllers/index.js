var PortfolioItem = require('../models/portfolio-items.js');

var indexController = {
	index: function(req, res) {
		// Find and show all porfolio items in teh database
		PortfolioItem.find({}, function(err, results) {
			// After the find, render the items:
			res.render('index', {
				portfolioItems: results
			});

		});
	},
	// Route to view a single portfolio item from the database
	viewItem: function(req, res) {
		var id = req.params.id;

		console.log("The ID is: ", id);

		PortfolioItem.findOne({_id: id}, function(err, result) {
			// Render your portfolio item page with these specific results
			res.render('portfolioItem', result);
		});
	}
};

module.exports = indexController;