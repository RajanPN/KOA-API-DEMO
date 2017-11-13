var bus = require('servicebus').bus();
bus.subscribe('task.event', function (eventPayload) {
  console.log('Subscriber 1 >>>>',eventPayload);
});