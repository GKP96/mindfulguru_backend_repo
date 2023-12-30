const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phoneno:{
        type: String,
        required: true,

      }
    });

const User = new mongoose.model('users',signUpSchema);

module.exports = User;