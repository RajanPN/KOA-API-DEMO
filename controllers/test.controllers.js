const TaskModel = require('../models/task.model')

exports.welcome = async(ctx) => {
	ctx.body = 'Welcome :)'
}

exports.testHello = async(ctx) => {
	ctx.body = 'Hello from test route!!!'
}

exports.testMolecular = async(ctx) => {
	ctx.body = 'Hello from test Molecular!!!'
}

exports.testServicebus = async(ctx) => {
	ctx.body = 'Hello from test Servicebus!!!'
}