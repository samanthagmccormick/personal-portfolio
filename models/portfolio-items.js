var mongoose = require('mongoose');

var portfolioItemSchema = mongoose.Schema({
	title: String,
	description: String,
	tools: String,
	githubURL: String,
	galleryURL: String,
	date: String,
	type: String,
	photo: String,
	popularity: Number,
	color: String,
	font: String
});

module.exports = mongoose.model('portfolioItem', portfolioItemSchema);