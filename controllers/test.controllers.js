const TaskModel = require('../models/task.model')

var Seneca = require('seneca')

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