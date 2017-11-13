/*
  Include modules
*/
const koa = require('koa')
const convert = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const error = require('koa-json-error')
const logger = require('koa-logger')
const koaRes = require('koa-res')
const handleError = require('koa-handle-error')
const taskRoutes = require('./routes/')
// const senecaGetTasks = require('./workers/seneca/senecaGetTaskService')
// const senecaCreateTask = require('./workers/seneca/senecaAddNewTaskService')
const serviceBusGetTask = require('./workers/servicebus/serviceBusGetTaskService')
const serviceBusCreateTask = require('./workers/servicebus/servicebusAddNewTaskService')
const serviceBusSubscriber1 = require('./workers/servicebus/subscriber1')
const serviceBusSubscriber2 = require('./workers/servicebus/subscriber2')


  /*
    Mongoose db Connection
  */
  const db = require('./db')
// const db = require('./db_auth')


const app = new koa()

/*
  Server Config
*/
// error handling
app.use(async(ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

// logging
app.use(logger())

// body parsing
app.use(bodyParser())

// format response as JSON
app.use(convert(koaRes()))

// configure router
app.use(taskRoutes.routes())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('KOA API is running at http://localhost:%s', PORT); 
  console.log('  Press CTRL-C to stop\n');
}).on("error", err => {
  console.error(err);
});