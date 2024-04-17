// Signin up

const { User } = require("../DataBase/Schema/userschema");
const { Account } = require("../DataBase/Schema/bankschema");

const signup = async (req, res) => {
  try {
    const create_user = await User.create(req.body);

    // Account Creation
    const user_account = await Account.create({
      userId: create_user["_id"],
      balance: 1 + Math.random() * 10000,
    });

    res.json({
      status : true,
      message: "User created successfully",
      token: await create_user.generatetoken(),
      Account_Number : user_account._id,
      balance : user_account.balance
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const is_user = await User.findOne({ username: req.body.username });
    res.json({
      status : true,
      token: await is_user.generatetoken(),
    });
  } catch (err) {
    console.log(err);
  }
};

const update_data = async (req, res) => {
  const user_ = await User.findByIdAndUpdate(req.userid, req.body, {
    new: true,
  });

  res.json({ user_,status : true, });
};

const get_alluser = async (req, res) => {
  const name = req.query.filter;
  if (name == undefined) {
    const users = await User.find({});
    res.json({
      status : true,
      users,
    });
    return;
  }
  const users = await User.find(
    { $or: [{ firstName: name }, { lastName: name }] },
    { firstName: 1, lastName: 1 }
  );
  res.json({
    status : true,
    users,
  });
};

const delete_db = async (req, res) => {
  const result = await User.deleteMany({});
  res.json({
    status : true,
    result,
  });
};


const user_info = async(req,res)=>{
  const user = await User.findById(req.userid)
  return res.json({
    status : true,
    user
  })
}

module.exports = { user_info ,delete_db, get_alluser, signup, login, update_data };
