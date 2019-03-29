const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const router = express.Router();

const secret = "11-herbs-and-spices";

const doesUserExist = async email => {
  return await User.findOne({ where: { email } });
};

router.route("/register").post(async (req, res, next) => {
  try {
    if (await doesUserExist(req.body.email))
      return res
        .status(400)
        .json({ error: { message: "User already exists" } });

    const newUser = await User.create(req.body);
    const token = await jwt.sign({ id: newUser.id }, secret);
    res.cookie("token", token, { httpOnly: true });

    return res.status(201).json(newUser);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        error: { name: "SequelizeValidationError", errors: error.errors }
      });
    }
    return next(error);
  }
});

router.route("/login").post(async (req, res, next) => {
  try {
    const existingUser = await doesUserExist(req.body.email);
    if (!existingUser)
      return res
        .status(400)
        .json({ error: { message: "User does not exist" } });

    const token = await jwt.sign({ id: existingUser.id }, secret);
    res.cookie("token", token, { httpOnly: true });

    return res.status(201).json(existingUser);
  } catch (error) {
    return next(error);
  }
});

router.route("/logout").post((req, res) => {
  res.clearCookie("token", { httpOnly: true });

  return res.status(200).json({ message: "Successful logout" });
});

module.exports = router;
