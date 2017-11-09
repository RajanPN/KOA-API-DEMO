var bus = require('servicebus').bus()

exports.testServiceBus = async (ctx) => {
  bus.send('task.getTask', {sdf: 'my get task event'})

  ctx.body = `Hello from test ServiceBus!!!`
}