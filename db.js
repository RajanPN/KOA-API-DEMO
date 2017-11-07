const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost/tasklist'
	/*
	  Mongoose Config
	*/
mongoose.Promise = require('bluebird')

mongoose.connect(dbURL, {
		useMongoClient: true
	}).then((response) => {
		console.log('Mongo connection created.')
	})
	.catch((err) => {
		console.log("Error connecting to Mongo")
		console.log(err);
	})

module.exports = mongoose.connection