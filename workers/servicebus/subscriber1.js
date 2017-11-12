var bus = require('servicebus').bus();
bus.subscribe('task.workerEvent', function (eventPayload) {
  console.log('Subscriber 1 >>>>',eventPayload);
});