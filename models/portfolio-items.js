var mongoose = require('mongoose');

var portfolioItemSchema = mongoose.Schema({
	title: String,
	description: String,
	tools: String,
	date: String,
	type: String,
	photo: String,
	galleryURL: String,
	popularity: Number
});

module.exports = mongoose.model('portfolioItem', portfolioItemSchema);