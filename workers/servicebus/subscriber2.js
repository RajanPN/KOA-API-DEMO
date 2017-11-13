const bus = require('servicebus').bus();
// const retry = require('servicebus-retry');

// bus.use(bus.package());
// bus.use(bus.correlate());
// bus.use(bus.logger());
//
// bus.use(retry({
//   store: new retry.MemoryStore()
// }));

bus.subscribe('task.event', function (eventPayload) {
  console.log('Subscriber 2 >>>>',eventPayload);
});

// bus.subscribe('task.workerEvent', { ack: true /* making this queue and messages persistent */ }, function (msg) {
//   console.log('Subscriber 2 >>>>',msg);
//   // msg.handle.ack(function () {
//   //   console.log('acked message ' + msg.cid);
//   // });
//   msg.handle.reject(function () {
//     throw new Error('message ' + msg.cid + ' was rejected. let\'s crash and retry');
//   });
// });