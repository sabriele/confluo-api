module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "schedule",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      day: DataTypes.STRING,
      time: DataTypes.STRING,
      duration: DataTypes.FLOAT
    },
    { timestamps: true }
  );

  Schedule.associate = models => {
    Schedule.belongsTo(models.Student);
  };

  return Schedule;
};
