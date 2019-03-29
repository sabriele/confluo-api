module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "student",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      subjects: DataTypes.ARRAY(DataTypes.STRING),
      address: DataTypes.STRING,
      rates: DataTypes.FLOAT,
      active: DataTypes.BOOLEAN,
      startDate: DataTypes.STRING,
      referrer: DataTypes.STRING,
      notes: DataTypes.STRING
    },
    { timestamps: true }
  );

  Student.associate = models => {
    Student.hasMany(models.Schedule);
    Student.hasOne(models.Level);
  };

  return Student;
};
