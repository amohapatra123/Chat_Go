const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/users");

const PassRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,15}$/
);
const EmailRegex = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
router.post("/register", (req, res) => {
  const { name, email, phone, password, password2 } = req.body.request;
  const newUser = new User({
    name,
    email,
    phone,
    password,
  });

  if (formValidate(name, email, phone, password, password2, req, res)) {
    bcrypt.hash(newUser.password, 10, (err, hash) => {
      newUser.password = hash;
    });
    let message = [];

    User.findOne({ phone: phone }, (err, user) => {
      if (err) {
        console.log(err);
      }
      if (user) {
        message.push({ msg: "Phone Number already exists.", code: 400 });
        res.send(message);
      } else {
        newUser.save();
        message.push({ msg: "Successfully Registered", code: 200 });
        res.send(message);
      }
    });
  }
});

//form validation
formValidate = (name, email, phone, password, password2, req, res) => {
  let message = [];
  if (!name) {
    message.push({ msg: "Name cannot be empty.", code: 401 });
  }
  if (!email) {
    message.push({ msg: "Email cannot be empty.", code: 401 });
  }
  if (!phone) {
    message.push({ msg: "Phone Number cannot be empty.", code: 401 });
  }
  if (!password) {
    message.push({ msg: "Password cannot be empty.", code: 401 });
  }
  if (!password2) {
    message.push({ msg: "Confirm Password cannot be empty.", code: 401 });
  }
  if (password) {
    if (!PassRegex.test(password)) {
      if (password.length > 0 && password.length < 8) {
        message.push({
          msg:
            "Password must be alphanumeric,with atleat one special character and must be min of 8 charecters",
          code: 401,
        });
      }
      if (password.length > 8 && password.length < 15) {
        message.push({
          msg:
            "Password must be alphanumeric, with atleast one special character and must be min of 8 charecter and max of 15 characters",
          code: 401,
        });
      }
      if (password.length > 15) {
        message.push({
          msg:
            "Password must be alphanumeric,with atleat one special character and must be max of 15 charecters",
          code: 401,
        });
      }
    }
  }
  if (password2) {
    if (password2 !== password) {
      message.push({ msg: "Passwords donot match", code: 401 });
    }
  }
  if (message.length > 0) {
    res.send(message);
  } else {
    return true;
  }
};

module.exports = router;
