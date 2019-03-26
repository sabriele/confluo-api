module.exports = (sequelize, type) => {
  const Level = sequelize.define(
    "level",
    {
      type: type.STRING,
      year: type.INTEGER
    },
    { timestamps: false }
  );

  Level.associate = models => {
    Level.belongsTo(models.Student);
  };

  return Level;
};
