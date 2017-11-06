const TaskModel = require('../models/task.model')
// const { ServiceBroker } = require("moleculer");
// let broker = new ServiceBroker({ logger: console });

exports.welcome = async(ctx) => {
    ctx.body = 'Welcome :)'
}

exports.testHello = async(ctx) => {
    ctx.body = 'Hello from test route!!!'
}

exports.testSeneca = async(ctx) => {
    ctx.body = 'Hello from test Seneca!!!'
}

exports.testMolecular = async(ctx) => {
    ctx.body = 'Hello from test Molecular!!!'
}

exports.testServicebus = async(ctx) => {
    ctx.body = 'Hello from test Servicebus!!!'
}