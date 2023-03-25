// Do not change this file
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        const URI = process.env.MONGO_URI; // Declare MONGO_URI in your .env file
    const conn = await new mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

      console.log(`Connected to database ${conn.connection.host}`)

    } catch (e) {
        // Catch any errors
        console.error(e);
        throw new Error('Unable to Connect to Database')
        process.exit();
    }
}

module.exports = connectDB;
