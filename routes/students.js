const express = require("express");
const router = express.Router();
const { Student, Schedule, Level } = require("../models");

router.route("/").get(async (req, res) => {
  const students = await Student.findAll({ include: [Schedule, Level] });
  res.status(200).json(students);
});

module.exports = router;
