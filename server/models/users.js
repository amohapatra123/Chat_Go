const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    String,
    required: true,
  },
  email: {
    String,
    required: true,
  },
  phone: {
    Number,
    required: true,
  },
  username: {
    String,
    unique: true,
    required: true,
  },
  password: {
    String,
    min: 8,
    max: 15,
    required: true,
  },
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;
