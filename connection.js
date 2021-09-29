const mongoose = require('mongoose');
require('dotenv').config()

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9pksi.mongodb.net/aircnc?retryWrites=true&w=majority`;

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })


const searchSchema = mongoose.Schema({
    location:String,
    checkInDate:Date,
    checkOutDate:Date,
    adults:Number,
    child:Number,
    babies:Number
})

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const searchModel = new mongoose.model('location',searchSchema)
const userModel = new mongoose.model('users',userSchema)

module.exports.searchModel = searchModel;
module.exports.userModel = userModel;