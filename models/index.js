const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../bin/config.js")[env];
let sequelize;

if (env === "production" || env === "testCI")
  sequelize = new Sequelize(config.url, config.options);
else
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.options
  );

const models = {
  Student: sequelize.import("./Student"),
  Schedule: sequelize.import("./Schedule"),
  Level: sequelize.import("./Level")
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models,
  User: sequelize.import("./User")
};
