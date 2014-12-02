var mongoose = require('mongoose');

var portfolioItemSchema = mongoose.Schema({
	title: String,
	description: String,
	features: String,
	githubURL: String,
	URL: String,
	githubURL: String,
	date: String,
	type: String,
	logo: String,
	photos: [String],
	popularity: Number,
	color: String,
	font: String,
	tags: [String]
});

module.exports = mongoose.model('portfolioItem', portfolioItemSchema);