const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/users");
const PassRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,15}$/
);

router.post("/register", (req, res) => {
  const { name, phone, password, password2 } = req.body;
  const newUser = new User({
    name,
    phone,
    password,
  });

  if (formValidate(name, phone, password, password2, req, res)) {
    bcrypt.hash(newUser.password, 10, (err, hash) => {
      newUser.password = hash;
    });
    let errors = [];

    User.findOne({ phone: phone }, (err, user) => {
      if (err) {
        console.log(err);
      }
      if (user) {
        errors.push({ msg: "Phone Number already exists." });
        res.send(user);
      } else {
        newUser.save();
        res.status(200).send("Successfully Registered.");
      }
    });
  }
});

//form validation
formValidate = (name, phone, password, password2, req, res) => {
  let errors = [];
  if (!name) {
    errors.push({ msg: "Name cannot be empty." });
  }
  if (!phone) {
    errors.push({ msg: "Phone Number cannot be empty." });
  }
  if (!password) {
    errors.push({ msg: "Password cannot be empty." });
  }
  if (!password2) {
    errors.push({ msg: "Confirm Password cannot be empty." });
  }
  if (password) {
    if (!PassRegex.test(password)) {
      if (password.length > 0 && password.length < 8) {
        errors.push({
          msg:
            "Password must be alphanumeric,with atleat one special character and must be min of 8 charecters",
        });
      }
      if (password.length > 8 && password.length < 15) {
        errors.push({
          msg:
            "Password must be alphanumeric, with atleast one special character and must be min of 8 charecter and max of 15 characters",
        });
      }
      if (password.length > 15) {
        errors.push({
          msg:
            "Password must be alphanumeric,with atleat one special character and must be max of 15 charecters",
        });
      }
    }
  }
  if (password2 !== password) {
    errors.push({ msg: "Passwords donot match" });
  }
  if (errors.length > 0) {
    res.send(errors);
  } else {
    return true;
  }
};

module.exports = router;
