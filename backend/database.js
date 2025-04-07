const mongoose = require('mongoose');
const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todo').then(()=>{
            console.log("Connected to MongoDB Successsfully");
        });
       
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

module.exports = connectToMongo;
