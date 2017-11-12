var bus = require('servicebus').bus()

exports.testServiceBus = async (ctx) => {
  bus.send('task.getTask', {msg: 'My message for service!'})

  ctx.body = `Hello from test ServiceBus!!!`
}