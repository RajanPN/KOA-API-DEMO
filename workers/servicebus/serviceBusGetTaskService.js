var bus = require('servicebus').bus()
const TaskModel = require('../../models/task.model')

const getTasks = async (event) => {
  const tasks = await TaskModel.find({})
  return ({
    tasks: tasks,
    message: event,
  })
}

bus.listen('task.getTask', function (event) {
  getTasks(event).then((res) => {
      if (res.tasks.length) {
        bus.publish('task.workerEvent', {
          msg: 'List of task available!,',
          result: res.tasks,
        })
        return null;
      }
      else {
        bus.publish('task.workerEvent', {
          msg: 'Creating new task!,',
        })
        return bus.send('task.createTask', {
          name: 'Go to doctor',
          urgency: 'This saturday',
        })
      }
    },
  )
})