const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");
const PassRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/
);

router.post("/register", (req, res) => {
  const { name, email, phone, username, password, password2 } = req.body;
  const newUser = new User({
    name,
    email,
    phone,
    username,
    password,
  });

  formValidate(name, email, phone, username, password, password2, req, res);
});

formValidate = (
  name,
  email,
  phone,
  username,
  password,
  password2,
  req,
  res
) => {
  let errors = [];
  if (!name) {
    errors.push({ msg: "Name cannot be empty." });
  }
  if (!email) {
    errors.push({ msg: "Email cannot be empty." });
  }
  if (!phone) {
    errors.push({ msg: "Phone Number cannot be empty." });
  }
  if (!username) {
    errors.push({ msg: "Username cannot be empty." });
  }
  if (!password) {
    errors.push({ msg: "Password cannot be empty." });
  }
  if (!PassRegex.test(password)) {
    if (password.length < 8) {
      errors.push({
        msg:
          "Password must be alphanumeric,with atleat one special character and must be min of 8 charecters",
      });
    }
    if (password.length > 15) {
      errors.push({
        msg:
          "Password must be alphanumeric,with atleat one special character and must be max of 15 charecters",
      });
    }
  }
  if (password2 !== password) {
    errors.push({ msg: "Passwords donot match" });
  }
  if (errors.length > 0) {
    res.send(errors);
  }
};

module.exports = router;
