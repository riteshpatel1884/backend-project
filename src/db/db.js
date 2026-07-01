const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); 
const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");

const connectDB = async () => {
    try {
        
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to MongoDB: ${connectionInstance.connection.host}`);
        // connection.host is done taki agar galti se agar ham kisi aur server se connect ho jaye kyu server production ka alag hota hai, testing ka alag hota hai  aur development ka alag hota hai. So, agar hamne galti se kisi aur server se connect ho jaye to hame pata chal jaye ki hamara connection kis server/host se ho raha hai.
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }       
};

module.exports = connectDB;