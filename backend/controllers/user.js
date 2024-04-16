// Signin up

const { User } = require("../DataBase/Schema/userschema");

const signup = async (req, res) => {
  try {
    const create_user = await User.create(req.body);
    res.json({
      message: "User created successfully",
      token: await create_user.generatetoken(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const is_user = await User.findOne({ username: req.body.username });
    res.json({

      token: await is_user.generatetoken(),
     
    });
  } catch (err) {
    console.log(err);
  }
};


const update_data = async (req,res)=>{
  const user_ = await User.findByIdAndUpdate(req.userid,req.body,{new:true})

  res.json({user_})
}

const get_alluser = async (req,res)=>{
  const name = req.query.filter
  const users = await User.find({firstName : name},{firstName : 1, lastName : 1})
  res.json({
    users
  })


}

module.exports = {get_alluser, signup, login ,update_data};
