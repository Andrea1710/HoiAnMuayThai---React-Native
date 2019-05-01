const authResolver = require("./auth");
const classesResolver = require("./classes");

const rootResolver = {
  ...authResolver,
  ...classesResolver
};

module.exports = rootResolver;
