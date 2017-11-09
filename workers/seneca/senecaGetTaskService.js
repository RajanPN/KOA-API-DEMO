const Seneca = require('seneca');
const TaskModel = require('../../models/task.model');
const Logger = require('./custom-logger');

const getTasks = async(msg, reply) => {

  const tasks = await TaskModel.find({})

  console.log('tasks', tasks);

  reply({
    tasks: tasks
  })
}

Seneca({
    tag: 'listen',
    // internal: {
    //   logger: Logger
    // }
  })
  // .test('print')
  .add({
    cmd: 'getTasks'
  }, getTasks)
  .listen({
    pin: {
      cmd: 'getTasks'
    },
    port: 9090
  })
  .ready(function() {
    console.log('seneca instance ' + this.id)
  })