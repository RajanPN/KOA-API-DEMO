const Seneca = require('seneca')
const TaskModel = require('../../models/task.model')
const Logger = require('./custom-logger')

const createNewTasks = async(msg, reply) => {

  const result = await TaskModel.create({
    name: msg.name,
    urgency: msg.urgency
  })


  console.log('New task', result)

  reply({
    result: {
      message: 'Task created!',
      data: result
    }
  })
}

Seneca({
    tag: 'listenCreateTask',
    // internal: {
    //   logger: Logger
    // }
  })
  // .test('print')
  .add({
    cmd: 'createTasks'
  }, createNewTasks)
  .listen({
    pin: {
      cmd: 'createTask'
    },
    port: 9091
  })
  .ready(function() {
    console.log('seneca instance ' + this.id)
  })