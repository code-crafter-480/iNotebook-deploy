const mongoose = require('mongoose');
// require('dotenv').config(); // Load variables from .env file

// const mongoURI = "mongodb://localhost:27017/iNotebook";
// const mongoURI = "mongodb+srv://guildoffer8:titWWBWh7P6vShzt@inotebook-cluster.ws3xb.mongodb.net/?retryWrites=true&w=majority&appName=inotebook-cluster/test"
   const mongoURI = "mongodb+srv://user2000:test123@inotebook-cluster.ws3xb.mongodb.net/?retryWrites=true&w=majority&appName=inotebook-cluster/test"

const connectToMongo = async () => {
    try { 
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Atlas successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1); // Exit with failure code
    }
};

module.exports = connectToMongo;