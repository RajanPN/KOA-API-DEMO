var bus = require('servicebus').bus();
const TaskModel = require('../../models/task.model');


const createNewTasks = async(ctx) => {

  const result = await TaskModel.create({
    name: ctx.name,
    urgency: ctx.urgency
  })

  return({
    result: {
      message: 'Task created!',
      data: result
    }
  })
}


bus.listen('task.createTask', function (event) {
  createNewTasks(event).then((res)=>{
    console.log('New task from servicebus', res)
    }
  );
});