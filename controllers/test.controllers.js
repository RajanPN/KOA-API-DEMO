const TaskModel = require('../models/task.model')

exports.welcome = async(ctx) => {
    ctx.body = 'Welcome :)'
}

exports.testHello = async(ctx) => {
    ctx.body = 'Hello from test route!!!'
}