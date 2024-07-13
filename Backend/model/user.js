const mongoose = require('mongoose');

const Userschema = new mongoose.Schema ({
role:'String',
name:'String',
email:'String',
password:'String'
})

const UserModel = mongoose.model("User",Userschema)
module.exports = UserModel;