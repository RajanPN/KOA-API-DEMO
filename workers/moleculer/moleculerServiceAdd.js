const { MoleculerError } = require("moleculer");

module.exports = {
  name: "math",
  actions: {
    add(ctx) {
      return Number(ctx.params.a) + Number(ctx.params.b);
    }
  }
};
