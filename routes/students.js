const express = require("express");
const jwt = require("jsonwebtoken");

const { Student, Schedule, Level, User } = require("../models");

const router = express.Router();

const verifyToken = async (req, res, next) => {
  try {
    const secret = "11-herbs-and-spices";
    const { token } = req.cookies;
    if (!token) return res.status(403).send("Token is not supplied");

    const user = await jwt.verify(token, secret);
    const foundUser = await User.findOne({ where: { id: user.id } });
    if (!foundUser)
      return res
        .status(403)
        .json({ error: { message: "User does not exist" } });

    return next();
  } catch (error) {
    return res.status(403).json({ error: { message: "Token is not valid" } });
  }
};

router.use("/", verifyToken);

router
  .route("/")
  .get(async (req, res) => {
    try {
      const students = await Student.findAll({ include: [Schedule, Level] });
      return res.status(200).json(students);
    } catch (error) {
      return res.sendStatus(404);
    }
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

router
  .route("/:id")
  .get(async (req, res) => {
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
  })
  .patch(async (req, res) => {
    const { id } = req.params;
    if (isNaN(Number(id)))
      return res.status(400).end(`Invalid input syntax for integer: "${id}" `);

    try {
      const student = await Student.findOne({ where: { id } });
      if (!student) return res.status(404).end("This student does not exist");
      const updatedStudent = await student.update(req.body);
      return res.status(201).json(updatedStudent);
    } catch (error) {
      return res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    if (isNaN(Number(id)))
      return res.status(400).end(`Invalid input syntax for integer: "${id}" `);

    try {
      const deletedStudent = await Student.destroy({ where: { id } });
      if (!deletedStudent)
        return res.status(404).end("This student does not exist");
      return res
        .status(202)
        .json(`Number of students deleted: ${deletedStudent}`);
    } catch (error) {
      return res.sendStatus(500);
    }
  });

module.exports = router;
