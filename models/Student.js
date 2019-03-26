module.exports = (sequelize, type) => {
  const Student = sequelize.define(
    "student",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: type.STRING,
      firstName: type.STRING,
      lastName: type.STRING,
      imageUrl: type.STRING,
      subjects: type.ARRAY(type.STRING),
      address: type.STRING,
      rates: type.FLOAT,
      active: type.BOOLEAN,
      startDate: type.STRING,
      referrer: type.STRING,
      notes: type.STRING
    },
    { timestamps: true }
  );

  Student.associate = models => {
    Student.hasMany(models.Schedule);
    Student.hasOne(models.Level);
  };

  return Student;
};
