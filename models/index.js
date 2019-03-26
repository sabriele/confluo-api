const Sequelize = require("sequelize");
const sequelize = new Sequelize("confluo-api", "postgres", "", {
  dialect: "postgres",
  logging: false
});

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
  ...models
};
