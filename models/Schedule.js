module.exports = (sequelize, type) => {
  const Schedule = sequelize.define(
    "schedule",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      day: type.STRING,
      time: type.STRING,
      duration: type.FLOAT
    },
    { timestamps: true }
  );

  Schedule.associate = models => {
    Schedule.belongsTo(models.Student);
  };

  return Schedule;
};
