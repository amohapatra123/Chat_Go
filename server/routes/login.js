const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/users");
const { request } = require("express");
router.post("/login", (req, res) => {
  const { phone, password } = req.body.request;
  if (loginValidate(phone, password, req, res)) {
    let message = [];
    User.findOne({ phone: phone }, (err, user) => {
      if (err) {
        console.log(err);
      }
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            console.log(err);
          }
          if (result == true) {
            message.push({ msg: "Correct Credentials", code: 200 });
            res.send(message);
          } else {
            message.push({
              msg: "Incorrect Password",
              code: 401,
            });
            res.send(message);
          }
        });
      } else {
        message.push({ msg: "Invalid Phone Number and Password", code: 400 });
        res.send(message);
      }
    });
  }
});
//form validate
loginValidate = (phone, password, req, res) => {
  let message = [];
  if (!phone) {
    message.push({ msg: "Enter Phone Number", code: 401 });
  }
  if (!password) {
    message.push({ msg: "Enter Password", code: 401 });
  }
  if (message.length > 0) {
    res.send(message);
  } else {
    return true;
  }
};
module.exports = router;
