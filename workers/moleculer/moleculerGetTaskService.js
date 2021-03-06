const TaskModel = require('../../models/task.model');

const getTasks = async(ctx) => {

  const tasks = await TaskModel.find({})

  console.log('task list from molecular', tasks);
  return({
    tasks: tasks
  })
}

module.exports = {
  name: "task",
  actions: {
    getTasks
  }
};
