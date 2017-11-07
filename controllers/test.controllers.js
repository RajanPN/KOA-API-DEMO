const TaskModel = require('../models/task.model')
var Seneca = require('seneca')

exports.welcome = async(ctx) => {
    ctx.body = 'Welcome :)'
}

exports.testHello = async(ctx) => {
    ctx.body = 'Hello from test route!!!'
}

exports.testSeneca = async(ctx) => {

    function local() {
        this.add('cmd:run', function(msg, done) {
            this.prior(msg, (err, reply) => {
                return done(null, { tag: reply ? reply.tag : 'local' })
            })
        })
    }
    ctx.body = 'Hello from test Seneca!!!'

}

exports.testMolecular = async(ctx) => {
    ctx.body = 'Hello from test Molecular!!!'
}

exports.testServicebus = async(ctx) => {
    ctx.body = 'Hello from test Servicebus!!!'
}