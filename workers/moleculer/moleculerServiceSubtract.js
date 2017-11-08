const { MoleculerError } = require("moleculer");

module.exports = {
  name: "math",
  actions: {
    sub(ctx) {
      return Number(ctx.params.a) - Number(ctx.params.b);
    }
  }
};
