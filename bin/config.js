module.exports = {
  development: {
    username: "postgres",
    password: "",
    database: "confluo-api",
    options: {
      dialect: "postgres",
      logging: false
    }
  },
  test: {
    username: "postgres",
    password: "",
    database: "confluo-api",
    options: {
      dialect: "sqlite",
      storage: ":memory:",
      logging: false
    }
  },
  production: {
    url: process.env.DATABASE_URL,
    options: {
      dialect: "postgres"
    }
  }
};
