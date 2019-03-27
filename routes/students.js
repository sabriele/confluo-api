const express = require("express");
const router = express.Router();
const { Student, Schedule, Level } = require("../models");

router.route("/").get(async (req, res) => {
  const students = await Student.findAll({ include: [Schedule, Level] });
  return res.status(200).json(students);
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
