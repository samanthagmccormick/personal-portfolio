var mongoose = require('mongoose');
var PortfolioItem = require('../portfolio-items.js');

// look through the database
PortfolioItem.find({}, function(err, results){
	// if the results are 0, prefill the database (otherwise do nothing)
	if(results.length === 0) {
		// create a new item
		var backstagePass = new PortfolioItem({
			title: 'Backstage Pass',
			description: 'Full-stack blah blah blah',
			tools: '',
			galleryURL: 'https://backstagepass.herokuapp.com/',
			date: '2014',
			type: 'Web Application',
			photo: '/images/bp_logo.png',
			color: 'red',
			font: 'Codystar'
		});

		backstagePass.save();

		var electricalBrochure = new PortfolioItem({
			title: 'Electrical School Brochure',
			description: 'Custom-designed, full-color, trifold brochure for Denver-based IEC electrical school.',
			tools: 'Adobe Illustrator, Adobe Photoshop',
			galleryURL: 'http://www.samanthamccormick.com/wp-content/uploads/2013/04/Student-Brochure.png',
			date: '2013',
			type: 'Printed Marketing Material',
			photo: 'http://www.samanthamccormick.com/wp-content/uploads/2013/04/Student-Brochure.png',
			color: 'blue',
			font: 'Rock Salt'
		});

		electricalBrochure.save();

		var associationBrochure = new PortfolioItem({
			title: 'Trade Association Brochure',
			description: 'Custom-designed, full-color, trifold brochure for Denver-based IECRM trade association.',
			tools: 'Adobe Illustrator, Adobe Photoshop',
			galleryURL: 'http://www.samanthamccormick.com/wp-content/uploads/2013/04/Industry-Partner-Brochure.png',
			date: '2013',
			type: 'Printed Marketing Material',
			photo: 'http://www.samanthamccormick.com/wp-content/uploads/2013/04/Industry-Partner-Brochure.png',
			color: 'pink',
			font: 'Codystar'
		
		});

		associationBrochure.save();

		var busAd = new PortfolioItem({
			title: 'Electrical School Bus Ad',
			description: 'Custom-designed bus advertisement for IEC electrical school, which displayed on RTD buses in Denver and Boulder.',
			tools: 'Adobe Illustrator, Adobe Photoshop',
			galleryURL: 'http://www.samanthamccormick.com/wp-content/uploads/2013/01/IECRM-Apprentices-photo.png',
			date: '2014',
			type: 'Advertisement',
			photo: 'http://www.samanthamccormick.com/wp-content/uploads/2013/01/IECRM-Apprentices-photo.png',
			color: 'green',
			font: 'Pacifico'
			
		});

		busAd.save();
	}



});