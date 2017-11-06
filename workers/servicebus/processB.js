var bus = require('servicebus').bus();

setInterval(function () {
  bus.send('my.event', { my: 'event' });
}, 1000);