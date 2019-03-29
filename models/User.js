const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          fields: ["email"],
          msg: "This email is already taken"
        },
        validate: {
          isEmail: { msg: "Please enter a valid email" },
          notNull: { msg: "Please enter your email" }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Please enter your password" } }
      },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      imageUrl: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      hooks: {
        beforeCreate: customer => {
          const salt = bcrypt.genSaltSync(10);
          customer.password = bcrypt.hashSync(customer.password, salt);
        }
      }
    },
    { timestamps: true }
  );

  return User;
};
