const {ServiceBroker} = require('moleculer')

let broker = new ServiceBroker({logger: console})

broker.loadService('./workers/moleculer/moleculerGetTaskService.js')
broker.loadService('./workers/moleculer/moleculerAddNewTaskService.js')

exports.testMoleculer = async (ctx) => {
  broker.call('task.getTasks', {}).then(res => {
      broker.logger.info('task List', res)
      return res
    },
  ).then((taskList) => {
    if (taskList.tasks.length) {
      // console.log('result>>', taskList)
      return taskList
    }
    else
      return broker.call('task.createNewTasks', {
        name: 'Go to doctor',
        urgency: 'This saturday',
      }).then(res => {
        broker.logger.info(' New task created', res)
        return res
      })
  }).catch(err => {
    broker.logger.error(`Error occured! Action: '${err.ctx.action.name}', Message: ${err.code} - ${err.message}`)
    if (err.data)
      broker.logger.error('Error data:', err.data)
  })
  ctx.body = `Hello from test Moleculer!!!`
}