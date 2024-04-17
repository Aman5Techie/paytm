const mongoose = require("mongoose")
const { User } = require("./userschema")

const bankSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        ref : User,
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const Account = new mongoose.model("Account",bankSchema)

module.exports = {Account}