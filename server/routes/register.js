const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");
const PassRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/
);

router.post("/register", (req, res) => {
  const { name, phone, password, password2 } = req.body;
  const newUser = new User({
    name,

    phone,

    password,
  });

  formValidate(name, phone, password, password2, req, res);
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
    userExistance(phone, req, res);
  }
};

//validating user existance
userExistance = (phone, req, res) => {
  let error = [];
  User.findOne({ phone: phone }, (err, user) => {
    if (err) {
      res.send(err);
    } else if (user) {
      console.log(user);
    } else {
      res.redirect("/user/login");
    }
  });
  if (error.length > 0) {
    res.send(error);
  }
};
module.exports = router;
