const { ServiceBroker } = require("moleculer");

let broker = new ServiceBroker({ logger: console });

broker.createService({
    name: "math",
    actions: {
        add(ctx) {
            return Number(ctx.params.a) + Number(ctx.params.b);
        }
    }
});

broker.start();

// Call service
broker.call("math.add", { a: 5, b: 3 })
    .then(res => console.log("5 + 3 =", res))
    .catch(err => console.error(`Error occured! ${err.message}`));