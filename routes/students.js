const express = require("express");
const router = express.Router();
const { Student, Schedule, Level } = require("../models");

router
  .route("/")
  .get(async (req, res) => {
    const students = await Student.findAll({ include: [Schedule, Level] });
    return res.status(200).json(students);
  })
  .post(async (req, res) => {
    const getSchedules = () => {
      const { schedules } = req.body;
      const formattedSchedules = schedules.map(({ day, time, duration }) => {
        return { day, time, duration };
      });
      return formattedSchedules;
    };
    const getLevel = () => {
      const { level } = req.body;
      const { type, year } = level;
      return { type, year };
    };
    try {
      const newStudent = await Student.create(
        {
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          imageUrl: req.body.imageUrl,
          subjects: req.body.subjects,
          address: req.body.address,
          rates: req.body.rates,
          active: true,
          startDate: req.body.startDate,
          referrer: req.body.referrer,
          notes: req.body.notes,
          schedules: getSchedules(),
          level: getLevel()
        },
        { include: [Schedule, Level] }
      );
      return res.status(201).json(newStudent);
    } catch (error) {
      return res.sendStatus(500);
    }
  });

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  if (isNaN(Number(id)))
    return res.status(400).end(`Invalid input syntax for integer: "${id}" `);

  try {
    const foundStudent = await Student.findOne({ where: { id } });
    if (!foundStudent)
      return res.status(404).end("This student does not exist");
    return res.status(200).json(foundStudent);
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = router;
