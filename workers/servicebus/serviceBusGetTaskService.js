var bus = require('servicebus').bus();
const TaskModel = require('../../models/task.model');

const getTasks = async(event) => {
  const tasks = await TaskModel.find({})
  return({
    tasks: tasks
  })
}


bus.listen('task.getTask', function (event) {
  getTasks(event).then((res)=>{
      if(res.tasks.length)
        return console.log('Task list',res);
      else
        return bus.send('task.createTask', {
          name: 'Go to doctor',
          urgency: 'This saturday'
        })
    }
  );
});