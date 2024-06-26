const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI2;

const connectDB = async ()=>{
    try {

        await mongoose.connect(URI);
        console.log("Connected Successfully");
    } catch (error) {
        console.log(error);
        process.exit(0);
    }

}



connectDB().then(()=>{
    console.log("DataBase Connected");
})



module.exports = {connectDB};