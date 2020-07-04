const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");

router.post("/register", (req, res) => {
  const { name, email, phone, username, password } = req.body;
  const newUser = new User({
    name,
    email,
    phone,
    username,
    password,
  });
});

module.exports = router;
