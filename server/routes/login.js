const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");

router.post("/login", (req, res) => {
  const { phone, password } = req.body;
  let errors = [];
  User.findOne({ phone: phone }, (err, user) => {
    if (err) {
      console.log(err);
    }
    if (user) {
      if (password === user.password) {
        res.status(200);
        res.send("Correct Password");
      } else {
        res.status(400);
        errors.push({ msg: "Invalid Password" });
      }
    } else {
      res.status(400);
      errors.push({ msg: "Invalid Phone Number and password." });
    }
    if (errors.length > 0) {
      res.send(errors);
    }
  });
});

module.exports = router;
