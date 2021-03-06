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
    database: "confluo-api-test",
    options: {
      dialect: "postgres",
      logging: false
    }
  },
  testCI: {
    url: "postgresql://root@localhost/circle_test",
    options: {
      dialect: "postgres",
      logging: false
    }
  },
  production: {
    url: process.env.DATABASE_URL,
    options: {
      dialect: "postgres",
      logging: false
    }
  }
};
