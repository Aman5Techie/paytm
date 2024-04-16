// Given simple user schema
const key = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User_schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const generate_jwt_token = async function () {
  const obj = {
    username: this.username,
    userid: this._id.toString(),
    firstName: this.firstName,
    lastName: this.lastName,
  };

  try {
    return jwt.sign(obj, key, { expiresIn: "30d" });
  } catch (error) {
    console.error(error);
  }
};


User_schema.methods.generatetoken = generate_jwt_token;


const User = new mongoose.model("User", User_schema);

module.exports = { User, User_schema };
