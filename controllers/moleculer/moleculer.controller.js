const { ServiceBroker } = require("moleculer");

let broker = new ServiceBroker({ logger: console });

broker.loadService("./workers/moleculer/moleculerServiceAdd.js");
broker.loadService("./workers/moleculer/moleculerServiceSubtract.js");

exports.testMoleculer = async(ctx) => {
  broker.call("math.add", { a: 5, b: 3 }).then(res => broker.logger.info("  5 + 3 =", res))
  .then(() => {
    return broker.call("math.sub", { a: 9, b: 2 }).then(res => broker.logger.info("  9 - 2 =", res));
  })
  .catch(err => {
    broker.logger.error(`Error occured! Action: '${err.ctx.action.name}', Message: ${err.code} - ${err.message}`);
    if (err.data)
      broker.logger.error("Error data:", err.data);
  });
  ctx.body = `Hello from test Moleculer!!!`;
}