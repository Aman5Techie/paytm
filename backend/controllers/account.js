const mongoose = require("mongoose");
const { Account } = require("../DataBase/Schema/bankschema");

const balance = async (req, res) => {
  const account = await Account.find({ userId: req.userid });
  if (account) {
    res.json({
      balance: account[0].balance,
    });
  }
};

const transfer = async (req, res) => {
  //   Creating a Transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  const { to, amount } = req.body;
  const from = req.userid;
  const account_to = await Account.findOne({ userId: from }).session(session);
  if (!account_to) {
    session.abortTransaction();
    return res.status(400).json({
      msg: "Invalid Acoount",
    });
  }
  const account_from = await Account.findOne({ userId: from }).session(session);
  if (!account_from || account_from.balance < amount) {
    session.abortTransaction();
    res.status(400).json({
      msg: "Insufficent Balance",
    });
    return;
  }
  // Debited Account
  await Account.updateOne(
    { userId: from },
    { $inc: { balance: -amount } }
  ).session(session);
  // Credidit Account
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();

  res.json({
    status: true,
    msg: "transation Successfull",
  });
};

module.exports = { balance, transfer };
