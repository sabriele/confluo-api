module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define(
    "level",
    {
      type: DataTypes.STRING,
      year: DataTypes.INTEGER
    },
    { timestamps: false }
  );

  Level.associate = models => {
    Level.belongsTo(models.Student);
  };

  return Level;
};
