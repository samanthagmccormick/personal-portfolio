var mongoose = require('mongoose');
var PortfolioItem = require('../portfolio-items.js');

// look through the database
PortfolioItem.find({}, function(err, results){
	// if the results are 0, prefill the database (otherwise do nothing)
	if(results.length === 0) {
		// create a new item
		var backstagePass = new PortfolioItem({
			title: 'Backstage Pass',
			description: 'This full-stack web application was built to help event managers find volunteers for their events, faster. Events like TEDxBoulder, the Great American Beer Festival, and the Aspen Food & Wine Festival rely on volunteers to set up and run the event. Largely, the process to find, sign up, and swap info between volunteers and event managers was based on email and forms. However, Backstage Pass uses a MongoDB database to swap information between these users, eliminating the need for tedious emails and repetitious filling out of forms.',
			features: 'Two types of user dashboards, user login/user authentication using Passport npm, multiple users, search/filter, event manager users can add new events from their dashboard, responsive to all screen sizes',
			URL: 'https://backstagepass.herokuapp.com/',
			githubURL: 'https://github.com/samanthagmccormick/refactoru-final-backstage-pass',
			date: '2014',
			type: 'Full-Stack Web Application',
			logo: '/images/bp_logo.png',
			photos: [
			'/images/bp_1.png',
			'/images/bp_2.png',
			'/images/bp_3.png',
			'/images/bp_4.png',
			'/images/bp_5.png',
			'/images/bp_6.png',
			'/images/bp_7.png',
			'/images/bp_8.png',
			'/images/bp_9.png'
			],
			color: '#004056',
			font: 'Codystar', 
			tags: [
			'JavaScript',
			'jQuery',
			'Express MVC',
			'Jade',
			'node.js',
			'MongoDB',
			'NoSQL',
			'Twitter Bootstrap'
			]
		});

		backstagePass.save();

		var buildABasicBitch = new PortfolioItem({
			title: 'Build a Basic Bitch',
			description: 'This front-end web application was built to entertain. Outfit your very own Basic Bitch with accessories like pumpkin spice lattes and messy buns. Then name her, save her, and watch her dance to the beat of a Taylor Swift song.',
			features: 'Drag and drop, animation, responsive to all screen sizes, information storage, single page application, random quote generator, music player',
			URL: 'http://www.samanthamccormick.com/basicbitch/',
			githubURL: 'https://github.com/samanthagmccormick/build-a-basic-bitch',
			date: '2014',
			type: 'Front-end Web Application',
			logo: '/images/bb_logo.png',
			photos: [

			],
			color: '#2C858D',
			font: 'Rock Salt',
			tags: [
			'JavaScript',
			'jQuery',
			'jQuery UI',
			'animate.css',
			'Twitter Bootstrap',
			'Underscore.js',
			'Adobe Photoshop',
			'Adobe Illustrator'
			]
		});

		buildABasicBitch.save();

	}

});