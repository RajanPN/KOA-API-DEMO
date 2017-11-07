const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const modulesPath = path.normalize(__dirname + '/');

const certCA = fs.readFileSync(`${modulesPath}util/devRootCA.pem`);
const certKey = fs.readFileSync(`${modulesPath}util/devMongodb.pem`);

const mongodb = {
	db_url: 'mongodb://localhost:27017/tasklist',
	options: {
		auth: {
			authdb: 'admin'
		},
		ssl: true,
		sslCA: certCA,
		sslKey: certKey,
		sslCert: certKey,
		keepAlive: 300000,
		connectTimeoutMS: 30000,
		autoReconnect: true,
		reconnectTries: 300000,
		reconnectInterval: 5000,
		useMongoClient: true,
		user: 'sanocare',
		pass: 'sanocare123' // .env file can be used for password
	}
};

/*
	Mongoose Config	
*/
mongoose.Promise = require('bluebird')
mongoose
	.connect(mongodb.db_url, mongodb.options)
	.then((response) => {
		console.log('Mongo connection created.')
	})
	.catch((err) => {
		console.log("Error connecting to Mongo")
		console.log(err);
	})

module.exports = mongoose.connection