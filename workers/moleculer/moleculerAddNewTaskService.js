const { MoleculerError } = require("moleculer");
const TaskModel = require('../../models/task.model');

const createNewTasks = async(ctx) => {

  const result = await TaskModel.create({
    name: ctx.params.name,
    urgency: ctx.params.urgency
  })

  return({
    result: {
      message: 'Task created!',
      data: result
    }
  })
}

module.exports = {
  name: "task",
  actions: {
    createNewTasks
  }
};
