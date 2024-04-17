const jwt = require("jsonwebtoken");
const { User } = require("../DataBase/Schema/userschema");
const { user_parser, login_parser } = require("../Data_parser/data_parser");
const key = process.env.JWT_SECRET;
// Make your Middlewares Here
const temp_middleware = (req, res, next) => {
  console.log("Hi from Middleware");
  next();
};

const signup_midleware = async (req, res, next) => {
  const { username } = req.body;
  const data = user_parser.safeParse(req.body);
  if (!data.success) {
    res.json({
      data,
      message: "Email already taken / Incorrect inputs",
    });
    return;
  }

  const user_ = await User.findOne({
    username,
  });

  if (user_) {
    res.json({
      message: "Email already taken / Incorrect inputs",
    });
    return;
  }

  next();
};

const login_midleware = async (req, res, next) => {
  const parse = login_parser.safeParse(req.body);
  if (!parse.success) {
    res.json({
      message: "Error while logging in",
      parse,
    });
    return;
  }
  const is_user = await User.findOne({ username: req.body.username });
  if (!is_user) {
    res.json({
      message: "No user found",
    });
    return;
  }
  if (is_user.password !== req.body.password) {
    res.json({
      message: "Password is incoorect",
    });
    return;
  }

  next();
};

const auth_middleware = (req, res, next) => {
  const authtoken = req.headers.authorization;
  if (!authtoken || !authtoken.startsWith("Bearer ")) {
    res.status(404).json({
      msg: "no token",

    });
    return;
  }
  const token = authtoken.split(" ")[1];
  try {
    const decode = jwt.verify(token, key);
    req.userid = decode.userid;
    next();
  } catch (error) {
    res.json({
      status : false,
      msg : "Invalid token"
    })
  }
};

module.exports = {
  temp_middleware,
  signup_midleware,
  login_midleware,
  auth_middleware,
};
